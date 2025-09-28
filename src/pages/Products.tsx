import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star, Leaf, Droplets, Sun, Shield } from "lucide-react";
import vegetablesImage from "@/assets/vegetables.jpg";
import seedlingsImage from "@/assets/seedlings.jpg";
import farmFacilityImage from "@/assets/farm-facility.jpg";

const Products = () => {
  const seedlingProducts = [
    { name: "Tomato Seedlings", price: "$2.50", description: "Cherry, Roma, and Beefsteak varieties" },
    { name: "Pepper Seedlings", price: "$3.00", description: "Bell peppers, jalapeños, and sweet peppers" },
    { name: "Lettuce Seedlings", price: "$1.50", description: "Romaine, iceberg, and mixed greens" },
    { name: "Herb Seedlings", price: "$2.00", description: "Basil, cilantro, parsley, and oregano" },
    { name: "Cucumber Seedlings", price: "$2.25", description: "Pickling and slicing varieties" },
    { name: "Squash Seedlings", price: "$2.75", description: "Zucchini, yellow squash, and butternut" },
  ];

  const vegetableProducts = [
    { name: "Organic Tomatoes", price: "$4.50/lb", description: "Vine-ripened, pesticide-free tomatoes" },
    { name: "Fresh Lettuce Mix", price: "$3.25/bunch", description: "Crisp, garden-fresh lettuce varieties" },
    { name: "Bell Peppers", price: "$5.00/lb", description: "Colorful, sweet bell peppers" },
    { name: "Fresh Herbs", price: "$2.50/bunch", description: "Aromatic herbs picked daily" },
    { name: "Seasonal Squash", price: "$3.75/lb", description: "Fresh seasonal squash varieties" },
    { name: "Root Vegetables", price: "$4.00/lb", description: "Carrots, beets, and radishes" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
              Our Premium Products
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our comprehensive selection of high-quality seedlings and farm-fresh vegetables, 
              grown with care and sustainable practices.
            </p>
          </div>

          {/* Product Categories Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="shadow-elegant hover:shadow-hero transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={seedlingsImage} 
                  alt="Premium Seedlings" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Leaf className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-primary">Premium Seedlings</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  High-quality, disease-resistant seedlings ready for transplanting. Perfect for home gardens and commercial farming.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Organic</Badge>
                  <Badge variant="secondary">Disease Resistant</Badge>
                  <Badge variant="secondary">High Yield</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-hero transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={vegetablesImage} 
                  alt="Fresh Vegetables" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Sun className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-primary">Fresh Vegetables</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Farm-fresh vegetables harvested at peak ripeness. Pesticide-free and packed with nutrients and flavor.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Pesticide-Free</Badge>
                  <Badge variant="secondary">Daily Harvest</Badge>
                  <Badge variant="secondary">Local</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-elegant hover:shadow-hero transition-all duration-300">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src={farmFacilityImage} 
                  alt="Consulting Services" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center mb-3">
                  <Shield className="h-6 w-6 text-primary mr-2" />
                  <h3 className="text-xl font-semibold text-primary">Consulting Services</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Expert agricultural consulting to help you maximize your harvest with sustainable farming practices.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Expert Advice</Badge>
                  <Badge variant="secondary">Sustainable</Badge>
                  <Badge variant="secondary">Custom Plans</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Seedlings Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Premium Seedlings
            </h2>
            <p className="text-lg text-muted-foreground">
              Ready-to-plant seedlings that guarantee healthy growth and abundant harvests
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {seedlingProducts.map((product, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <span className="text-xl font-bold text-secondary">{product.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-muted-foreground">(4.9/5)</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">6-8 week old seedlings</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Droplets className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Disease resistant varieties</span>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Fresh Vegetables Section */}
      <section className="py-16 bg-gradient-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Farm Fresh Vegetables
            </h2>
            <p className="text-lg text-muted-foreground">
              Locally grown, pesticide-free vegetables harvested at peak freshness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {vegetableProducts.map((product, index) => (
              <Card key={index} className="shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-primary">{product.name}</CardTitle>
                    <span className="text-xl font-bold text-secondary">{product.price}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    </div>
                    <span className="text-sm text-muted-foreground">(4.8/5)</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Harvested daily</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-4">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="text-sm text-foreground">Pesticide-free guarantee</span>
                  </div>
                  <Button className="w-full">Add to Cart</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
            Our Quality Guarantee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Leaf className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">100% Organic</h3>
              <p className="text-muted-foreground">All our products are grown using certified organic methods</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Quality Assured</h3>
              <p className="text-muted-foreground">Rigorous quality control at every stage of production</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-hero p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-primary mb-2">Satisfaction Guaranteed</h3>
              <p className="text-muted-foreground">100% satisfaction guarantee or your money back</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;