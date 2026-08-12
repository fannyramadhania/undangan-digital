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
    <div className="min-h-screen bg-gradient-to-b from-red-600 via-red-400 to-red-100 p-4 sm:p-6 flex items-center justify-center">
      <audio volume={0.3} ref={audioRef} src={backsound} loop preload="auto" />

      <div className="w-full max-w-sm">
        {!isOpened ? (
          <CoverCard guestName={guestName} onOpen={handleOpen} />
        ) : (
          <InvitationCard guestName={guestName} />
        )}
      </div>
    </div>
  );
}
