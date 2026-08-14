import { Gift, Medal } from "lucide-react";
import SectionHeading from "./SectionHeading";

const HADIAH = [
 
  {
    icon: Medal,
    title: "Hadiah Menarik",
    description: "Bingkisan untuk tiap pemenang",
    tone: "bg-red-100 text-merah-600",
    tilt: "rotate-1",
  },
  {
    icon: Gift,
    title: "Doorprize",
    description: "Buat peserta & penonton",
    tone: "bg-langit/15 text-langit",
    tilt: "-rotate-1",
  },
];

export default function ExtraActivities() {
  return (
    <section className="px-5">
      <SectionHeading
        label="Yang ditunggu-tunggu"
        title="Hadiah & Doorprize"
        tilt="rotate-1"
      />

      <div className="space-y-3">
        {HADIAH.map(({ icon: Icon, title, description, tone, tilt }) => (
          <div
            key={title}
            className={`kartu !p-4 ${tilt} flex items-center gap-4 transition-transform duration-300 hover:rotate-0 hover:-translate-y-0.5`}
          >
            <div
              className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tone}`}
            >
              <Icon size={21} strokeWidth={2} />
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold text-gray-800">
                {title}
              </h4>

              <p className="mt-0.5 text-xs text-gray-500">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
