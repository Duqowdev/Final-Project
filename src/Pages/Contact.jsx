import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Contact Us
        </h1>
        <div className="text-lg text-gray-700 leading-relaxed space-y-6">
          <p>
            We value your feedback and are here to assist you with any questions
            or concerns you may have about the Presidential Election Voting
            Platform. Please do not hesitate to reach out to us using the
            contact information below.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              General Inquiries
            </h2>
            <p>
              For general inquiries about the voting platform, please email us
              at:
              <a href="mailto:info@somaliavoting.com" className="text-blue-600">
                {" "}
                info@somaliavoting.com
              </a>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Technical Support
            </h2>
            <p>
              If you encounter any technical issues while using the platform,
              please contact our technical support team at:
              <a
                href="mailto:support@somaliavoting.com"
                className="text-blue-600"
              >
                {" "}
                support@somaliavoting.com
              </a>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Phone Support
            </h2>
            <p>
              You can also reach us by phone at:
              <span className="text-blue-600"> +252 61 123 4567</span>
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Mailing Address
            </h2>
            <p>
              Presidential Election Voting Platform
              <br />
              Mogadishu, Somalia
              <br />
              P.O. Box 12345
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
