import "./utils/i18n";
import Navbar from "./components/nav-bar/Navbar";
import MainPage from "./pages/MainPage";
import School from "./pages/School";
import News from "./pages/News";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/school" element={<School />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
