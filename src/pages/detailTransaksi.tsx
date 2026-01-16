import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardLayout from "@/components/DashboardLayout";
import { useNavigate, useParams } from "react-router-dom";
import { allTransactions } from "@/data/transaksi";
import axios from "axios";

const DetailTransaksi = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const transaksi = allTransactions.find(
    (tx) => tx.no === Number(id)
  );

  if (!transaksi) {
    return (
      <DashboardLayout title="Detail Transaksi">
        <p>Data transaksi tidak ditemukan</p>
      </DashboardLayout>
    );
  }

  const total = transaksi.passengerFee + transaksi.adminFee;
axios.get(`http://localhost:3000/api/bookings/transactions/${id}`);

  return (
    <DashboardLayout title="Detail Transaksi">
      <div className="flex items-center gap-3 mb-6">
        <Button variant="ghost" size="icon" onClick={() => navigate(-1)}>
          <ChevronLeft />
        </Button>
        <h2 className="text-lg font-semibold">Detail Transaksi</h2>
      </div>

      <div className="space-y-6">
        {/* ID PESANAN */}
        <div className="border rounded-xl p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-muted-foreground">ID Pesanan:</p>
              <p className="font-semibold text-lg">Clara Aulia</p>
              <p className="text-sm text-muted-foreground">Customer</p>
            </div>
            <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">
              Selasa
            </span>
          </div>
        </div>

        {/* INFORMASI CUSTOMER */}
        <div className="border rounded-xl p-5">
          <h4 className="font-semibold mb-4">Informasi Customer</h4>
          <div className="mb-4">
            <p className="text-sm text-muted-foreground">Nama Lengkap</p>
            <p className="font-semibold">Muhammad Abdul Kadir</p>
            <p className="text-sm text-muted-foreground">098379393994</p>
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Catatan Untuk Driver</p>
            <p className="text-sm italic">"Jika sudah di fik, maja lagi sedikit yah mas"</p>
          </div>
        </div>

        {/* INFORMASI MITRA */}
        <div className="border rounded-xl p-5">
          <h4 className="font-semibold mb-4">Informasi Mitra</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted-foreground">Nama Lengkap</p>
              <p className="font-semibold">Muhammad Abdul Kadir</p>
              <p className="text-sm text-muted-foreground">098379393994</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kendaraan</p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Mobil</span>
                <span className="font-semibold">TOYOTA</span>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Plat Nomor Kendaraan</p>
              <p className="font-semibold">B 4949 MBH</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Kendaraan</p>
              <div className="flex items-center gap-2">
                <span className="bg-gray-100 px-2 py-1 rounded text-xs">Mobil</span>
                <span className="font-semibold">TOYOTA</span>
              </div>
            </div>
          </div>
        </div>

        {/* RINCIAN PERJALANAN */}
        <div className="border rounded-xl p-5">
          <h4 className="font-semibold mb-4">Rincian Perjalanan</h4>
          <div className="mb-3">
            <p className="text-sm text-muted-foreground">Rute: 20.30.2024</p>
            <p className="font-semibold">14 km - 14 menit</p>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 bg-green-500 rounded-full"></div>
              <div>
                <p className="text-sm text-muted-foreground">Titik Jemput:</p>
                <p className="font-semibold">Yogyakarta</p>
                <p className="text-sm">09:30 WIB</p>
                <p className="text-sm">Alun-alun Yogyakarta</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 mt-2 bg-red-500 rounded-full"></div>
              <div>
                <p className="text-sm text-muted-foreground">Tujuan:</p>
                <p className="font-semibold">Purwokerto</p>
                <p className="text-sm">09:30 WIB</p>
                <p className="text-sm">Alun-alun Purwokerto</p>
              </div>
            </div>
          </div>
        </div>

        {/* RINCIAN PEMBAYARAN */}
        <div className="border rounded-xl p-5">
          <h4 className="font-semibold mb-4">Rincian Pembayaran</h4>
          
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Type Pembayaran</span>
              <div className="flex items-center gap-2">
                <span className="font-semibold">Tunai</span>
                <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">QRIS</span>
                <span className="text-sm text-muted-foreground">10/02/2009</span>
              </div>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">ID Pesanan</span>
              <span className="font-semibold">NEBENG-98299A</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">No Transaksi</span>
              <span className="font-semibold">INV/20250104/123456789</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Biaya Per penumpang (2 Org)</span>
              <span className="font-semibold">Rp 50.000,00</span>
            </div>

            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Biaya Admin</span>
              <span className="font-semibold">Rp 15.000,00</span>
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span className="text-green-600">Rp 45.000,00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DetailTransaksi;