import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Leaf, Shield, Award, Users } from "lucide-react";
import heroImage from "@/assets/hero-agriculture.jpg";
import vegetablesImage from "@/assets/vegetables.jpg";
import seedlingsImage from "@/assets/seedlings.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="relative z-10 text-center text-primary-foreground max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Premium Agricultural Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 animate-fade-in">
            Your trusted partner for high-quality seedlings and fresh farm vegetables. 
            Cultivating excellence in every harvest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
              <Link to="/products">
                Explore Products <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 py-3 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link to="/contact">
                Get Quote
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              About MULTI AGENCIES
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We are a leading agricultural company dedicated to providing premium quality seedlings and farm-fresh vegetables. 
              With years of experience and a commitment to sustainable farming practices, we serve customers nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">What We Do</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Premium Seedlings</h4>
                    <p className="text-muted-foreground">High-quality seedlings for vegetables, herbs, and ornamental plants</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Fresh Farm Vegetables</h4>
                    <p className="text-muted-foreground">Locally grown, pesticide-free vegetables harvested at peak freshness</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">Agricultural Consulting</h4>
                    <p className="text-muted-foreground">Expert guidance on sustainable farming practices and crop management</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Leaf className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Organic Growth</h4>
                  <p className="text-sm text-muted-foreground">100% organic farming methods</p>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Shield className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Quality Assured</h4>
                  <p className="text-sm text-muted-foreground">Rigorous quality control standards</p>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Award className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Award Winning</h4>
                  <p className="text-sm text-muted-foreground">Recognized for excellence</p>
                </CardContent>
              </Card>
              <Card className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary mx-auto mb-3" />
                  <h4 className="font-semibold text-foreground mb-2">Trusted Partner</h4>
                  <p className="text-sm text-muted-foreground">Serving 1000+ customers</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Products
            </h2>
            <p className="text-lg text-muted-foreground">
              Discover our premium selection of seedlings and fresh vegetables
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={seedlingsImage} 
                  alt="Premium Seedlings" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Premium Seedlings</h3>
                <p className="text-muted-foreground mb-4">
                  High-quality seedlings for vegetables, herbs, and ornamental plants. Perfect for home gardens and commercial farming.
                </p>
                <Button asChild variant="outline">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img 
                  src={vegetablesImage} 
                  alt="Fresh Farm Vegetables" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-primary mb-2">Fresh Farm Vegetables</h3>
                <p className="text-muted-foreground mb-4">
                  Locally grown, pesticide-free vegetables harvested at peak freshness. From farm to table in record time.
                </p>
                <Button asChild variant="outline">
                  <Link to="/products">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-hero text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Agricultural Journey?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90">
            Join thousands of satisfied customers who trust MULTI AGENCIES for their agricultural needs.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg px-8 py-3">
            <Link to="/contact">
              Get Started Today <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;