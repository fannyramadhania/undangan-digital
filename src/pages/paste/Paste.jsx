import { useState } from "react";

export default function Paste() {
  const [name, setName] = useState("");
  const [shareLink, setShareLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      const link = `${window.location.origin}/?name=${encodeURIComponent(name)}`;
      setShareLink(link);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shareLink);
    alert("Link sudah disalin!");
  };

  const handleReset = () => {
    setName("");
    setShareLink("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-400 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        {!shareLink ? (
          <>
            <h1 className="text-3xl font-bold text-center mb-6">
              Buat Undangan
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Masukkan nama Anda..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                type="submit"
                disabled={!name.trim()}
                className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 text-white font-bold py-2 px-4 rounded-lg transition"
              >
                OK
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              Link Undangan Anda
            </h1>
            <p className="text-sm text-gray-600 text-center mb-4">
              Bagikan link ini kepada tamu undangan:
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4 break-all text-sm">
              <p className="text-gray-700">{shareLink}</p>
            </div>
            <button
              onClick={handleCopy}
              className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition mb-3"
            >
              Salin Link
            </button>
            <button
              onClick={handleReset}
              className="w-full bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Buat Undangan Baru
            </button>
          </>
        )}
      </div>
    </div>
  );
}
