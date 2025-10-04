"use client";

import React from "react";
import { motion } from "framer-motion";
import partners from "../../../../public/data/partners.json";

const OurPartners = () => {
  return (
    <section className="bg-[#008585] py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-3xl md:text-3xl">
            আমাদের পার্টনার সমূহ
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-gray-200 md:text-md">
            বাংলাদেশের শীর্ষস্থানীয় প্রতিষ্ঠানগুলির দ্বারা বিশ্বস্ত
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="w-full overflow-hidden">
          <motion.div
            className="inline-flex flex-nowrap"
            animate={{
              x: [0, -100 * partners.length * 0.5],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 10,
                ease: "linear",
              },
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* Render the list of partners twice for a seamless loop */}
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className="mx-4 flex-shrink-0">
                <div className="flex h-[100px] w-[250px] items-center justify-center rounded-xl bg-white p-6 shadow-md">
                  <span className="text-2xl font-bold tracking-widest text-gray-700">
                    LOGO<span className="font-light">IPSUM</span>
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurPartners;
