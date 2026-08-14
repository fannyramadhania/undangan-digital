import { useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../../animations.css";
import backsound from "../../assets/backsound.mp3";
import CoverCard from "./components/CoverCard";
import InvitationCard from "./components/InvitationCard";

export default function Undangan() {
  const audioRef = useRef(null);
  const [searchParams] = useSearchParams();
  const guestName = searchParams.get("name") || "Tamu";
  const [isOpened, setIsOpened] = useState(false);

  const handleOpen = async () => {
    setIsOpened(true);
    try {
      await audioRef.current.play();
      console.log("🎵 Audio berhasil diputar");
    } catch (error) {
      console.error("❌ Audio gagal:", error);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-krem-100 p-4 sm:p-6">
      {/* Latar bermotif titik lembut, menggantikan gradasi merah yang berat */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(217,45,32,0.35) 1.5px, transparent 1.5px)",
          backgroundSize: "22px 22px",
        }}
      />

      <audio volume={0.3} ref={audioRef} src={backsound} loop preload="auto" />

      <div className={`relative w-full ${isOpened ? "max-w-xl" : "max-w-sm"}`}>
        {!isOpened ? (
          <CoverCard guestName={guestName} onOpen={handleOpen} />
        ) : (
          <InvitationCard guestName={guestName} />
        )}
      </div>
    </div>
  );
}
