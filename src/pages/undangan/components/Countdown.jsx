import { useEffect, useState } from "react";
import { CalendarHeart } from "lucide-react";

const TARGET_DATE = new Date(2026, 7, 17, 8, 0, 0);

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

function TimeBox({ value, label }) {
  const padded = String(value).padStart(2, "0");

  return (
    <div className="flex flex-1 flex-col items-center">
      <div className="relative w-full overflow-hidden rounded-2xl border border-white/20 bg-white/10 px-1 py-3 backdrop-blur-sm">
        {/* Kilau di bagian atas kotak */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white/25 to-transparent" />

        <span
          key={padded}
          className="relative block text-center text-2xl font-black tabular-nums tracking-tight text-white drop-shadow-sm animate-scale-pop sm:text-3xl"
        >
          {padded}
        </span>
      </div>

      <p className="mt-2 text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">
        {label}
      </p>
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
    <section className="mx-5">
      <div className="mb-5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600">
          Hitung Mundur
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Menuju Hari Acara
        </h3>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-red-600 to-red-500 p-5 shadow-lg shadow-red-500/25 sm:p-6">
        {/* Lingkaran dekoratif */}
        <div className="pointer-events-none absolute -right-10 -top-12 h-32 w-32 rounded-full bg-white/10" />
        <div className="pointer-events-none absolute -bottom-14 -left-10 h-32 w-32 rounded-full bg-white/5" />

        {time.isOver ? (
          <div className="relative py-4 text-center">
            <CalendarHeart
              size={28}
              strokeWidth={1.8}
              className="mx-auto text-white animate-bounce-gentle"
            />

            <p className="mt-3 text-lg font-black uppercase tracking-[0.15em] text-white">
              Acara Telah Dimulai
            </p>

            <p className="mt-1 text-xs text-white/80">
              Terima kasih sudah hadir dan memeriahkan!
            </p>
          </div>
        ) : (
          <>
            <div className="relative flex items-start gap-2 sm:gap-3">
              <TimeBox value={time.days} label="Hari" />
              <TimeBox value={time.hours} label="Jam" />
              <TimeBox value={time.minutes} label="Menit" />
              <TimeBox value={time.seconds} label="Detik" />
            </div>

            <div className="relative mt-5 flex items-center justify-center gap-3">
              <span className="h-px w-10 bg-white/30" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                17 Agustus 2026
              </p>
              <span className="h-px w-10 bg-white/30" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
