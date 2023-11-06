import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdGroup } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
import useFind from "../../hooks/GetHook/useFind";
import DetailsPupUp from "../../components/DetailsPopup/DetailsPupUp";
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
    <div className="mt-16 py-10 bg-base-300 px-8 ">
      <div className=" lg:flex max-w-6xl mx-auto p-5 bg-base-100 rounded-xl">
        <div className=" md:w-4/5 lg:w-3/5 ">
          <img src={RoomImages} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="lg:flex ">
          <div className="lg:w-2/5 justify-start mt-6 lg:mt-0 lg:flex-1 gap-3 flex  lg:flex-col">
            {RoomImages?.map((room) => (
              <div key={room} className="">
                <img src={room} alt="" className="w-32 md:w-36 h-28 md:h-36 lg:mx-4 rounded-lg" />
              </div>
            ))}
          </div>
          <div>
            <h2 className="text-2xl mt-3 font-semibold">{Title}</h2>
            <p className=" flex items-center border p-2 md:w-1/3 lg:w-full rounded-md mt-5">
              <AiFillStar className="text-orange-500  mr-1 text-lg" />
              {Rating > 4.5
                ? Rating + " " + "Exceptional"
                : `${Rating + " " + "Superb"}`}
              <span className="ml-2">({Reviews} Reviews)</span>
            </p>
            <p className="text-2xl mt-3 font-semibold text-teal-500">Refundable</p>
            <p className="mt-2">{Availability}</p>
            <p className="mt-2 bg-orange-500 text-lg w-28 text-center rounded-3xl py-1 text-white">{SpecialOffers && "24% off"}</p>
            <p className="text-2xl mt-2 font-bold">USD {PricePerNight}</p>
            <p className="mt-2">for 1 Night</p>
            <p className="flex items-center gap-2 mt-2">
            <MdGroup className="text-lg"/>2 Adult 1 children
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaRegSquareFull className=""/>
            {RoomSize}
          </p>
            {/* <h3 className="text-2xl font-semibold mt-10">Facilities</h3>
            <p>wifi</p>
            <p>wifi</p> */}
              <DetailsPupUp/>
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
