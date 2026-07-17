import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoreValuesPage from "./pages/CoreValuesPage";
import FlameMagazinePage from "./pages/FlameMagazinePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/corevalues" element={<CoreValuesPage />} />
        <Route path="/flamemagazine" element={<FlameMagazinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
