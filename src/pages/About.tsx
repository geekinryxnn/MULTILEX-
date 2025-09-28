import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Eye, Users, Award, Leaf, Shield, Heart, Globe } from "lucide-react";
import farmFacilityImage from "@/assets/farm-facility.jpg";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              About MULTI AGENCIES
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Building a sustainable agricultural future through innovation, quality, and dedication to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a passion for sustainable agriculture, MULTI AGENCIES has grown from a small family farm 
                  into a leading provider of premium seedlings and fresh vegetables. Our journey began with a simple 
                  vision: to make high-quality, organic produce accessible to everyone.
                </p>
                <p>
                  Over the years, we have invested heavily in modern farming techniques, sustainable practices, and 
                  cutting-edge technology to ensure that every product meets our strict quality standards. Our team 
                  of agricultural experts works tirelessly to develop new varieties and improve existing ones.
                </p>
                <p>
                  Today, we serve thousands of customers across the region, from home gardeners to commercial farmers, 
                  all while maintaining our commitment to environmental responsibility and community support.
                </p>
              </div>
              <div className="mt-8">
                <Button asChild>
                  <Link to="/products">Explore Our Products</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={farmFacilityImage} 
                alt="Our Farm Facility" 
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-hero/20 rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Mission */}
            <Card className="shadow-elegant hover:shadow-hero transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-hero p-3 rounded-lg mr-4">
                    <Target className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Mission</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To provide premium quality, sustainably grown seedlings and vegetables while promoting 
                  environmentally responsible farming practices. We are committed to supporting our community's 
                  health and nutrition through accessible, affordable, and organic agricultural products.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="shadow-elegant hover:shadow-hero transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-gradient-hero p-3 rounded-lg mr-4">
                    <Eye className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold text-primary">Our Vision</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the leading agricultural company in the region, recognized for innovation, sustainability, 
                  and exceptional quality. We envision a future where every community has access to fresh, healthy, 
                  and locally grown produce.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:shadow-hero transition-all duration-300">
                <Leaf className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Sustainability</h3>
              <p className="text-muted-foreground">
                We prioritize environmentally friendly practices that preserve our planet for future generations.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:shadow-hero transition-all duration-300">
                <Shield className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Quality</h3>
              <p className="text-muted-foreground">
                We maintain the highest standards in every aspect of our operations, from seed to harvest.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:shadow-hero transition-all duration-300">
                <Heart className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Community</h3>
              <p className="text-muted-foreground">
                We are committed to supporting local communities and building lasting relationships.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-gradient-hero p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center group-hover:shadow-hero transition-all duration-300">
                <Globe className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new technologies and methods to improve our products and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Our Team
            </h2>
            <p className="text-lg text-muted-foreground">
              Meet the passionate experts behind MULTI AGENCIES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Agricultural Experts</h3>
                <p className="text-muted-foreground">
                  Our team of certified agriculturalists brings decades of combined experience in sustainable farming.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Quality Specialists</h3>
                <p className="text-muted-foreground">
                  Dedicated professionals who ensure every product meets our stringent quality standards.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-elegant transition-all duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-24 h-24 bg-gradient-hero rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Heart className="h-12 w-12 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Customer Care</h3>
                <p className="text-muted-foreground">
                  Our friendly support team is always ready to help you with your agricultural needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Awards & Recognition
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Best Organic Producer 2023</h3>
              <p className="text-muted-foreground">Recognized by the Regional Agriculture Association</p>
            </div>
            <div className="text-center">
              <Shield className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Sustainability Leader</h3>
              <p className="text-muted-foreground">Environmental Excellence Award for sustainable practices</p>
            </div>
            <div className="text-center">
              <Users className="h-16 w-16 text-secondary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Community Choice Award</h3>
              <p className="text-muted-foreground">Voted by local farmers and gardeners</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;