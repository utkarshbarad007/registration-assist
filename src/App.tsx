
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import LLPRegistration from "./pages/LLPRegistration";
import OnePersonCompany from "./pages/OnePersonCompany";
import PublicLimitedCompany from "./pages/PublicLimitedCompany";
import ForeignSubsidiary from "./pages/ForeignSubsidiary";
import Section8Company from "./pages/Section8Company";
import NidhiCompany from "./pages/NidhiCompany";
import ChitFundCompany from "./pages/ChitFundCompany";
import ProducerCompany from "./pages/ProducerCompany";
import NidhiCompanyCompliance from "./pages/NidhiCompanyCompliance";
import LLPBasicCompliance from "./pages/LLPBasicCompliance";
import LLPAdvancedCompliance from "./pages/LLPAdvancedCompliance";
import PrivateLimitedCompliance from "./pages/PrivateLimitedCompliance";
import OPCCompliance from "./pages/OPCCompliance";
import TrademarkRegistration from "./pages/TrademarkRegistration";
import TrademarkRenewal from "./pages/TrademarkRenewal";
import TrademarkOpposition from "./pages/TrademarkOpposition";
import TrademarkAssignment from "./pages/TrademarkAssignment";
import CopyrightRegistration from "./pages/CopyrightRegistration";
import ServiceCategory from "./pages/ServiceCategory";
import FSSAICentralLicense from "./pages/FSSAICentralLicense";
import BasicFSSAIRegistration from "./pages/BasicFSSAIRegistration";
import FSSAIStateLicense from "./pages/FSSAIStateLicense";
import GSTRegistration from "./pages/GSTRegistration";
import MSMERegistration from "./pages/MSMERegistration";
import StartupIndiaRegistration from "./pages/StartupIndiaRegistration";
import AngelTaxExemption from "./pages/AngelTaxExemption";
import TaxExemption80IAC from "./pages/TaxExemption80IAC";
import ISO9001 from "./pages/ISO9001";
import ISO22000 from "./pages/ISO22000";
import ISO14001 from "./pages/ISO14001";
import ISO45001 from "./pages/ISO45001";
import ISO13485 from "./pages/ISO13485";
import ISO27001 from "./pages/ISO27001";
import NotFound from "./pages/NotFound";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Service Category Routes */}
          <Route path="/services/business-registration" element={<ServiceCategory />} />
          <Route path="/services/compliance-plan" element={<ServiceCategory />} />
          <Route path="/services/trademark-ip" element={<ServiceCategory />} />
          <Route path="/services/registrations" element={<ServiceCategory />} />
          <Route path="/services/iso-certification" element={<ServiceCategory />} />
          <Route path="/services/fssai" element={<ServiceCategory />} />
          
          {/* Start Your Business Routes */}
          <Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
          <Route path="/services/one-person-company" element={<OnePersonCompany />} />
          <Route path="/services/public-limited-company" element={<PublicLimitedCompany />} />
          <Route path="/services/foreign-subsidiary" element={<ForeignSubsidiary />} />
          <Route path="/services/llp" element={<LLPRegistration />} />
          <Route path="/services/section-8-company" element={<Section8Company />} />
          <Route path="/services/nidhi-company" element={<NidhiCompany />} />
          <Route path="/services/chit-fund-company" element={<ChitFundCompany />} />
          <Route path="/services/producer-company" element={<ProducerCompany />} />
          
          {/* Compliance Plan Routes */}
          <Route path="/services/nidhi-company-compliance" element={<NidhiCompanyCompliance />} />
          <Route path="/services/llp-basic-compliance" element={<LLPBasicCompliance />} />
          <Route path="/services/llp-advanced-compliance" element={<LLPAdvancedCompliance />} />
          <Route path="/services/private-limited-compliance" element={<PrivateLimitedCompliance />} />
          <Route path="/services/opc-compliance" element={<OPCCompliance />} />
          
          {/* Trademark & IP Routes */}
          <Route path="/services/trademark-registration" element={<TrademarkRegistration />} />
          <Route path="/services/trademark-renewal" element={<TrademarkRenewal />} />
          <Route path="/services/trademark-opposition" element={<TrademarkOpposition />} />
          <Route path="/services/trademark-assignment" element={<TrademarkAssignment />} />
          <Route path="/services/copyright-registration" element={<CopyrightRegistration />} />
          
          {/* Registration Routes */}
          <Route path="/services/gst-registration" element={<GSTRegistration />} />
          <Route path="/services/msme-registration" element={<MSMERegistration />} />
          <Route path="/services/startup-india-registration" element={<StartupIndiaRegistration />} />
          <Route path="/services/angel-tax-exemption" element={<AngelTaxExemption />} />
          <Route path="/services/80iac-tax-exemption" element={<TaxExemption80IAC />} />
          
          {/* ISO Certification Routes */}
          <Route path="/services/iso-9001" element={<ISO9001 />} />
          <Route path="/services/iso-22000" element={<ISO22000 />} />
          <Route path="/services/iso-14001" element={<ISO14001 />} />
          <Route path="/services/iso-45001" element={<ISO45001 />} />
          <Route path="/services/iso-13485" element={<ISO13485 />} />
          <Route path="/services/iso-27001" element={<ISO27001 />} />
          
          {/* FSSAI Routes */}
          <Route path="/services/fssai-central-license" element={<FSSAICentralLicense />} />
          <Route path="/services/basic-fssai-registration" element={<BasicFSSAIRegistration />} />
          <Route path="/services/fssai-state-license" element={<FSSAIStateLicense />} />
          
          {/* Legal Pages */}
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/refund" element={<RefundPolicy />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
