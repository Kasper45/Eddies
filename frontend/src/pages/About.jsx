import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Award, Users, Wrench, ArrowRight } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      icon: <Award className="w-10 h-10 text-blue-600" />,
      title: '40+ Years',
      description: 'Of excellence in boat service and restoration'
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: 'Largest Clientele',
      description: 'Mandella boat customer base in the region'
    },
    {
      icon: <Wrench className="w-10 h-10 text-blue-600" />,
      title: 'Expert Team',
      description: 'Skilled technicians with decades of experience'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-blue-600">Eddie's Inboard Marine</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Four decades of dedication to V-drive boat excellence
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Since opening our doors over 40 years ago, Eddie's Inboard Marine has been the premier destination for V-drive boat service in Tucson, Arizona.
                </p>
                <p>
                  What started as a passion for high-performance boats has evolved into a full-service shop trusted by boat owners throughout the region.
                </p>
                <p>
                  We specialize in both pleasure and racing boats, with particular expertise in Mandella boats. Our team has built the largest Mandella clientele base, especially for the iconic 18ft SS "long deck" model.
                </p>
                <p>
                  From routine maintenance to complete custom restorations, we treat every boat as if it were our own.
                </p>
              </div>
            </div>
            <div>
              <div className="rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/6243769.jpg?1356894846"
                  alt="Eddie's Inboard Marine"
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Sets Us Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {milestones.map((item, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
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
                    src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/262167.jpg"
                    alt="Boat Detail"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Our Expertise
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">V-Drive Specialists</h3>
                  <p className="text-gray-700">
                    We focus exclusively on V-drive boats, giving us unmatched expertise in this specialized field.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Mandella Masters</h3>
                  <p className="text-gray-700">
                    As Mandella specialists, we service all models with particular expertise in the 18ft SS "long deck".
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Complete Solutions</h3>
                  <p className="text-gray-700">
                    From maintenance to full restorations, we're your one-stop boat shop.
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
            Experience the Difference
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let our 40+ years of expertise work for you
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contact Us Today <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default About;