import React from "react";
import bachor from "../../assets/newsPage/bachorWidth.png";
import collage from "../../assets/newsPage/collage.png";
import people from "../../assets/newsPage/people.png";
import peopleRed from "../../assets/newsPage/peopleRed.png";
import student from "../../assets/newsPage/student.png";
import threeFace from "../../assets/newsPage/threeFace.png";

function News() {
  const newsData = [
    {
      text: "Без собеседования. Конкурсный отбор на поступление в вузы Венгрии стал еще легче",
      img: bachor,
      id: "bachor",
    },
    {
      text: "16 ученых из КР, которые совершили выдающиеся открытия и внесли вклад в науку",
      img: collage,
      id: "16scintist",
    },
    {
      text: "1 золото, 2 серебра и 3 бронзы получили школьники Кыргызстана на олимпиаде мирового уровня",
      img: people,
      id: "achivment",
    },
    {
      text: 'Как поступить в лучшие вузы мира через проект "Кадам" (дедлайн 28 февраля)',
      img: peopleRed,
      id: "howapply",
    },
    {
      text: "Объявлены даты проведения ОРТ для выпускников 11-х классов",
      img: student,
      id: "howToPassOrt",
    },
    {
      text: "16 ученых из КР, которые совершили выдающиеся открытия и внесли вклад в науку",
      img: threeFace,
      id: "bachorScintists",
    },
  ];
  return (
    <>
      <div className="w-[85%] mx-auto">
        <h2 className="py-12 text-3xl font-semibold">Новости</h2>
        <div className="grid grid-cols-2 gap-10">
          {newsData.map((el) => (
            
              <div className=" h-[280px] shadow-2xl rounded-3xl relative ">
                <img src={el.img} className="h-full w-full  brightness-75 "/>
                <p className="absolute w-[80%] bottom-3 left-5 font-semibold text-2xl text-white"> {el.text}</p>
              </div>
           
          ))}
        </div>
      </div>
    </>
  );
}
export default News;
