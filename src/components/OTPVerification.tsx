
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from '@/hooks/use-toast';

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
  const [verificationId, setVerificationId] = useState<string>('');

  // This is a mock function that would be replaced with actual Firebase implementation
  const sendOTP = async () => {
    try {
      console.log('Sending OTP to', phoneNumber);
      // In a real implementation, this would call Firebase's signInWithPhoneNumber
      // and return a confirmation result

      // Simulate successful OTP send
      const mockVerificationId = Math.random().toString(36).substring(2, 15);
      setVerificationId(mockVerificationId);
      
      // Start countdown for resend button
      setTimeLeft(30);
      setIsResendDisabled(true);
      
      toast({
        title: "OTP Sent",
        description: `A verification code has been sent to ${phoneNumber}.`,
      });
      
      console.log('Mock verification ID:', mockVerificationId);
    } catch (error) {
      console.error('Error sending OTP:', error);
      toast({
        title: "Error",
        description: "Failed to send verification code. Please try again.",
        variant: "destructive",
      });
    }
  };

  // This is a mock function that would be replaced with actual Firebase implementation
  const verifyOTP = async () => {
    try {
      console.log('Verifying OTP:', otp, 'for verification ID:', verificationId);
      // In a real implementation, this would call confirmationResult.confirm(otp)
      
      // Simulate OTP verification
      // For demo purposes, any 6-digit OTP is considered valid
      if (otp.length === 6) {
        toast({
          title: "Verification Successful",
          description: "Your phone number has been verified.",
        });
        onVerificationComplete(true);
      } else {
        toast({
          title: "Invalid Code",
          description: "Please enter a valid 6-digit verification code.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error verifying OTP:', error);
      toast({
        title: "Verification Failed",
        description: "The verification code is invalid. Please try again.",
        variant: "destructive",
      });
      onVerificationComplete(false);
    }
  };

  // Start the verification process when the component mounts
  useEffect(() => {
    if (phoneNumber) {
      sendOTP();
    }
  }, [phoneNumber]);

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
        <p className="text-sm text-gray-600">
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
        />
        
        <Button 
          onClick={verifyOTP} 
          className="w-full"
          disabled={otp.length !== 6}
        >
          Verify
        </Button>
        
        <div className="flex justify-center items-center text-sm">
          {isResendDisabled ? (
            <span className="text-gray-500">Resend code in {timeLeft}s</span>
          ) : (
            <button 
              onClick={sendOTP} 
              className="text-brand-600 hover:text-brand-700"
            >
              Resend verification code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
