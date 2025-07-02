"use client";
import { useEffect } from "react";
import { SessionProvider } from "next-auth/react";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import Head from "next/head";

const poppins = Poppins({ weight: ["400", "600"], subsets: ["latin"], variable: "--font-poppins" });
const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"], variable: "--font-roboto" });
  
export default function RootLayout({ children }) {
  return (
    <html lang="en">
       
      <body className={`${poppins.variable} ${roboto.variable} font-sans`}>
        <SessionProvider>
          <Navbar />
          {children}
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
