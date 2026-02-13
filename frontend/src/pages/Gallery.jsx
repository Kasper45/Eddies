import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const Gallery = () => {
  const galleryImages = [
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/7949502.jpeg',
      title: 'Colt .45 - Complete Restoration',
      category: 'Restoration'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/836837.jpeg',
      title: 'Custom Paint Work',
      category: 'Restoration'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/5698658.jpeg',
      title: 'Detailed Craftsmanship',
      category: 'Restoration'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/8560597.jpg',
      title: 'Engine Bay Perfection',
      category: 'Restoration'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/8908190.jpg',
      title: 'Mandella Excellence',
      category: 'Mandella Boats'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/1672373.jpg',
      title: 'Performance Ready',
      category: 'Mandella Boats'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/4994837.jpg',
      title: 'Water Ready',
      category: 'Restoration'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/3208005.jpg',
      title: 'Precision Work',
      category: 'Restoration'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/2376633.jpg',
      title: 'Mandella Long Deck',
      category: 'Mandella Boats'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/7787855.jpg',
      title: 'Quality Service',
      category: 'Mandella Boats'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/262167.jpg',
      title: 'Classic Mandella',
      category: 'Mandella Boats'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/2694497.jpg',
      title: 'Custom Interior',
      category: 'Interior'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/3586495.jpg',
      title: 'Premium Upholstery',
      category: 'Interior'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/1225196.jpg',
      title: 'Interior Excellence',
      category: 'Interior'
    },
    {
      src: 'https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/6243769.jpg?1356894846',
      title: 'V-Drive Expertise',
      category: 'Service'
    }
  ];

  return (
    <main className="pt-20">
      <SEO 
        title="Project Gallery - Eddie's Inboard Marine | Boat Restorations"
        description="View our completed boat restoration projects including the Colt .45 Mandella restoration. 40+ years of quality craftsmanship in Tucson, AZ."
        keywords="boat restoration gallery, mandella restoration, boat projects, colt 45 restoration, before and after boats"
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Work</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Showcasing 40+ years of excellence in boat service and restoration
          </p>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Featured Project</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Colt .45 - Complete Restoration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              One of our most comprehensive projects: a complete restoration of an SS model Mandella
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <div className="relative rounded-lg overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:-translate-y-2 group">
              <img
                src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/7949502.jpeg"
                alt="Colt 45 Complete"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-blue-400 text-sm font-semibold uppercase">Featured Project</span>
                  <h3 className="text-white text-2xl font-bold mt-1">Colt .45 Restoration</h3>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/836837.jpeg"
                  alt="Colt 45 Detail"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="https://eddiesinboardmarine.com/uploads/3/5/0/4/35040330/5698658.jpeg"
                  alt="Colt 45 Work"
                  className="w-full h-44 object-cover hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link to="/restoration">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                Learn About Our Restoration Services <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Project Gallery
            </h2>
            <p className="text-xl text-gray-600">
              Browse our completed projects and ongoing work
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8\">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="aspect-w-4 aspect-h-3 bg-gray-200">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="text-blue-400 text-xs font-semibold uppercase tracking-wider">{image.category}</span>
                    <h3 className="text-white text-xl font-bold mt-2">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help with your boat service needs
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

export default Gallery;