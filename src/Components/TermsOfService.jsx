import React from "react";
import Footer from "./pages/Footer";
import ChatBot from "./pages/ChatBot";
import WhatsappIcon from "./Pages/WhatsappIcon";
const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800 pt-24">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage: "url('https://www.kellybeamsley.com/wp-content/uploads/terms.jpg')", // Update with an appropriate image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Terms of Service</h1>
          <p className="text-lg mt-4">Please review our terms and conditions for using our healthcare services</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-6 md:px-12 max-w-6xl w-full">
        <h2 className="text-4xl font-semibold text-center mb-6">Terms and Conditions</h2>
        
        <p className="text-lg mb-6">
          These Terms of Service ("Terms") govern your use of the healthcare services provided by The Veteran Mission Hospitals ("we", "our", "us").
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">1. Introduction</h3>
            <p className="text-lg">
              By accessing or using our hospital services, including consultations, treatments, and any related medical services, you agree to comply with these Terms of Service. If you do not agree to these terms, please refrain from using our services.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">2. Patient Rights and Responsibilities</h3>
            <p className="text-lg">
              As a patient, you have the right to receive quality healthcare, be informed about your medical condition, and make decisions about your treatment. You are responsible for providing accurate health information and following the medical advice given by our healthcare professionals.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">3. Use of Services</h3>
            <p className="text-lg">
              Our healthcare services are intended for use in managing your medical care. You agree to use our services in accordance with the law and in a respectful manner. Our hospital reserves the right to refuse or discontinue services if inappropriate behavior is observed.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">4. Privacy and Confidentiality</h3>
            <p className="text-lg">
              We are committed to safeguarding your personal health information. All medical records are kept confidential in accordance with applicable laws and regulations. For more details, please refer to our Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">5. Fees and Payment</h3>
            <p className="text-lg">
              By using our healthcare services, you agree to pay all fees associated with the services provided. Payment for services is due at the time of service, unless otherwise arranged. We accept various forms of payment, including insurance, credit cards, and cash.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">6. Limitation of Liability</h3>
            <p className="text-lg">
              We are not liable for any indirect, incidental, or consequential damages resulting from your use of our healthcare services. You acknowledge and accept the risks inherent in receiving medical treatment and understand that no guarantee of specific outcomes can be made.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">7. Emergencies</h3>
            <p className="text-lg">
              In case of a medical emergency, please seek immediate assistance by calling emergency services or visiting the nearest emergency facility. Our hospital will provide emergency care based on the availability of services and resources.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">8. Changes to Terms</h3>
            <p className="text-lg">
              We reserve the right to amend or update these Terms of Service at any time. Any changes will be effective upon posting the updated Terms on our website. Please review the Terms periodically to stay informed of any updates.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">9. Governing Law</h3>
            <p className="text-lg">
              These Terms of Service shall be governed by and construed in accordance with the laws of Kenya. Any disputes arising from the use of our services will be resolved in accordance with the jurisdiction of Kenya.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">10. Contact Information</h3>
            <p className="text-lg">
              If you have any questions about these Terms of Service, or if you need assistance, please contact us at +254 710 177777.
            </p>
          </div>
        </div>
      </section>
<ChatBot />
<WhatsappIcon />
      <Footer /> {/* Footer added here */}
    </div>
  );
};

export default TermsOfService;
