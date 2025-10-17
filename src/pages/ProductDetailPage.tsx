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
  Star,
  CheckCircle,
  Package,
  Truck,
  Shield,
  Award,
  ChevronRight
} from "lucide-react";
import pvcNylonHoseImage from "@/assets/products/pvc-nylon-braided-hose.jpg";
import hydraulicHoseImage from "@/assets/products/hydraulic-hose-assembly.jpg";
import sandBlastingHoseImage from "@/assets/products/sand-blasting-hose.jpg";
import rubberFloorMatsImage from "@/assets/products/rubber-floor-mats.jpg";
import electricalInsulatingMatImage from "@/assets/products/electrical-insulating-mat.jpg";
import antiVibrationPadsImage from "@/assets/products/anti-vibration-pads.jpg";
import hoseClampsImage from "@/assets/products/hose-clamps-clips.jpg";
import ballValvesImage from "@/assets/products/ball-valves.jpg";
import pipeFittingsImage from "@/assets/products/pipe-fittings-set.jpg";
import airBlowGunImage from "@/assets/products/air-blow-gun.jpg";
import pressureRegulatorImage from "@/assets/products/pressure-regulator.jpg";
import pneumaticFittingsImage from "@/assets/products/pneumatic-fittings.jpg";

const allProducts = [
  {
    id: "pvc-nylon-braided-hose",
    name: "PVC Nylon Braided Hose",
    category: "Industrial Hoses",
    description: "High-pressure resistant PVC hose with nylon braiding for industrial applications. Perfect for water, air, and light chemical transfer in various industrial settings.",
    image: pvcNylonHoseImage,
    price: "Competitive Pricing",
    rating: 4.8,
    reviews: 124,
    features: ["High Pressure Resistant", "Weather Resistant", "Flexible Design", "UV Protected"],
    specifications: {
      "Size Range": "1/2\" to 3\"",
      "Pressure Rating": "Up to 20 Bar",
      "Temperature Range": "-5°C to +65°C",
      "Material": "PVC with Nylon Reinforcement",
      "Standard": "ISO 9001 Certified"
    },
    applications: ["Agriculture", "Construction", "Manufacturing", "Water Distribution"],
    inStock: true
  },
  {
    id: "hydraulic-hose-assembly",
    name: "Hydraulic Hose Assembly",
    category: "Industrial Hoses",
    description: "Heavy-duty hydraulic hoses designed for construction and industrial machinery. Engineered to withstand high pressures and extreme conditions.",
    image: hydraulicHoseImage,
    price: "Competitive Pricing",
    rating: 4.9,
    reviews: 156,
    features: ["Heavy Duty Construction", "ISO Certified Quality", "Long Service Life", "High Burst Pressure"],
    specifications: {
      "Standard": "SAE 100R1/R2",
      "Temperature Range": "-40°C to +100°C",
      "Working Pressure": "Up to 400 Bar",
      "Material": "Synthetic Rubber",
      "Fittings": "Various Options Available"
    },
    applications: ["Construction Equipment", "Industrial Machinery", "Mining Equipment", "Agricultural Machinery"],
    inStock: true
  },
  {
    id: "sand-blasting-hose",
    name: "Sand Blasting Hose",
    category: "Industrial Hoses",
    description: "Abrasion-resistant hoses specifically designed for sand blasting operations. Features reinforced construction for extended durability.",
    image: sandBlastingHoseImage,
    price: "Competitive Pricing",
    rating: 4.7,
    reviews: 89,
    features: ["Abrasion Resistant", "Highly Durable", "High Flow Rate", "Reinforced Construction"],
    specifications: {
      "Inner Diameter": "25mm to 50mm",
      "Working Pressure": "12 Bar",
      "Temperature Range": "-30°C to +80°C",
      "Material": "Rubber with Steel Wire Reinforcement",
      "Length": "Custom lengths available"
    },
    applications: ["Surface Preparation", "Rust Removal", "Paint Removal", "Industrial Cleaning"],
    inStock: true
  },
  {
    id: "rubber-floor-mats",
    name: "Rubber Floor Mats",
    category: "Rubber Products",
    description: "Anti-slip rubber mats ideal for industrial and commercial flooring applications. Provides safety and durability in high-traffic areas.",
    image: rubberFloorMatsImage,
    price: "Competitive Pricing",
    rating: 4.6,
    reviews: 203,
    features: ["Anti-Slip Surface", "Easy to Clean", "Highly Durable", "Multiple Patterns"],
    specifications: {
      "Thickness": "3mm to 12mm",
      "Patterns": "Checker, Diamond, Coin",
      "Material": "Natural/Synthetic Rubber",
      "Size": "Custom sizes available",
      "Hardness": "60-70 Shore A"
    },
    applications: ["Factories", "Workshops", "Commercial Spaces", "Gymnasiums"],
    inStock: true
  },
  {
    id: "electrical-insulating-mat",
    name: "Electrical Insulating Mat",
    category: "Rubber Products",
    description: "High-voltage insulation mats designed for electrical safety in industrial environments. BIS approved and certified for various voltage ratings.",
    image: electricalInsulatingMatImage,
    price: "Competitive Pricing",
    rating: 4.9,
    reviews: 145,
    features: ["IS 15652 Certified", "High Voltage Protection", "Safety Grade", "Color Coded"],
    specifications: {
      "Voltage Rating": "11KV to 33KV",
      "Thickness": "3mm to 6mm",
      "Standard": "IS 15652, BIS Approved",
      "Material": "Natural Rubber",
      "Testing": "Electrically Tested"
    },
    applications: ["Electrical Substations", "Power Plants", "Switchyards", "Testing Laboratories"],
    inStock: true
  },
  {
    id: "anti-vibration-pads",
    name: "Anti-Vibration Pads",
    category: "Rubber Products",
    description: "Industrial vibration dampening pads for machinery and equipment. Reduces noise and protects equipment from vibration damage.",
    image: antiVibrationPadsImage,
    price: "Competitive Pricing",
    rating: 4.7,
    reviews: 98,
    features: ["Noise Reduction", "Vibration Control", "Heavy Duty", "Long Lasting"],
    specifications: {
      "Load Capacity": "Up to 500kg per pad",
      "Hardness": "50-60 Shore A",
      "Material": "Natural/Neoprene Rubber",
      "Size Range": "100mm to 500mm",
      "Thickness": "10mm to 50mm"
    },
    applications: ["Industrial Machinery", "HVAC Equipment", "Generators", "Compressors"],
    inStock: true
  },
  {
    id: "hose-clamps-clips",
    name: "Hose Clamps & Clips",
    category: "Fittings & Accessories",
    description: "Stainless steel hose clamps for secure and reliable connections. Available in various sizes for different applications.",
    image: hoseClampsImage,
    price: "Competitive Pricing",
    rating: 4.8,
    reviews: 267,
    features: ["Corrosion Resistant", "Easy Installation", "Reliable Grip", "Multiple Sizes"],
    specifications: {
      "Size Range": "8mm to 200mm",
      "Material": "Stainless Steel 304/316",
      "Band Width": "8mm to 12mm",
      "Type": "Worm Drive",
      "Standard": "DIN 3017"
    },
    applications: ["Hose Connections", "Pipe Fittings", "Automotive", "Marine Applications"],
    inStock: true
  },
  {
    id: "ball-valves",
    name: "Ball Valves",
    category: "Fittings & Accessories",
    description: "Industrial-grade ball valves for precise fluid control. Features leak-proof design and smooth operation.",
    image: ballValvesImage,
    price: "Competitive Pricing",
    rating: 4.9,
    reviews: 178,
    features: ["Leak Proof Design", "Highly Durable", "Smooth Operation", "Quarter Turn"],
    specifications: {
      "Size Range": "1/4\" to 4\"",
      "Material": "Brass/Stainless Steel",
      "Thread Type": "BSP/NPT",
      "Pressure Rating": "Up to 40 Bar",
      "Standard": "ISO 228"
    },
    applications: ["Water Systems", "Chemical Processing", "Oil & Gas", "HVAC Systems"],
    inStock: true
  },
  {
    id: "pipe-fittings-set",
    name: "Pipe Fittings Set",
    category: "Fittings & Accessories",
    description: "Complete range of pipe fittings and connectors for various industrial applications. Quality materials and standard specifications.",
    image: pipeFittingsImage,
    price: "Competitive Pricing",
    rating: 4.7,
    reviews: 134,
    features: ["Various Sizes Available", "Quality Material", "Standard Specifications", "Easy Assembly"],
    specifications: {
      "Thread Type": "BSP/NPT",
      "Material Options": "Brass, SS, GI",
      "Types": "Elbows, Tees, Unions, Reducers",
      "Pressure Rating": "As per standard",
      "Finish": "Chrome Plated/Plain"
    },
    applications: ["Plumbing", "Industrial Piping", "Pneumatic Lines", "Hydraulic Systems"],
    inStock: true
  },
  {
    id: "air-blow-gun",
    name: "Air Blow Gun",
    category: "Pneumatic Equipment",
    description: "Professional pneumatic air blow gun for efficient cleaning operations. Ergonomic design with high airflow capacity.",
    image: airBlowGunImage,
    price: "Competitive Pricing",
    rating: 4.8,
    reviews: 112,
    features: ["Ergonomic Design", "High Flow Rate", "Durable Construction", "Safety Trigger"],
    specifications: {
      "Operating Pressure": "6-8 Bar",
      "Air Consumption": "200-300 L/min",
      "Inlet Size": "1/4\" BSP",
      "Nozzle Material": "Steel/Brass",
      "Handle": "Ergonomic Grip"
    },
    applications: ["Cleaning Operations", "Dust Removal", "Drying", "Workshop Maintenance"],
    inStock: true
  },
  {
    id: "pressure-regulator",
    name: "Pressure Regulator",
    category: "Pneumatic Equipment",
    description: "Precision air pressure regulators for pneumatic systems. Includes gauge for accurate pressure monitoring.",
    image: pressureRegulatorImage,
    price: "Competitive Pricing",
    rating: 4.9,
    reviews: 156,
    features: ["Accurate Control", "Pressure Gauge Included", "Highly Reliable", "Easy Adjustment"],
    specifications: {
      "Pressure Range": "0-12 Bar",
      "Port Size": "1/4\" to 1\"",
      "Flow Capacity": "Up to 5000 L/min",
      "Gauge Size": "40mm/50mm",
      "Material": "Aluminum Body"
    },
    applications: ["Pneumatic Systems", "Air Tools", "Automation", "Manufacturing Lines"],
    inStock: true
  },
  {
    id: "pneumatic-fittings",
    name: "Pneumatic Fittings",
    category: "Pneumatic Equipment",
    description: "Quick-connect pneumatic fittings for efficient air system assembly. Leak-free design with easy installation.",
    image: pneumaticFittingsImage,
    price: "Competitive Pricing",
    rating: 4.7,
    reviews: 189,
    features: ["Quick Connect", "Leak Free", "Easy to Use", "Various Configurations"],
    specifications: {
      "Type": "Push-to-Connect",
      "Size Range": "4mm to 16mm",
      "Material": "Brass/Nickel Plated",
      "Pressure Rating": "Up to 10 Bar",
      "Thread Type": "BSPT/NPT"
    },
    applications: ["Pneumatic Lines", "Air Systems", "Automation Equipment", "Industrial Machinery"],
    inStock: true
  }
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { toast } = useToast();
  
  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 mt-20 text-center">
          <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link to="/products">
            <Button variant="hero">View All Products</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuoteRequest = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: `We'll send you a quote for ${product.name} within 2-4 hours.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="relative overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[500px] object-cover"
                />
                {product.inStock && (
                  <Badge className="absolute top-4 right-4 bg-green-500">
                    In Stock
                  </Badge>
                )}
              </div>
              
              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4">
                <div className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">ISO Certified</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">Fast Delivery</span>
                </div>
                <div className="flex items-center gap-2 p-3 bg-card rounded-lg border">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium">Premium Quality</span>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div>
              <Badge variant="outline" className="mb-4">{product.category}</Badge>
              
              <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-accent text-accent"
                            : "text-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-semibold">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {product.description}
              </p>

              <div className="bg-primary/5 rounded-lg p-4 mb-6">
                <p className="text-2xl font-bold text-primary mb-1">{product.price}</p>
                <p className="text-sm text-muted-foreground">Contact us for detailed pricing</p>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="font-semibold text-lg mb-4">Key Features</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex gap-4 mb-8">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="hero" size="lg" className="flex-1">
                      <Package className="h-5 w-5 mr-2" />
                      Request Quote
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Package className="h-5 w-5 text-primary" />
                        Request Quote - {product.name}
                      </DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleQuoteRequest} className="space-y-4 mt-4">
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
                        <label className="text-sm font-medium mb-2 block">Quantity Required</label>
                        <Input type="number" placeholder="e.g., 100" min="1" />
                      </div>
                      
                      <div>
                        <label className="text-sm font-medium mb-2 block">Additional Requirements</label>
                        <Textarea 
                          placeholder="Specify size, specifications, or any special requirements..."
                          rows={3}
                        />
                      </div>
                      
                      <Button type="submit" variant="hero" className="w-full">
                        Send Quote Request
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>

                <Link to="/contact">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>

              <Link to="/products" className="inline-flex items-center gap-2 text-sm text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" />
                Back to All Products
              </Link>
            </div>
          </div>

          {/* Specifications */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-card rounded-xl p-8 border">
              <h2 className="text-2xl font-bold mb-6">Technical Specifications</h2>
              <div className="space-y-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-3 border-b border-border/50 last:border-0">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-8 border">
              <h2 className="text-2xl font-bold mb-6">Applications</h2>
              <div className="grid grid-cols-2 gap-3">
                {product.applications.map((app, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
                    <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{app}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
