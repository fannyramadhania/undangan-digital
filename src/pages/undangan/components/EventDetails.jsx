import { CalendarDays, Clock3, MapPin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const DETAILS = [
  {
    icon: CalendarDays,
    label: "Tanggal",
    value: "Sabtu, 15 Agustus 2026",
    note: null,
    tilt: "-rotate-1",
    iconClass: "bg-red-100 text-red-600",
  },
  {
    icon: Clock3,
    label: "Waktu",
    value: "Sesi Pagi 07.00 & Sesi Sore 15.30",
    note: "Keduanya berlangsung sampai selesai. Peserta harap hadir 15 menit sebelum lomba dimulai.",
    tilt: "rotate-1",
    iconClass: "bg-bambu/20 text-bambu",
  },
  {
    icon: MapPin,
    label: "Lokasi",
    value: "Lapangan Volly Malaka Sari",
    note: "Jl. Delima V RT.10/RW.5, Malaka Sari, Duren Sawit, Jakarta Timur 13470",
    tilt: "-rotate-1",
    iconClass: "bg-langit/15 text-langit",
    action: {
      text: "Lihat Lokasi",
      href: "https://maps.google.com/?q=Lapangan+Volly+Malaka+Sari+Duren+Sawit",
    },
  },

];

export default function EventDetails() {
  return (
    <section className="px-5">
      <SectionHeading label="Catat tanggalnya" title="Detail Lomba" />

      <div className="space-y-4">
        {DETAILS.map(
          ({ icon: Icon, label, value, note, tilt, iconClass, action }) => (
            <div
              key={label}
              className={`kartu ${tilt} transition-transform duration-300 hover:rotate-0 hover:-translate-y-0.5`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${iconClass}`}
                >
                  <Icon size={20} strokeWidth={2} />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs text-gray-400">{label}</p>

                  <h4 className="mt-0.5 font-display text-base font-semibold text-gray-800">
                    {value}
                  </h4>

                  {note && (
                    <p className="mt-1.5 text-xs leading-relaxed text-gray-500">
                      {note}
                    </p>
                  )}

                  {action && (
                    <a
                      href={action.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-red-50 px-4 py-2 font-display text-xs font-semibold text-merah-600 transition-colors hover:bg-red-100"
                    >
                      <MapPin size={13} strokeWidth={2.2} />
                      {action.text}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ),
        )}
      </div>
    </section>
  );
}
