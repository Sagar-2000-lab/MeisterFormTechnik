import { ArrowRight, TrendingUp, Users, Factory, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useCountUp } from "@/hooks/use-count-up";

const achievements = [
  { label: "Years of Excellence", value: 20, suffix: "+", icon: TrendingUp },
  { label: "Happy Clients", value: 500, suffix: "+", icon: Users },
  { label: "Precision Parts", value: 10000, suffix: "+", icon: Factory },
  { label: "Countries Served", value: 30, suffix: "+", icon: MapPin }
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-primary-light text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="industrial-grid h-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Our Track Record Speaks</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Building trust through consistent delivery and exceptional service worldwide with German precision
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => {
            const StatCounter = () => {
              const counter = useCountUp({ 
                end: achievement.value, 
                suffix: achievement.suffix,
                duration: 2500 
              });
              
              return (
                <div
                  key={achievement.label}
                  className="text-center group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  ref={counter.ref}
                >
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="text-4xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {counter.displayValue}
                  </div>
                  <div className="text-white/80 font-medium">
                    {achievement.label}
                  </div>
                </div>
              );
            };
            
            return <StatCounter key={achievement.label} />;
          })}
        </div>

        <div className="text-center animate-fade-in">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Join Our Growing Family of Satisfied Clients</h3>
            <p className="text-lg text-white/90 mb-6">
              From small enterprises to large industrial corporations, we've consistently delivered 
              quality solutions that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="accent" size="lg" className="group">
                  Start Your Project
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
                  Learn More About Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};