import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { SiVisa, SiMastercard, SiGooglepay } from "react-icons/si"; // Icons for payment methods

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-white">Drifter</h2>
          <p className="mt-2 text-sm">Explore unique experiences, adventure activities, and stay like a local.</p>
        </div>
        
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2">
            <li><a href="#" className="hover:text-white">About Us</a></li>
            <li><a href="#" className="hover:text-white">Destinations</a></li>
            <li><a href="#" className="hover:text-white">Join as a Vendor</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>
        
        {/* Social Media & Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white">Connect with Us</h3>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaFacebook /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-white text-xl"><FaLinkedin /></a>
          </div>
          <p className="mt-4 text-sm">Email: support@drifter.com</p>
          
          {/* Payment Methods */}
          <h3 className="text-lg font-semibold text-white mt-6">We Accept</h3>
          <div className="flex space-x-4 mt-2">
            <SiVisa className="text-gray-400 hover:text-white text-2xl" />
            <SiMastercard className="text-gray-400 hover:text-white text-2xl" />
            <SiGooglepay className="text-gray-400 hover:text-white text-2xl" /> {/* UPI Indicator */}
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        &copy; {new Date().getFullYear()} Drifter. All rights reserved.
      </div>
    </footer>
  );
}
