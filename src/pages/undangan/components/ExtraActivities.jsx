import { Camera, Gift, Sparkles } from "lucide-react";

const ACTIVITIES = [
  {
    icon: Gift,
    title: "Doorprize",
    description: "Siapa tahu kamu yang beruntung!",
    hoverBorder: "hover:border-amber-100",
    iconClass: "bg-amber-50 text-amber-600",
  },
  {
    icon: Camera,
    title: "Photobooth",
    description: "Abadikan momen bersama.",
    hoverBorder: "hover:border-blue-100",
    iconClass: "bg-blue-50 text-blue-600",
  },
];

export default function ExtraActivities() {
  return (
    <section>
      <div className="mb-5 flex items-center gap-4">
        <div className="h-px flex-1 bg-gray-100" />

        <div className="flex items-center gap-2">
          <Sparkles size={14} className="text-red-500" strokeWidth={1.8} />

          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-400">
            Special Moments
          </p>
        </div>

        <div className="h-px flex-1 bg-gray-100" />
      </div>

      <div className="grid grid-cols-2 gap-3">
        {ACTIVITIES.map(
          ({ icon: Icon, title, description, hoverBorder, iconClass }) => (
            <div
              key={title}
              className={`group rounded-2xl border border-gray-100 bg-white p-5 text-center transition-all hover:-translate-y-0.5 hover:shadow-md ${hoverBorder}`}
            >
              <div
                className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl transition-transform group-hover:scale-105 ${iconClass}`}
              >
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <h4 className="mt-3 text-sm font-bold text-gray-900">{title}</h4>

              <p className="mt-1 text-[11px] leading-relaxed text-gray-500">
                {description}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  );
}
