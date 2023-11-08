import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Rooms from "../../components/Rooms/Rooms";
import useFind from "../../hooks/GetHook/useFind";
import Map from "../../components/Map/Map";
import Testimonials from "../../components/Testimonials/Testimonials";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";

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
      <div className="max-w-screen-lg mt-14 mx-auto px-8 ">

      <h2 className="text-3xl font-bold mb-6">Our Rooms</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
      
      {rooms?.map((room) => (
        <Rooms key={room._id} room={room}></Rooms>
      ))}
      </div>
      </div>
      <SpecialOffers></SpecialOffers>
      <Map></Map>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
