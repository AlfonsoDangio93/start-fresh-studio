import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-7xl font-bold text-primary mb-4">404</h1>
      <p className="text-xl text-muted-foreground mb-8">
        La pagina che stai cercando non esiste.
      </p>
      <Button asChild>
        <Link to="/">Torna alla home</Link>
      </Button>
    </div>
  );
}
