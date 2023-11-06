import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Rooms from "../../components/Rooms/Rooms";
import axios from "axios";
const Home = () => {
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/rooms").then((res) => {
      setRooms(res.data);
    });
  }, []);
  return (
    <div>
      <Banner></Banner>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-lg mx-auto gap-6">

      {rooms?.map((room) => (
        <Rooms key={room._id} room={room}></Rooms>
      ))}
      </div>
    </div>
  );
};

export default Home;
