import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Rooms from "../../components/Rooms/Rooms";
import useFind from "../../hooks/GetHook/useFind";
import Map from "../../components/Map/Map";
import Testimonials from "../../components/Testimonials/Testimonials";
const Home = () => {
  const axiosFind = useFind()
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axiosFind.get("/rooms").then((res) => {
      setRooms(res.data);
    });
  }, [axiosFind]);
  return (
    <div className="bg-base-300">
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto gap-6 px-8 ">

      {rooms?.map((room) => (
        <Rooms key={room._id} room={room}></Rooms>
      ))}
      </div>
      <Map></Map>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
