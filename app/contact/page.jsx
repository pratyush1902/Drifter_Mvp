"use client"
import { useEffect } from "react";
export default function Contact() {
  useEffect(() => {
      document.title = "Contact Us- Drifter";
    }, []);
    return (
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-700">Have questions? Reach out to us.</p>
          <p className="text-gray-700 mt-4">📧 Email: support@drifter.com</p>
        </div>
      </section>
    );
  }
  