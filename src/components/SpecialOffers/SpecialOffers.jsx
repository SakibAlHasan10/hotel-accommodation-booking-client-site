import useAuth from "../../hooks/CustomApi/useAuth";
import SingleRoom from "../../pages/Rooms/SingleRoom";

const SpecialOffers = () => {
    const { loadRoom } = useAuth();
    return (
        <div className="max-w-screen-lg mx-auto px-6  mt-6 bg-base-100 py-6 rounded-2xl">
            <p className="my-5 text-2xl font-semibold">Special Offers</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
            {loadRoom?.slice(3,6).map((room) => (
            <SingleRoom key={room._id} room={room}></SingleRoom>
          ))}
            </div>
        </div>
    );
};

export default SpecialOffers;