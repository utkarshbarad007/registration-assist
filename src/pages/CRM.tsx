
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CRMDashboard from '@/components/CRMDashboard';
import { Helmet } from 'react-helmet';

const CRM = () => {
  return (
    <>
      <Helmet>
        <title>Client Portal - BizFile</title>
        <meta name="description" content="Access your business services and track applications through BizFile's client portal." />
      </Helmet>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-8 pb-16">
        <CRMDashboard />
      </main>
      <Footer />
    </>
  );
};

export default CRM;
