import { Phone, Mail, MapPin, Factory } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <Factory className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-semibold">MeisterFormTechnik GmbH</span>
            </div>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
              German precision engineering company specializing in injection molds, 
              dies, CNC housings, and industrial tooling. Worldwide delivery.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <span className="font-medium">VAT ID:</span>
                <span className="text-primary-foreground/80">DE123456789</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-medium">HRB:</span>
                <span className="text-primary-foreground/80">789456</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-primary-foreground/80 hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Injection Molds</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Dies</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">CNC Housings</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Precision Tooling</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Custom Solutions</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80">+49 203 6579 340</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80">info@meisterformtechnik.shop</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-accent" />
                <span className="text-primary-foreground/80">Handwerksstraße 54, 97652 Duisburg, Germany</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; 2024 MeisterFormTechnik GmbH. All rights reserved. | German Precision Engineering</p>
        </div>
      </div>
    </footer>
  );
};