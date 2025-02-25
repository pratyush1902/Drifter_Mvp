"use client";

import React from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import logo from "../public/logo.png";

function Navbar() {
  const { data: session } = useSession();

  return (
    <div className="Navbar">
      <div className="navbar bg-base-200">
        <div className="flex-1 ml-10">
          <Link href="/" className="btn btn-ghost text-xl">
            <Image src={logo} height={100} width={100} alt="Logo" />
          </Link>
        </div>

        <div className="flex-none">
          {session ? (
            <div className="dropdown dropdown-end mr-10 ml-5">
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
