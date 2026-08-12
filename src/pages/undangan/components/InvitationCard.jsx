import { Sparkles } from "lucide-react";
import handholdribbon from "../../../assets/merdekaa.png";
import HeroSection from "./HeroSection";
import GuestSection from "./GuestSection";
import EventDetails from "./EventDetails";
import Countdown from "./Countdown";
import Rundown from "./Rundown";
import ExtraActivities from "./ExtraActivities";

export default function InvitationCard({ guestName }) {
  return (
    <div className="relative mx-auto w-full max-w-xl overflow-hidden rounded-[2rem] bg-[#fffdf9] shadow-[0_25px_80px_rgba(0,0,0,0.15)] animate-slide-in-down">
      {/* Top Decorative Line */}
      <div className="h-1.5 w-full bg-gradient-to-r from-red-600 via-red-500 to-red-700" />

      <HeroSection />

      <GuestSection guestName={guestName} />

      <div className="space-y-8 mt-10">
        <EventDetails />

        <Rundown />

        <ExtraActivities />
        <Countdown />

        {/* Closing */}
      </div>
      <div className=" pt-2 mt-10 text-center ">
        <p className="text-2xl font-black uppercase tracking-[0.2em] text-red-700">
          Merdeka!
        </p>

        <img
          src={handholdribbon}
          alt="Kepalan tangan menggenggam pita merah putih"
          className="mx-auto mt-2 -mb-6 object-contain animate-float "
        />
      </div>
    </div>
  );
}
