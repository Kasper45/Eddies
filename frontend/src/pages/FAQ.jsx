import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { ArrowRight } from 'lucide-react';

const FAQ = () => {
  const faqs = [
    {
      question: 'What types of boats do you service?',
      answer: 'We specialize in V-drive boats for both pleasure and racing. Our particular expertise is with Mandella boats, especially the 18ft SS "long deck" model, though we service all models of fiberglass Mandella boats and other V-drive vessels.'
    },
    {
      question: 'How long does a complete restoration take?',
      answer: 'The timeline for a complete restoration varies depending on the boat\'s condition and the scope of work. A typical full restoration can take anywhere from 3-6 months. We\'ll provide a detailed timeline estimate during our initial consultation.'
    },
    {
      question: 'Do you offer maintenance packages?',
      answer: 'Yes! We offer various maintenance packages including routine service (every 50 hours or annually), comprehensive service (every 100 hours), pre-season preparation, and post-season winterization. Contact us to discuss the best maintenance schedule for your boat.'
    },
    {
      question: 'Can you match custom paint colors?',
      answer: 'Absolutely. Our restoration services include professional custom paint work. We can match existing colors or help you design a completely new look for your boat.'
    },
    {
      question: 'Who handles the upholstery work?',
      answer: 'We partner exclusively with Go West Designs for all interior and upholstery work. They have over 40 years of experience in marine upholstery and provide exceptional quality custom interiors, boat covers, and upholstery services.'
    },
    {
      question: 'Do you work on racing boats?',
      answer: 'Yes! We have extensive experience with both pleasure and racing V-drive boats. Our team understands the performance requirements of racing boats and can provide appropriate maintenance, modifications, and tuning.'
    },
    {
      question: 'What areas do you serve?',
      answer: 'We\'re located in Tucson, Arizona and serve customers throughout the region. While most of our clients are local, we have worked with boat owners from across Arizona and neighboring states for major restoration projects.'
    },
    {
      question: 'How often should I service my V-drive?',
      answer: 'We recommend having your V-drive inspected and serviced every 100 hours of operation or at least annually. Regular maintenance prevents costly repairs and ensures optimal performance.'
    },
    {
      question: 'Do you provide estimates?',
      answer: 'Yes, we provide detailed estimates for all work. Contact us to schedule a consultation where we can assess your boat and provide a comprehensive estimate for the services you need.'
    },
    {
      question: 'What makes Eddie\'s Inboard Marine different?',
      answer: 'We\'ve been specializing exclusively in V-drive boats for over 40 years. This focused expertise, combined with our status as the region\'s leading Mandella specialist and our partnership with quality vendors like Go West Designs, ensures your boat receives the best possible service.'
    },
    {
      question: 'Can you help with boat storage?',
      answer: 'While we don\'t offer long-term storage facilities, we do provide pre-season preparation and post-season winterization services to ensure your boat is properly maintained during storage periods.'
    },
    {
      question: 'Do you sell parts?',
      answer: 'Yes, we can source and supply genuine parts and quality accessories for V-drive boats, especially Mandella models. Contact us with your specific needs.'
    },
    {
      question: 'How do I schedule service?',
      answer: 'You can schedule service by calling us at 520-400-1423 or using our contact form. We\'ll discuss your needs and find a convenient time for your boat service.'
    },
    {
      question: 'What should I bring for a service appointment?',
      answer: 'Bring any service records you have, information about any issues you\'ve noticed, and details about how you use your boat (pleasure vs. racing, typical hours of operation, etc.). This helps us provide the best service for your specific needs.'
    },
    {
      question: 'Do you warranty your work?',
      answer: 'Yes, we stand behind our work. Warranty details vary depending on the type of service performed. We\'ll discuss specific warranty terms for your project during consultation.'
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help. Contact us and we'll be happy to answer any questions you have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:520-400-1423">
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                Call 520-400-1423
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Explore Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/mandella-boats" className="group">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Mandella Boats
                </h3>
                <p className="text-gray-600">Expert service for all Mandella models</p>
              </div>
            </Link>
            <Link to="/restoration" className="group">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Restoration
                </h3>
                <p className="text-gray-600">Complete boat restoration services</p>
              </div>
            </Link>
            <Link to="/maintenance" className="group">
              <div className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600">
                  Maintenance
                </h3>
                <p className="text-gray-600">Keep your boat running perfectly</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FAQ;