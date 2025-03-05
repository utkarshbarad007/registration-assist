
import React from 'react';
import ServiceCard from './ServiceCard';
import { 
  Building2, Briefcase, BookOpen, LandPlot, BarChart, FileCheck, Award, 
  ShieldCheck, Landmark, TrendingUp, Cpu, BookOpenCheck 
} from 'lucide-react';

const ServicesSection = () => {
  const serviceCategories = [
    {
      icon: <Building2 size={24} />,
      title: "Start Your Business",
      description: "Register your company in the most suitable structure for your business needs",
      route: "/services/business-registration",
    },
    {
      icon: <Briefcase size={24} />,
      title: "Compliance Plan",
      description: "Stay updated with all regulatory requirements and never miss a compliance deadline",
      route: "/services/compliance-plan",
    },
    {
      icon: <Award size={24} />,
      title: "Trademark & IP",
      description: "Protect your brand identity and intellectual property with legal registration",
      route: "/services/trademark-ip",
    },
    {
      icon: <ShieldCheck size={24} />,
      title: "Registrations",
      description: "Get essential business registrations like GST, MSME, and Startup India",
      route: "/services/registrations",
    },
    {
      icon: <Cpu size={24} />,
      title: "ISO Certification",
      description: "Enhance credibility with internationally recognized quality management standards",
      route: "/services/iso-certification",
    },
    {
      icon: <BookOpenCheck size={24} />,
      title: "FSSAI License",
      description: "Obtain mandatory food safety licenses for your food business operations",
      route: "/services/fssai",
    }
  ];

  const topServices = [
    {
      icon: <Building2 size={24} />,
      title: "Private Limited Company",
      description: "Most popular business structure for startups and growing businesses with limited liability protection",
      price: 6299,
      route: "/services/private-limited-company",
    },
    {
      icon: <Landmark size={24} />,
      title: "LLP Registration",
      description: "Combines the benefits of partnership and company with limited liability for partners",
      price: 3499,
      route: "/services/llp",
    },
    {
      icon: <Award size={24} />,
      title: "Trademark Registration",
      description: "Protect your brand name, logo and slogan from unauthorized usage",
      price: 7999,
      route: "/services/trademark-registration",
    },
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
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" id="services">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">What We can Do For You</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {serviceCategories.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              route={service.route}
            />
          ))}
        </div>

        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Most requested business solutions</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topServices.map((service, index) => (
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
    </div>
  );
};

export default ServicesSection;
