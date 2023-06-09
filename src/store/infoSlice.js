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
import curlyTeacher from ".././assets/teachers/curlyTeacher.png";
import hindiTeacger from ".././assets/teachers/hindiTeacger.png";
import menTeacher from "../assets/teachers/menTeacher.png";
import womanTech from "../assets/teachers/womanTech.svg";

const teacherData = [
  {
    text: "Назаркулова Д. А.",
    address: "директор: Высшее педагогичевкое",
    img: womanTech,
  },
  {
    text: "Азаматов Ч.Д.",
    address: "завуч Образование: Высшее педагогичевкое  ",
    img: menTeacher,
  },
  {
    text: "Назаркулова Д. А.",
    address: "директор: Высшее педагогичевкое",
    img: womanTech,
  },
  {
    text: "Айткулова М.М. А.",
    address: "Высшее педагогичевкое  ",
    img: curlyTeacher,
  },
  {
    text: "Максатов Ж.Р",
    address: "Высшее педагогичевкое  ",
    img: hindiTeacger,
  },
  {
    text: "Айткулова М.М. А.",
    address: "Высшее педагогичевкое  ",
    img: curlyTeacher,
  },
];

const schoolData = [
  {
    text: "УОШ Грамотеи",
    address: "пр.Манаса, 234",
    img: schUs,
    icon: premium,
    region: "Chuy",
    id: "imi12m1",
  },
  {
    text: "Кут билим",
    address: "ул. Киевская, 12",
    img: nationl,
    icon: premium,
    region: "Osh",
    id: "sami133",
  },
  {
    text: "СШ  № 88",
    address: "мкр.Джал-23, 56",
    img: sch8,
    icon: premium,
    region: "Chuy",
    id: "sadsm234",
  },
  {
    text: "CШ с.Исфайрам",
    address: "ул.Турусбекова, 66",
    img: prison,
    icon: premium,
    region: "Batken",
    id: "3032isdmidsm",
  },
  {
    text: "Гимназия  №9",
    address: "ул.Широкая",
    img: sch9,
    icon: premium,
    region: "Chuy",
    id: "asod22-2-3",
  },
  {
    text: "Школа №3",
    address: "мкр. Джал-29, дом 45А-45Б",
    img: sch3,
    icon: premium,
    region: "Talas",
    id: "saommk23",
  },
  {
    text: "СШ им. Навои 33",
    address: "ул.Боконбаева , 44",
    img: sch33,
    icon: premium,
    region: "Osh",
    id: "sdi990nun",
  },
  {
    text: "УОШ Грамотеи",
    address: "пр.Манаса, 230",
    img: sch88,
    icon: premium,
    region: "Naryn",
    id: "asi20329",
  },
];

const initialState = {
  data: schoolData,
  filtredData: "",
  teachers: teacherData,
};

const infoSlice = createSlice({
  name: "schoolInfo",
  initialState,
  reducers: {
    filtered(state, action) {
      const { text } = action.payload;
      console.log(action.payload.text);
      if (text === "all") {
        return state;
      } else if (text === "Chui") {
        const newState = state.data.filter((el) => el.region === "Chui");
        return newState;
      } else if (text === "Talas") {
        const newState = state.data.filter((el) => el.region === "Talas");
        return newState;
      } else if (text === "Issyk-kul") {
        return state.data.filter((el) => el.region === "Issyk-kul");
      } else if (text === "Naryn") {
        return state.data.filter((el) => el.region === "Naryn");
      } else if (text === "Jalal-abad") {
        return state.data.filter((el) => el.region === "Jalal-abad");
      } else if (text === "Osh") {
        return state.data.filter((el) => el.region === "Osh");
      } else if (text === "Batken") {
        return state.data.filter((el) => el.region === "Batken");
      }
    },
    statusData(state, action) {
      console.log(action.payload.text);
      return { ...state, filtredData: action.payload.text };
    },
  },
});
export const { filtered, statusData } = infoSlice.actions;
export default infoSlice.reducer;
