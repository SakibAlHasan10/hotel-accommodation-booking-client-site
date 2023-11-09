import Banner from "../../components/Banner/Banner";
import Rooms from "../../components/Rooms/Rooms";
import Map from "../../components/Map/Map";
// import Testimonials from "../../components/Testimonials/Testimonials";
import SpecialOffers from "../../components/SpecialOffers/SpecialOffers";
import useAuth from "../../hooks/CustomApi/useAuth";
import Review from "../../components/Review/Review";
import { useEffect, useState } from "react";
import useFind from "../../hooks/GetHook/useFind";

const Home = () => {
  const [review, setReview] = useState([]);
  const axiosFind = useFind();
  useEffect(() => {
    axiosFind.get(`/reviews`).then((res) => {
      setReview(res.data);
    });
  }, [axiosFind]);
  const { loadRoom } = useAuth();
  return (
    <div className="bg-base-300">
      <Banner></Banner>
      <div className="max-w-screen-lg mt-14 mx-auto px-8 ">
        <h2 className="text-3xl font-bold mb-6">Our Rooms</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {loadRoom?.map((room) => (
            <Rooms key={room._id} room={room}></Rooms>
          ))}
        </div>
      </div>
      <SpecialOffers></SpecialOffers>
      <Map></Map>
      {/* <Testimonials></Testimonials> */}
      <div className="pb-14">
        <div className="max-w-screen-lg mx-auto p-5 bg-base-100 rounded-xl mt-8">
          <h2 className="text-2xl mb-3 font-semibold">Room review</h2>
          <div className="grid mt-6 grid-cols-1 gap-5 md:grid-cols-4">
            {review.length > 0 ? (
              review
                ?.slice(0, 4)
                .map((sl) => <Review key={sl._id}>{sl}</Review>)
            ) : (
              <p className="text-center text-lg font-normal my-10">
                Review Not Available
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
