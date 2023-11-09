import { FaRegSquareFull } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { AiFillStar } from "react-icons/ai";
import { FaWifi, FaCarAlt, FaMoon, FaBed } from "react-icons/fa";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const SingleRoom = ({ room }) => {
  // console.log(Object.keys(room).join(',') )
  useEffect(() => {
    AOS.init({
    });
  }, [])
  const {
    _id,
    // description,
    price,
    size,
    availability,
    images,
    Offers,
    rating,
    sit,
    Facilities,
    // booking,
    // confirm,
    title,
    location,
    reviews,
  } = room;
  // console.log(Facilities);
  const sum = price - price * (Offers / 100);
  return (
    <div>
      <div className="border rounded-2xl">
        <Link to={`/details/${_id}`}>
          <img src={images} alt="" className="w-full rounded-t-2xl" 
          data-aos="zoom-in"
          data-aos-offset="200"
          data-aos-delay="10"
          data-aos-duration="1500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          />
        </Link>
        <div className="p-4">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-2 flex items-center">
            <AiFillStar className="text-orange-500 mr-1 text-lg" />
            {rating > 4.5
              ? rating + " " + "Exceptional"
              : `${rating + " " + "Superb"}`}
            <span className="ml-2">({reviews} Reviews)</span>
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaRegSquareFull />
            {size}
          </p>
          <p className="flex items-center gap-2 text-lg mt-2"><FaLocationDot/>{location}</p>
          {
            sit&& sit!==0?
          <p className="flex items-center gap-2 mt-2">
            <FaBed className="text-lg" />
            {sit + " " + "Sit"} {availability}
          </p> : <p className="flex text-red-600 items-center gap-2 mt-2"> <FaBed className="text-lg" />Not Available</p>
          }
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaWifi />
            {Facilities[1]}
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaCarAlt />
            {Facilities[2]}
          </p>
          <p className="flex items-center gap-2 text-lg mt-2">
            <FaMoon className="text-[#faf9fa] p-1 bg-[#862886] rounded-md" />
            {Facilities[3]}
          </p>

          <p className=" border-b-2 w-full my-3"></p>
          <div className="flex flex-col">
            <div>
              {Offers > 0 ? (
                <div className="mb-6">
                  <p className="mt-2 bg-orange-500 text-lg w-28 text-center rounded-3xl py-1 text-white">
                    {Offers + "% off"}
                  </p>
                  <div className="flex items-center gap-5">

                  <p className="text-xl line-through mt-2 font-bold">
                    USD {price}
                  </p>
                  <p className="text-2xl mt-2 font-bold text-primaryColor">
                    USD {sum}
                  </p>
                  </div>
                </div>
              ) : (
                <div className="mb-6">
                  <p className="mt-2 bg-orange-500 text-lg w-28 text-center rounded-3xl py-1 text-white">
                  {"off not show"}
                </p>
                  <p className="text-2xl mt-2 font-bold">USD {price}</p>
                </div>
              )}
            </div>
            {/* <h3 className="text-2xl font-semibold mb-5">USD {price}</h3> */}
            <Link to={`/details/${_id}`}>
              <button className="btn bg-primaryColor text-white w-full rounded-3xl hover:bg-blue-700">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
SingleRoom.propTypes = {
  room: PropTypes.object,
};
export default SingleRoom;
