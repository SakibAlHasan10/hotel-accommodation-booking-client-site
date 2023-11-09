import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Rooms = ({ room }) => {
  // console.log(Object.keys(room).join(","));
  const {
    _id,
    // description,
    // price,
    // size,
    // availability,
    images,
    // Offers,
    // rating,
    // sit,
    // Facilities,
    // booking,
    // confirm,
    title,
    location,
    // reviews,
  } = room;
  useEffect(() => {
    AOS.init({
    });
  }, [])
  return (
    <div className="relative" 
    data-aos="flip-up"
    data-aos-offset="200"
    data-aos-delay="20"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    // data-aos-anchor-placement="top-center"
    >
      <img src={images} alt="" className="w-full rounded-lg" 
    />
      <Link to={`/details/${_id}`}>
        <div className=" absolute bottom-0 hover:bg-[#1817179f] rounded-lg w-full h-full">
          <div className="p-5 text-white pt-36">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p>{location}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
Rooms.propTypes = {
  room: PropTypes.object,
};
export default Rooms;
