import { useState } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Package, 
  Wrench, 
  Shield, 
  Settings, 
  Zap,
  ChevronRight,
  Star,
  CheckCircle
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { products } from "@/data/products";

const productCategories = [
  { id: "all", name: "All Products", icon: Package },
  { id: "hoses", name: "Industrial Hoses", icon: Wrench },
  { id: "rubber", name: "Rubber Products", icon: Shield },
  { id: "fittings", name: "Fittings & Accessories", icon: Settings },
  { id: "pneumatic", name: "Pneumatic Equipment", icon: Zap },
];


const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              1000+ Quality Products
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Explore Our Complete Product Range
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Premium industrial solutions engineered for excellence. Serving All India & Worldwide.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-14 text-lg bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="bg-card border-b sticky top-[72px] md:top-[88px] z-40 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="h-5 w-5 text-primary" />
            <h3 className="font-semibold">Filter by Category</h3>
          </div>
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide snap-x snap-mandatory">
            {productCategories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "hero" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="gap-2 whitespace-nowrap snap-start flex-shrink-0"
              >
                <category.icon className="h-4 w-4" />
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {selectedCategory === "all" ? "All Products" : productCategories.find(c => c.id === selectedCategory)?.name}
              </h2>
              <p className="text-muted-foreground">
                Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
              </p>
            </div>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
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
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-light text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            We offer custom solutions and have access to a wide range of industrial products. 
            Contact us with your requirements!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Contact Our Team
            </Button>
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

export default ProductsPage;
