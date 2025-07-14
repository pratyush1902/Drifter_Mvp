"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

// Dummy testimonials
const testimonials = [
  {
    name: "Ananya Sharma",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Drifter made my Meghalaya trip magical. From hidden waterfalls to warm locals — I felt connected, not just traveled.",
  },
  {
    name: "Rahul Mehta",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    text: "Loved how easy it was to book authentic local experiences. The root bridge trek was unforgettable!",
  },
  {
    name: "Priya Verma",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    text: "Everything felt personal — no tourist traps, just real people and raw beauty. Highly recommend Drifter!",
  },
];

export default function TestimonialCarousel() {
  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    breakpoints: {
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 20 },
      },
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 16 },
      },
    },
    slides: { perView: 1, spacing: 12 },
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4"
    >
        <h1 className="font-poppins text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 pt-12">
          What Drifters Are Saying
      </h1>
      <div ref={sliderRef} className="keen-slider">
        {testimonials.map((t, index) => (
          <div key={index} className="keen-slider__slide">
            <div className="bg-white rounded-3xl shadow-md p-6 m-3 h-full flex flex-col justify-between border border-gray-100">
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.location}</p>
                </div>
              </div>

              {/* Testimonial */}
              <p className="text-gray-700 italic flex-grow">“{t.text}”</p>

              {/* Stars */}
              <div className="mt-4 flex gap-1 text-yellow-400">
                {Array(t.rating)
                  .fill(0)
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
