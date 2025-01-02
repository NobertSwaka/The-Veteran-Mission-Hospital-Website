import React from "react";
import Footer from "./pages/Footer";
import ChatBot from "./pages/ChatBot";
import WhatsappIcon from "./Pages/WhatsappIcon";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center text-gray-800 pt-24">
      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[350px] lg:h-[300px] xl:h-[400px] w-full"
        style={{
          backgroundImage: "url('https://termshub.io/v3/assets/images/products/privacy_policy_hero.svg')", // Update with an appropriate image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          <h1 className="text-5xl font-bold">Privacy Policy</h1>
          <p className="text-lg mt-4">Your privacy is important to us</p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-6 md:px-12 max-w-6xl w-full">
        <h2 className="text-4xl font-semibold text-center mb-6">Privacy Policy</h2>
        
        <p className="text-lg mb-6">
          The Veteran Mission Hospitals ("we", "our", "us") is committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you visit our website or use our healthcare services.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold">1. Information We Collect</h3>
            <p className="text-lg">
              We collect personal information that you provide when you use our website, such as:
              <ul className="list-disc ml-5">
                <li>Your name, contact details, and demographic information</li>
                <li>Medical history, treatment records, and appointment information</li>
                <li>Payment information for billing purposes</li>
                <li>Any other information relevant to your medical care or services</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">2. How We Use Your Information</h3>
            <p className="text-lg">
              We use the information we collect for the following purposes:
              <ul className="list-disc ml-5">
                <li>To provide healthcare services, manage appointments, and follow up on treatments</li>
                <li>To process payments and provide billing information</li>
                <li>To communicate with you regarding your health care, updates, and promotions</li>
                <li>To improve our services and website functionality</li>
                <li>To comply with legal and regulatory obligations</li>
              </ul>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">3. How We Protect Your Information</h3>
            <p className="text-lg">
              We use industry-standard security measures to safeguard your personal information, including encryption, access controls, and secure storage protocols. However, no method of online transmission or storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">4. Sharing Your Information</h3>
            <p className="text-lg">
              We may share your personal information with:
              <ul className="list-disc ml-5">
                <li>Medical professionals involved in your care and treatment</li>
                <li>Third-party service providers who assist with healthcare services, billing, or IT support</li>
                <li>Government or regulatory authorities if required by law</li>
                <li>Other entities as required to provide services or protect our rights</li>
              </ul>
              We will never sell or rent your personal information to third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">5. Your Rights</h3>
            <p className="text-lg">
              You have the right to:
              <ul className="list-disc ml-5">
                <li>Access the personal information we hold about you</li>
                <li>Request corrections to your personal information if it is inaccurate</li>
                <li>Request the deletion of your personal information, subject to legal requirements</li>
                <li>Withdraw your consent to the collection or processing of your information, where applicable</li>
              </ul>
              To exercise these rights, please contact us using the details below.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">6. Cookies and Tracking Technologies</h3>
            <p className="text-lg">
              Our website uses cookies and similar tracking technologies to enhance your experience, analyze site usage, and provide personalized content. You can manage cookie preferences through your browser settings, but disabling cookies may affect the functionality of the website.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">7. Changes to This Privacy Policy</h3>
            <p className="text-lg">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting an updated version on our website. Please review this Privacy Policy periodically to stay informed of any updates.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">8. Contact Information</h3>
            <p className="text-lg">
              If you have any questions or concerns about this Privacy Policy, or if you would like to exercise your rights regarding your personal information, please contact us at:
              <ul className="list-disc ml-5">
                <li>Email: info@veteranmissionhospitals.org</li>
                <li>Phone: +254 710 177777</li>
                <li>Address: Syokimau, Along Katani Road 800m Off Mombasa Road</li>
              </ul>
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

export default PrivacyPolicy;
