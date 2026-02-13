import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { CheckCircle, Cog, Droplet, Zap, ArrowRight } from 'lucide-react';

const Maintenance = () => {
  const maintenanceServices = [
    {
      icon: <Cog className="w-10 h-10 text-blue-600" />,
      title: 'Engine Service',
      description: 'Complete engine maintenance and tune-ups'
    },
    {
      icon: <Zap className="w-10 h-10 text-blue-600" />,
      title: 'V-Drive Systems',
      description: 'Expert V-drive maintenance and repair'
    },
    {
      icon: <Droplet className="w-10 h-10 text-blue-600" />,
      title: 'Fluid Changes',
      description: 'Oil, coolant, and transmission fluid service'
    },
    {
      icon: <CheckCircle className="w-10 h-10 text-blue-600" />,
      title: 'Pre-Season Prep',
      description: 'Comprehensive inspection and preparation'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Boat <span className="text-blue-600">Maintenance</span> & Repair
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Keep your V-drive boat running at peak performance
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Maintenance Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Routine service to keep your boat in top condition
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {maintenanceServices.map((service, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="flex justify-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Maintenance Matters */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Why Regular Maintenance Matters
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Prevent Costly Repairs</h3>
                  <p className="text-gray-700">
                    Regular maintenance catches small issues before they become expensive problems.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maximize Performance</h3>
                  <p className="text-gray-700">
                    Keep your boat running at peak efficiency for the best on-water experience.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Extend Lifespan</h3>
                  <p className="text-gray-700">
                    Proper maintenance significantly extends the life of your boat and its components.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Maintain Value</h3>
                  <p className="text-gray-700">
                    Well-maintained boats retain their value better over time.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/6243769.jpg?1356894846"
                alt="Boat Maintenance"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What We Service
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Routine Maintenance</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Oil and filter changes</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Coolant system flush and refill</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Transmission fluid service</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Spark plug replacement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Belt and hose inspection</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Fuel system cleaning</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">V-Drive Specific</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">V-drive inspection and service</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Shaft alignment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Propeller inspection and balance</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Steering system check</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Throttle cable adjustment</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <span className="text-gray-700">Performance diagnostics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Season Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Pre-Season Preparation
              </h2>
              <p className="text-xl text-blue-100 mb-6">
                Get your boat ready for the season with our comprehensive prep service. We'll ensure everything is in perfect working order before you hit the water.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-blue-50">Complete system inspection</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-blue-50">All fluid services</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-blue-50">Performance testing</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center mr-3 mt-1 flex-shrink-0">
                    <span className="text-blue-600 text-sm">✓</span>
                  </div>
                  <span className="text-blue-50">Safety equipment check</span>
                </div>
              </div>
              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                    Schedule Service <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Maintenance Schedule</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-bold mb-1">Every 50 Hours or Annually</div>
                  <div className="text-blue-100 text-sm">Oil change, filter replacement, basic inspection</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-bold mb-1">Every 100 Hours or Bi-Annually</div>
                  <div className="text-blue-100 text-sm">Full service including V-drive, coolant, transmission</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-bold mb-1">Pre-Season Service</div>
                  <div className="text-blue-100 text-sm">Comprehensive inspection and preparation</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="font-bold mb-1">Post-Season Winterization</div>
                  <div className="text-blue-100 text-sm">Proper storage preparation and protection</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Schedule Your Maintenance Today
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Don't wait for problems to develop. Keep your boat in peak condition.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Maintenance;