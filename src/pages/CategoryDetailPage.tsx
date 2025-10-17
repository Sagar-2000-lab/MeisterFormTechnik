import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import {
  ArrowLeft,
  ChevronRight,
  Package,
  Star,
  CheckCircle,
  Wrench,
  Shield,
  Settings,
  Zap
} from "lucide-react";
import hosesImage from "@/assets/hoses-category.jpg";
import rubberImage from "@/assets/rubber-sheets-category.jpg";
import fittingsImage from "@/assets/fittings-category.jpg";
import pneumaticImage from "@/assets/pneumatic-category.jpg";

const categoryData = {
  "industrial-hoses": {
    id: "industrial-hoses",
    name: "Industrial Hoses",
    icon: Wrench,
    description: "Premium quality industrial hoses engineered for demanding applications. Our comprehensive range includes hydraulic hoses, PVC braided hoses, sand blasting hoses, and specialized hoses for various industrial needs.",
    image: hosesImage,
    features: [
      "High-pressure resistant construction",
      "Weather and UV resistant materials",
      "Flexible design for easy installation",
      "ISO certified quality standards",
      "Wide temperature range capability",
      "Custom lengths available"
    ],
    products: [
      {
        id: "pvc-nylon-braided-hose",
        name: "PVC Nylon Braided Hose",
        description: "High-pressure resistant PVC hose with nylon braiding",
        image: hosesImage,
        rating: 4.8,
        specs: "Size: 1/2\" to 3\", Pressure: Up to 20 Bar"
      },
      {
        id: "hydraulic-hose-assembly",
        name: "Hydraulic Hose Assembly",
        description: "Heavy-duty hydraulic hoses for construction machinery",
        image: hosesImage,
        rating: 4.9,
        specs: "SAE 100R1/R2, Temperature: -40°C to +100°C"
      },
      {
        id: "sand-blasting-hose",
        name: "Sand Blasting Hose",
        description: "Abrasion-resistant hoses for sand blasting operations",
        image: hosesImage,
        rating: 4.7,
        specs: "ID: 25mm to 50mm, Working Pressure: 12 Bar"
      }
    ],
    applications: ["Agriculture", "Construction", "Manufacturing", "Mining", "Chemical Processing", "Water Distribution"]
  },
  "rubber-products": {
    id: "rubber-products",
    name: "Rubber Sheets & Mats",
    icon: Shield,
    description: "Durable rubber products designed for industrial safety and flooring applications. We offer electrical insulating mats, anti-vibration pads, rubber floor mats, and custom rubber components.",
    image: rubberImage,
    features: [
      "BIS approved and certified",
      "Multiple thickness options",
      "Anti-slip surface patterns",
      "Oil and chemical resistant",
      "Easy to clean and maintain",
      "Custom sizes available"
    ],
    products: [
      {
        id: "rubber-floor-mats",
        name: "Rubber Floor Mats",
        description: "Anti-slip rubber mats for industrial flooring",
        image: rubberImage,
        rating: 4.6,
        specs: "Thickness: 3mm to 12mm, Various Patterns"
      },
      {
        id: "electrical-insulating-mat",
        name: "Electrical Insulating Mat",
        description: "High-voltage insulation mats for electrical safety",
        image: rubberImage,
        rating: 4.9,
        specs: "Voltage: 11KV to 33KV, BIS Approved"
      },
      {
        id: "anti-vibration-pads",
        name: "Anti-Vibration Pads",
        description: "Industrial vibration dampening pads for machinery",
        image: rubberImage,
        rating: 4.7,
        specs: "Load Capacity: Up to 500kg per pad"
      }
    ],
    applications: ["Factories", "Electrical Substations", "Workshops", "Commercial Spaces", "Power Plants", "Gymnasiums"]
  },
  "fittings-accessories": {
    id: "fittings-accessories",
    name: "Fittings & Accessories",
    icon: Settings,
    description: "Comprehensive range of pipe fittings, clamps, valves, and connecting accessories. Premium quality components for secure and reliable industrial connections.",
    image: fittingsImage,
    features: [
      "Corrosion resistant materials",
      "Multiple size options",
      "Standard specifications",
      "Easy installation",
      "Leak-proof design",
      "Long service life"
    ],
    products: [
      {
        id: "hose-clamps-clips",
        name: "Hose Clamps & Clips",
        description: "Stainless steel hose clamps for secure connections",
        image: fittingsImage,
        rating: 4.8,
        specs: "Size Range: 8mm to 200mm"
      },
      {
        id: "ball-valves",
        name: "Ball Valves",
        description: "Industrial-grade ball valves for fluid control",
        image: fittingsImage,
        rating: 4.9,
        specs: "Size: 1/4\" to 4\", Brass/SS Material"
      },
      {
        id: "pipe-fittings-set",
        name: "Pipe Fittings Set",
        description: "Complete range of pipe fittings and connectors",
        image: fittingsImage,
        rating: 4.7,
        specs: "BSP/NPT Thread, Multiple Materials"
      }
    ],
    applications: ["Plumbing Systems", "Industrial Piping", "HVAC Systems", "Chemical Plants", "Oil & Gas", "Water Treatment"]
  },
  "pneumatic-equipment": {
    id: "pneumatic-equipment",
    name: "Pneumatic Equipment",
    icon: Zap,
    description: "Advanced pneumatic tools, air guns, filters, and pressure regulation systems. High-performance equipment for efficient industrial operations.",
    image: pneumaticImage,
    features: [
      "High flow capacity",
      "Precision control",
      "Durable construction",
      "Easy maintenance",
      "Energy efficient",
      "Wide pressure range"
    ],
    products: [
      {
        id: "air-blow-gun",
        name: "Air Blow Gun",
        description: "Professional pneumatic air blow gun for cleaning",
        image: pneumaticImage,
        rating: 4.8,
        specs: "Operating Pressure: 6-8 Bar"
      },
      {
        id: "pressure-regulator",
        name: "Pressure Regulator",
        description: "Precision air pressure regulators for pneumatic systems",
        image: pneumaticImage,
        rating: 4.9,
        specs: "Range: 0-12 Bar, Port Size: 1/4\" to 1\""
      },
      {
        id: "pneumatic-fittings",
        name: "Pneumatic Fittings",
        description: "Quick-connect pneumatic fittings for air systems",
        image: pneumaticImage,
        rating: 4.7,
        specs: "Push-to-Connect, Various Sizes"
      }
    ],
    applications: ["Automation", "Manufacturing", "Automotive", "Assembly Lines", "Packaging", "Material Handling"]
  }
};

