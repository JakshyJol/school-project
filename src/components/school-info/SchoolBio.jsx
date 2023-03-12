import map from "../../assets/schoolPage/map.png";

const SchoolBio = () => {
  return (
    <>
      <div>
        <div className="flex justify-center mt-16 shadow-xl w-[85%] mx-auto">
          <div className="flex w-[50%] justify-between items-center h-[340px] ">
            <ul className="flex flex-col text-[#8A8894] text-2xl">
              <li>Адрес:</li>
              <li>Руководитель</li>
              <li>Форма собственности:</li>
              <li>Тип:</li>
              <li>Основа:</li>
              <li>Количество учащихся:</li>
              <li>Контакты:</li>
              <li>Сайт:</li>
            </ul>
            <ul className="flex flex-col items-end text-2xl">
              <li>мкрн. Джал, ул.Курчатова, 71</li>
              <li>Назаркулова Д. А.</li>
              <li>Государственная</li>
              <li>Гимназия</li>
              <li>1991 г.</li>
              <li>3765 учеников</li>
              <li>+996 799 567 341</li>
              <li>www.school72.kg</li>
            </ul>
          </div>
          <div className="ml-[5%]">
            <img src={map} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SchoolBio;
