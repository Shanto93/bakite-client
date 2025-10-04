import React from "react";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";
import logo from "../../assets/Bakite.jpg"

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Column 1: পণ্য (Products) */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">পণ্য</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  ক্রেডিট কার্ড করে
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  লোন
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  মোবাইলব্যাংকের জন্য
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  ক্রেডিটর জন্য
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: কোম্পানি (Company) */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">কোম্পানি</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  টিম
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  পার্টনার
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: আইন (Legal) */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">আইন</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  গোপনীয়তা নীতি
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 transition hover:text-[#008585]"
                >
                  সেবার শর্তাবলী
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: যোগাযোগ (Contact) */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-gray-900">যোগাযোগ</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-600">
                <Phone className="h-4 w-4" />
                <a
                  href="tel:+8801XXXXXXXXX"
                  className="transition hover:text-[#008585]"
                >
                  +880 1XXX-XXXXXX
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-600">
                <Mail className="h-4 w-4" />
                <a
                  href="mailto:hello@bakite.com"
                  className="transition hover:text-[#008585]"
                >
                  hello@bakite.com
                </a>
              </li>
            </ul>

            {/* Social Media Icons */}
            <div className="mt-4 flex gap-2">
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D1F0F0] text-[#008585] transition hover:bg-[#008585] hover:text-white"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D1F0F0] text-[#008585] transition hover:bg-[#008585] hover:text-white"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D1F0F0] text-[#008585] transition hover:bg-[#008585] hover:text-white"
                aria-label="Twitter/X"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D1F0F0] text-[#008585] transition hover:bg-[#008585] hover:text-white"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-8 md:flex-row">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#008585]">
              {/* Replace with your actual logo */}
              <svg
                className="h-6 w-6 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-[#008585]">বাকিতে</span>
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600">
            © 2025 BakiTe. সর্বস্বত্ব সংরক্ষিত
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
