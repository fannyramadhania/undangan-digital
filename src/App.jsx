import { Routes, Route } from "react-router-dom";
import Undangan from "./pages/undangan/Undangan";
import Paste from "./pages/paste/Paste";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Undangan />} />
      <Route path="/paste" element={<Paste />} />
    </Routes>
  );
}

export default App;
