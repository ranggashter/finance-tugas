import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  LayoutDashboard, 
  Receipt, 
  Users, 
  MapPin, 
  Wallet, 
  Settings, 
  LogOut,
  Search,
  Bell,
  Eye,
  ChevronDown,
  TrendingUp
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { toast } from "sonner";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", active: true },
  { icon: Receipt, label: "Transaksi", active: false },
  { icon: Users, label: "Mitra", active: false },
  { icon: MapPin, label: "Pos Mitra", active: false },
  { icon: Wallet, label: "Pencairan Dana", active: false },
];

const helpItems = [
  { icon: Settings, label: "Pengaturan" },
];

const transactions = [
  { no: 1, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "PROSES" },
  { no: 2, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
  { no: 3, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "BATAL" },
  { no: 4, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  const handleLogout = () => {
    toast.success("Berhasil logout");
    navigate("/login");
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PROSES": return "bg-yellow-500";
      case "SELESAI": return "bg-green-500";
      case "BATAL": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen flex bg-muted/30">
      {/* Sidebar */}
      <aside className="w-64 bg-login-sidebar flex flex-col min-h-screen fixed left-0 top-0">
        {/* Logo */}
        <div className="p-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-login-sidebar-foreground">NEBENG</span>
            <span className="text-login-highlight text-xl">✦</span>
          </div>
          <p className="text-login-sidebar-foreground/60 text-xs mt-1">
            TRANSPORTASI MENJADI LEBIH MUDAH
          </p>
        </div>

        {/* Main Menu */}
        <div className="flex-1 px-4">
          <p className="text-login-sidebar-foreground/50 text-xs font-medium mb-3 px-3">MAIN MENU</p>
          <nav className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveMenu(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeMenu === item.label
                    ? "bg-login-sidebar-foreground/20 text-login-sidebar-foreground"
                    : "text-login-sidebar-foreground/70 hover:bg-login-sidebar-foreground/10 hover:text-login-sidebar-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>

          <p className="text-login-sidebar-foreground/50 text-xs font-medium mb-3 px-3 mt-8">HELP & SUPPORT</p>
          <nav className="space-y-1">
            {helpItems.map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveMenu(item.label)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  activeMenu === item.label
                    ? "bg-login-sidebar-foreground/20 text-login-sidebar-foreground"
                    : "text-login-sidebar-foreground/70 hover:bg-login-sidebar-foreground/10 hover:text-login-sidebar-foreground"
                }`}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Logout Button */}
        <div className="p-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm bg-login-sidebar-foreground/10 text-login-sidebar-foreground hover:bg-login-sidebar-foreground/20 transition-colors"
          >
            <LogOut className="h-5 w-5" />
            Keluar
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Header */}
        <header className="bg-background border-b border-border px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-semibold text-foreground">Selamat Datang, Finance</h1>
            <span className="text-login-highlight">✦</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search" 
                className="pl-9 w-64 h-10 bg-muted/50 border-0"
              />
            </div>

            {/* User Menu */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-medium">
                    K
                  </div>
                  <span className="text-sm font-medium text-foreground">Kaori000</span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Eye className="h-4 w-4 mr-2" />
                  View Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {/* Pendapatan Card */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-muted-foreground">Pendapatan</span>
                <span className="text-xs text-muted-foreground">Jun 2025 ▼</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-foreground">Rp 200.000,00</span>
                <span className="text-muted-foreground">💰</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">No. Rekening: 798 0283 9827 897</p>
            </div>

            {/* Total Pengguna Mitra */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10.213</p>
                  <p className="text-xs text-muted-foreground">Total Pengguna Mitra</p>
                </div>
              </div>
            </div>

            {/* Total Pengguna Customer */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">10.213</p>
                  <p className="text-xs text-muted-foreground">Total Pengguna Costumer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Pendapatan Chart */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">Pendapatan</h3>
                  <p className="text-xs text-muted-foreground">Pendapatan dari penjualan Nebeng</p>
                </div>
                <span className="text-xs text-muted-foreground">May 2023 ▼</span>
              </div>
              {/* Placeholder Chart */}
              <div className="h-48 flex items-end justify-between gap-2 pt-4">
                {["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Aug", "Sep", "Oct", "Nov", "Des"].map((month, i) => (
                  <div key={month} className="flex-1 flex flex-col items-center gap-1">
                    <div 
                      className="w-full bg-primary/20 rounded-t transition-all hover:bg-primary/40"
                      style={{ height: `${Math.random() * 100 + 40}px` }}
                    />
                    <span className="text-[10px] text-muted-foreground">{month}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pesanan Chart */}
            <div className="bg-background rounded-xl p-5 border border-border">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-foreground">Pesanan</h3>
                  <p className="text-xs text-muted-foreground">Total Pesanan</p>
                </div>
                <span className="text-xs text-muted-foreground">Jun 2025 ▼</span>
              </div>
              {/* Bar Chart Placeholder */}
              <div className="h-48 flex items-end justify-center gap-8">
                {[
                  { label: "Nebeng Motor", height: 70, color: "bg-primary" },
                  { label: "Nebeng Barang", height: 50, color: "bg-primary/70" },
                  { label: "Nebeng Belanja", height: 40, color: "bg-primary/50" },
                  { label: "Title Pesanan", height: 30, color: "bg-primary/30" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-2">
                    <div 
                      className={`w-12 ${item.color} rounded-t transition-all hover:opacity-80`}
                      style={{ height: `${item.height * 2}px` }}
                    />
                    <span className="text-[10px] text-muted-foreground text-center max-w-16">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Transaction Table */}
          <div className="bg-background rounded-xl border border-border overflow-hidden">
            <div className="p-5 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Daftar Transaksi</h3>
              <span className="text-xs text-muted-foreground">May 2025 ▼</span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">NO.</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">TANGGAL</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">NAMA DRIVER</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">NAMA COSTUMER</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">NO. TRANSAKSI</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">NO ORDERAN</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">STATUS</th>
                    <th className="text-left text-xs font-medium text-muted-foreground px-5 py-3">AKSI</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((tx, i) => (
                    <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4 text-sm text-foreground">{tx.no}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.tanggal}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.driver}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.customer}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.noTransaksi}</td>
                      <td className="px-5 py-4 text-sm text-foreground">{tx.noOrderan}</td>
                      <td className="px-5 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(tx.status)}`}>
                          {tx.status}
                        </span>
                      </td>
                      <td className="px-5 py-4">
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
