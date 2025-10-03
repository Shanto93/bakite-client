// components/ShopDetails.js
import React from 'react';
import { FiSearch, FiMapPin } from 'react-icons/fi';
import { FaChevronRight } from 'react-icons/fa';
import MapComponent from './MapComponent';

const ShopDetails = () => {
    const locations = ["ঢাকা", "খুলনা", "সিলেট", "রাজশাহী", "চট্টগ্রাম"];

    return (
        <section className="bg-white py-12 md:py-20 font-sans">
            <div className="container mx-auto px-4 text-center max-w-4xl">
                
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                    আপনার কাছাকাছি দোকান খুঁজুন
                </h2>

                {/* Search Bar */}
                <div className="flex justify-center mb-6">
                    <div className="relative w-full max-w-2xl">
                        <FiSearch className="absolute top-1/2 left-4 -translate-y-1/2 text-gray-400 text-xl" />
                        <input
                            type="text"
                            placeholder="দোকান খুঁজুন..."
                            className="w-full pl-12 pr-28 py-3 border-2 border-gray-200 rounded-lg focus:outline-none focus:border-[#0aa9a2] transition-colors"
                        />
                        <button className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#0aa9a2] text-white font-semibold px-6 py-2 rounded-md hover:bg-[#08918a] transition-colors">
                            খুঁজুন
                        </button>
                    </div>
                </div>

                {/* Location Tags */}
                <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
                    {locations.map((location) => (
                        <button key={location} className="flex items-center gap-2 bg-gray-100 text-gray-700 font-medium px-4 py-2 rounded-full border border-gray-200 hover:bg-[#0aa9a2]/10 hover:text-[#0aa9a2] transition-colors">
                            <FiMapPin />
                            <span>{location}</span>
                        </button>
                    ))}
                </div>

                {/* View All Shops Button */}
                <div className="mb-10">
                    <button className="flex items-center gap-2 mx-auto text-[#0aa9a2] font-semibold group">
                        <span>সব দোকান দেখুন</span>
                        <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                    </button>
                </div>

                {/* Map Section */}
                <div className="w-full shadow-lg rounded-lg">
                    <MapComponent />
                </div>

            </div>
        </section>
    );
};

export default ShopDetails;
