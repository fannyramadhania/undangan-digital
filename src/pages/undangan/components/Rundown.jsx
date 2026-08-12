import { Handshake, UsersRound } from "lucide-react";
import ribbon2 from "../../../assets/ribbon2.png";
import Decor from "./Decor";

const RUNDOWN_ITEMS = [
  {
    icon: UsersRound,
    title: "Silaturahmi & Kebersamaan",
    description:
      "Menjalin silaturahmi dan menikmati momen kebersamaan bersama seluruh warga.",
  },
  {
    icon: Handshake,
    title: "Tasyakuran",
    description:
      "Bersyukur bersama dan menikmati hidangan dalam suasana penuh kehangatan dan kebersamaan.",
  },
];

export default function Rundown() {
  return (
    <section className="mx-5">
      <div className="relative mb-7 text-center">
        <Decor
          src={ribbon2}
          className="left-1/2 top-1/2 w-52 -translate-x-1/2 -translate-y-1/2 opacity-[0.15]"
        />

        <div className="relative">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600">
            Celebration
          </p>

          <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
            Rangkaian Acara
          </h3>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute bottom-5 left-5 top-5 w-px bg-red-100" />

        <div className="space-y-7">
          {RUNDOWN_ITEMS.map(({ icon: Icon, title, description }) => (
            <div key={title} className="relative flex gap-5">
              <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-[#fffdf9] bg-red-600 text-white shadow-sm">
                <Icon size={17} strokeWidth={2} />
              </div>

              <div className="flex-1 pt-1">
                <h4 className="text-sm font-bold text-gray-900">{title}</h4>

                <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
