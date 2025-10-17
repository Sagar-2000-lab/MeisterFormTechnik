import { ArrowRight, Package, Star, CheckCircle, Badge as BadgeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const QuoteForm = ({ selectedCategory }: { selectedCategory?: string }) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: "We'll get back to you within 2-4 hours with a detailed quote.",
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="accent" size="lg">
          <Package className="h-5 w-5 mr-2" />
          Get Quote
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-primary" />
            Request Quote
          </DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
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
            <label className="text-sm font-medium mb-2 block">Product Category</label>
            <select className="w-full p-2 border border-input rounded-md bg-background" defaultValue={selectedCategory}>
              <option value="">Select category</option>
              <option value="hoses">Industrial Hoses</option>
              <option value="rubber">Rubber Sheets & Mats</option>
              <option value="fittings">Fittings & Accessories</option>
              <option value="pneumatic">Pneumatic Equipment</option>
              <option value="spares">Spares for Transit Mixer</option>
              <option value="other">Other</option>
            </select>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Requirements</label>
            <Textarea 
              placeholder="Please specify quantity, specifications, and any other requirements..."
              rows={3}
            />
          </div>
          
          <div className="flex gap-3 pt-4">
            <Button type="submit" variant="hero" className="flex-1">
              Send Quote Request
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ProductCategories = () => {
  const { toast } = useToast();

  const handleQuoteRequest = (e: React.FormEvent, productName: string) => {
    e.preventDefault();
    toast({
      title: "Quote Request Sent!",
      description: `We'll send you a quote for ${productName} within 2-4 hours.`,
    });
  };

  // Show first 8 products on home page
  const featuredProducts = products.slice(0, 8);

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">Our Featured Products</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our comprehensive range of industrial solutions, 
            engineered for performance and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-card rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border hover-lift animate-fade-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Rating Badge */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1">
                  <Star className="h-4 w-4 fill-accent text-accent" />
                  <span className="font-semibold text-sm">{product.rating}</span>
                </div>

                {/* Features on Hover */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="bg-white/90 text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {product.description}
                </p>

                <div className="mb-4 pb-4 border-b">
                  <p className="text-xs font-medium text-primary mb-1">Specifications:</p>
                  <p className="text-xs text-muted-foreground">{product.specifications}</p>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground">Pricing</p>
                    <p className="font-semibold text-primary">{product.price}</p>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    In Stock
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <Link to={`/products/${product.id}`} className="flex-1">
                    <Button variant="hero" size="sm" className="w-full group/btn">
                      View Details
                      <ArrowRight className="h-4 w-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
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
                          <label className="text-sm font-medium mb-2 block">Quantity Required</label>
                          <Input type="number" placeholder="e.g., 100" min="1" />
                        </div>
                        
                        <div>
                          <label className="text-sm font-medium mb-2 block">Additional Requirements</label>
                          <Textarea 
                            placeholder="Specify size, pressure rating, or any special requirements..."
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

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/products">
              <Button variant="hero" size="lg">
                <Package className="h-5 w-5 mr-2" />
                View All Products
              </Button>
            </Link>
            <QuoteForm />
          </div>
        </div>
      </div>
    </section>
  );
};
