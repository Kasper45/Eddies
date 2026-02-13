import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Sparkles, ExternalLink, ArrowRight } from 'lucide-react';

const Interior = () => {
  const interiorServices = [
    'Custom boat interiors',
    'Premium upholstery',
    'Boat covers',
    'Carpet installation',
    'Vinyl repair and replacement',
    'Seat restoration',
    'Custom designs',
    'Color matching'
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Sparkles className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Interior & <span className="text-blue-600">Upholstery</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Custom boat interiors through our exclusive partner Go West Designs
          </p>
        </div>
      </section>

      {/* Partnership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/1225196.jpg"
                alt="Boat Interior"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Quality You Can Trust
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Eddie's Inboard Marine is proud to partner exclusively with Go West Designs for all interior and upholstery work.
                </p>
                <p>
                  With over 40 years of experience, Go West Designs has earned a reputation for exceptional craftsmanship and attention to detail.
                </p>
                <p>
                  Whether you need custom boat interiors, quality upholstery, or durable boat covers, our partnership ensures you receive the finest work available.
                </p>
              </div>
              <div className="mt-8">
                <a href="http://gowestdesigns.net/" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Visit Go West Designs <ExternalLink className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Interior Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive interior and upholstery solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interiorServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-900 font-medium">{service}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Examples of custom interior and upholstery projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/2694497.jpg"
                alt="Custom Interior Work"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            <div>
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/3586495.jpg"
                alt="Upholstery Detail"
                className="rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our Interior Services?
            </h2>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">40+ Years of Experience</h3>
                  <p className="text-gray-700">
                    Go West Designs brings over four decades of expertise in marine upholstery and interior design.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Solutions</h3>
                  <p className="text-gray-700">
                    Every boat is unique. We create custom designs tailored to your specific needs and preferences.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Quality Materials</h3>
                  <p className="text-gray-700">
                    We use only premium marine-grade materials designed to withstand sun, water, and wear.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center mr-6 flex-shrink-0">
                  <span className="text-white text-xl font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Seamless Coordination</h3>
                  <p className="text-gray-700">
                    Our partnership with Go West Designs ensures seamless coordination between mechanical work and interior finishing.
                  </p>
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
            Ready to Transform Your Boat's Interior?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Contact us to discuss your custom interior and upholstery needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="http://gowestdesigns.net/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
                Visit Go West Designs <ExternalLink className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Interior;