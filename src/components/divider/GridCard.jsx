import charts from "../../assets/opportunity/Charts5.svg";
import Exciting from "../../assets/opportunity/Exciting3.svg";
import Mobile from "../../assets/opportunity/Mobile4.svg";
import Online6 from "../../assets/opportunity/Online6.svg";
import Queue from "../../assets/opportunity/Queue1.svg";
import Upload from "../../assets/opportunity/Upload2.svg";
import { useTranslation } from "react-i18next";

const GridCard = () => {
  const { t } = useTranslation();
  const cardData = [
    { text: t("Queue"), img: Queue },
    { text: t("Change"), img: Upload },
    { text: t("News_List"), img: Exciting },
    { text: t("Profile_student"), img: Mobile },
    { text: t("School_Info"), img: charts },
    { text: t("School_Rate"), img: Online6 },
  ];
  return (
    <div className="grid grid-cols-3">
      {cardData.map((el, idx) => (
        <div>
          <div>
            <img alt={idx} src={el.img}/>
          </div>
          <p>{el.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
