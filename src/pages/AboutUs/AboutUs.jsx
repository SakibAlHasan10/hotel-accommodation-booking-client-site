import { Helmet } from "react-helmet";
import Gallery from "../../components/Gallery/Gallery";
import { useEffect, useState } from "react";
import useFind from "../../hooks/GetHook/useFind";

const AboutUs = () => {
  const axiosFind = useFind();

  const [allImg, setAllImg] = useState([]);
  useEffect(() => {
    axiosFind.get(`/rooms`).then((res) => {
      setAllImg(res.data);
    });
  }, [axiosFind]);
  //   console.log(loadRoom)
  return (
    <div className=" bg-base-300 pt-28 pb-20">
      <div className="max-w-screen-lg mx-auto px-6">
        <Helmet>
          <title>Gallery || Booking</title>
        </Helmet>
        <h2 className="text-3xl font-semibold">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {allImg &&
            allImg.map((room) => (
              <Gallery key={room._id} room={room}></Gallery>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
