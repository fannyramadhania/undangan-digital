import anakLariCewek from "../../../assets/anak-lari-cewek.png";
import anakLariCowok from "../../../assets/anak-lari-cowok.png";
import HeroSection from "./HeroSection";
import GuestSection from "./GuestSection";
import EventDetails from "./EventDetails";
import Countdown from "./Countdown";
import LombaList from "./LombaList";
import Rundown from "./Rundown";
import ExtraActivities from "./ExtraActivities";

export default function InvitationCard({ guestName }) {
  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2.5rem] bg-krem-50 shadow-[0_25px_80px_rgba(180,35,24,0.25)] animate-pop-in">
      <HeroSection />

      <GuestSection guestName={guestName} />

      <div className="mt-10 space-y-12 pb-4">
        <EventDetails />

        <LombaList />

        <Rundown />

        <ExtraActivities />

        <Countdown />
      </div>

      {/* Penutup */}
      <div className="relative mt-12 overflow-hidden bg-red-600 px-6 pb-4 pt-10 text-center">
        {/* Tepi atas bergelombang agar sambungannya luwes */}
        <svg
          aria-hidden="true"
          viewBox="0 0 500 60"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 -top-px h-10 w-full text-krem-50"
        >
          <path
            fill="currentColor"
            d="M0,0 L500,0 L500,28 C410,50 340,10 250,35 C160,60 90,-10 0,30 Z"
          />
        </svg>

        <div className="relative">
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/90">
            Yang penting bukan menang atau kalah, tapi seru-seruannya bareng
            warga. Sampai jumpa di lapangan!
          </p>

          <p className="mt-4 font-display text-3xl font-bold text-white animate-wiggle">
            Merdeka!
          </p>

          {/* Dua anak berlari menutup undangan */}
          <div className="mt-2 flex items-end justify-center gap-2">
            <img
              src={anakLariCewek}
              alt=""
              aria-hidden="true"
              className="-mb-4 w-24 -rotate-6 object-contain animate-jog sm:w-28"
            />

            <img
              src={anakLariCowok}
              alt=""
              aria-hidden="true"
              className="-mb-4 w-24 rotate-6 object-contain animate-jog delay-300 sm:w-28"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
