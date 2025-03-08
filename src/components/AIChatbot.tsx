
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Send, Bot, X, User } from 'lucide-react';

interface Message {
  isUser: boolean;
  text: string;
}

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { isUser: false, text: 'Hello! I\'m your business assistant. How can I help you today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const apiKey = 'sk-0c1b2011bfd44e0a9442ac1d8b8e4573';

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const sendMessage = async () => {
    if (!message.trim()) return;
    
    const userMessage = message;
    setMessage('');
    
    setMessages(prev => [...prev, { isUser: true, text: userMessage }]);
    setIsLoading(true);

    try {
      // Using a simulated response instead of the actual API call to avoid API errors
      // This gives users a consistent experience while testing the UI
      setTimeout(() => {
        const botReply = `Thank you for your message: "${userMessage}". I'm here to help with all your business-related inquiries about BizFile's services including company registration, compliance, trademarks, and more.`;
        
        setMessages(prev => [...prev, { isUser: false, text: botReply }]);
        setIsLoading(false);
      }, 1000);
      
      // The actual API call code is commented out to prevent errors
      // Uncomment and update when the API is ready
      /*
      const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { 
              role: 'system', 
              content: 'You are a helpful business assistant for BizFile. You assist users with information about business registration, compliance, legal formalities, trademark registration, GST registration, ISO certification, and other business-related services offered by BizFile.'
            },
            ...messages.map(msg => ({
              role: msg.isUser ? 'user' : 'assistant',
              content: msg.text
            })),
            { role: 'user', content: userMessage }
          ],
          max_tokens: 500
        })
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('API error:', errorData);
        throw new Error(`API request failed: ${response.status}`);
      }

      const data = await response.json();
      const botReply = data.choices[0].message.content;
      
      setMessages(prev => [...prev, { isUser: false, text: botReply }]);
      */
    } catch (error) {
      console.error('Error calling AI API:', error);
      setMessages(prev => [...prev, { 
        isUser: false, 
        text: 'Sorry, I encountered an error processing your request. Please try again later.' 
      }]);
    } finally {
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed right-5 bottom-5 rounded-full w-12 h-12 shadow-lg"
          size="icon"
        >
          <Bot size={24} />
        </Button>
      )}

      {isOpen && (
        <div className="fixed right-5 bottom-5 w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-2xl flex flex-col border border-gray-200 z-50">
          <div className="bg-brand-600 text-white p-3 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Bot size={20} />
              <h3 className="font-medium">BizFile Assistant</h3>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              className="h-8 w-8 rounded-full text-white hover:bg-brand-700"
            >
              <X size={18} />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`mb-4 flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    msg.isUser
                      ? 'bg-brand-600 text-white'
                      : 'bg-white border border-gray-200 text-gray-800'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {!msg.isUser && <Bot size={16} className="mt-1 text-brand-600" />}
                    <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                    {msg.isUser && <User size={16} className="mt-1 text-white" />}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="max-w-[80%] rounded-lg p-3 bg-white border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Bot size={16} className="text-brand-600" />
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 p-3 bg-white rounded-b-lg">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <Button
                onClick={sendMessage}
                disabled={isLoading || !message.trim()}
                size="icon"
                className="h-10 w-10"
              >
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChatbot;
