import PropTypes from "prop-types";
import { Link } from "react-router-dom";
const Rooms = ({ room }) => {
  // console.log(Object.keys(room).join(','))
  const {
    _id,
    RoomDescription,
    PricePerNight,
    RoomSize,
    Availability,
    RoomImages,
    roomImages,
    SpecialOffers,
    Rating,
    Confirm,
    Title,
    Location,
    Reviews,
  } = room;
  return (
    <div>
        <Link to={`/details/${_id}`}>
        <img src={RoomImages} alt="" className="w-full"/>
        <h3>{Title}</h3>
        </Link>
        <Link to={`/details/${_id}`}>
        <img src={roomImages} alt="" className="w-full"/>
        </Link>


    </div>
  );
};
Rooms.propTypes = {
  room: PropTypes.object,
};
export default Rooms;
