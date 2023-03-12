import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filtered, statusData } from "../../../store/infoSlice";
import "./DArea.css";
function DArea({setStatus}) {
  const dispatch = useDispatch();
  return (
    <div className="area-select">
      <select
        name="select"
        value="all"
        onChange={(e) => setStatus(e.target.value)}
        selected

      >
        <option className="select" value="all" defaultValue="all" >
          Область
        </option>
        <option className="area-option" value="Chuy">
          Чуйская область
        </option>
        <option className="area-option" value="Talas">
          Таласская область
        </option>
        <option className="area-option" value="Issyk-kul">
          Иссык-Кульская область
        </option>
        <option className="area-option" value="Naryn">
          Нарынская область
        </option>
        <option className="area-option" value="Jalal-abad">
          Джалал-Абадская область
        </option>
        <option className="area-option" value="Osh">
          Ошская область
        </option>
        <option className="area-option" value="Batken">
          Баткенская область
        </option>
        <option className="area-option" value="all">
          -
        </option>
      </select>
    </div>
  );
}

export default DArea;
