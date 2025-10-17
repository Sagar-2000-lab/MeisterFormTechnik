import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { ProductCategories } from "@/components/ProductCategories";
import { Reviews } from "@/components/Reviews";
import { StatsSection } from "@/components/StatsSection";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <ProductCategories />
      <About />
      <WhyChooseUs />
      <Reviews />
      <StatsSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
