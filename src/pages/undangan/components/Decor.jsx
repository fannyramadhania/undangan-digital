/**
 * Gambar hiasan yang diposisikan absolut terhadap parent ber-`relative`.
 * Murni dekoratif: tidak bisa diklik dan disembunyikan dari screen reader.
 */
export default function Decor({ src, className = "", flip = false }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`pointer-events-none absolute select-none object-contain ${
        flip ? "scale-x-[-1]" : ""
      } ${className}`}
    />
  );
}
