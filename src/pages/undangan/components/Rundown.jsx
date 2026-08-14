import { Sun, Sunset, Trophy } from "lucide-react";
import SectionHeading from "./SectionHeading";

const RUNDOWN_ITEMS = [
  {
    icon: Sun,
    time: "07.00",
    title: "Sesi Pagi",
    description:
      "Lomba dimulai. Peserta harap datang lebih awal untuk registrasi ulang di meja panitia.",
    tone: "bg-amber-500",
  },
  {
    icon: Sunset,
    time: "15.30",
    title: "Sesi Sore",
    description:
      "Lomba dilanjutkan sampai seluruh kategori selesai bertanding.",
    tone: "bg-sky-500",
  },
  {
    icon: Trophy,
    time: "Selesai",
    title: "Pengumuman & Bagi Hadiah",
    description:
      "Penyerahan hadiah untuk para juara, dilanjutkan ramah tamah bersama warga.",
    tone: "bg-red-600",
  },
];

export default function Rundown() {
  return (
    <section className="px-5">
      <SectionHeading label="Susunan acara" title="Jadwal Lomba" />

      <div className="relative">
        {/* Garis waktu putus-putus, bukan garis lurus tegas */}
        <div className="absolute bottom-6 left-6 top-6 w-0.5 border-l-2 border-dashed border-red-200" />

        <div className="space-y-5">
          {RUNDOWN_ITEMS.map(
            ({ icon: Icon, time, title, description, tone }, i) => (
              <div key={title} className="relative flex items-start gap-4">
                <div
                  className={`relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-white shadow-sticker ${tone} ${
                    i % 2 === 0 ? "-rotate-3" : "rotate-3"
                  }`}
                >
                  <Icon size={19} strokeWidth={2.2} />
                </div>

                <div
                  className={`kartu flex-1 !p-4 ${
                    i % 2 === 0 ? "rotate-1" : "-rotate-1"
                  } transition-transform duration-300 hover:rotate-0`}
                >
                  <span className="inline-block rounded-full bg-krem-100 px-2.5 py-0.5 font-display text-[11px] font-semibold text-red-600">
                    {time} WIB
                  </span>

                  <h4 className="mt-2 font-display text-sm font-semibold text-gray-800">
                    {title}
                  </h4>

                  <p className="mt-1 text-xs leading-relaxed text-gray-500">
                    {description}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
