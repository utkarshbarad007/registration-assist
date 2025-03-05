
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import ContactForm from '@/components/ContactForm';
import { 
  Building2, Briefcase, Award, ShieldCheck, 
  Cpu, BookOpenCheck, FileCheck, Landmark, 
  TrendingUp, BarChart 
} from 'lucide-react';

const ServiceCategory = () => {
  const { category } = useParams<{ category: string }>();
  
  // Define the services for each category
  const categoryData: Record<string, { title: string; description: string; services: any[] }> = {
    'business-registration': {
      title: 'Start Your Business',
      description: 'Choose the right business structure and register your company with our expert assistance',
      services: [
        {
          icon: <Building2 size={24} />,
          title: "Private Limited Company",
          description: "Most popular business structure for startups and growing businesses with limited liability protection",
          price: 6299,
          route: "/services/private-limited-company",
        },
        {
          icon: <Building2 size={24} />,
          title: "One Person Company",
          description: "Perfect for solo entrepreneurs seeking limited liability and professional structure",
          price: 5499,
          route: "/services/one-person-company",
        },
        {
          icon: <Building2 size={24} />,
          title: "Public Limited Company",
          description: "For businesses planning to raise capital from the public by issuing shares",
          price: 12999,
          route: "/services/public-limited-company",
        },
        {
          icon: <Building2 size={24} />,
          title: "Foreign Subsidiary In India",
          description: "Establish your foreign company's presence in the Indian market",
          price: 15999,
          route: "/services/foreign-subsidiary",
        },
        {
          icon: <Landmark size={24} />,
          title: "LLP Registration",
          description: "Combines the benefits of partnership and company with limited liability for partners",
          price: 3499,
          route: "/services/llp",
        },
        {
          icon: <Building2 size={24} />,
          title: "Section 8 Company (NGO)",
          description: "For non-profit organizations with charitable and social objectives",
          price: 7999,
          route: "/services/section-8-company",
        },
        {
          icon: <Building2 size={24} />,
          title: "Nidhi Company",
          description: "For companies engaged in the business of lending and borrowing among members",
          price: 8999,
          route: "/services/nidhi-company",
        },
        {
          icon: <Building2 size={24} />,
          title: "Chit Fund Company",
          description: "For financial institutions that manage chit schemes",
          price: 9499,
          route: "/services/chit-fund-company",
        },
        {
          icon: <Building2 size={24} />,
          title: "Producer Company",
          description: "For agricultural producers to collectively manage their business",
          price: 7499,
          route: "/services/producer-company",
        },
      ]
    },
    'compliance-plan': {
      title: 'Compliance Plan',
      description: 'Stay up-to-date with all regulatory requirements and never miss a compliance deadline',
      services: [
        {
          icon: <Briefcase size={24} />,
          title: "Nidhi Company Compliance",
          description: "Complete compliance solution for Nidhi Companies to meet RBI and MCA requirements",
          price: 12999,
          route: "/services/nidhi-company-compliance",
        },
        {
          icon: <Briefcase size={24} />,
          title: "LLP Basic Compliance",
          description: "Essential annual compliance for Limited Liability Partnerships",
          price: 4999,
          route: "/services/llp-basic-compliance",
        },
        {
          icon: <Briefcase size={24} />,
          title: "LLP Advanced Compliance",
          description: "Comprehensive compliance package for LLPs with complex operations",
          price: 7999,
          route: "/services/llp-advanced-compliance",
        },
        {
          icon: <Briefcase size={24} />,
          title: "Private Limited Compliance",
          description: "Complete annual compliance for Private Limited Companies",
          price: 9999,
          route: "/services/private-limited-compliance",
        },
        {
          icon: <Briefcase size={24} />,
          title: "OPC Compliance",
          description: "Annual compliance package for One Person Companies",
          price: 6999,
          route: "/services/opc-compliance",
        },
      ]
    },
    'trademark-ip': {
      title: 'Trademark & IP',
      description: 'Protect your brand identity and intellectual property with legal registration',
      services: [
        {
          icon: <Award size={24} />,
          title: "Trademark Registration",
          description: "Protect your brand name, logo and slogan from unauthorized usage",
          price: 7999,
          route: "/services/trademark-registration",
        },
        {
          icon: <Award size={24} />,
          title: "Trademark Renewal",
          description: "Renew your existing trademark registration to maintain protection",
          price: 5999,
          route: "/services/trademark-renewal",
        },
        {
          icon: <Award size={24} />,
          title: "Trademark Opposition",
          description: "Contest a trademark application that conflicts with your registered trademark",
          price: 9999,
          route: "/services/trademark-opposition",
        },
        {
          icon: <Award size={24} />,
          title: "Trademark Assignment",
          description: "Transfer ownership of a trademark to another entity",
          price: 6999,
          route: "/services/trademark-assignment",
        },
        {
          icon: <Award size={24} />,
          title: "Copyright Registration",
          description: "Protect your original creative works from unauthorized copying",
          price: 5999,
          route: "/services/copyright-registration",
        },
      ]
    },
    'registrations': {
      title: 'Business Registrations',
      description: 'Get essential business registrations like GST, MSME, and Startup India',
      services: [
        {
          icon: <FileCheck size={24} />,
          title: "GST Registration",
          description: "Mandatory registration for businesses with turnover above the threshold limit",
          price: 1999,
          route: "/services/gst-registration",
        },
        {
          icon: <BarChart size={24} />,
          title: "MSME Registration",
          description: "Get government benefits and subsidies for micro, small and medium enterprises",
          price: 999,
          route: "/services/msme-registration",
        },
        {
          icon: <TrendingUp size={24} />,
          title: "Startup India Registration",
          description: "Special recognition and benefits for innovative startups under government initiative",
          price: 2999,
          route: "/services/startup-india-registration",
        },
        {
          icon: <ShieldCheck size={24} />,
          title: "Angel Tax Exemption",
          description: "Get exemption from angel tax for eligible startups",
          price: 4999,
          route: "/services/angel-tax-exemption",
        },
        {
          icon: <ShieldCheck size={24} />,
          title: "80 IAC Tax Exemption",
          description: "Income tax exemption for eligible startups under section 80IAC",
          price: 5999,
          route: "/services/80iac-tax-exemption",
        },
      ]
    },
    'iso-certification': {
      title: 'ISO Certification',
      description: 'Enhance credibility with internationally recognized quality management standards',
      services: [
        {
          icon: <Cpu size={24} />,
          title: "ISO 9001:2015",
          description: "Quality Management System certification for improved processes and customer satisfaction",
          price: 12999,
          route: "/services/iso-9001",
        },
        {
          icon: <Cpu size={24} />,
          title: "ISO 22000:2018",
          description: "Food Safety Management System certification for food industry businesses",
          price: 14999,
          route: "/services/iso-22000",
        },
        {
          icon: <Cpu size={24} />,
          title: "ISO 14001:2015",
          description: "Environmental Management System certification for reducing environmental impact",
          price: 13999,
          route: "/services/iso-14001",
        },
        {
          icon: <Cpu size={24} />,
          title: "ISO 45001:2018",
          description: "Occupational Health and Safety Management System certification",
          price: 13499,
          route: "/services/iso-45001",
        },
        {
          icon: <Cpu size={24} />,
          title: "ISO 13485:2016",
          description: "Medical Devices Quality Management System certification",
          price: 15999,
          route: "/services/iso-13485",
        },
        {
          icon: <Cpu size={24} />,
          title: "ISO 27001:2013",
          description: "Information Security Management System certification for data protection",
          price: 16999,
          route: "/services/iso-27001",
        },
      ]
    },
    'fssai': {
      title: 'FSSAI License',
      description: 'Obtain mandatory food safety licenses for your food business operations',
      services: [
        {
          icon: <BookOpenCheck size={24} />,
          title: "Basic FSSAI Registration",
          description: "For small food businesses with annual turnover less than Rs. 12 lakhs",
          price: 1999,
          route: "/services/basic-fssai-registration",
        },
        {
          icon: <BookOpenCheck size={24} />,
          title: "FSSAI State License",
          description: "For medium food businesses with annual turnover between Rs. 12 lakhs to 20 crores",
          price: 3999,
          route: "/services/fssai-state-license",
        },
        {
          icon: <BookOpenCheck size={24} />,
          title: "FSSAI Central License",
          description: "For large food businesses with annual turnover exceeding Rs. 20 crores",
          price: 7999,
          route: "/services/fssai-central-license",
        },
      ]
    }
  };

  // Get the current category data
  const currentCategory = categoryData[category || ''] || {
    title: 'Services',
    description: 'Our professional business services',
    services: []
  };

  return (
    <div>
      <Navbar />
      
      <div className="bg-brand-600 pt-12 pb-12 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{currentCategory.title}</h1>
            <p className="text-xl text-brand-100 mb-6 max-w-3xl">{currentCategory.description}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {currentCategory.services.map((service, index) => (
                <ServiceCard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  route={service.route}
                />
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <ContactForm 
                title="Get Expert Assistance"
                subtitle="Fill the form for personalized guidance"
              />
              
              <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-800 mb-4">Still have questions?</h3>
                <p className="text-gray-600 mb-4">Our experts are here to help you with any queries</p>
                <a 
                  href="tel:+918956214625" 
                  className="flex items-center justify-center w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-medium py-2.5 px-4 rounded-lg"
                >
                  Call Now: +91 8956214625
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ServiceCategory;
