'use client'
import { useEffect } from "react";
export default function AboutUs() {
  useEffect(() => {
      document.title = "About Drifter";
    }, []);
    return (
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-gray-700 leading-relaxed">
            Drifter is your go-to platform for personalized, adventure-driven travel experiences. 
            We help backpackers and explorers discover offbeat destinations, local adventures, and sustainable stays.
          </p>
        </div>
      </section>
    );
  }
  