import React, { useEffect, useState } from "react";
import DArea from "../../components/search/DArea/DArea";
import Dregion from "../../components/search/Dregion/Dregion";
import Search from "../../components/search/search/Search";
import school from "../../assets/schools/school-3.png";
import "./School.css";
import { useSelector } from "react-redux";
function School() {
  const [term, setTerm] = useState("");
  const data = useSelector((state) => state.info);
  const [status, setStatus] = useState("");
  useEffect(() => {
    setStatus("");
  }, [term]);
  console.log(status);
  return (
    <div className="school-wrapper">
      <div className="center">
        <div className="filter">
          <Search setTerm={setTerm} term={term} setStatus={setStatus} />
          <DArea setStatus={setStatus} />
          <Dregion />
        </div>
        <div className="filter">
          <p>Список школ</p>
        </div>
        <div className="grid-conteiner">
          {data.data
            ?.filter((el) => {
              if (term === "" && status === "") {
                return el;
              } else if (status && status !== "all") {
                return el.region
                  .trim()
                  .toLowerCase()
                  .includes(status.trim().toLowerCase());
              } else if (status === "all") {
                return el;
              } else {
                return el.text
                  .trim()
                  .toLowerCase()
                  .includes(term.trim().toLowerCase());
              }
            })
            ?.map((data, idx) => (
              <div className="box-grid shadow-lg rounded-xl p-1" key={idx}>
                <img src={data?.img} className="w-[100%]" />
                <div className="flex justify-between px-3 py-3">
                  <div className="mt-3">
                    <p> {data.text} </p>
                    <span>{data.address}</span>
                  </div>
                  <div className="w-10 h-10">
                    <img src={data.icon} />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
export default School;
