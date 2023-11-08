import { FaHotel } from "react-icons/fa";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../hooks/CustomApi/useAuth";
// import { SiGooglecalendar } from 'react-icons/si';

const Searching = () => {
  const { startDate, setStartDate } = useAuth();
  // console.log(startDate, endDate);

  return (
    <div className="flex justify-center  items-center h-full">
      <div className="w-full mt-28 text-center mx-auto">
        {/* search field */}
        <div className="w-10/12 bg-base-100 flex flex-col items-center rounded-2xl mx-auto md:h-52">
          {/* title */}
          <div className=" w-6/12 mx-auto bg-base-100 rounded-xl shadow-md shadow-blue-200 text-xl font-semibold absolute -mt-10 ">
            <div className="w-1/3 mx-auto">
              <p className="flex  h-16 border-b-[3px] border-[#fccd03] justify-center items-center gap-2">
                <FaHotel />
                Hotel
              </p>
            </div>
          </div>
          {/* date picker */}
          <div className="md:flex gap-4 mt-12 mx-auto w-full px-8">
            <div className="border-2 text-left justify-center flex items-center gap-3 h-20 rounded-lg w-full ">
              {/* <SiGooglecalendar className="text-3xl"/> */}
              <div>
                <p className="">Check in</p>
                <DatePicker
                  selected={startDate}
                  withPortal
                  // showTimeSelect
                  // dateFormat="Pp"
                  onChange={async (date) => await setStartDate(date)}
                />
              </div>
            </div>

            <div className="border-2 text-center mt-3 md:mt-0 h-20 rounded-lg w-full">
              <p className="mt-1">Short by Sit</p>
              <select
                name="sit"
                className="select h-8 text-center w-full max-w-xs"
              >
                <option disabled selected>
                  No short
                </option>
                <option>Low to high</option>
                <option>High to low</option>
              </select>
            </div>
            <div className="border-2 h-20 mt-3 md:mt-0 rounded-lg w-full text-center">
              <p className="mt-1">Short by Price</p>
              <select
                name="price"
                className="select h-8 text-center w-full max-w-xs"
              >
                <option disabled selected>
                  No short
                </option>
                <option>Low to high</option>
                <option>High to low</option>
              </select>
            </div>
          </div>
          <div>
            <h3>Search for</h3>
          </div>
          {/* search button */}
          <div className=" w-full  h-20">
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
