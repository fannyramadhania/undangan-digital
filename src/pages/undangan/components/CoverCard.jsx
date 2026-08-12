import { MailOpen } from "lucide-react";
import garudaPancasila from "../../../assets/Untitled_design__1_-removebg-preview.png";
import ribbon from "../../../assets/ribbon.png";
import ribbon2 from "../../../assets/ribbon2.png";
import Decor from "./Decor";

export default function CoverCard({ guestName, onOpen }) {
  return (
    <div className="bg-white rounded-lg shadow-2xl overflow-hidden animate-scale-pop">
      {/* Top ribbon decoration */}
      <div className="relative h-8 bg-gradient-to-r from-red-600 via-red-700 to-red-600 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.3) 10px, rgba(255,255,255,.3) 20px)",
          }}
        ></div>
      </div>

      {/* Main Content */}
      <div className="px-6 sm:px-8 py-10 sm:py-12 text-center relative overflow-hidden">
        {/* Pita sudut */}
        <Decor
          src={ribbon}
          className="-right-7 -top-4 w-20 rotate-12 opacity-40 sm:w-24"
        />
        <Decor
          src={ribbon2}
          flip
          className="-bottom-6 -left-10 w-32 opacity-25 sm:w-36"
        />

        {/* Dirgahayu text */}
        <p className="text-2xl sm:text-3xl font-cursive italic text-gray-600 mb-4 animate-slide-in-down">
          Dirgahayu
        </p>

        {/* Garuda Pancasila */}
        <div className="flex justify-center mb-6">
          <img
            src={garudaPancasila}
            alt="Garuda"
            className="h-16 w-16 object-contain animate-float"
          />
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl font-black text-red-700 mb-2 animate-slide-in-down delay-100">
          REPUBLIK
        </h1>
        <h2 className="text-4xl sm:text-5xl font-black text-red-700 mb-8 animate-slide-in-down delay-200">
          INDONESIA
        </h2>

        {/* Ribbon banner effect */}
        <div className="relative mb-8">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-6 rounded-sm shadow-lg relative animate-slide-in-down delay-300">
            <div className="absolute top-0 left-0 w-0 h-0 border-l-8 border-r-0 border-t-8 border-b-0 border-l-transparent border-t-red-900"></div>
            <div className="absolute top-0 right-0 w-0 h-0 border-l-0 border-r-8 border-t-8 border-b-0 border-r-transparent border-t-red-900"></div>

            <p className="font-bold text-lg">17 Agustus 2025</p>

            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-red-600"></div>
          </div>
        </div>

        {/* 80TH text di atas latar pita */}
        <div className="relative mb-8">
          <Decor
            src={ribbon2}
            className="left-1/2 top-1/2 w-48 -translate-x-1/2 -translate-y-1/2 opacity-25 sm:w-56"
          />

          <p className="relative text-5xl sm:text-6xl font-black text-red-700 animate-scale-pop delay-400">
            81<span className="text-2xl align-super">TH</span>
          </p>
        </div>

        {/* Invitation message */}
        <p className="text-sm sm:text-base text-gray-700 mb-2 animate-slide-in-down delay-200">
          Undangan Peringatan Hari
        </p>
        <p className="text-sm sm:text-base text-gray-700 mb-6 animate-slide-in-down delay-300">
          Kemerdekaan Indonesia ke-80
        </p>

        {/* Divider */}
        <div className="border-t-2 border-red-300 my-6"></div>

        {/* Guest info */}
        <p className="text-sm text-gray-600 mb-2 animate-slide-in-down delay-400">
          Kepada
        </p>
        <p className="text-xl sm:text-2xl font-bold text-red-700 mb-8 animate-scale-pop delay-500">
          {guestName}
        </p>

        {/* Button */}
        <button
          onClick={onOpen}
          className="flex mx-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-8 py-3 font-bold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:from-red-700 hover:to-red-800 animate-bounce-gentle"
        >
          <MailOpen size={18} strokeWidth={2} />
          Buka Undangan
        </button>
      </div>

      {/* Bottom ribbon decoration */}
      <div className="h-8 bg-gradient-to-r from-red-600 via-red-700 to-red-600 flex items-center justify-center">
        <div className="w-full text-center">
          <span className="text-white text-sm"></span>
        </div>
      </div>
    </div>
  );
}
