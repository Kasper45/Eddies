import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { ArrowRight, Wrench, Ship, Sparkles, Phone } from 'lucide-react';
import Reviews from '../components/Reviews';

const Home = () => {
  const services = [
    {
      icon: <Ship className="w-12 h-12 text-blue-600" />,
      title: 'Inboard Marine Engines',
      description: 'Expert service and repair for all inboard marine engines. Engine building, diagnostics, and performance tuning.'
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'Performance Rigging',
      description: 'Professional rigging services for optimal boat performance, from routine adjustments to complete custom rigging.'
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: 'Custom Fabrication',
      description: 'Custom fabrication work, machining, painting, and specialized modifications for your unique needs.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Southern Arizona's Trusted <span className="text-blue-600">Inboard Marine</span> Experts
              </h1>
              <p className="text-xl text-gray-700 mb-4">
                Eddie's Inboard Marine Equipment is Tucson's long-standing boat repair shop, specializing in inboard marine engines, performance rigging, and custom work.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Fair pricing • Fast turnarounds • Honest service since 1980
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                    Get Started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <a href="tel:520-400-1423">
                  <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                    <Phone className="mr-2 w-5 h-5" /> Call Now
                  </Button>
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/6243769.jpg?1356894846"
                  alt="Eddie's Inboard Marine Boat"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <Reviews />

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4">
              What We Do Best
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your one-stop boat shop for all V-drive boat needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Southern Arizona's Go-To Marine Shop
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Run by Eddie McPheeters II, Eddie's Inboard Marine Equipment has been Tucson's trusted boat repair shop since 1980. We're known throughout Southern Arizona for our expertise, integrity, and commitment to excellence.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fair & Honest Pricing</h3>
                    <p className="text-gray-700">No surprises - just straightforward, honest pricing you can trust</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Fast Turnarounds</h3>
                    <p className="text-gray-700">We understand you want to be on the water, not waiting for repairs</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Complete Services</h3>
                    <p className="text-gray-700">Engine building, machining, painting, parts, upholstery - we handle it all</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Expert Craftsmanship</h3>
                    <p className="text-gray-700">Decades of experience in custom work and performance rigging</p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/about">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Learn More About Us <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/2376633.jpg"
                  alt="Mandella Boat"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 mt-8">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/7787855.jpg"
                  alt="Boat Service"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Your Boat Serviced?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today for a consultation. We're here to help with all your boat service needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:520-400-1423">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
                <Phone className="mr-2 w-5 h-5" /> 520-400-1423
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;