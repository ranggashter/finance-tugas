import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-foreground">Selamat Datang di Nebeng</h1>
        <p className="text-xl text-muted-foreground mb-8">Aplikasi mobilitas untuk masyarakat</p>
        <Link to="/login">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            Masuk ke Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
