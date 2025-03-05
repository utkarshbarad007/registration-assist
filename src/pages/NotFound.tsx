
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <div className="min-h-[70vh] flex items-center justify-center bg-gray-50">
        <div className="text-center max-w-lg px-4">
          <h1 className="text-5xl font-bold text-brand-600 mb-4">404</h1>
          <p className="text-2xl text-gray-700 mb-6">Oops! Page not found</p>
          <p className="text-gray-600 mb-8">
            The page you are looking for might have been removed, had its name changed, 
            or is temporarily unavailable.
          </p>
          <Link 
            to="/" 
            className="inline-flex items-center btn-primary py-3 px-6"
          >
            <ArrowLeft size={18} className="mr-2" />
            Return to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
