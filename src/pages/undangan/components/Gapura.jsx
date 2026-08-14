import gapura from "../../../assets/gapura.png";
import lapansatu from "../../../assets/lapansatu.png";

/**
 * Gapura bambu dengan tulisan di papan atas dan logo 81 di tengah gerbang.
 * Posisi isinya dipatok persen terhadap gambar, jadi ikut menyesuaikan ukurannya.
 */
export default function Gapura({
  className = "",
  labelClassName = "text-red-700",
}) {
  return (
    <div className={`relative ${className}`}>
      <img
        src={gapura}
        alt="Gapura bambu HUT RI ke-81"
        className="w-full object-contain"
      />

      {/* Tulisan di papan kosong bagian atas */}
      <p
        className={`absolute left-1/2 top-[25%] w-[52%] -translate-x-1/2 -translate-y-1/2 text-center font-display text-[11px] font-semibold leading-tight sm:text-xs ${labelClassName}`}
      >
        Lomba 17-an
      </p>

      {/* Logo 81 di tengah bukaan gerbang */}
      <img
        src={lapansatu}
        alt="Logo HUT RI ke-81"
        className="absolute left-1/2 top-[62%] w-[34%] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-md"
      />
    </div>
  );
}
