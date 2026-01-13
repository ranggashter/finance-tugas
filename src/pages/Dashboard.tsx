import { Eye, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";



const transactions = [
  { no: 1, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "PROSES" },
  { no: 2, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
  { no: 3, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "BATAL" },
  { no: 4, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
];

const Dashboard = () => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "PROSES": return "bg-yellow-500";
      case "SELESAI": return "bg-green-500";
      case "BATAL": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <DashboardLayout title="Dashboard">
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
    </DashboardLayout>
  );
};

export default Dashboard;
