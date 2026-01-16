import { Search, Eye } from "lucide-react";
import { useState } from "react";
import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Pengaturan = () => {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <DashboardLayout title="Pengaturan">
      <div className="space-y-6">
        {/* Search */}
        <div className="flex justify-end">
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search" className="pl-9" />
          </div>
        </div>

        {/* Card */}
        <div className="bg-background border border-border rounded-xl p-6 space-y-6">
          {/* Profile Header */}
          <div className="flex items-center justify-between bg-muted/40 rounded-lg p-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-muted flex items-center justify-center font-semibold">
                MA
              </div>
              <div>
                <p className="font-semibold">Muhammad Abdul</p>
                <p className="text-sm text-muted-foreground">Nebeng Motor</p>
                <Badge className="mt-1 bg-blue-500">Super Admin</Badge>
              </div>
            </div>

            <Button size="sm" variant="outline" onClick={() => setIsEdit(!isEdit)}>
              Edit
            </Button>
          </div>

          {/* Informasi Pribadi */}
          <div className="space-y-4">
            <h3 className="font-semibold">Informasi Pribadi</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-muted-foreground">Nama Lengkap</label>
                <Input disabled={!isEdit} value="Muhammad Abdul Kadir" />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Email</label>
                <Input disabled={!isEdit} value="Abdul000@gmail.com" />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Tempat Lahir</label>
                <Input disabled={!isEdit} value="London" />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Tanggal Lahir</label>
                <Input disabled={!isEdit} type="date" value="1999-02-01" />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Jenis Kelamin</label>
                <Select disabled={!isEdit} defaultValue="Laki - Laki">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Laki - Laki">Laki - Laki</SelectItem>
                    <SelectItem value="Perempuan">Perempuan</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-xs text-muted-foreground">No. Tlp</label>
                <Input disabled={!isEdit} value="08937393394" />
              </div>
            </div>
          </div>

          {/* Informasi Akun */}
          <div className="space-y-4">
            <h3 className="font-semibold">Informasi Akun</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              <div>
                <label className="text-xs text-muted-foreground">Password</label>
                <Input type="password" value="************" disabled />
              </div>

              <Button size="sm" variant="outline">Edit</Button>

              <div>
                <label className="text-xs text-muted-foreground">Password Baru</label>
                <Input type="password" placeholder="Masukkan Password Baru" />
              </div>

              <div>
                <label className="text-xs text-muted-foreground">Konfirmasi Password Baru</label>
                <Input type="password" placeholder="Masukkan Password Baru" />
              </div>
            </div>
          </div>

          {/* Footer */}
          {isEdit && (
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setIsEdit(false)}>Batal</Button>
              <Button>Simpan</Button>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Pengaturan;
