import i18next from "i18next";

function Select() {
    const onChange = (event) => {
        i18next.changeLanguage(event.target.value);
      };
	return (
		<select onChange={onChange}>
			<option value="ru" >Русский</option>
			<option value="kg">Кыргызча</option>
		</select>
	);
}
export default Select;
