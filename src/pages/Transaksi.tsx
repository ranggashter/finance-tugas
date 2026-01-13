import { useState } from "react";
import { Eye, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import DashboardLayout from "@/components/DashboardLayout";

const allTransactions = [
  { no: 1, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "PROSES" },
  { no: 2, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
  { no: 3, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "BATAL" },
  { no: 4, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "BATAL" },
  { no: 5, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
  { no: 6, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "BATAL" },
  { no: 7, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
  { no: 8, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
  { no: 9, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "PROSES" },
  { no: 10, tanggal: "Rabu, 17 Okt 2023", driver: "Maulana Iqli", customer: "Ocba Putra", noTransaksi: "INV-12345678", noOrderan: "0001234567B9", status: "SELESAI" },
];

const Transaksi = () => {
  const [statusFilter, setStatusFilter] = useState<string>("Semua");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredTransactions = statusFilter === "Semua" 
    ? allTransactions 
    : allTransactions.filter(tx => tx.status === statusFilter);

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedTransactions = filteredTransactions.slice(startIndex, startIndex + itemsPerPage);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PROSES": return "bg-yellow-500";
      case "SELESAI": return "bg-green-500";
      case "BATAL": return "bg-red-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <DashboardLayout title="Transaksi">
      {/* Transaction Table */}
      <div className="bg-background rounded-xl border border-border overflow-hidden">
        <div className="p-5 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Daftar Transaksi</h3>
          
          {/* Status Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
                Status: {statusFilter}
                <ChevronDown className="h-4 w-4" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setStatusFilter("Semua")}>
                Semua
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("PROSES")}>
                Proses
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("SELESAI")}>
                Selesai
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setStatusFilter("BATAL")}>
                Batal
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
              {paginatedTransactions.map((tx, i) => (
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

        {/* Pagination */}
        <div className="p-4 border-t border-border flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            1 - {Math.min(itemsPerPage, filteredTransactions.length)} entries
          </p>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(p => p - 1)}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            {[1, 2, 3].map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "outline"}
                size="icon"
                className="h-8 w-8"
                onClick={() => setCurrentPage(page)}
              >
                {page}
              </Button>
            ))}
            <span className="text-muted-foreground">...</span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage(p => p + 1)}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Transaksi;
