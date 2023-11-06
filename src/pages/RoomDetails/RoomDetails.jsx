import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
  const [room, setRoom] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axios.get(`http://localhost:5000/rooms/${id}`).then((res) => {
      setRoom(res.data);
    });
  }, [id]);
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
  console.log(RoomImages)
  return (
    <div className="mt-16 py-10 bg-base-300 ">
      <div className=" flex max-w-6xl mx-auto p-5 bg-base-100 rounded-xl">
        <div className="w-3/5 ">
          <img src={RoomImages} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="w-2/5 gap-3 flex flex-col">
            {
                RoomImages?.map(room=><div key={room} className="">

                    <img src={room} alt="" className="w-36 h-36 mx-4 rounded-lg" />
                </div>)
            }
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;
