"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import logo from "../public/logo.png";

function Navbar() {
  const { data: session } = useSession();
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <div className="navbar bg-base-200 px-6">
        {/* Logo */}
        <div className="flex-1">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo} height={80} width={80} alt="Logo" />
          </Link>
        </div>

        {/* Navbar Links */}
        <div className="flex space-x-6">
          <Link href="/destinations" className="btn btn-ghost">Destinations</Link>

          {/* Customer Care Dropdown */}
          <div className="relative">
            <button className="btn btn-ghost" onClick={() => setShowPopup(!showPopup)}>
              Customer Care
            </button>
            {showPopup && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md p-3 text-sm">
                <p className="font-semibold">Need Help?</p>
                <p>📞 <span className="text-blue-500">+91 98765 43210</span></p>
                <p>📧 <span className="text-blue-500">support@drifter.com</span></p>
                <button 
                  className="text-red-500 mt-2 text-xs" 
                  onClick={() => setShowPopup(false)}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>

        {/* User Profile / Sign-in */}
        <div className="flex-none ml-5">
          {session ? (
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <Image src={session.user.image} alt="Profile" width={40} height={40} />
                </div>
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between">Hi, {session.user.name}!</a>
                </li>
                <li>
                  <Link href="/profile">Profile</Link>
                </li>
                <li>
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </ul>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => signIn("google")}>
              Sign in with Google
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
