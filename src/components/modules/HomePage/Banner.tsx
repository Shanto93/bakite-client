import Image from "next/image";
import qrCode from "./../../../assets/qr-code/fbc9c7e3-3e7c-4f99-9eaf-f8d843582d70.jpg"
import mobileImage from "./../../../assets/Home/mobile-image.png"
import { CiShop } from "react-icons/ci";
import { IoDownloadOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-[#0aa9a2]/20 via-white/30 via-25% to-[#0aa9a2]/40 font-sans h-screen">
    {/* <section className="bg-gradient-to-br from-[#e0f7fa] to-white font-sans"> */}
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:pl-16">
        {/* Left Column: Text Content */}
        <div className="md:w-1/2 w-full text-center md:text-left">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 leading-tight mb-4">
            আপনার বাকির খাতা <br /> এখন ফোনে—বিশ্বাস <br /> হোক আরও শক্ত
          </h1>
          <p className="text-md text-gray-600 mb-8">
            দোকানদার আর ক্রেতার জন্য নিরাপদ, সহজ এবং স্মার্ট খাতা ব্যবস্থাপনা।
          </p>

          <div className="md:flex justify-center md:justify-start gap-4 mb-8">
            <button className="flex items-center gap-2 bg-[#0aa9a2] text-white text-md font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#08918a] transition-transform transform hover:scale-105">
              <IoDownloadOutline className="text-md"/>

              <span>কনজিউমার অ্যাপ ডাউনলোড</span>
            </button>
            <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-lg border border-gray-300 shadow-sm hover:bg-gray-100 transition-transform transform hover:scale-105">
              দোকানদারদের জন্য
            </button>
          </div>

          <div className="md:flex justify-center md:justify-start ">
            <div className="bg-[#0aa9a2]/20 backdrop-blur-sm border border-gray-200 rounded-2xl p-4 flex items-center max-w-md gap-4 shadow-sm">
              <Image src={qrCode} alt="QR Code" width={100} height={100} />
              <div className="space-y-2">
                <CiShop className="text-xl" />
                <h3 className="font-bold text-[#0aa9a2] md:text-md">
                  দোকানদারদের জন্য
                </h3>
                <p className="text-gray-600 text-sm">
                  অ্যাপটি ডাউনলোড করার জন্য স্ক্যান করুন
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Phone Mockups */}
        <div className="md:w-1/2 w-full mt-12 md:mt-0 relative flex justify-center">
          {/* Badges */}
          <div className="absolute top-6 md:left-36 z-10 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-xl">
            <CiShop className="text-xl"/>
            <span className="font-semibold text-gray-700">১৫০০+ দোকান</span>
          </div>

          <div className="absolute w-[250px] bottom-0 left-0 md:left-36 md:bottom-16 z-10 bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-xl">
            <FaUserFriends className="text-xl"/>
            <span className="font-semibold text-gray-700">
              ১০ হাজার+ ব্যবহারকারী
            </span>
          </div>

          {/* Phone Images */}
          <div className=" h-[500px] w-[300px]">
            <div className="absolute transform md:-translate-x-40 md:-translate-y-0">
              <Image
                src={mobileImage}
                alt="App Screenshot 2"
                width={220}
                height={300}
                className="drop-shadow-2xl"
              />
            </div>
            <div className="absolute transform md:translate-x-30 md:translate-y-16">
              <Image
                src={mobileImage}
                alt="App Screenshot 1"
                width={220}
                height={300}
                className="drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
