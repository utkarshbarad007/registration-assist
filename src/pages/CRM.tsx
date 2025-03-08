
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRMDashboard from '@/components/CRMDashboard';
import { Helmet } from 'react-helmet';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import AIChatbot from '@/components/AIChatbot';

const CRM = () => {
  return (
    <>
      <Helmet>
        <title>Client Portal - BizFile</title>
        <meta name="description" content="Access your business services and track applications through BizFile's client portal." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-8 pb-16">
        <div className="container mx-auto px-4 mb-8">
          <Card className="border-2 border-brand-100 shadow-md">
            <CardHeader className="bg-gradient-to-r from-brand-50 to-white">
              <CardTitle className="text-xl text-brand-800">Admin Access</CardTitle>
              <CardDescription>Access the full-featured CRM admin dashboard</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <p className="mb-4">If you're an administrator, you can access the complete CRM system with advanced management features.</p>
              <Button 
                onClick={() => window.open('http://CRM.bizfile.in/admin', '_blank')} 
                className="gap-2"
              >
                <ExternalLink size={16} />
                Go to Admin Dashboard
              </Button>
            </CardContent>
          </Card>
        </div>
        <CRMDashboard />
      </main>
      <Footer />
      <AIChatbot />
    </>
  );
};

export default CRM;
