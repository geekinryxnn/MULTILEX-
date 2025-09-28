import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Shield, 
  Leaf, 
  Award, 
  Users, 
  Clock, 
  Truck, 
  HeartHandshake,
  Star,
  Zap,
  Phone,
  Globe
} from "lucide-react";

const WhyChooseUs = () => {
  const advantages = [
    {
      icon: Leaf,
      title: "100% Organic & Sustainable",
      description: "All our products are certified organic, grown using sustainable farming practices that protect the environment and ensure the highest quality.",
      benefits: [
        "No harmful pesticides or chemicals",
        "Environmentally friendly farming methods",
        "Rich, nutrient-dense soil management",
        "Certified organic by recognized authorities"
      ]
    },
    {
      icon: Shield,
      title: "Quality Guarantee",
      description: "We stand behind every product with our comprehensive quality guarantee, ensuring you receive only the best agricultural products.",
      benefits: [
        "Rigorous quality control at every stage",
        "100% satisfaction guarantee",
        "Money-back policy if not satisfied",
        "Third-party quality certifications"
      ]
    },
    {
      icon: Users,
      title: "Expert Knowledge & Support",
      description: "Our team of agricultural experts provides personalized guidance and support to help you achieve the best results.",
      benefits: [
        "Certified agricultural specialists",
        "Personalized growing advice",
        "24/7 customer support",
        "Free consultation services"
      ]
    },
    {
      icon: Clock,
      title: "Fresh & Timely Delivery",
      description: "We ensure maximum freshness with our efficient logistics and direct-from-farm delivery system.",
      benefits: [
        "Harvested within 24 hours of delivery",
        "Temperature-controlled transportation",
        "Flexible delivery schedules",
        "Real-time tracking system"
      ]
    },
    {
      icon: Award,
      title: "Award-Winning Excellence",
      description: "Our commitment to excellence has been recognized with multiple industry awards and certifications.",
      benefits: [
        "Regional Agriculture Association awards",
        "Environmental sustainability recognition",
        "Customer satisfaction awards",
        "Industry innovation certificates"
      ]
    },
    {
      icon: Globe,
      title: "Wide Variety & Availability",
      description: "We offer an extensive selection of products available year-round, sourced locally and internationally.",
      benefits: [
        "Over 100 varieties of seedlings",
        "Seasonal and year-round vegetables",
        "Rare and heirloom varieties",
        "Custom orders available"
      ]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Home Gardener",
      quote: "MULTI AGENCIES has transformed my garden! Their seedlings are incredibly healthy and their vegetables are the freshest I've ever tasted.",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Commercial Farmer",
      quote: "As a commercial farmer, I depend on quality and reliability. MULTI AGENCIES delivers on both fronts consistently.",
      rating: 5
    },
    {
      name: "Emily Chen",
      role: "Restaurant Owner",
      quote: "The quality of vegetables from MULTI AGENCIES has elevated our restaurant's dishes. Our customers notice the difference!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Why Choose MULTI AGENCIES?
          </h1>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for thousands of satisfied customers across the region.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link to="/products">
              Explore Our Products
            </Link>
          </Button>
        </div>
      </section>

      {/* Main Advantages */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Competitive Advantages
            </h2>
            <p className="text-lg text-muted-foreground">
              Here's what sets us apart from the competition
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {advantages.map((advantage, index) => {
              const IconComponent = advantage.icon;
              return (
                <Card key={index} className="shadow-elegant hover:shadow-hero transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-hero p-3 rounded-lg">
                        <IconComponent className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl text-primary">{advantage.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{advantage.description}</p>
                    <ul className="space-y-2">
                      {advantage.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Numbers That Speak for Themselves
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <p className="text-muted-foreground">Satisfied Customers</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <p className="text-muted-foreground">Product Varieties</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Award className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>

            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-10 w-10 text-primary-foreground" />
              </div>
              <div className="text-3xl font-bold text-primary mb-2">4.9/5</div>
              <p className="text-muted-foreground">Customer Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Features */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Makes Us Unique
            </h2>
            <p className="text-lg text-muted-foreground">
              Features and services you won't find anywhere else
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Fast-Track Growth Program</h3>
                <p className="text-muted-foreground">
                  Our proprietary seedling development process ensures 30% faster growth compared to traditional methods.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Phone className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">24/7 Growing Support</h3>
                <p className="text-muted-foreground">
                  Access to agricultural experts round the clock for any questions about growing, pest control, or harvesting.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Truck className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Same-Day Delivery</h3>
                <p className="text-muted-foreground">
                  Order before 2 PM and receive your fresh products the same day within our delivery zones.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <HeartHandshake className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Loyalty Rewards Program</h3>
                <p className="text-muted-foreground">
                  Earn points with every purchase and enjoy exclusive discounts, early access to new products, and special offers.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Grow Guarantee</h3>
                <p className="text-muted-foreground">
                  If your seedlings don't grow as expected, we'll replace them free of charge within 30 days.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-3">Custom Farming Plans</h3>
                <p className="text-muted-foreground">
                  Personalized farming plans tailored to your specific soil conditions, climate, and growing goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real feedback from real customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of satisfied customers who have chosen MULTI AGENCIES for their agricultural needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;