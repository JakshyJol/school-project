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
  if (slider.scrollLeft > 1000) {
    slider.scrollLeft = 0;
  } else {
    slider.scrollLeft = slider.scrollLeft + 450;
  }
};

const Slider = (props) => {
  const schools = props.schools;
  console.log(schools);
  return (
    <>
      {/* <button onClick={()=> sliderLeft('left')}>Left</button>
        <button onClick={()=> sliderRight('left')}>right</button> */}
      <div className="w-[85%] mx-auto ">
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
              <div className="w-[280px] p-1 inline-block group  relative pt-9 mr-3">
                <div className="w-[266px] h-[200px] ">
                  <img
                    src={el?.img}
                    alt={el?.text}
                    className="group-hover:scale-105 ease-out duration-300"
                  />
                </div>
                <div className="flex justify-between px-2 py-3 group">
                  <div className="mt-3 group  ">
                    <p className="group-hover:scale-105 ease-out duration-300 ">
                      {" "}
                      {el?.text}{" "}
                    </p>
                    <p className="w-52 h-14 overflow-auto  group-hover:scale-105 ease-out duration-300  ">
                      {el?.address}
                    </p>
                  </div>
                  <div className="w-10 h-10">
                    {el.icon && <img src={el.icon} />}
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
