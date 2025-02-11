
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DestinationsPage from "./pages/DestinationsPage";
import FlightBookingsPage from "./pages/services/FlightBookingsPage";
import VisaServicesPage from "./pages/services/VisaServicesPage";
import HotelReservationsPage from "./pages/services/HotelReservationsPage";
import TourPackagesPage from "./pages/services/TourPackagesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/services/flights" element={<FlightBookingsPage />} />
          <Route path="/services/visa" element={<VisaServicesPage />} />
          <Route path="/services/hotels" element={<HotelReservationsPage />} />
          <Route path="/services/tours" element={<TourPackagesPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
