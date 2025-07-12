"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import logo from "../public/logo.png";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md sticky top-0 z-50 transition duration-300 ease-in-out"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src={logo} height={90} width={90} alt="Logo" />
          
        </Link>

        {/* Hamburger Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-2xl focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-gray-800">
          <Link href="/destinations" className="hover:text-indigo-600 font-medium transition">
            Destinations
          </Link>
          <Link href="/AboutUs" className="hover:text-indigo-600 font-medium transition">
            About Drifter
          </Link>

          {/* Customer Care Popup */}
          <div className="relative">
            <button
              onClick={() => setShowPopup(!showPopup)}
              className="hover:text-indigo-600 font-medium"
            >
              Customer Care
            </button>
            <AnimatePresence>
              {showPopup && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 bg-white border border-gray-100 shadow-lg rounded-md p-4 text-sm z-20"
                >
                  <p className="font-semibold text-gray-700 mb-2">Need Help?</p>
                  <p>📞 <span className="text-blue-600">+91 98765 43210</span></p>
                  <p>📧 <span className="text-blue-600">support@drifter.com</span></p>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-red-500 text-xs mt-3"
                  >
                    Close
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Auth */}
          {session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image src={session.user.image} alt="Profile" width={40} height={40} />
                </div>
              </div>
              <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52">
                <li><span>Hi, {session.user.name}!</span></li>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/bookingHistory">🧾 My Bookings</Link></li>
                <li><button onClick={() => signOut()}>Logout</button></li>
              </ul>
            </div>
          ) : (
            <button
              className="btn bg-indigo-600 text-white hover:bg-indigo-700 transition"
              onClick={() => signIn("google")}
            >
              Sign in with Google
            </button>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white px-4 pb-4 pt-2 space-y-3 shadow-inner"
          >
            <Link href="/destinations" className="block font-medium text-gray-800">
              Destinations
            </Link>
            <Link href="/AboutUs" className="block font-medium text-gray-800">
              About Drifter
            </Link>
            <button
              className="block font-medium text-gray-800"
              onClick={() => setShowPopup(!showPopup)}
            >
              Customer Care
            </button>

            {showPopup && (
              <div className="bg-gray-50 p-3 rounded-md text-sm border border-gray-100 shadow">
                <p className="font-semibold text-gray-700">Need Help?</p>
                <p>📞 <span className="text-blue-600">+91 98765 43210</span></p>
                <p>📧 <span className="text-blue-600">support@drifter.com</span></p>
                <button
                  className="text-red-500 text-xs mt-2"
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            )}

            {session ? (
              <div className="border-t pt-2 space-y-2">
                <p className="text-sm">Hi, {session.user.name}!</p>
                <Link href="/profile" className="block text-sm">Profile</Link>
                <Link href="/bookingHistory" className="block text-sm">🧾 My Bookings</Link>
                <button onClick={() => signOut()} className="text-sm text-red-600">
                  Logout
                </button>
              </div>
            ) : (
              <button
                className="btn btn-sm bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => signIn("google")}
              >
                Sign in with Google
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
