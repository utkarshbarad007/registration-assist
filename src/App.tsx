
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrivateLimitedCompany from "./pages/PrivateLimitedCompany";
import LLPRegistration from "./pages/LLPRegistration";
import ServiceCategory from "./pages/ServiceCategory";
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
          
          {/* Individual Service Routes */}
          <Route path="/services/private-limited-company" element={<PrivateLimitedCompany />} />
          <Route path="/services/llp" element={<LLPRegistration />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
