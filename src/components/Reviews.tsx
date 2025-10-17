import { Star, Quote, Building } from "lucide-react";

const reviews = [
  {
    name: "Rajesh Kumar",
    company: "Maharashtra Steel Industries",
    role: "Procurement Manager",
    rating: 5,
    review: "Excellent quality hoses and timely delivery. Techmark has been our trusted partner for industrial supplies for over 3 years. Their technical expertise is outstanding.",
    emoji: "👨‍💼"
  },
  {
    name: "Priya Sharma",
    company: "Central India Manufacturing",
    role: "Operations Head",
    rating: 5,
    review: "Reliable rubber components and exceptional customer service. The team understands our requirements and always delivers quality products on time.",
    emoji: "👩‍💼"
  },
  {
    name: "Amit Patel",
    company: "Patel Engineering Works",
    role: "CEO",
    rating: 5,
    review: "Best pneumatic equipment supplier in Central India. Their technical support team is knowledgeable and always ready to help with complex requirements.",
    emoji: "👨‍🔧"
  },
  {
    name: "Sunita Mehta",
    company: "Nagpur Industrial Solutions",
    role: "Purchase Manager",
    rating: 5,
    review: "Competitive pricing and superior quality. Techmark's industrial fittings have significantly improved our operational efficiency. Highly recommended!",
    emoji: "👩‍💻"
  }
];

export const Reviews = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading industries across Central India for quality and reliability
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <div
              key={review.name}
              className="bg-card p-6 rounded-xl border shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <Quote className="h-8 w-8 text-primary/20 mb-3" />
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                "{review.review}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                  {review.emoji}
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{review.name}</h4>
                  <p className="text-xs text-muted-foreground">{review.role}</p>
                  <div className="flex items-center gap-1 text-xs text-primary mt-1">
                    <Building className="h-3 w-3" />
                    <span>{review.company}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="animate-scale-in">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-accent mb-2">99%</div>
              <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-primary mb-2">24hrs</div>
              <div className="text-sm text-muted-foreground">Quick Response</div>
            </div>
            <div className="animate-scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-accent mb-2">7+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};