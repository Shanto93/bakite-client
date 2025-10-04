import Image from "next/image";
import qrCode from "./../../../assets/qr-code/fbc9c7e3-3e7c-4f99-9eaf-f8d843582d70.jpg";
import mobileImage from "./../../../assets/Home/mobile-image.png";
import { CiShop } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="h-auto bg-gradient-to-r from-[#0aa9a2]/20 via-white/30 via-25% to-[#0aa9a2]/40 font-sans md:h-screen">
      <div className="container mx-auto flex flex-col items-center px-4 py-8 sm:px-6 md:flex-row md:px-6 md:py-12 md:pl-16">
        {/* Left Column: Text Content */}
        <div className="w-full text-center md:w-1/2 md:text-left">
          <h1 className="mb-4 text-2xl font-extrabold leading-tight text-gray-800 sm:text-3xl md:text-4xl">
            আপনার বাকির খাতা <br /> এখন ফোনে—বিশ্বাস <br /> হোক আরও শক্ত
          </h1>
          <p className="mb-6 text-sm text-gray-600 sm:text-base md:mb-8 md:text-md">
            দোকানদার আর ক্রেতার জন্য নিরাপদ, সহজ এবং স্মার্ট খাতা ব্যবস্থাপনা।
          </p>

          {/* Buttons - Stacked on Mobile */}
          <div className="mb-6 flex flex-col gap-3 md:mb-8 md:flex-row md:justify-start md:gap-4">
            <button className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0aa9a2] px-5 py-3 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-[#08918a] sm:text-base md:w-auto md:px-6">
              <IoDownloadOutline className="text-lg sm:text-xl" />
              <span>কনজিউমার অ্যাপ ডাউনলোড</span>
            </button>
            <button className="w-full rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-800 shadow-sm transition-transform hover:scale-105 hover:bg-gray-100 sm:text-base md:w-auto md:px-6">
              দোকানদারদের জন্য
            </button>
          </div>

          {/* QR Code Card */}
          <div className="flex justify-center md:justify-start">
            <div className="flex max-w-md flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-[#0aa9a2]/20 p-4 shadow-sm backdrop-blur-sm sm:flex-row sm:gap-4">
              <Image
                src={qrCode}
                alt="QR Code"
                width={80}
                height={80}
                className="sm:h-[100px] sm:w-[100px]"
              />
              <div className="space-y-1 text-center sm:space-y-2 sm:text-left">
                <CiShop className="mx-auto text-xl sm:mx-0" />
                <h3 className="text-sm font-bold text-[#0aa9a2] sm:text-base md:text-md">
                  দোকানদারদের জন্য
                </h3>
                <p className="text-xs text-gray-600 sm:text-sm">
                  অ্যাপটি ডাউনলোড করার জন্য স্ক্যান করুন
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Mockups */}
        <div className="relative mt-8 flex w-full justify-center md:mt-0 md:w-1/2">
          {/* Badges - Repositioned for Mobile */}
          <div className="absolute left-2 top-4 z-10 flex items-center gap-2 rounded-full bg-white px-3 py-2 shadow-xl sm:left-4 sm:px-4 md:left-36 md:top-6">
            <CiShop className="text-base sm:text-lg md:text-xl" />
            <span className="text-xs font-semibold text-gray-700 sm:text-sm">
              ১৫০০+ দোকান
            </span>
          </div>

          <div className="absolute bottom-4 left-2 z-10 flex w-[180px] items-center gap-2 rounded-full bg-white px-3 py-2 shadow-xl sm:w-[220px] sm:px-4 md:bottom-16 md:left-36 md:w-[250px]">
            <FaUserFriends className="text-base sm:text-lg md:text-xl" />
            <span className="text-xs font-semibold text-gray-700 sm:text-sm">
              ১০ হাজার+ ব্যবহারকারী
            </span>
          </div>

          {/* Phone Images - Scaled Down for Mobile */}
          <div className="relative ml-20 md:ml-0 h-[350px] w-[250px] sm:h-[450px] sm:w-[280px] md:h-[500px] md:w-[300px]">
            <div className="absolute -translate-x-12 transform sm:-translate-x-16 md:-translate-x-40 md:-translate-y-0">
              <Image
                src={mobileImage}
                alt="App Screenshot 2"
                width={160}
                height={220}
                className="drop-shadow-2xl sm:h-[260px] sm:w-[190px] md:h-[390px] md:w-[240px]"
              />
            </div>
            <div className="absolute translate-x-12 translate-y-10 transform sm:translate-x-16 sm:translate-y-12 md:translate-x-30 md:translate-y-16">
              <Image
                src={mobileImage}
                alt="App Screenshot 1"
                width={160}
                height={220}
                className="drop-shadow-2xl sm:h-[260px] sm:w-[190px] md:h-[390px] md:w-[240px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}