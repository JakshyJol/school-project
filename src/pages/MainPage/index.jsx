import educ from "../../assets/Education-cuate1.svg";
import Divider from "../../components/divider/Divider";

const MainPage = () => {
  return (
    <>
    <div>
      <div className="h-[400px]  bg-[#605DEC] flex items-end">
        <div className="w-[85%] mx-auto flex items-end">

          <div className="flex-1 h-[400px] px-10 flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white">SomeThing incredible almaz kot nanui chkyrdyn ketem zybal</h2>
            <p  className="pt-5 text-white">
              Lorem ipsum dolor sit amet consectetur. Mauris duis elementum orci
              id non iaculis feugiat. Quisque dolor dolor condimentum mauris.
            </p>
          </div>
          <div className="flex-1.5 px-5">
            <img src={educ} />
          </div>
        </div>
      </div>
        <Divider title={'Возможности сайта'} />
        
      </div>
    </>
  );
};

export default MainPage;
