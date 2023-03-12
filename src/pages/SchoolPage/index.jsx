import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import schoolImg from "../../assets/schoolPage/schoolBg.png";
import premium from "../../assets/schools/Premium.svg";
import Achivment from "../../components/school-info/Achivment";
import SchoolBio from "../../components/school-info/SchoolBio";
import Slider from "../../components/slider/Slider";

const SchoolPage = () => {
  const { id } = useParams();
  const data = useSelector((state) => state.info);
  const teachers = data?.teachers;
  const school = data.data.filter((el) => el.id === id);
  console.log(teachers);
  return (
    <>
      <div>
          <div className="w-[100%] h-[60vh] relative">
            <img src={schoolImg} className="w-full h-full" />
            <div className="absolute top-[60%] px-[8%]">
              <img src={premium} className="w-16 h-16 mb-4" />
              <h3 className="text-4xl font-bold text-white">{school[0].text}</h3>
            </div>
          </div>
        
        <SchoolBio />
        <div className="py-11 mt-7 w-[85%] mx-auto">
          <h3 className="text-3xl">Школьный состав: </h3>
        </div>
        <div>
          <Slider schools={teachers} />
        </div>
        <div className="py-11 mt-7 w-[85%] mx-auto">
          <h3 className="text-3xl">Достижения</h3>
        </div>
        <div className="w-[85%] mx-auto">
          <Achivment />
          <button className="px-40 mt-7 py-4 text-2xl font-semibold text-white rounded-2xl hover:opacity-90 bg-[#27254C]">Подать заявку</button>
        </div>
        
      </div>
    </>
  );
};

export default SchoolPage;
