import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { History } from "./pages/History";
import { Attractions } from "./pages/Attractions";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/tourism" element={<Attractions />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
