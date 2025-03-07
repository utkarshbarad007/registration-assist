
import React, { useState, useEffect, useRef } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/custom-button";
import { toast } from '@/hooks/use-toast';
import { RecaptchaVerifier, signInWithPhoneNumber } from 'firebase/auth';
import { auth } from '@/lib/firebase';

interface OTPVerificationProps {
  phoneNumber: string;
  onVerificationComplete: (isVerified: boolean) => void;
}

const OTPVerification: React.FC<OTPVerificationProps> = ({ 
  phoneNumber, 
  onVerificationComplete 
}) => {
  const [otp, setOtp] = useState<string>('');
  const [timeLeft, setTimeLeft] = useState<number>(30);
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
  const recaptchaContainerRef = useRef<HTMLDivElement>(null);
  
  // Initialize the invisible reCAPTCHA
  useEffect(() => {
    // Clean up function to prevent memory leaks
    return () => {
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
        recaptchaVerifierRef.current = null;
      }
    };
  }, []);

  // Setup recaptcha and send OTP when component mounts
  useEffect(() => {
    if (phoneNumber) {
      setupRecaptchaAndSendOTP();
    }
  }, [phoneNumber]);

  // Setup reCAPTCHA verifier and send OTP
  const setupRecaptchaAndSendOTP = async () => {
    try {
      // Clear existing verifier if it exists
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
      }

      // Create new verifier
      if (recaptchaContainerRef.current) {
        recaptchaVerifierRef.current = new RecaptchaVerifier(recaptchaContainerRef.current, {
          size: 'invisible',
          callback: () => {
            console.log('reCAPTCHA verified');
          },
          'expired-callback': () => {
            console.log('reCAPTCHA expired');
            toast({
              title: "Verification Expired",
              description: "Please try again.",
              variant: "destructive",
            });
          }
        }, auth);

        // Render the reCAPTCHA widget
        await recaptchaVerifierRef.current.render();
        
        // Send OTP after reCAPTCHA is ready
        sendOTP();
      }
    } catch (error: any) {
      console.error('Error setting up recaptcha:', error);
      toast({
        title: "Verification Error",
        description: error.message || "Failed to initialize verification. Please try again.",
        variant: "destructive",
      });
    }
  };

  // Send OTP using Firebase Phone Authentication
  const sendOTP = async () => {
    try {
      setIsLoading(true);
      
      if (!recaptchaVerifierRef.current) {
        throw new Error('reCAPTCHA not initialized. Please refresh and try again.');
      }
      
      // Format the phone number with country code if not already formatted
      const formattedPhoneNumber = phoneNumber.startsWith('+') 
        ? phoneNumber 
        : `+91${phoneNumber}`; // Assuming India (+91) as default
      
      console.log('Sending OTP to', formattedPhoneNumber);
      
      // Request SMS verification
      const confirmationResult = await signInWithPhoneNumber(
        auth, 
        formattedPhoneNumber, 
        recaptchaVerifierRef.current
      );
      
      // Store the confirmation result in window for verification
      window.confirmationResult = confirmationResult;
      
      // Start countdown for resend button
      setTimeLeft(30);
      setIsResendDisabled(true);
      
      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to ${formattedPhoneNumber}.`,
      });
      
    } catch (error: any) {
      console.error('Error sending OTP:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to send verification code. Please try again.",
        variant: "destructive",
      });
      
      // Reset recaptcha on error
      if (recaptchaVerifierRef.current) {
        recaptchaVerifierRef.current.clear();
        setupRecaptchaAndSendOTP(); // Try to set up again
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Verify the OTP using Firebase
  const verifyOTP = async () => {
    try {
      setIsLoading(true);
      
      if (!window.confirmationResult) {
        throw new Error('Verification session expired. Please request a new code.');
      }
      
      // Verify the OTP code
      const result = await window.confirmationResult.confirm(otp);
      
      // User signed in successfully
      const user = result.user;
      console.log('User verified:', user.uid);
      
      toast({
        title: "Verification Successful",
        description: "Your phone number has been verified.",
      });
      
      onVerificationComplete(true);
    } catch (error: any) {
      console.error('Error verifying OTP:', error);
      toast({
        title: "Verification Failed",
        description: error.message || "The verification code is invalid. Please try again.",
        variant: "destructive",
      });
      onVerificationComplete(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Countdown timer for resend button
  useEffect(() => {
    if (timeLeft <= 0) {
      setIsResendDisabled(false);
      return;
    }
    
    const timer = setTimeout(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="space-y-4">
      <div className="text-center">
        <p className="text-sm text-gray-600 mb-2">
          Enter the 6-digit code sent to {phoneNumber}
        </p>
      </div>
      
      <div className="space-y-3">
        <Input
          type="text"
          maxLength={6}
          value={otp}
          onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
          placeholder="Enter verification code"
          className="text-center text-lg tracking-widest"
          disabled={isLoading}
        />
        
        <Button 
          onClick={verifyOTP} 
          className="w-full"
          disabled={otp.length !== 6 || isLoading}
          isLoading={isLoading}
        >
          Verify
        </Button>
        
        <div className="flex justify-center items-center text-sm">
          {isResendDisabled ? (
            <span className="text-gray-500">Resend code in {timeLeft}s</span>
          ) : (
            <button 
              onClick={setupRecaptchaAndSendOTP} 
              className="text-brand-600 hover:text-brand-700"
              disabled={isLoading}
            >
              Resend verification code
            </button>
          )}
        </div>
      </div>
      
      {/* Invisible reCAPTCHA container with ref */}
      <div ref={recaptchaContainerRef} id="recaptcha-container"></div>
    </div>
  );
};

// Add necessary type declarations for global window object
declare global {
  interface Window {
    confirmationResult: any;
  }
}

export default OTPVerification;
