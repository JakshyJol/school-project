import charts from "../../assets/opportunity/Charts5.svg";
import Exciting from "../../assets/opportunity/Exciting3.svg";
import Mobile from "../../assets/opportunity/Mobile4.svg";
import Online6 from "../../assets/opportunity/Online6.svg";
import Queue from "../../assets/opportunity/Queue1.svg";
import Upload from "../../assets/opportunity/Upload2.svg";
import right_circle from "../../assets/opportunity/right_circle.svg";
import left_circle from "../../assets/opportunity/left_circle.svg";

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
    <>
        
            <img src={right_circle} alt="spot" className="absolute right-[0%] top-[55%] z-0"/>
      
    <div className="w-[100%] grid grid-cols-2  lg:grid-cols-3 gap-4 relative z-10">
      
      {cardData.map((el, idx) => (
        <div className="flex flex-col items-center" key={idx}>
          <div className="w-[300px]">
            <img alt={idx} src={el.img} className="object-cover"/>
          </div>
          <p className="text-[#27254C] font-semibold text-lg mt-4">{el.text}</p>
        </div>
      ))}
    </div>
    <img src={left_circle} alt="spot" className="absolute left-[0%] top-[100%] z-0"/>
    </>
  );
};

export default GridCard;
