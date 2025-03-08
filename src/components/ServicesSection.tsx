import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Building2, Briefcase, BookOpen, LandPlot, BarChart, FileCheck, Award, 
  ShieldCheck, Landmark, TrendingUp, Cpu, BookOpenCheck, Scale, FileText, 
  ClipboardCheck, Calculator, DollarSign, User, GraduationCap, Book,
  Receipt, HeartPulse, FileSpreadsheet, Users, CreditCard
} from 'lucide-react';

const AllServicesSection = () => {
  const allServices = [
    // Business Formation
    {
      icon: <Building2 size={24} />,
      title: "Private Limited Company",
      description: "Most popular business structure for startups and growing businesses with limited liability protection",
      price: 6299,
      route: "/services/private-limited-company",
      category: "Business Formation"
    },
    {
      icon: <Landmark size={24} />,
      title: "LLP Registration",
      description: "Combines the benefits of partnership and company with limited liability for partners",
      price: 3499,
      route: "/services/llp",
      category: "Business Formation"
    },
    {
      icon: <Users size={24} />,
      title: "Partnership Firm",
      description: "Traditional business structure for two or more persons who share profits and liabilities",
      price: 2999,
      route: "/services/partnership-firm",
      category: "Business Formation"
    },
    {
      icon: <User size={24} />,
      title: "Sole Proprietorship",
      description: "Simplest business structure owned and operated by a single individual",
      price: 1499,
      route: "/services/sole-proprietorship",
      category: "Business Formation"
    },
    {
      icon: <Building2 size={24} />,
      title: "One Person Company",
      description: "Single person company with limited liability and less compliance requirements",
      price: 5499,
      route: "/services/one-person-company",
      category: "Business Formation"
    },
    
    // Intellectual Property
    {
      icon: <Award size={24} />,
      title: "Trademark Registration",
      description: "Protect your brand name, logo and slogan from unauthorized usage",
      price: 7999,
      route: "/services/trademark-registration",
      category: "Intellectual Property"
    },
    {
      icon: <BookOpen size={24} />,
      title: "Copyright Registration",
      description: "Protect original literary, dramatic, musical and artistic works",
      price: 4999,
      route: "/services/copyright-registration",
      category: "Intellectual Property"
    },
    {
      icon: <LandPlot size={24} />,
      title: "Patent Registration",
      description: "Protect new inventions and innovative processes with exclusive rights",
      price: 15999,
      route: "/services/patent-registration",
      category: "Intellectual Property"
    },
    
    // Compliance & Registrations
    {
      icon: <FileCheck size={24} />,
      title: "GST Registration",
      description: "Mandatory registration for businesses with turnover above the threshold limit",
      price: 1999,
      route: "/services/gst-registration",
      category: "Compliance & Registrations"
    },
    {
      icon: <BarChart size={24} />,
      title: "MSME Registration",
      description: "Get government benefits and subsidies for micro, small and medium enterprises",
      price: 999,
      route: "/services/msme-registration",
      category: "Compliance & Registrations"
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Startup India Registration",
      description: "Special recognition and benefits for innovative startups under government initiative",
      price: 2999,
      route: "/services/startup-india-registration",
      category: "Compliance & Registrations"
    },
    {
      icon: <Cpu size={24} />,
      title: "ISO Certification",
      description: "Enhance credibility with internationally recognized quality management standards",
      price: 8999,
      route: "/services/iso-certification",
      category: "Compliance & Registrations"
    },
    {
      icon: <BookOpenCheck size={24} />,
      title: "FSSAI License",
      description: "Obtain mandatory food safety licenses for your food business operations",
      price: 3499,
      route: "/services/fssai",
      category: "Compliance & Registrations"
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Import Export Code",
      description: "Essential registration for businesses engaged in international trade",
      price: 2499,
      route: "/services/iec-code",
      category: "Compliance & Registrations"
    },
    
    // Tax & Accounting
    {
      icon: <Calculator size={24} />,
      title: "Tax Filing",
      description: "Professional assistance with income tax returns for individuals and businesses",
      price: 1499,
      route: "/services/tax-filing",
      category: "Tax & Accounting"
    },
    {
      icon: <FileSpreadsheet size={24} />,
      title: "Accounting Services",
      description: "Comprehensive bookkeeping and financial statement preparation",
      price: 2999,
      route: "/services/accounting-services",
      category: "Tax & Accounting"
    },
    {
      icon: <DollarSign size={24} />,
      title: "GST Filing",
      description: "Monthly, quarterly and annual GST return filing services",
      price: 999,
      route: "/services/gst-filing",
      category: "Tax & Accounting"
    },
    
    // Legal Services
    {
      icon: <Scale size={24} />,
      title: "Legal Documentation",
      description: "Drafting and review of various business agreements and legal documents",
      price: 3499,
      route: "/services/legal-documentation",
      category: "Legal Services"
    },
    {
      icon: <FileText size={24} />,
      title: "Terms & Conditions",
      description: "Customized legal agreements for websites and mobile applications",
      price: 2499,
      route: "/services/terms-conditions",
      category: "Legal Services"
    },
    {
      icon: <HeartPulse size={24} />,
      title: "HR Documentation",
      description: "Employment contracts, policies and other HR-related legal documents",
      price: 3999,
      route: "/services/hr-documentation",
      category: "Legal Services"
    },
    {
      icon: <CreditCard size={24} />,
      title: "Licensing & Permits",
      description: "Assistance in obtaining various business licenses and permits",
      price: 4999,
      route: "/services/licensing-permits",
      category: "Legal Services"
    }
  ];

  // Group services by category
  const servicesByCategory = allServices.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {});

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="all-services">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">All Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Comprehensive business solutions to help you at every stage</p>
        </div>

        {Object.entries(servicesByCategory).map(([category, services]) => (
          <div key={category} className="mb-16">
            <h3 className="text-2xl font-bold text-gray-800 mb-8 border-b border-gray-200 pb-2">{category}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
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
        ))}

        <div className="mt-16 text-center">
          <div className="inline-block bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Solution?</h3>
            <p className="text-gray-600 mb-6">Don't see what you're looking for? Contact us for personalized business assistance.</p>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 bg-brand-600 text-white font-medium rounded-lg hover:bg-brand-700 transition-colors duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServicesSection;
