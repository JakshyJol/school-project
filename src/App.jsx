import { useState } from "react";
import "./App.css";
import "./utils/i18n";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";


const languages = [
  {
    code: "ru",
    name: "Ru",
    country_code: "fr",
  },
  {
    code: "kg",
    name: "Kyrgyz",
    country_code: "kg",
  },
];

function App() {
  const [count, setCount] = useState(0);
  const { t } = useTranslation();

  const currentLanguageCode = cookies.get("i18next") || "en";

  console.log(currentLanguageCode);
  const onChange = (event) => {
    i18next.changeLanguage(event.target.value);
  };
  return (
    <div className="App">
      <select onChange={onChange}>
        <option value="ru">Русский</option>
        <option value="kg">Кыргызча</option>
      </select>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {t("Blogs")} {count}
        </button>
      </div>
      <p>{t("places")}</p>
      <h2>{t('Regions')}</h2>
    </div>
  );
}

export default App;
