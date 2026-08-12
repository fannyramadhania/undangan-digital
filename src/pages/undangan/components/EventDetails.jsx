import { CalendarDays, Clock3, MapPin } from "lucide-react";

export default function EventDetails() {
  return (
    <section>
      <div className="mb-5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-red-600">
          Save The Date
        </p>

        <h3 className="mt-2 text-2xl font-bold tracking-tight text-gray-900">
          Detail Acara
        </h3>
      </div>

      {/* Date & Time */}
      <div className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
   
        <div className="border-t border-gray-100 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <CalendarDays size={19} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Tanggal
              </p>

              <h4 className="mt-1 font-bold text-gray-900">Senin , 17 Agustus 2026</h4>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <Clock3 size={19} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Waktu
              </p>

              <h4 className="mt-1 font-bold text-gray-900"> 19:30 — 22:00</h4>
            </div>
          </div>
        </div>
        {/* Location */}
        <div className="border-t border-gray-100 p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600">
              <MapPin size={20} strokeWidth={1.8} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                Lokasi
              </p>

              <h4 className="mt-1 font-bold text-gray-900">Lapangan Volly</h4>

              <p className="mt-1 text-xs leading-relaxed text-gray-500">
                Jl. Delima V RT.10/RW.5, Malaka Sari, Kec. Duren Sawit, Kota
                Jakarta Timur, DKI Jakarta 13470
              </p>

              <button
                type="button"
                className="mt-4 inline-flex items-center gap-2 text-xs font-bold text-red-600 transition-colors hover:text-red-700"
              >
                <MapPin size={14} strokeWidth={2} />
                Lihat Lokasi
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
