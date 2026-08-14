/**
 * Judul bagian bergaya stiker miring, dipakai ulang di seluruh undangan.
 */
export default function SectionHeading({ label, title, tilt = "-rotate-1" }) {
  return (
    <div className="mb-5 text-center">
      <p className={`sticker-label ${tilt}`}>{label}</p>

      <h3 className="mt-3 font-display text-2xl font-bold text-gray-800">
        {title}
      </h3>
    </div>
  );
}
