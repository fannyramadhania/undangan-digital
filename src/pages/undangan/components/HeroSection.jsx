import garudaPancasila from "../../../assets/Untitled_design__1_-removebg-preview.png";
import ribbon from "../../../assets/ribbon.png";
import ribbon2 from "../../../assets/ribbon2.png";
import Decor from "./Decor";

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden px-6 pb-10 pt-10 text-center sm:px-10">
      {/* Decorative circles */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full bg-red-50" />
      <div className="pointer-events-none absolute -right-16 top-20 h-32 w-32 rounded-full bg-red-50" />

      {/* Pita sudut */}
      <Decor
        src={ribbon}
        className="-right-8 -top-6 w-24 rotate-12 opacity-40 sm:-right-6 sm:w-28"
      />
      <Decor
        src={ribbon}
        flip
        className="-bottom-10 -left-10 w-24 -rotate-12 opacity-30 sm:w-28"
      />

      <div className="relative">
        <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.35em] text-red-600">
          Undangan Spesial
        </p>

        <img
          src={garudaPancasila}
          alt="Garuda Pancasila"
          className="mx-auto mb-5 h-16 w-16 object-contain animate-float"
        />

        <p className="text-sm font-medium tracking-[0.3em] text-gray-500">
          DIRGAHAYU
        </p>

        {/* Angka 80 di atas latar pita */}
        <div className="relative mt-2">
          <Decor
            src={ribbon2}
            className="left-1/2 top-1/2 w-56 -translate-x-1/2 -translate-y-1/2 opacity-25 sm:w-64"
          />

          <h1 className="relative text-5xl font-black tracking-tight text-red-700 drop-shadow-sm sm:text-6xl">
            81
          </h1>
        </div>

        <p className="mt-1 text-xs font-bold uppercase tracking-[0.3em] text-gray-500">
          Republik Indonesia
        </p>

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-red-200" />
          <span className="h-2 w-2 rotate-45 bg-red-600" />
          <span className="h-px w-12 bg-red-200" />
        </div>
      </div>
    </div>
  );
}
