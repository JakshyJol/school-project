import { useTranslation } from "react-i18next";
import i18next from "i18next";
import cookies from "js-cookie";
import { useSelector } from "react-redux";
import { useState } from "react";
import Select from "../../components/select";

// const languages = [
//   {
//     code: "ru",
//     name: "Ru",
//     country_code: "fr",
//   },
//   {
//     code: "kg",
//     name: "Kyrgyz",
//     country_code: "kg",
//   },
// ];

const MainPage = () => {
	const [count, setCount] = useState(0);
	const { t } = useTranslation();
	const state = useSelector((state) => state);
	console.log(state);

	// const currentLanguageCode = cookies.get("i18next") || "en";
	// console.log(currentLanguageCode);

	return (
		<>
			<Select />
			<h1>Vite + React</h1>
			<div className="card">
				<button onClick={() => setCount((count) => count + 1)}>
					{t("Blogs")} {count}
				</button>
			</div>
			<p>{t("places")}</p>
			<h2>{t("Regions")}</h2>
		</>
	);
};

export default MainPage;
