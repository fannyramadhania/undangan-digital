import { useEffect, useState } from "react";
import { CalendarHeart } from "lucide-react";
import anakLariCowok from "../../../assets/anak-lari-cowok.png";
import Confetti from "./Confetti";
import SectionHeading from "./SectionHeading";

// Sabtu, 15 Agustus 2026 — sesi pagi mulai jam 07.00
const TARGET_DATE = new Date(2026, 7, 15, 7, 0, 0);

function getRemaining() {
  const diff = TARGET_DATE.getTime() - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isOver: true };
  }

  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    isOver: false,
  };
}

function TimeBox({ value, label, tilt }) {
  const padded = String(value).padStart(2, "0");

  return (
    <div className="flex flex-1 flex-col items-center">
      <div
        className={`relative w-full overflow-hidden rounded-2xl bg-white/15 px-1 py-3.5 backdrop-blur-sm ${tilt}`}
      >
        {/* Kilau di bagian atas kotak */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />

        <span
          key={padded}
          className="relative block text-center font-display text-2xl font-bold tabular-nums text-white drop-shadow-sm animate-scale-pop sm:text-3xl"
        >
          {padded}
        </span>
      </div>

      <p className="mt-2 text-[11px] text-white/80">{label}</p>
    </div>
  );
}

export default function Countdown() {
  const [time, setTime] = useState(getRemaining);

  useEffect(() => {
    const timer = setInterval(() => setTime(getRemaining()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="px-5">
      <SectionHeading label="Hitung mundur" title="Menuju Hari Lomba" />

      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-merah-600 via-merah-500 to-merah-400 p-5 shadow-sticker sm:p-6">
        <Confetti className="opacity-70" />

        {/* Lingkaran dekoratif */}
        <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-white/5" />

        {/* Anak berlari mengejar hari lomba */}
        <img
          src={anakLariCowok}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-6 -right-4 w-16 rotate-6 object-contain opacity-80 animate-jog sm:w-20"
        />

        {time.isOver ? (
          <div className="relative py-4 text-center">
            <CalendarHeart
              size={28}
              strokeWidth={1.8}
              className="mx-auto text-white animate-bounce-gentle"
            />

            <p className="mt-3 font-display text-xl font-bold text-white">
              Lomba Telah Dimulai!
            </p>

            <p className="mt-1 text-xs text-white/80">
              Terima kasih sudah ikut memeriahkan!
            </p>
          </div>
        ) : (
          <>
            <div className="relative flex items-start gap-2 sm:gap-3">
              <TimeBox value={time.days} label="Hari" tilt="-rotate-2" />
              <TimeBox value={time.hours} label="Jam" tilt="rotate-2" />
              <TimeBox value={time.minutes} label="Menit" tilt="-rotate-2" />
              <TimeBox value={time.seconds} label="Detik" tilt="rotate-2" />
            </div>

            <p className="relative mt-5 text-center font-display text-xs font-semibold text-white/90">
              Sampai jumpa 15 Agustus 2026
            </p>
          </>
        )}
      </div>
    </section>
  );
}
