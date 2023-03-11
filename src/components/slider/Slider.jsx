import { useSelector } from "react-redux";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";

const sliderLeft = (id) => {
  const slider = document.getElementById(id);
  if (slider.scrollLeft === 0) {
    slider.scrollLeft = 1956;
  } else {
    slider.scrollLeft = slider.scrollLeft - 450;
  }
};

const sliderRight = (id) => {
  const slider = document.getElementById(id);
  if (slider.scrollLeft >1000) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft = slider.scrollLeft + 450;
  }
};

const Slider = () => {
  const schools = useSelector((state) => state.info.data);
  console.log(schools);
  return (
    <>
      {/* <button onClick={()=> sliderLeft('left')}>Left</button>
        <button onClick={()=> sliderRight('left')}>right</button> */}
      <div className="w-[85%] mx-auto mb-10">
        <div className="reletive flex items-center ">
          <SlArrowLeft
            className="hidden md:flex opacity-50 cursor-pointer hover:opacity-100 text-lg md:text-xl lg:text-5xl"
            onClick={() => sliderLeft("left")}
          />
          <div
            id="left"
            className="h-full w-full overflow-x-scroll scroll  whitespace-nowrap scroll-smooth scrollbar-hide"
          >
            {schools.map((el) => (
              <div className="w-[280px] h-[304px] p-1 inline-block  relative pt-9">
                <div className="w-[266px] h-[200px] ">
                  <img src={el.img} alt={el.text} />
                </div>
                <div className="flex justify-between px-1 py-3">
                  <div className="mt-3">
                    <p> {el.text} </p>
                    <span>{el.address}</span>
                  </div>
                  <div className="w-10 h-10">
                    <img src={el.icon} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <SlArrowRight
            className=" hidden md:flex opacity-50 cursor-pointer hover:opacity-100 text-lg md:text-xl lg:text-5xl"
            onClick={() => sliderRight("left")}
          />
        </div>
      </div>
    </>
  );
};

export default Slider;
