import SingleRoom from "./SingleRoom";
import Searching from "../../components/Searching/Searching";
import useAuth from "../../hooks/CustomApi/useAuth";

const Rooms = () => {
  const { loadRoom } = useAuth();
  return (
    <div className="pb-20">
      <div className="bg-rooms-bg w-full pb-14 bg-cover bg-center bg-no-repeat">
        <Searching></Searching>
      </div>
      <div className="mt-10 max-w-6xl mx-auto px-8 ">
        <h2 className="text-3xl font-semibold mb-8">Choose your room</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {loadRoom?.map((room) => (
            <SingleRoom key={room._id} room={room}></SingleRoom>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
