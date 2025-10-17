import { Phone, Mail, MapPin, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground py-2 px-4">
        <div className="container mx-auto flex justify-center md:justify-between items-center text-sm">
          <div className="flex items-center gap-3 md:gap-4 text-xs md:text-sm">
            <div className="flex items-center gap-1 md:gap-2">
              <Phone className="h-3 w-3 md:h-4 md:w-4" />
              <span>+49 203 6579 340</span>
            </div>
            <div className="flex items-center gap-1 md:gap-2">
              <Mail className="h-3 w-3 md:h-4 md:w-4" />
              <span>info@meisterformtechnik.shop</span>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Duisburg, Germany</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 md:gap-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-primary-light rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-base md:text-lg">M</span>
            </div>
            <h1 className="text-base md:text-xl font-bold text-primary">MeisterFormTechnik</h1>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
            <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/contact" className="hidden md:block">
              <Button variant="accent" size="sm">
                Get Quote
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px]">
                <nav className="flex flex-col gap-4 mt-8">
                  <Link 
                    to="/" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/about" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    About
                  </Link>
                  <Link 
                    to="/products" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Products
                  </Link>
                  <Link 
                    to="/contact" 
                    onClick={() => setOpen(false)}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                  >
                    Contact
                  </Link>
                  <Link to="/contact" onClick={() => setOpen(false)} className="mt-4">
                    <Button variant="accent" size="sm" className="w-full">
                      Get Quote
                    </Button>
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};