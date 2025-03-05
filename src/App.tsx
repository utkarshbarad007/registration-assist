
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
import ServiceCategory from "./pages/ServiceCategory";
import FSSAICentralLicense from "./pages/FSSAICentralLicense";
import BasicFSSAIRegistration from "./pages/BasicFSSAIRegistration";
import FSSAIStateLicense from "./pages/FSSAIStateLicense";
import NotFound from "./pages/NotFound";

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
          
          {/* FSSAI Routes */}
          <Route path="/services/fssai-central-license" element={<FSSAICentralLicense />} />
          <Route path="/services/basic-fssai-registration" element={<BasicFSSAIRegistration />} />
          <Route path="/services/fssai-state-license" element={<FSSAIStateLicense />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
