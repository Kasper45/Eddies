import React from 'react';
import SEO from '../components/SEO';

const Privacy = () => {
  return (
    <main className="pt-20">
      <SEO 
        title="Privacy Policy - Eddie's Inboard Marine"
        description="Privacy policy for Eddie's Inboard Marine website."
        robots="noindex, nofollow"
      />
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                When you contact us through our website, we may collect:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Name and contact information (email, phone number)</li>
                <li>Information about your boat and service needs</li>
                <li>Any other information you choose to provide</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Respond to your inquiries and service requests</li>
                <li>Provide boat service and maintenance information</li>
                <li>Communicate about your boat service appointments</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Security</h2>
              <p className="text-gray-700">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Sharing</h2>
              <p className="text-gray-700">
                We do not sell, trade, or otherwise transfer your personal information to third parties. We may share information with our trusted partners (such as Go West Designs) only when necessary to provide our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies</h2>
              <p className="text-gray-700">
                Our website may use cookies to enhance user experience. You can choose to disable cookies through your browser settings.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of your data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have questions about this privacy policy, please contact us:
              </p>
              <div className="mt-4 text-gray-700">
                <p><strong>Eddie's Inboard Marine</strong></p>
                <p>1131 N. Rook Ave</p>
                <p>Tucson, AZ</p>
                <p>Phone: 520-400-1423</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Policy</h2>
              <p className="text-gray-700">
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated date.
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Privacy;