import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import Dashboard from "./pages/Dashboard";
import Transaksi from "./pages/Transaksi";
import TransactionDetail from "./pages/detailTransaksi";
import Mitra from "./pages/Mitra";
import DetailMitra from "./pages/DetailMitra";
import PosMitra from "./pages/PosMitra";
import DetailPosMitra from "./pages/DetailPosMitra";
import PencairanDana from "./pages/PencairanDana";
import DetailPencairanDana  from "./pages/Detailpencairan";
import EditDetailPencairanDana from "./pages/editPencairan";
import Pengaturan from "./pages/Pengaturan";
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
          <Route path="/login-finance" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/transaksi" element={<Transaksi />} />
          <Route
  path="/transactions/:id"
  element={<TransactionDetail />}
/>
          <Route path="/mitra" element={<Mitra />} />
<Route path="/mitra/:id" element={<DetailMitra />} />
<Route path="/pos-mitra" element={<PosMitra />} />
<Route path="/pos-mitra/:id" element={<DetailPosMitra />} />
<Route path="/pencairan-dana" element={<PencairanDana />} />
<Route path="/pencairan/:id" element={<DetailPencairanDana />} />
<Route path="/pencairan/:id/edit" element={<EditDetailPencairanDana />} />
<Route path="/pengaturan" element={<Pengaturan />} />






          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
