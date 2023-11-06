import { FaRegSquareFull } from "react-icons/fa6";
import { MdGroup } from "react-icons/md";
import { FaWifi, FaCarAlt, FaMoon } from "react-icons/fa";
import { Link } from "react-router-dom";
const SingleRoom = ({ room }) => {
  // console.log(Object.keys(room).join(',') )
  const {
    _id,
    RoomDescription,
    PricePerNight,
    RoomSize,
    Availability,
    RoomImages,
    SpecialOffers,
    Rating,
    Confirm,
    Title,
    Location,
    Reviews,
  } = room;
  return (
    <div>
      <div className="border rounded-t-2xl">
        <Link to={`/details/${_id}`}>
          <img src={RoomImages} alt="" className="w-full rounded-t-2xl" />
        </Link>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{Title}</h2>
          <p className="mt-2">
            {Rating > 4.5
              ? Rating + " " + "Exceptional"
              : `${Rating + " " + "Superb"}`}
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaRegSquareFull />
            {RoomSize}
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <MdGroup />2 Adult 1 children
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaWifi />
            wi-fi
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaCarAlt />
            Free self parking
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaMoon className="text-[#faf9fa] p-1 bg-[#862886] rounded-md" />
            Collect and Redeem
          </p>

          <p className=" border-b-2 w-full my-3"></p>

          <h3 className="text-2xl font-semibold mb-5">USD {PricePerNight}</h3>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-primaryColor text-white w-full rounded-3xl hover:bg-blue-700">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
