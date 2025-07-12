"use client";
import React from "react";
import { FaMapMarkedAlt, FaUsers, FaHeart } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-['Inter']">
      {/* Hero */}
      <div className="relative h-[70vh] flex items-center justify-center bg-black">
        <img
          src=" https://images.unsplash.com/photo-1552978534-9d01e1f91517?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Meghalaya Landscape"
          className="absolute inset-0 w-full h-full object-cover opacity-70"
        />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold font-['Poppins'] mb-4">We Are Drifter</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Born on the roads of Meghalaya — built for the curious, the offbeat, the real.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <img
          src="https://images.unsplash.com/photo-1574410206732-0000dbcb116d?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Drifter Team"
          className="rounded-2xl shadow-xl"
        />
        <div>
          <h2 className="text-3xl font-bold flex items-center gap-3 text-indigo-700 mb-4 font-['Poppins']">
            <FaUsers /> Who We Are
          </h2>
          <p className="text-lg leading-relaxed">
            We’re a small but passionate team of explorers who believe that the best stories
            live in the lesser-known corners. Drifter was created to bring real, rooted travel
            experiences to people who crave more than checklists and hotel stays.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold flex items-center gap-3 text-teal-700 mb-4 font-['Poppins']">
              <FaMapMarkedAlt /> What We Do
            </h2>
            <p className="text-lg leading-relaxed">
              Drifter helps you discover and book unique local experiences directly.  
              We’re starting in Meghalaya — home to living root bridges, misty mountains,  
              sacred forests, and vibrant tribal communities. We work closely with local
              vendors, guides, and families to make every trip meaningful.
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1645036995768-bd4ea2589808?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsZXJ8ZW58MHx8MHx8fDA%3D"
            alt="Local Experience"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Our Why */}
      <section className="max-w-5xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold flex items-center justify-center gap-3 mb-4 text-rose-600 font-['Poppins']">
          <FaHeart /> Why We Exist
        </h2>
        <p className="text-lg leading-relaxed max-w-3xl mx-auto text-gray-700">
          We believe travel should connect you to people, not just places.  
          That’s why we built Drifter — to help travelers step off the beaten path  
          and into stories that matter. Our mission is to empower locals, preserve culture,  
          and redefine what it means to “explore”.
        </p>
        <p className="mt-6 text-lg text-gray-700">
          And we’re starting this journey from the heart of Meghalaya.
        </p>
      </section>

      {/* CTA */}
      <div className="bg-indigo-100 py-12 text-center px-6">
        <h3 className="text-2xl font-semibold mb-2 font-['Poppins']">Ready to drift?</h3>
        <p className="mb-4 text-gray-700 text-lg">
          Dive into Meghalaya’s best-kept secrets. Book your first local experience today.
        </p>
        <a
          href="/"
          className="inline-block bg-indigo-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-indigo-700 transition"
        >
          Explore Experiences
        </a>
      </div>

      {/* Footer */}
      <footer className="text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Drifter. Made with chai, clouds & courage.
      </footer>
    </div>
  );
}
