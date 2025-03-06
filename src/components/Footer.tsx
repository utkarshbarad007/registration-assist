
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">BizFile</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner for all business registration, compliance, and legal services in India.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Key Services</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/services/private-limited-company" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Private Limited Company
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/llp" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Limited Liability Partnership (LLP)
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/trademark-registration" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Trademark Registration
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/gst-registration" className="text-gray-400 hover:text-white transition-colors duration-200">
                  GST Registration
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/msme-registration" className="text-gray-400 hover:text-white transition-colors duration-200">
                  MSME Registration
                </NavLink>
              </li>
              <li>
                <NavLink to="/services/iso-9001" className="text-gray-400 hover:text-white transition-colors duration-200">
                  ISO Certification
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/about" className="text-gray-400 hover:text-white transition-colors duration-200">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="text-gray-400 hover:text-white transition-colors duration-200">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" className="text-gray-400 hover:text-white transition-colors duration-200">
                  FAQ
                </NavLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-brand-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  1815 , BLOCK-B , NAVRATNA CORPORATE PARK
                  AMBLI BOPAL ROAD AHMEDABAD
                  Ahmedabad, Gujarat 380058
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-brand-400 flex-shrink-0" />
                <span className="text-gray-400">+91 93285 27395</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-brand-400 flex-shrink-0" />
                <span className="text-gray-400">support@bizfile.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2025 Bizfile. Design & Develop by Technowire Data Science Limited</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6">
                <li>
                  <NavLink to="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Terms of Service
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Privacy Policy
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/refund" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
                    Refund Policy
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
