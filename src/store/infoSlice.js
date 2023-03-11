import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import sch3 from "../assets/schools/school-3.png";
import sch8 from "../assets/schools/school-8.png";
import sch9 from "../assets/schools/school-9.png";
import sch33 from "../assets/schools/school33.svg";
import sch88 from "../assets/schools/school88.svg";
import schUs from "../assets/schools/american.svg";
import nationl from "../assets/schools/national.svg";
import prison from "../assets/schools/usPrison.svg";
import premium from "../assets/schools/Premium.svg";

const newsData = [
  {}
]
const schoolData = [
  { text: "УОШ Грамотеи", address: "пр.Манаса, 234", img: schUs, icon: premium },
  {
    text: "Кут билим",
    address: "ул. Киевская, 12",
    img: nationl,
    icon: premium,
  },
  { text: "СШ  № 88", address: "мкр.Джал-23, 56", img: sch8, icon: premium },
  {
    text: "CШ с.Исфайрам",
    address: "ул.Турусбекова, 66",
    img: prison,
    icon: premium,
  },
  { text: "Гимназия  №9", address: "ул.Широкая", img: sch9, icon: premium },
  {
    text: "Школа №3",
    address: "мкр. Джал-29, дом 45А-45Б",
    img: sch3,
    icon: premium,
  },
  {
    text: "СШ им. Навои 33",
    address: "ул.Боконбаева , 44",
    img: sch33,
    icon: premium,
  },
  { text: "УОШ Грамотеи", address: "пр.Манаса, 230", img: sch88, icon: premium },
];

const initialState = {
  data: schoolData,
};

const infoSlice = createSlice({
  name: "schoolInfo",
  initialState,
  extraReducers: {},
});

export default infoSlice.reducer;
