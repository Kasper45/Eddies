import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Wrench, Ship, Sparkles, PaintBucket, Cog, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Ship className="w-12 h-12 text-blue-600" />,
      title: 'Inboard Marine Engines',
      description: 'Complete engine service, repair, and custom engine building for inboard marine applications',
      link: '/services',
      features: ['Engine diagnostics', 'Custom engine builds', 'Performance tuning', 'Engine repairs']
    },
    {
      icon: <PaintBucket className="w-12 h-12 text-blue-600" />,
      title: 'Complete Restoration',
      description: 'Full boat restoration including fiberglass, painting, rigging, and interior work',
      link: '/restoration',
      features: ['Fiberglass repair', 'Professional painting', 'Complete rigging', 'Interior restoration']
    },
    {
      icon: <Wrench className="w-12 h-12 text-blue-600" />,
      title: 'General Service & Maintenance',
      description: 'Routine maintenance and expert repairs to keep your boat running perfectly',
      link: '/maintenance',
      features: ['Routine service', 'V-drive maintenance', 'System diagnostics', 'Preventive care']
    },
    {
      icon: <Sparkles className="w-12 h-12 text-blue-600" />,
      title: 'Custom Fabrication',
      description: 'Machining, custom fabrication, and specialized modifications for unique needs',
      link: '/services',
      features: ['Custom machining', 'Metal fabrication', 'Specialized parts', 'Modifications']
    },
    {
      icon: <Cog className="w-12 h-12 text-blue-600" />,
      title: 'Performance Rigging',
      description: 'Expert rigging services for optimal performance in pleasure and racing boats',
      link: '/services',
      features: ['Performance rigging', 'Rigging adjustments', 'Custom setups', 'Racing optimization']
    },
    {
      icon: <CheckCircle className="w-12 h-12 text-blue-600" />,
      title: 'Parts & Upholstery',
      description: 'Complete parts supply and upholstery services through trusted partners',
      link: '/interior',
      features: ['Parts sourcing', 'Marine upholstery', 'Boat covers', 'Interior work']
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive boat services from routine maintenance to complete restorations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-center text-xl">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-blue-600 text-xs">✓</span>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                      Learn More
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Eddie's Inboard Marine?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your one-stop boat shop backed by 40+ years of experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Specialized Expertise</h3>
                <p className="text-gray-700">
                  We focus exclusively on V-drive boats, giving us deep knowledge and experience that general boat shops can't match.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Workmanship</h3>
                <p className="text-gray-700">
                  Every project receives meticulous attention to detail, from routine maintenance to complete restorations.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Trusted Partners</h3>
                <p className="text-gray-700">
                  We work with the best in the business, including Go West Designs for custom interiors and upholstery.
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Service</h3>
                <p className="text-gray-700">
                  From initial consultation to final delivery, we handle every aspect of your boat's service needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us today to discuss your boat service needs
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;