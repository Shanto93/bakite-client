"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote: "আগে খাতায় রাখতাম, এখন ফোনে রাখি—সময় বাঁচে।",
    name: "মো. করিম",
    location: "দোকানদার, চট্টগ্রাম",
    avatarInitial: "মক",
    rating: 5,
  },
  {
    quote: "লেনদেন ট্র্যাক করা এখন একদম সহজ।",
    name: "রাহেলা আক্তার",
    location: "ক্রেতা, ঢাকা",
    avatarInitial: "রাআ",
    rating: 4,
  },
  {
    quote: "অফলাইনে কাজ করে—এটাই সবচেয়ে ভালো লাগে।",
    name: "আব্দুল মালেক",
    location: "দোকানদার, কুমিল্লা",
    avatarInitial: "আম",
    rating: 5,
  },
  {
    quote: "আমার বাকি সব এখন ফোন থেকেই ম্যানেজ করি।",
    name: "সুমন বড়ুয়া",
    location: "দোকানদার, সিলেট",
    avatarInitial: "সব",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex justify-center text-yellow-400 mb-4">
    {Array.from({ length: rating }).map((_, i) => (
      <FaStar key={i} />
    ))}
  </div>
);

const WhatOurCustomerSay = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoplayInterval = useRef<NodeJS.Timeout | null>(null); // Ref to hold the interval ID

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const startAutoplay = useCallback(() => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
    autoplayInterval.current = setInterval(handleNext, 5000); // Change slide every 5 seconds
  }, [handleNext]);

  const stopAutoplay = () => {
    if (autoplayInterval.current) {
      clearInterval(autoplayInterval.current);
    }
  };

  // Set up and clean up the interval
  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, [startAutoplay]);

  return (
    <section
      className="bg-white py-16 md:py-24"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          আমাদের গ্রাহকরা কী বলছেন
        </h2>
        <p className="text-gray-600 mt-2 mb-12">
          হাজারো ব্যবসায়ী তাদের ব্যবসা এগিয়ে নিয়ে যাচ্ছেন
        </p>

        {/* Testimonial Cards Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${
                  (100 / testimonials.length) * currentIndex
                }%)`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 lg:w-1/4 sm:w-1/2 p-4"
                >
                  <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-md h-full flex flex-col justify-between">
                    <div className="flex-grow">
                      <div className="flex justify-start text-8xl text-[#0aa9a2] font-serif mb-4">
                        “
                      </div>
                      <StarRating rating={testimonial.rating} />
                      <p className="text-lg text-gray-800 mb-6">
                        {testimonial.quote}
                      </p>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-[#0aa9a2] text-white rounded-md w-12 h-12 flex items-center justify-center font-bold text-lg mr-4">
                        {testimonial.avatarInitial}
                      </div>
                      <div>
                        <p className="font-bold text-left">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-500 text-left">
                          {testimonial.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="flex items-center justify-center mt-8 gap-4">
          <button
            onClick={handlePrev}
            className="p-2 border rounded-md text-gray-400 hover:bg-gray-100 hover:text-[#0aa9a2] transition"
          >
            <FaChevronLeft size={20} />
          </button>

          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-10 ${
                  currentIndex === index
                    ? "w-6 bg-[#0aa9a2]"
                    : "w-2 bg-gray-300"
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 border rounded-md text-gray-400 hover:bg-gray-100 hover:text-[#0aa9a2] transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatOurCustomerSay;
