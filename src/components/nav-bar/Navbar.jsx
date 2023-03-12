import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { IoLanguageSharp } from "react-icons/io5";
import Dropdown from "./button/dropdown";
import { useLocation } from 'react-router-dom';
const languages = [
  {
    code: "ru",
    name: "Русский",
    icon: "RU",
  },
  {
    code: "kg",
    name: "Кыргызча",
    icon: "KG",
  },
];

const Navbar = ({ children }) => {
  
  const [dropdown, setDropdown] = useState(false);
  const activeMenu = "text-[#605DEC]";
  const location = useLocation();  
  const [active, setActive] = useState(location.pathname);
  const { t } = useTranslation();

  return (
    <>
      <div className={active === "/" ? " bg-[#605DEC]" : "bg-white"}>
        <div className="bg-[#F9F9F9] w-[100%] h-[80px] rounded-b-[32px] fixed z-50">
          <div className="w-[85%] mx-auto h-[85px] flex justify-between items-center ">
            <Link to={"/"}>
              <h3
                className="text-[#605DEC] text-3xl font-bold mt-[-5px]"
                onClick={() => setActive("/")}
              >
                Eduqueue
              </h3>
            </Link>
            <ul className="flex w-[400px] justify-around text-lg">
              <Link to={"/"}>
                <li
                  className={active === "/" ? activeMenu : ""}
                  onClick={() => setActive("/")}
                >
                  {" "}
                  {t("MainPage")}{" "}
                </li>
              </Link>
              <Link to={"/school"}>
                <li
                  className={active === "/school" ? activeMenu : ""}
                  onClick={() => setActive("/school")}
                >
                  {" "}
                  {t("School")}{" "}
                </li>
              </Link>
              <Link to={"/news"}>
                <li
                  className={active === "/news" ? activeMenu : ""}
                  onClick={() => setActive("/news")}
                >
                  {" "}
                  {t("News")}{" "}
                </li>
              </Link>
            </ul>
            <div className=" w-[25%] flex justify-between">
              <button
                onClick={() => setDropdown(!dropdown)}
                className="relative text-lg bg-transparent border-2 border-stone-900 text-black  duration-500 px-4 py-1 hover:bg-[#607d8b] text-black-700 hover:text-white hover:border-transparent rounded flex  items-center gap-x-1.5"
              >
                {t("Language")}
                <IoLanguageSharp size={17} />
                {dropdown && (
                  <Dropdown
                    languages={languages}
                    dropdown={dropdown}
                    setDropdown={setDropdown}
                  />
                )}
              </button>
              <button
                className="py-[8px] px-[24px] bg-[#605DEC] text-white rounded-xl hover:opacity-90"
                type="submit"
              >
                {t("Login")}
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="w-[100%]">{children}</main>
    </>
  );
};

export default Navbar;
