import { useSelector } from "react-redux";
import educ from "../../assets/Education-cuate1.svg";
import Bfooter from "../../components/BlockFooter/BFooter";
import BlueLine from "../../components/BlueLine/Blueline";
import Divider from "../../components/divider/Divider";
import GridCard from "../../components/divider/GridCard";
import NewsCard from "../../components/divider/NewsCard";
import Slider from "../../components/slider/Slider";
import { useTranslation } from "react-i18next";

const MainPage = () => {
  const schools = useSelector((state) => state.info.data);
  const { t } = useTranslation();
  return (
    <>
      <div>
        <div className="h-[400px]  bg-[#605DEC] flex items-end">
          <div className="w-[85%] mx-auto flex items-end">
            <div className="flex-1 h-[400px] px-10 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-white">{t("Wait")}</h2>
              <p className="pt-5 text-white">
                Lorem ipsum dolor sit amet consectetur. Mauris duis elementum
                orci id non iaculis feugiat. Quisque dolor dolor condimentum
                mauris.
              </p>
            </div>
            <div className="flex-1.5 px-5">
              <img src={educ} />
            </div>
          </div>
        </div>
        <Divider title={"Возможности сайта"} />
        <div className="w-[85%] mx-auto">
          <GridCard />
        </div>
        <Divider title={"Список школ"} />
      </div>
      <Slider schools={schools} />
      <Divider title={"Новости"} />
      <NewsCard />
      <BlueLine />
      <Bfooter />
    </>
  );
};

export default MainPage;
