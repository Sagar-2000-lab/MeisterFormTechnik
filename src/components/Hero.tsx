import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-industrial.jpg";
import { useCountUp } from "@/hooks/use-count-up";

export const Hero = () => {
  const precisionParts = useCountUp({ end: 1000, suffix: "+" });
  const clients = useCountUp({ end: 500, suffix: "+" });
  const years = useCountUp({ end: 20, suffix: "+" });

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4" />
              <span className="text-sm font-medium">German Quality Since 2004</span>
            </div>
            
            <h1 className="heading-xl mb-6 leading-tight">
              Precision Engineering for{" "}
              <span className="text-accent">Industrial Excellence</span>
            </h1>
            
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Leading German manufacturer of precision injection molds, 
              dies, CNC housings, and industrial tooling. 
              Delivering ISO 9001:2005 certified quality <span className="font-semibold text-accent">worldwide</span> since 2004.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/products">
                <Button variant="accent" size="lg" className="group">
                  Explore Products
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="industrial" size="lg">
                  Get Quote
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center" ref={precisionParts.ref}>
                <div className="text-2xl font-bold text-accent mb-1">{precisionParts.displayValue}</div>
                <div className="text-sm text-white/80">Precision Parts</div>
              </div>
              <div className="text-center" ref={clients.ref}>
                <div className="text-2xl font-bold text-accent mb-1">{clients.displayValue}</div>
                <div className="text-sm text-white/80">Clients</div>
              </div>
              <div className="text-center" ref={years.ref}>
                <div className="text-2xl font-bold text-accent mb-1">{years.displayValue}</div>
                <div className="text-sm text-white/80">Years</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block animate-slide-in-right">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-lg font-semibold mb-6 text-white">Why Choose Us?</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-white">ISO 9001:2005 Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-white">German Precision Quality</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-white">Expert Engineering Team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};