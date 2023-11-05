import { FaHotel } from "react-icons/fa";
const Searching = () => {
  return (
    <div className="flex justify-center  items-center h-full">
      <div className="w-full mt-28 text-center mx-auto">
        {/* search field */}
        <div className="w-10/12 bg-base-100 flex justify-center rounded-2xl mx-auto h-52">
          {/* title */}
          <div className=" w-6/12 mx-auto bg-base-100 rounded-xl shadow-md shadow-blue-200 text-xl font-semibold absolute -mt-10 ">
            <div className="w-1/3 mx-auto">
              <p className="flex  h-16 border-b-[3px] border-[#fccd03] justify-center items-center gap-2">
                <FaHotel />
                Hotel
              </p>
            </div>
          </div>
        <div className=" w-full mt-[180px] h-20">
          <button className="btn px-20 mx-auto bg-[#fccd03] border-none  hover:bg-[#eac10b] text-primaryColor">
            searching
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Searching;
