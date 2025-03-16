
import React, { useEffect, useRef, useState } from 'react';

interface CRMContactFormProps {
  title?: string;
  subtitle?: string;
  compact?: boolean;
  serviceName?: string;
}

const CRMContactForm: React.FC<CRMContactFormProps> = ({ 
  title = "Get Quote Instantly", 
  subtitle = "Fill the form and our team will contact you", 
  compact = false,
  serviceName
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(480);

  // Function to adjust iframe height based on content
  useEffect(() => {
    const adjustHeight = () => {
      const iframe = iframeRef.current;
      if (!iframe) return;
      
      try {
        // Try to access the iframe content if from same origin
        const observer = new ResizeObserver(() => {
          if (iframe.contentWindow?.document?.body) {
            const height = iframe.contentWindow.document.body.scrollHeight;
            if (height > 100) {
              setIframeHeight(height + 30); // Add padding
            }
          }
        });
        
        if (iframe.contentWindow?.document?.body) {
          observer.observe(iframe.contentWindow.document.body);
        }
        
        return () => observer.disconnect();
      } catch (error) {
        // If cross-origin, use default height
        console.log("Cross-origin iframe, using default height");
      }
    };
    
    // Wait for iframe to load
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = adjustHeight;
    }
    
    return () => {
      if (iframe) {
        iframe.onload = null;
      }
    };
  }, []);

  return (
    <div className={`bg-white rounded-lg shadow-lg border border-gray-100 ${compact ? 'p-4' : 'p-5 md:p-6'}`}>
      <div className="text-center mb-4">
        <h3 className={`${compact ? 'text-lg' : 'text-xl'} font-bold text-gray-800`}>{title}</h3>
        <p className="text-sm text-gray-600 mt-1">{subtitle}</p>
      </div>
      
      <div className="w-full">
        <iframe 
          ref={iframeRef}
          src={`https://crm.bizfile.in/forms/wtl/2d3ba62d97505923f206020c5bcdac25?styled=0${serviceName ? `&service=${encodeURIComponent(serviceName)}` : ''}`}
          className="w-full border-0" 
          style={{ height: `${iframeHeight}px`, overflow: 'hidden' }}
          title="CRM Contact Form"
        />
      </div>
    </div>
  );
};

export default CRMContactForm;
