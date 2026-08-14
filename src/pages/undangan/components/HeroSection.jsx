import anakLompat from "../../../assets/anak-lompat.png";
import Confetti from "./Confetti";
import Gapura from "./Gapura";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-merah-500 to-merah-600 px-6 pb-16 pt-8 text-center sm:px-10">
      <Confetti className="opacity-60" />

      {/* Lingkaran lembut sebagai latar, menggantikan blok warna kaku */}
      <div className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-white/10" />
      <div className="pointer-events-none absolute -right-20 top-10 h-40 w-40 rounded-full bg-white/10" />

      <div className="relative">
        <p className="inline-block -rotate-2 rounded-full bg-white/20 px-4 py-1.5 font-display text-xs font-semibold text-white backdrop-blur-sm">
          Undangan Lomba Agustusan
        </p>

        <Gapura className="mx-auto mt-4 w-52 drop-shadow-lg animate-sway sm:w-60" />

        <h1 className="mt-3 font-display text-4xl font-bold leading-[0.95] text-white drop-shadow-sm sm:text-5xl">
          <span className="block -rotate-1">Lomba 17-an</span>

          <span className="mt-1 block rotate-1 text-krem-100">HUT RI Ke-81</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/90">
          Satu hari penuh keseruan dan tawa
        </p>

        {/* Anak melompat kegirangan di pojok, sebagian tertutup gelombang */}
        <img
          src={anakLompat}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-10 right-0 w-14 rotate-6 object-contain animate-bounce-gentle sm:w-16"
        />
      </div>

      {/* Tepi bawah bergelombang supaya peralihannya luwes */}
      <svg
        aria-hidden="true"
        viewBox="0 0 500 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute inset-x-0 -bottom-px h-10 w-full text-krem-50"
      >
        <path
          fill="currentColor"
          d="M0,30 C90,70 160,0 250,25 C340,50 410,10 500,32 L500,60 L0,60 Z"
        />
      </svg>
    </div>
  );
}
