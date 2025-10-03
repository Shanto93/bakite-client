import React from "react";
import { CiShop } from "react-icons/ci";
import { FaUserGroup } from "react-icons/fa6";
import { TbFileDollar } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";

const successData = [
  {
    icon: <CiShop />,
    number: "১,১৪০+",
    label: "অ্যাক্টিভ দোকানসমূহ",
    description: "যাচাইকৃত স্থানীয় ব্যবসা",
  },
  {
    icon: <FaUserGroup />,
    number: "২৪ হাজার+",
    label: "সক্রিয় ক্রেতা",
    description: "বিশ্বস্ত কমিউনিটি সদস্য",
  },
  {
    icon: <TbFileDollar />,
    number: "২৫ লক্ষ+",
    label: "মোট লেনদেন",
    description: "ক্রেডিট লেনদেন সম্পন্ন হয়েছে",
  },
  {
    icon: <IoIosNotificationsOutline />,
    number: "৫০ হাজার+",
    label: "পেমেন্ট রিমাইন্ডার",
    description: "সফলভাবে পাঠানো হয়েছে",
  },
];

const OurSuccess = () => {
  return (
    <section className="bg-[#0aa9a2]/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 mb-12">
          আমাদের সফলতা
        </h2>

        {/* Grid of Success Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {successData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2"
            >
              <div className="flex justify-center items-center mb-4">
                <div className="bg-[#E0F7FA] text-[#0aa9a2] text-3xl rounded-full w-16 h-16 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {item.number}
              </h3>
              <p className="text-base font-semibold text-gray-700 mt-2">
                {item.label}
              </p>
              <p className="text-sm text-gray-500 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurSuccess;
