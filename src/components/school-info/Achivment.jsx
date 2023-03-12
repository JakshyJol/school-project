import bachor from "../../assets/newsPage/bachorWidth.png";
import bachor2 from "../../assets/schoolPage/girl.png";
const achiveData = [
  {
    text: "В 2022 году 3 выпускника получили по ОРТ более 200 баллов Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры играет важную роль в формировании экспериментов, поражающих по своей масштабности и ",
    img: bachor,
  },
  {
    text: "В 2022 году 3 выпускника получили по ОРТ более 200 баллов Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры играет важную роль в формировании экспериментов, поражающих по своей масштабности и ",
    img: bachor2,
  },
  {
    text: "В 2022 году 3 выпускника получили по ОРТ более 200 баллов Ясность нашей позиции очевидна: укрепление и развитие внутренней структуры играет важную роль в формировании экспериментов, поражающих по своей масштабности и ",
    img: bachor,
  },
];

const Achivment = () => {
  return (
    <>
      {achiveData.map((el) => (
        <div className="h-[270px] w-[100%] flex justify-between bg-[#F9F9F9] border-[1px] border-[#BDBCDB] rounded-3xl p-6 mb-4">
          <div >
            <p className="text-2xl  mt-8 px-10">{el.text}</p>
          </div>

          <div className="w-[100%] h-[220px]">
            <img src={el.img} className='w-full h-full object-cover' />
          </div>
        </div>
      ))}
    </>
  );
};

export default Achivment;
