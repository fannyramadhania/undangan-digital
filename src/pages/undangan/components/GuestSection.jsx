export default function GuestSection({ guestName }) {
  return (
    <div className="relative px-6 pt-8 sm:px-10">
      <div className="relative -rotate-1 rounded-[1.75rem] border-2 border-dashed border-merah-200 bg-white px-6 py-7 text-center shadow-[0_12px_30px_-20px_rgba(180,35,24,0.5)]">
        {/* Selotip kertas di kedua sudut atas, seperti undangan yang ditempel */}
        <span
          aria-hidden="true"
          className="absolute -top-3 left-6 h-6 w-14 -rotate-12 rounded-sm bg-bambu/30"
        />
        <span
          aria-hidden="true"
          className="absolute -top-3 right-6 h-6 w-14 rotate-12 rounded-sm bg-bambu/30"
        />

        <p className="text-xs text-gray-500">Halo, teman seru</p>

        <h2 className="mt-1 font-display text-2xl font-bold text-merah-600 sm:text-3xl">
          {guestName}
        </h2>

        <p className="mx-auto mt-3 max-w-sm text-sm leading-relaxed text-gray-600">
          Kamu diundang buat ikut serta dan memeriahkan Lomba 17-an di kampung
          kita. Ajak keluarga, siapkan tenaga, dan jangan lupa senyumnya!
        </p>
      </div>
    </div>
  );
}
