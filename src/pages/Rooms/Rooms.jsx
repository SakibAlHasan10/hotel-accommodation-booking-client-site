import { useEffect, useState } from "react";
import useFind from "../../hooks/GetHook/useFind";
import SingleRoom from "./SingleRoom";

const Rooms = () => {
  const axiosFind = useFind();
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axiosFind.get("/rooms").then((res) => {
      setRooms(res.data);
    });
  }, [axiosFind]);
  return (
    <div>
      <div className="bg-rooms-bg w-full h-[50vh] bg-cover bg-center bg-no-repeat"></div>
      <div className="mt-10 max-w-6xl mx-auto ">

      <h2 className="text-3xl font-semibold mb-8">Choose your room</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {rooms?.map((room) => (
          <SingleRoom key={room._id} room={room}></SingleRoom>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Rooms;
