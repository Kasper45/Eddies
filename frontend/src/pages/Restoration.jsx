import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { PaintBucket, Wrench, Sparkles, ArrowRight } from 'lucide-react';

const Restoration = () => {
  const restorationServices = [
    {
      icon: <PaintBucket className="w-10 h-10 text-blue-600" />,
      title: 'Fiberglass & Paint',
      description: 'Expert fiberglass repair and custom paint work'
    },
    {
      icon: <Wrench className="w-10 h-10 text-blue-600" />,
      title: 'Complete Rigging',
      description: 'Professional rigging services for optimal performance'
    },
    {
      icon: <Sparkles className="w-10 h-10 text-blue-600" />,
      title: 'Interior Restoration',
      description: 'Custom interiors and upholstery through Go West Designs'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Complete <span className="text-blue-600">Restoration</span> Services
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Bringing boats back to life with meticulous craftsmanship
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Restoration: Colt .45
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete restoration of an SS model Mandella showcasing our expertise
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">The Project</h3>
              <p className="text-lg text-gray-700 mb-6">
                The Colt .45 represents one of our most comprehensive restoration projects. This SS model Mandella received a complete transformation at our shop.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Complete fiberglass work and structural repairs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Professional custom paint application</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Complete rigging overhaul and optimization</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">Custom interior restoration</span>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/7949502.jpeg"
                  alt="Colt 45 Restoration"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/836837.jpeg"
                alt="Restoration Detail"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/5698658.jpeg"
                alt="Restoration Progress"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/8560597.jpg"
                alt="Restoration Complete"
                className="w-full h-72 object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Restoration Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive restoration services covering every aspect of your boat
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {restorationServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Detailed Steps */}
          <div className="bg-white rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              What's Included in Our Restoration
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Initial Assessment</h4>
                  <p className="text-gray-700">Comprehensive evaluation of your boat's condition</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Structural Work</h4>
                  <p className="text-gray-700">Fiberglass repair and hull restoration</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Paint & Finish</h4>
                  <p className="text-gray-700">Professional paint application and detailing</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Mechanical Systems</h4>
                  <p className="text-gray-700">Engine, V-drive, and all mechanical systems</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">5</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Interior Work</h4>
                  <p className="text-gray-700">Custom upholstery and interior restoration</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">6</span>
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Final Testing</h4>
                  <p className="text-gray-700">Complete testing and quality assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Restore Your Boat?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss your restoration project and bring your boat back to life
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Restoration;