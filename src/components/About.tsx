import { Factory, Users, TrendingUp, Award, Calendar, MapPin } from "lucide-react";
import { useCountUp } from "@/hooks/use-count-up";

const stats = [
  { icon: Users, label: "Team Size", value: "11-25", suffix: " People", isNumber: false },
  { icon: TrendingUp, label: "Annual Turnover", value: "€2-6M", suffix: "", isNumber: false },
  { icon: Calendar, label: "Founded", value: 2004, suffix: "", isNumber: true },
  { icon: MapPin, label: "Location", value: "Duisburg, DE", suffix: "", isNumber: false },
];

const certifications = [
  { title: "VAT ID", value: "DE123456789" },
  { title: "Register Number", value: "HRB 789456" },
  { title: "Legal Form", value: "GmbH" },
  { title: "Certification", value: "ISO 9001:2005" },
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 mb-6">
              <Factory className="h-4 w-4" />
              <span className="text-sm font-medium">About Our Company</span>
            </div>
            
            <h2 className="heading-lg mb-6">
              German Precision Engineering Serving Worldwide
            </h2>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              MeisterFormTechnik GmbH is a trusted name in precision engineering, 
              specializing in manufacturing high-quality injection molds, dies, 
              CNC housings, and industrial tooling. Since our establishment in 2004, 
              we have been committed to delivering German precision and reliability to our clients 
              across various industries worldwide.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => {
                const StatDisplay = () => {
                  const counter = useCountUp({ 
                    end: typeof stat.value === 'number' ? stat.value : 0,
                    suffix: stat.suffix,
                    duration: 2000
                  });
                  
                  return (
                    <div key={stat.label} className="text-center p-4 rounded-lg bg-muted/50" ref={stat.isNumber ? counter.ref : undefined}>
                      <stat.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-lg font-semibold mb-1">
                        {stat.isNumber ? counter.displayValue : stat.value + stat.suffix}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                };
                
                return <StatDisplay key={stat.label} />;
              })}
            </div>

            <div className="flex items-center gap-4">
              <Award className="h-8 w-8 text-accent" />
              <div>
                <div className="font-semibold">Quality Certified</div>
                <div className="text-sm text-muted-foreground">ISO 9001:2005 certified</div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="bg-card rounded-2xl p-8 shadow-lg border">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Company Credentials
              </h3>
              
              <div className="space-y-6">
                {certifications.map((cert) => (
                  <div key={cert.title} className="flex justify-between items-center py-3 border-b border-border/50 last:border-0">
                    <span className="font-medium text-foreground">{cert.title}</span>
                    <span className="text-sm text-muted-foreground font-mono">{cert.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-primary/5 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="font-medium text-primary">Global Reach</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Consistently growing business with expanding product portfolio 
                  and increasing market presence worldwide from our German headquarters.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};