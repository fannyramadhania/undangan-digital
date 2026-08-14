/**
 * Taburan konfeti dekoratif di latar kartu.
 * Posisinya sengaja acak-acakan supaya tampilan tidak terasa kaku.
 */
const PIECES = [
  { top: "6%", left: "8%", size: 10, rotate: -18, color: "bg-red-400" },
  { top: "12%", left: "88%", size: 8, rotate: 24, color: "bg-bambu" },
  { top: "26%", left: "4%", size: 7, rotate: 12, color: "bg-langit" },
  { top: "38%", left: "93%", size: 11, rotate: -30, color: "bg-red" },
  { top: "52%", left: "7%", size: 9, rotate: 40, color: "bg-bambu" },
  { top: "64%", left: "90%", size: 7, rotate: -12, color: "bg-red00" },
  { top: "78%", left: "11%", size: 8, rotate: 20, color: "bg-langit" },
  { top: "88%", left: "86%", size: 10, rotate: -24, color: "bg-red-200" },
];

export default function Confetti({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {PIECES.map(({ top, left, size, rotate, color }, index) => (
        <span
          key={`${top}-${left}`}
          className={`absolute rounded-[3px] opacity-50 animate-float ${color}`}
          style={{
            top,
            left,
            width: size,
            height: size * 0.6,
            // Properti `rotate` terpisah agar tidak ditimpa transform milik animasi
            rotate: `${rotate}deg`,
            animationDelay: `${index * 0.35}s`,
            animationDuration: `${4 + (index % 3)}s`,
          }}
        />
      ))}
    </div>
  );
}
