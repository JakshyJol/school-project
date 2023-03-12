import "./utils/i18n";
import Navbar from "./components/nav-bar/Navbar";
import MainPage from "./pages/MainPage";
import School from "./pages/School";
import News from "./pages/News";
import { Routes, Route } from "react-router-dom";
import SchoolPage from "./pages/SchoolPage";
import PersonalPage from "./pages/PersonalPage";

function App() {
  return (
    <div className="w-[100%]">
      {/* <Navbar>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/school" element={<School />} />
          <Route path="/school/:id" element={<SchoolPage />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </Navbar> */}
      <PersonalPage />
    </div>
  );
}

export default App;
