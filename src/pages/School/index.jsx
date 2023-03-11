import React from "react";
import DArea from "../../components/search/DArea/DArea";
import Dregion from "../../components/search/Dregion/Dregion";
import Search from "../../components/search/search/Search";
import school from '../../assets/schools/school-3.png'
import './School.css'
function School() {
  const data = [
    {
      id: "1",
      img: school,
      slovo: "aaa"
    },
    {
      id: "2",
      img: school,
      slovo: "aaa"
    },
    {
      id: "3",
      img: school,
      slovo: "aaa"
    },
    {
      id: "4",
      img: school,
      slovo: "aaa"
    },
    {
      id: "5",
      img: school,
      slovo: "aaa"
    },
    {
      id: "6",
      img: school,
      slovo: "aaa"
    },
    {
      id: "7",
      img: school,
      slovo: "aaa"
    },
    {
      id: "8",
      img: school,
      slovo: "aaa"
    },
    {
      id: "9",
      img: school,
      slovo: "aaa"
    },
    {
      id: "10",
      img: school,
      slovo: "aaa"
    },
    {
      id: "11",
      img: school,
      slovo: "aaa"
    },
    {
      id: "12",
      img: school,
      slovo: "aaa"
    }
  ]
  return (
    <div className="school-wrapper">
      <div className="center">
        <div className="filter">
          <Search />
          <DArea />
          <Dregion />
        </div>
          <div className="filter"><p>Список школ</p></div>
        <div className="grid-conteiner">
          {
            data.map((data) => (
              <div className="box-grid" key={data.id}>
                <img src={data?.img}/>
                {/* <p>{data.img}</p> */}
                <p>{data.slovo}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default School;
