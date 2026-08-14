import {
  Backpack,
  Baby,
  GraduationCap,
  Hand,
  MicVocal,
  School,
} from "lucide-react";
import balapKarung from "../../../assets/balap-karung.png";
import SectionHeading from "./SectionHeading";

const KATEGORI = [
  {
    no: 1,
    icon: Baby,
    nama: "Balita",
    usia: "1 s/d 5 tahun",
    lomba: ["Memasukkan lingkaran ke dalam kerucut sesuai warna"],
    warna: {
      badge: "bg-rose-500",
      ikon: "bg-rose-100 text-rose-600",
      chip: "bg-rose-50 text-rose-700",
    },
  },
  {
    no: 2,
    icon: Backpack,
    nama: "SD Kelas 1–3",
    usia: "Sekolah Dasar",
    lomba: ["Memasukkan lingkaran ke dalam kerucut sesuai warna"],
    warna: {
      badge: "bg-amber-500",
      ikon: "bg-amber-100 text-amber-600",
      chip: "bg-amber-50 text-amber-700",
    },
  },
  {
    no: 3,
    icon: Hand,
    nama: "SD Kelas 4–6",
    usia: "Sekolah Dasar",
    lomba: ["Lomba tapak jari dan tangan"],
    warna: {
      badge: "bg-emerald-500",
      ikon: "bg-emerald-100 text-emerald-600",
      chip: "bg-emerald-50 text-emerald-700",
    },
  },
  {
    no: 4,
    icon: School,
    nama: "SMP",
    usia: "Remaja",
    lomba: [
      "Memasukkan pulpen ke dalam botol dengan kaca spion",
      "Sentil bola pingpong pakai corong",
    ],
    warna: {
      badge: "bg-sky-500",
      ikon: "bg-sky-100 text-sky-600",
      chip: "bg-sky-50 text-sky-700",
    },
  },
  {
    no: 5,
    icon: GraduationCap,
    nama: "SMA",
    usia: "Remaja",
    lomba: [
      "Memasukkan pulpen ke dalam botol dengan kaca spion",
      "Sentil bola pingpong pakai corong",
    ],
    warna: {
      badge: "bg-violet-500",
      ikon: "bg-violet-100 text-violet-600",
      chip: "bg-violet-50 text-violet-700",
    },
  },
  {
    no: 6,
    icon: MicVocal,
    nama: "Ibu-Ibu",
    usia: "Warga",
    lomba: [
      "Sambung lirik",
      "Memasukkan air ke dalam botol menggunakan corong",
    ],
    warna: {
      badge: "bg-red-500",
      ikon: "bg-red-100 text-red-600",
      chip: "bg-red-50 text-red-700",
    },
  },
];

export default function LombaList() {
  return (
    <section className="px-5">
      <SectionHeading label="Ayo ikutan" title="Daftar Lomba" tilt="rotate-1" />

      {/* Ilustrasi pembuka daftar lomba */}
      <div className="relative mb-5 overflow-hidden rounded-[1.75rem] bg-krem-100 px-4 pt-4">
        <img
          src={balapKarung}
          alt="Anak-anak sedang mengikuti lomba"
          className="mx-auto w-48 object-contain sm:w-56"
        />

        <p className="pb-4 text-center text-xs italic text-gray-500">
          Enam kategori, dari balita sampai ibu-ibu
        </p>
      </div>

      <div className="space-y-4">
        {KATEGORI.map(({ no, icon: Icon, nama, usia, lomba, warna }, index) => (
          <div
            key={nama}
            className={`kartu !p-0 overflow-hidden transition-transform duration-300 hover:rotate-0 hover:-translate-y-1 ${
              index % 2 === 0 ? "-rotate-1" : "rotate-1"
            }`}
          >
            {/* Kepala kartu: nomor urut, ikon, dan nama kategori */}
            <div className="flex items-center gap-3 px-4 pt-4">
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold text-white shadow-sm ${warna.badge}`}
              >
                {no}
              </span>

              <div
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${warna.ikon}`}
              >
                <Icon size={20} strokeWidth={2} />
              </div>

              <div className="min-w-0 flex-1">
                <h4 className="font-display text-base font-semibold leading-tight text-gray-800">
                  {nama}
                </h4>

                <p className="text-[11px] text-gray-400">{usia}</p>
              </div>
            </div>

            {/* Daftar lomba untuk kategori ini */}
            <ul className="space-y-2 px-4 pb-4 pt-3">
              {lomba.map((item) => (
                <li
                  key={item}
                  className={`flex items-start gap-2 rounded-2xl px-3 py-2.5 text-xs leading-relaxed ${warna.chip}`}
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-current opacity-60" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
