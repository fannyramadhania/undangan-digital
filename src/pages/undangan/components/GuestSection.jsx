import flagright from "../../../assets/flagright.png";
import flagleft from "../../../assets/flagleft.png";

export default function GuestSection({ guestName }) {
  return (
    <div className="relative px-6 sm:px-10">
      {/* Umbul-umbul kiri — menimpa kartu di ujung kiri */}
      <img
        src={flagleft}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -left-2 top-1/2 z-10 h-40 -translate-y-1/2 object-contain drop-shadow-sm sm:-left-4 sm:h-48"
      />

      {/* Umbul-umbul kanan — menimpa kartu di ujung kanan */}
      <img
        src={flagright}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 top-1/2 z-10 h-40 -translate-y-1/2 object-contain drop-shadow-sm sm:-right-4 sm:h-48"
      />

      <div className="relative rounded-2xl bg-red-50/70 px-12 py-6 text-center sm:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500">
          Kepada Yth.
        </p>

        <h2 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl">
          {guestName}
        </h2>

        <p className="mt-3 text-sm leading-relaxed text-gray-600">
          Dengan penuh sukacita, kami mengundang Anda untuk turut hadir dan
          merayakan Hari Kemerdekaan Republik Indonesia bersama kami.
        </p>
      </div>
    </div>
  );
}
