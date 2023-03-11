import bachor from "../../assets/news/bachor.png";
import group from "../../assets/news/groupPeople.png";
import student from "../../assets/news/student.png";

const NewsCard = () => {
  const newsData = [
    {
      text: 'Как поступить в лучшие вузы мира через проект "Кадам" (дедлайн 28 февраля)',
      img: group,
    },
    {
      text: "Без собеседования. Конкурсный отбор на поступление в вузы Венгрии стал еще легче",
      img: bachor,
    },
    {
      text: "Объявлены даты проведения ОРТ для выпускников 11-х классов",
      img: student,
    },
  ];

  return (
    <>
      <div className="flex w-[80%] mx-auto justify-around">
        {newsData.map((el) => (
          <div className="w-[30%] h-[400px] bg-[#F9F9F9] px-1 rounded-2xl border-[#BDBCDB] border-[1px] ">
            <div className="mt-1">
              <img src={el.img} className="w-full h-full" />
            </div>
            <div className="px-2 py-6 flex flex-col ">
                <p className="text-xl mb-4 h-[100px]">
                    {el.text}
                </p>
                <span className="text-base text-[#605DEC]" >Узнать подробнее...</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NewsCard;
