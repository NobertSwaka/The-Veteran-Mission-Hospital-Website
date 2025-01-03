import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

// OR Using react-icons (Comment out one set depending on the method you choose)
// import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-2">
              <strong>Address:</strong> Syokimau, Along Katani Road 800M off
              Mombasa Road, Machakos, Kenya.
            </p>
            <p className="mb-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+2547101777777" className="hover:text-red-800">
                +254 7101 77777
              </a>
            </p>
            <p className="mb-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@veteranmissionhospitals.org"
                className="hover:text-red-800"
              >
                info@veteranmissionhospitals.org
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="/services" className="hover:text-red-800">
                  Our Services
                </a>
              </li>
              <li className="mb-2">
                <a href="/AboutPage" className="hover:text-red-800">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/Doctors" className="hover:text-red-800">
                  Meet Our Doctors
                </a>
              </li>
              <li className="mb-2">
                <a href="/ContactUs" className="hover:text-red-800">
                  Contact Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/InsurancePage" className="hover:text-red-800">
                  Insurance
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
            <div className="flex space-x-4 text-2xl">
              <a
                href="https://www.facebook.com/profile.php?id=61551673282740"
                className="text-white hover:text-red-800"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a
                href="https://twitter.com/cardioclinic"
                className="text-white hover:text-red-800"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a
                href="https://instagram.com/cardioclinic"
                className="text-white hover:text-red-800"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                href="https://linkedin.com/company/cardioclinic"
                className="text-white hover:text-red-800"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-sm text-center">
          <p>
            © 2024 TVMH. All Rights Reserved. <br />
            Developed By: Koinonia Creatives +254 7146 70257
          </p>
          <div className="flex justify-center space-x-4 mt-2">
            <a href="/PrivacyPolicy" className="hover:text-black">
              Privacy Policy
            </a>
            <a href="/TermsOfService" className="hover:text-black">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
