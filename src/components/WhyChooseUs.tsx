import { CheckCircle, Shield, Truck, Headphones, Award, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Shield,
    title: "German Quality",
    description: "ISO 9001:2005 certified products with rigorous quality control processes",
    color: "text-primary"
  },
  {
    icon: Truck,
    title: "Worldwide Delivery",
    description: "Reliable delivery worldwide from our German manufacturing facility",
    color: "text-accent"
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Technical assistance and customer support from industry experts",
    color: "text-primary"
  },
  {
    icon: Award,
    title: "Trusted Excellence",
    description: "20+ years of precision engineering serving 500+ satisfied clients",
    color: "text-accent"
  },
  {
    icon: Zap,
    title: "Quick Response",
    description: "Fast response with professional quotes delivered promptly",
    color: "text-primary"
  },
  {
    icon: CheckCircle,
    title: "Competitive Pricing",
    description: "Best market rates without compromising on quality",
    color: "text-accent"
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Why Choose MeisterFormTechnik?</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience German precision with our commitment to quality, service, and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-primary to-primary-light rounded-2xl p-8 text-white animate-fade-in">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience German Precision?</h3>
          <p className="text-lg mb-6 text-white/90">
            Join 500+ satisfied clients who trust MeisterFormTechnik for their precision engineering needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <button className="bg-accent hover:bg-accent-light text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                Get Your Quote Today
              </button>
            </Link>
            <Link to="/products">
              <button className="bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 px-8 py-3 rounded-lg font-semibold transition-all duration-300">
                View Products
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};