const CategoryDetailPage = () => {
  const { categoryId } = useParams();
  const { toast } = useToast();
  
  const category = categoryData[categoryId as keyof typeof categoryData];

  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 mt-20 text-center">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
          <Link to="/products">
            <Button variant="hero">View All Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const Icon = category.icon;

  const handleQuoteRequest = (e: React.FormEvent, productName: string) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: `We'll send you a quote for ${productName} within 2-4 hours.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary to-primary-light text-white py-20 mt-20">
        <div className="absolute inset-0 opacity-10">
          <div className="industrial-grid h-full"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <Link to="/" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center">
                <Icon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold">{category.name}</h1>
                <p className="text-white/90 mt-2">{category.products.length} Products Available</p>
              </div>
            </div>
            
            <p className="text-xl text-white/90 leading-relaxed">
              {category.description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Category Features</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {category.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-background rounded-lg border">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Products in This Category</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {category.products.map((product, index) => (
              <div
                key={product.id}
                className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="font-semibold text-sm">{product.rating}</span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {product.description}
                  </p>

                  <div className="mb-4 pb-4 border-b">
                    <p className="text-xs font-medium text-primary mb-1">Specifications:</p>
                    <p className="text-xs text-muted-foreground">{product.specs}</p>
                  </div>

                  <div className="flex gap-2">
                    <Link to={`/products/${product.id}`} className="flex-1">
                      <Button variant="hero" size="sm" className="w-full group/btn">
                        Full Details
                        <ChevronRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                    
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm">
                          Quote
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[500px]">
                        <DialogHeader>
                          <DialogTitle className="flex items-center gap-2">
                            <Package className="h-5 w-5 text-primary" />
                            Request Quote - {product.name}
                          </DialogTitle>
                        </DialogHeader>
                        <form onSubmit={(e) => handleQuoteRequest(e, product.name)} className="space-y-4 mt-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label className="text-sm font-medium mb-2 block">Name *</label>
                              <Input placeholder="Your name" required />
                            </div>
                            <div>
                              <label className="text-sm font-medium mb-2 block">Company</label>
                              <Input placeholder="Company name" />
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium mb-2 block">Email *</label>
                            <Input type="email" placeholder="your.email@company.com" required />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium mb-2 block">Phone *</label>
                            <Input type="tel" placeholder="+91 XXXXX XXXXX" required />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium mb-2 block">Quantity</label>
                            <Input type="number" placeholder="e.g., 100" min="1" />
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium mb-2 block">Requirements</label>
                            <Textarea 
                              placeholder="Specify your requirements..."
                              rows={3}
                            />
                          </div>
                          
                          <Button type="submit" variant="hero" className="w-full">
                            Send Quote Request
                          </Button>
                        </form>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ChevronRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Common Applications</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {category.applications.map((app, index) => (
                <Badge key={index} variant="secondary" className="text-sm px-4 py-2">
                  {app}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our technical experts are here to help you find the perfect products for your requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="accent" size="lg">
                Contact Our Experts
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="text-white border-white/20 hover:bg-white/10">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryDetailPage;
