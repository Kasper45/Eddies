import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Ship } from 'lucide-react';

const MandellaBoats = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Ship className="w-16 h-16 text-blue-600" />
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-blue-600">Mandella Boats</span> Specialists
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The largest Mandella clientele base in the region
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Mandella Expertise
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Eddie's Inboard Marine is recognized as a premier Mandella specialist. Our expertise covers all models of fiberglass Mandella boats.
                </p>
                <p>
                  We have the largest clientele base for the iconic 18ft SS model, known as the "long deck". This specialized knowledge makes us the go-to shop for Mandella owners throughout the region.
                </p>
                <p>
                  Whether you need routine maintenance, performance upgrades, or complete restoration, our team has the experience to keep your Mandella running at peak performance.
                </p>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Schedule Service <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/2376633.jpg"
                alt="Mandella Boat"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>

          {/* Gallery */}
          <div className="mb-20">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">
              Mandella Gallery
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/7787855.jpg"
                  alt="Mandella Boat Detail"
                  className="rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
              <div className="space-y-8">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/262167.jpg"
                  alt="Mandella Long Deck"
                  className="rounded-lg shadow-lg w-full hover:shadow-2xl transition-shadow duration-300"
                />
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8 text-center">
              What We Offer for Mandella Boats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Routine Maintenance</h3>
                  <p className="text-gray-700">Regular service to keep your Mandella in top condition</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Performance Tuning</h3>
                  <p className="text-gray-700">Optimize your boat for racing or recreational use</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Restoration Services</h3>
                  <p className="text-gray-700">Complete restoration from hull to interior</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Custom Modifications</h3>
                  <p className="text-gray-700">Personalize your Mandella to your specifications</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Long Deck Specialists</h3>
                  <p className="text-gray-700">Expert service for the 18ft SS "long deck" model</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Parts & Accessories</h3>
                  <p className="text-gray-700">Genuine parts and quality accessories</p>
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
            Own a Mandella?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Trust the experts with the largest Mandella clientele in the region
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-blue-700 w-full sm:w-auto">
                View Our Work
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MandellaBoats;