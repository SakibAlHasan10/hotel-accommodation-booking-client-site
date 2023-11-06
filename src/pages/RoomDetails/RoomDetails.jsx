import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import useFind from "../../hooks/GetHook/useFind";
const RoomDetails = () => {
  const axiosFind = useFind();
  const [room, setRoom] = useState({});
  const { id } = useParams();
  useEffect(() => {
    axiosFind.get(`/rooms/${id}`).then((res) => {
      setRoom(res.data);
    });
  }, [id, axiosFind]);
  const {
    // _id,
    RoomDescription,
    PricePerNight,
    RoomSize,
    Availability,
    RoomImages,
    SpecialOffers,
    Rating,
    // Confirm,
    Title,
    Location,
    Reviews,
  } = room;
  console.log(Location);
  return (
    <div className="mt-16 py-10 bg-base-300 ">
      <div className=" flex max-w-6xl mx-auto p-5 bg-base-100 rounded-xl">
        <div className="w-3/5 ">
          <img src={RoomImages} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="flex">
          <div className="w-2/5 flex-1 gap-3 flex flex-col">
            {RoomImages?.map((room) => (
              <div key={room} className="">
                <img src={room} alt="" className="w-36 h-36 mx-4 rounded-lg" />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-semibold">{Title}</h2>
            <p className="flex items-center border px-2 py-2 mt-2">
              <AiFillStar className="text-orange-500 " /> {Rating} Star
            </p>
            <p>{Reviews} reviews</p>
            <p>{Availability}</p>
            <p className="text-2xl font-semibold text-teal-500">Refundable</p>
            <p>{SpecialOffers && "24% off"}</p>
            <p className="text-2xl font-bold">USD {PricePerNight}</p>
            <p>for 1 Night</p>
            <p>2 Adults 1 Children</p>
            <p>{RoomSize}</p>
            <h3 className="text-2xl font-semibold mt-10">Facilities</h3>
            <p>wifi</p>
            <p>wifi</p>
            <p>wifi</p>
          </div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-5 bg-base-100 rounded-xl mt-8">
        <h2>Room Details</h2>
        <p>{RoomDescription}</p>
      </div>
    </div>
  );
};

export default RoomDetails;
