
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-gradient-to-r from-brand-700/90 to-brand-600/90 backdrop-blur-md'}`}>
      {/* Top Bar with Contact Info */}
      <div className="bg-brand-700 text-white py-2 px-4 hidden md:block">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span className="text-sm">+91 93285 27395</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail size={14} />
              <span className="text-sm">info@bizfile.in</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-medium">Your Trusted Partner for Business Solutions</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4">
        <nav className="flex justify-between items-center py-4">
          <NavLink to="/" className="flex items-center space-x-2">
            <span className={`text-xl font-bold ${isScrolled ? 'text-brand-600' : 'text-white'}`}>BizFile</span>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="group relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-100'}`}>
                <span>Start Your Business</span>
                <ChevronDown size={16} />
              </button>
              <div className="nav-dropdown">
                <NavLink to="/services/private-limited-company" className="nav-dropdown-item">Private Limited Company</NavLink>
                <NavLink to="/services/one-person-company" className="nav-dropdown-item">One Person Private Limited Company</NavLink>
                <NavLink to="/services/public-limited-company" className="nav-dropdown-item">Public Limited Company</NavLink>
                <NavLink to="/services/foreign-subsidiary" className="nav-dropdown-item">Foreign Subsidiary In India</NavLink>
                <NavLink to="/services/llp" className="nav-dropdown-item">Limited Liability Partnership</NavLink>
                <NavLink to="/services/section-8-company" className="nav-dropdown-item">Section 8 Company (NGO)</NavLink>
                <NavLink to="/services/nidhi-company" className="nav-dropdown-item">Nidhi Company</NavLink>
                <NavLink to="/services/chit-fund-company" className="nav-dropdown-item">Chit Fund Company</NavLink>
                <NavLink to="/services/producer-company" className="nav-dropdown-item">Producer Company</NavLink>
              </div>
            </div>

            <div className="group relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-100'}`}>
                <span>Compliance Plan</span>
                <ChevronDown size={16} />
              </button>
              <div className="nav-dropdown">
                <NavLink to="/services/nidhi-company-compliance" className="nav-dropdown-item">Nidhi Company Compliance</NavLink>
                <NavLink to="/services/llp-basic-compliance" className="nav-dropdown-item">LLP Basic Compliance</NavLink>
                <NavLink to="/services/llp-advanced-compliance" className="nav-dropdown-item">LLP Advanced Compliance</NavLink>
                <NavLink to="/services/private-limited-compliance" className="nav-dropdown-item">Private Limited Compliance</NavLink>
                <NavLink to="/services/opc-compliance" className="nav-dropdown-item">OPC Compliance</NavLink>
              </div>
            </div>

            <div className="group relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-100'}`}>
                <span>Trademark & IP</span>
                <ChevronDown size={16} />
              </button>
              <div className="nav-dropdown">
                <NavLink to="/services/trademark-registration" className="nav-dropdown-item">Trademark Registration</NavLink>
                <NavLink to="/services/trademark-renewal" className="nav-dropdown-item">Trademark Renewal</NavLink>
                <NavLink to="/services/trademark-opposition" className="nav-dropdown-item">Trademark Opposition</NavLink>
                <NavLink to="/services/trademark-assignment" className="nav-dropdown-item">Trademark Assignment</NavLink>
                <NavLink to="/services/copyright-registration" className="nav-dropdown-item">Copyright Registration</NavLink>
              </div>
            </div>

            <div className="group relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-100'}`}>
                <span>Registration</span>
                <ChevronDown size={16} />
              </button>
              <div className="nav-dropdown">
                <NavLink to="/services/gst-registration" className="nav-dropdown-item">GST Registration</NavLink>
                <NavLink to="/services/msme-registration" className="nav-dropdown-item">MSME Registration</NavLink>
                <NavLink to="/services/startup-india-registration" className="nav-dropdown-item">Start Up India Registration</NavLink>
                <NavLink to="/services/angel-tax-exemption" className="nav-dropdown-item">Angel Tax Exemption Registration</NavLink>
                <NavLink to="/services/80iac-tax-exemption" className="nav-dropdown-item">80 IAC Tax Exemption Registration</NavLink>
              </div>
            </div>

            <div className="group relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-100'}`}>
                <span>ISO Certification</span>
                <ChevronDown size={16} />
              </button>
              <div className="nav-dropdown">
                <NavLink to="/services/iso-9001" className="nav-dropdown-item">ISO 9001:2015 (Quality Management)</NavLink>
                <NavLink to="/services/iso-22000" className="nav-dropdown-item">ISO 22000:2018 (Food Safety)</NavLink>
                <NavLink to="/services/iso-14001" className="nav-dropdown-item">ISO 14001:2015 (Environmental)</NavLink>
                <NavLink to="/services/iso-45001" className="nav-dropdown-item">ISO 45001:2018 (Occupational)</NavLink>
                <NavLink to="/services/iso-13485" className="nav-dropdown-item">ISO 13485:2016 (Medical Devices)</NavLink>
                <NavLink to="/services/iso-27001" className="nav-dropdown-item">ISO 27001:2013 (Information Security)</NavLink>
              </div>
            </div>

            <div className="group relative">
              <button className={`flex items-center space-x-1 font-medium ${isScrolled ? 'text-gray-700 hover:text-brand-600' : 'text-white hover:text-brand-100'}`}>
                <span>FSSAI</span>
                <ChevronDown size={16} />
              </button>
              <div className="nav-dropdown">
                <NavLink to="/services/basic-fssai-registration" className="nav-dropdown-item">Basic FSSAI Registration</NavLink>
                <NavLink to="/services/fssai-state-license" className="nav-dropdown-item">FSSAI State License</NavLink>
                <NavLink to="/services/fssai-central-license" className="nav-dropdown-item">FSSAI Central License</NavLink>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden ${isScrolled ? 'text-gray-700' : 'text-white'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3">
            <div className="space-y-4">
              <div className="border-b pb-2">
                <button className="flex items-center justify-between w-full py-2 text-left" onClick={() => document.getElementById('mobile-menu-1')?.classList.toggle('hidden')}>
                  <span className="font-medium">Start Your Business</span>
                  <ChevronDown size={16} />
                </button>
                <div id="mobile-menu-1" className="hidden mt-2 ml-4 space-y-2">
                  <NavLink to="/services/private-limited-company" className="block py-1.5 text-sm text-gray-700">Private Limited Company</NavLink>
                  <NavLink to="/services/one-person-company" className="block py-1.5 text-sm text-gray-700">One Person Private Limited Company</NavLink>
                  <NavLink to="/services/public-limited-company" className="block py-1.5 text-sm text-gray-700">Public Limited Company</NavLink>
                  <NavLink to="/services/foreign-subsidiary" className="block py-1.5 text-sm text-gray-700">Foreign Subsidiary In India</NavLink>
                  <NavLink to="/services/llp" className="block py-1.5 text-sm text-gray-700">Limited Liability Partnership</NavLink>
                  <NavLink to="/services/section-8-company" className="block py-1.5 text-sm text-gray-700">Section 8 Company (NGO)</NavLink>
                  <NavLink to="/services/nidhi-company" className="block py-1.5 text-sm text-gray-700">Nidhi Company</NavLink>
                  <NavLink to="/services/chit-fund-company" className="block py-1.5 text-sm text-gray-700">Chit Fund Company</NavLink>
                  <NavLink to="/services/producer-company" className="block py-1.5 text-sm text-gray-700">Producer Company</NavLink>
                </div>
              </div>

              <div className="border-b pb-2">
                <button className="flex items-center justify-between w-full py-2 text-left" onClick={() => document.getElementById('mobile-menu-2')?.classList.toggle('hidden')}>
                  <span className="font-medium">Compliance Plan</span>
                  <ChevronDown size={16} />
                </button>
                <div id="mobile-menu-2" className="hidden mt-2 ml-4 space-y-2">
                  <NavLink to="/services/nidhi-company-compliance" className="block py-1.5 text-sm text-gray-700">Nidhi Company Compliance</NavLink>
                  <NavLink to="/services/llp-basic-compliance" className="block py-1.5 text-sm text-gray-700">LLP Basic Compliance</NavLink>
                  <NavLink to="/services/llp-advanced-compliance" className="block py-1.5 text-sm text-gray-700">LLP Advanced Compliance</NavLink>
                  <NavLink to="/services/private-limited-compliance" className="block py-1.5 text-sm text-gray-700">Private Limited Compliance</NavLink>
                  <NavLink to="/services/opc-compliance" className="block py-1.5 text-sm text-gray-700">OPC Compliance</NavLink>
                </div>
              </div>

              <div className="border-b pb-2">
                <button className="flex items-center justify-between w-full py-2 text-left" onClick={() => document.getElementById('mobile-menu-3')?.classList.toggle('hidden')}>
                  <span className="font-medium">Trademark & IP</span>
                  <ChevronDown size={16} />
                </button>
                <div id="mobile-menu-3" className="hidden mt-2 ml-4 space-y-2">
                  <NavLink to="/services/trademark-registration" className="block py-1.5 text-sm text-gray-700">Trademark Registration</NavLink>
                  <NavLink to="/services/trademark-renewal" className="block py-1.5 text-sm text-gray-700">Trademark Renewal</NavLink>
                  <NavLink to="/services/trademark-opposition" className="block py-1.5 text-sm text-gray-700">Trademark Opposition</NavLink>
                  <NavLink to="/services/trademark-assignment" className="block py-1.5 text-sm text-gray-700">Trademark Assignment</NavLink>
                  <NavLink to="/services/copyright-registration" className="block py-1.5 text-sm text-gray-700">Copyright Registration</NavLink>
                </div>
              </div>

              <div className="border-b pb-2">
                <button className="flex items-center justify-between w-full py-2 text-left" onClick={() => document.getElementById('mobile-menu-4')?.classList.toggle('hidden')}>
                  <span className="font-medium">Registration</span>
                  <ChevronDown size={16} />
                </button>
                <div id="mobile-menu-4" className="hidden mt-2 ml-4 space-y-2">
                  <NavLink to="/services/gst-registration" className="block py-1.5 text-sm text-gray-700">GST Registration</NavLink>
                  <NavLink to="/services/msme-registration" className="block py-1.5 text-sm text-gray-700">MSME Registration</NavLink>
                  <NavLink to="/services/startup-india-registration" className="block py-1.5 text-sm text-gray-700">Start Up India Registration</NavLink>
                  <NavLink to="/services/angel-tax-exemption" className="block py-1.5 text-sm text-gray-700">Angel Tax Exemption Registration</NavLink>
                  <NavLink to="/services/80iac-tax-exemption" className="block py-1.5 text-sm text-gray-700">80 IAC Tax Exemption Registration</NavLink>
                </div>
              </div>

              <div className="border-b pb-2">
                <button className="flex items-center justify-between w-full py-2 text-left" onClick={() => document.getElementById('mobile-menu-5')?.classList.toggle('hidden')}>
                  <span className="font-medium">ISO Certification</span>
                  <ChevronDown size={16} />
                </button>
                <div id="mobile-menu-5" className="hidden mt-2 ml-4 space-y-2">
                  <NavLink to="/services/iso-9001" className="block py-1.5 text-sm text-gray-700">ISO 9001:2015 (Quality Management)</NavLink>
                  <NavLink to="/services/iso-22000" className="block py-1.5 text-sm text-gray-700">ISO 22000:2018 (Food Safety)</NavLink>
                  <NavLink to="/services/iso-14001" className="block py-1.5 text-sm text-gray-700">ISO 14001:2015 (Environmental)</NavLink>
                  <NavLink to="/services/iso-45001" className="block py-1.5 text-sm text-gray-700">ISO 45001:2018 (Occupational)</NavLink>
                  <NavLink to="/services/iso-13485" className="block py-1.5 text-sm text-gray-700">ISO 13485:2016 (Medical Devices)</NavLink>
                  <NavLink to="/services/iso-27001" className="block py-1.5 text-sm text-gray-700">ISO 27001:2013 (Information Security)</NavLink>
                </div>
              </div>

              <div className="border-b pb-2">
                <button className="flex items-center justify-between w-full py-2 text-left" onClick={() => document.getElementById('mobile-menu-6')?.classList.toggle('hidden')}>
                  <span className="font-medium">FSSAI</span>
                  <ChevronDown size={16} />
                </button>
                <div id="mobile-menu-6" className="hidden mt-2 ml-4 space-y-2">
                  <NavLink to="/services/basic-fssai-registration" className="block py-1.5 text-sm text-gray-700">Basic FSSAI Registration</NavLink>
                  <NavLink to="/services/fssai-state-license" className="block py-1.5 text-sm text-gray-700">FSSAI State License</NavLink>
                  <NavLink to="/services/fssai-central-license" className="block py-1.5 text-sm text-gray-700">FSSAI Central License</NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
