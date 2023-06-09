import i18next from "i18next";
import ReactCountryFlag from "react-country-flag";


function Dropdown({ languages, dropdown, setDropdown }) {

  console.log('dropdown' + dropdown)


  const handleClose = (code) => {
    if (dropdown) {
      setDropdown(!dropdown);
    }
    i18next.changeLanguage(code);
  };
  return (
    <button className="absolute top-10 right-[-10px] z-50 bg-white">
      <ul
        className={
          dropdown
            ? "services-submenu clicked text-left border rounded"
            : "services-submenu"
        }
      >
        {languages.map((el) => {
          return (
            <li key={el.code}>
              <button
                className="px-6 flex items-center gap-x-1.5 py-1 hover:bg-gray-100 border-b text-black"
                onClick={() => {
                  handleClose(el.code);
                }}
              >
                <ReactCountryFlag
                  countryCode={el.icon}
                  svg
                  cdnUrl="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/1x1/"
                  cdnSuffix="svg"
                  title="US"
                />
                {el.name}
              </button>
            </li>
          );
        })}
      </ul>
    </button>
  );
}

export default Dropdown;