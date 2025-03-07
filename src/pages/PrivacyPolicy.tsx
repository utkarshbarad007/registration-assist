
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';

const PrivacyPolicy = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | BizFile</title>
        <meta name="description" content="Privacy Policy for BizFile - Learn how we collect, use, and protect your personal information." />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Privacy Policy</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 mb-6">Last Updated: June 1, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p>BizFile ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>
            <p>Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-medium mb-3">Personal Data</h3>
            <p>We may collect personal identification information from you in a variety of ways, including, but not limited to, when you visit our site, register on the site, place an order, subscribe to the newsletter, respond to a survey, fill out a form, and in connection with other activities, services, features or resources we make available on our site. You may be asked for, as appropriate:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Payment details</li>
              <li>Business information</li>
            </ul>
            
            <h3 className="text-xl font-medium mb-3">Non-personal Data</h3>
            <p>We may collect non-personal identification information about you whenever you interact with our site. Non-personal identification information may include the browser name, the type of computer and technical information about your means of connection to our site, such as the operating system and the Internet service providers utilized and other similar information.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
            <p>We may use the information we collect from you for the following purposes:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To provide and maintain our services</li>
              <li>To process transactions and send related information including confirmations and invoices</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features of our website</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent and address technical issues</li>
              <li>To send you promotional emails about new services, special offers or other information which we think you may find interesting</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Storage and Security</h2>
            <p>We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information we collect online.</p>
            <p>All supplied sensitive information is transmitted via Secure Socket Layer (SSL) technology and then encrypted into our payment gateway providers database only to be accessible by those authorized with special access rights to such systems, and are required to keep the information confidential.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Disclosure of Your Information</h2>
            <p>We may disclose personal information that we collect, or you provide:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>To our subsidiaries and affiliates.</li>
              <li>To contractors, service providers, and other third parties we use to support our business.</li>
              <li>To fulfill the purpose for which you provide it.</li>
              <li>For any other purpose disclosed by us when you provide the information.</li>
              <li>With your consent.</li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce or apply our terms of use and other agreements.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of BizFile, our customers, or others.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">6. Third-Party Websites</h2>
            <p>Our website may contain links to other websites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over, and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p>Our services do not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18. If we discover that a child under 18 has provided us with personal information, we immediately delete this from our servers.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">8. Cookies</h2>
            <p>Cookies are files with a small amount of data that are commonly used as anonymous unique identifiers. These are sent to your browser from the websites that you visit and are stored on your device's internal memory.</p>
            <p>This site uses cookies to remember user preferences and for analytics. You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.</p>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">9. Your Rights</h2>
            <p>Depending on your location, you may have certain rights regarding your personal information, such as:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The right to access information we hold about you.</li>
              <li>The right to request correction of your personal information.</li>
              <li>The right to request deletion of your personal information.</li>
              <li>The right to object to processing of your personal information.</li>
              <li>The right to request restriction of processing your personal information.</li>
              <li>The right to data portability.</li>
              <li>The right to withdraw consent.</li>
            </ul>
          </section>
          
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">10. Changes to This Privacy Policy</h2>
            <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.</p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
            <p>If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at support@bizfile.in.</p>
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
