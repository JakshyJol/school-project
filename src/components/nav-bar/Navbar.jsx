import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


const Navbar = ({ children }) => {
  const { t } = useTranslation();
  return (
    <>
      <div className="bg-slate-900 w-[100vw] h-[90px]">
        <ul>
          <Link to={"/"}>
            <li> {t("MainPage")} </li>
          </Link>
          <Link to={"/school"}>
            <li> {t("School")} </li>
          </Link>
          <Link to={"/news"}>
            <li> {t("News")} </li>
          </Link>
        </ul>
      </div>
      <main>{children}</main>
    </>
  );
};

export default Navbar;
