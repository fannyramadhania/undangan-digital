import { MailOpen } from "lucide-react";
import anakLariCewek from "../../../assets/anak-lari-cewek.png";
import anakLariCowok from "../../../assets/anak-lari-cowok.png";
import Confetti from "./Confetti";
import Gapura from "./Gapura";

export default function CoverCard({ guestName, onOpen }) {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-krem-50 shadow-[0_25px_60px_-20px_rgba(180,35,24,0.5)] animate-pop-in">
      <Confetti />

      {/* Gapura bambu sebagai gerbang pembuka */}
      <div className="px-4 pt-6">
        {/* Isi gapura ikut bergoyang bersama gerbangnya */}
        <Gapura className="mx-auto w-full max-w-[280px] animate-sway" />
      </div>

      <div className="relative px-6 pb-8 text-center sm:px-8">
        <p className="sticker-label -rotate-2 animate-pop-in delay-100">
          Undangan Warga RW 05
        </p>

        <h1 className="mt-4 font-display text-[2.6rem] font-bold leading-[0.95] text-merah-600 sm:text-5xl">
          <span className="block -rotate-2 animate-pop-in delay-200">Ayo</span>

          <span className="mt-1 block rotate-1 animate-pop-in delay-300">
            Ikut Lomba!
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-[15rem] text-sm leading-relaxed text-gray-600 animate-pop-in delay-400">
          Meriahkan HUT Kemerdekaan RI ke-81 bareng warga
        </p>

        {/* Tanggal bergaya stiker miring */}
        <div className="mt-5 inline-block rotate-2 rounded-2xl bg-red-600 px-5 py-2.5 shadow-sticker animate-pop-in delay-500">
          <p className="font-display text-base font-semibold text-white">
            Sabtu, 15 Agustus 2026
          </p>
        </div>

        {/* Garis putus-putus, lebih ramah dibanding garis tegas */}
        <div className="my-6 border-t-2 border-dashed border-krem-200" />

        <p className="text-xs text-gray-500">Kepada</p>

        <p className="mt-1 font-display text-2xl font-bold text-gray-800 animate-pop-in delay-600 sm:text-3xl">
          {guestName}
        </p>

        <button
          onClick={onOpen}
          className="group relative z-10 mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-8 py-3.5 font-display text-base font-semibold text-white shadow-sticker transition-transform duration-300 hover:-translate-y-1 hover:rotate-1 active:scale-95 animate-bounce-gentle"
        >
          <MailOpen size={18} strokeWidth={2.2} />
          Buka Undangan
        </button>

        {/* Dua anak berlari menutup sampul, sedikit menjorok ke tepi kartu */}
        <div className="pointer-events-none -mx-4 -mb-8 mt-1 flex items-end justify-between">
          <img
            src={anakLariCewek}
            alt=""
            aria-hidden="true"
            className="w-20 -rotate-6 object-contain animate-jog sm:w-24"
          />

          <img
            src={anakLariCowok}
            alt=""
            aria-hidden="true"
            className="w-20 rotate-6 object-contain animate-jog delay-300 sm:w-24"
          />
        </div>
      </div>
    </div>
  );
}
