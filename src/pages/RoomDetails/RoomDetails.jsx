import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { FaRegSquareFull } from "react-icons/fa6";
import useFind from "../../hooks/GetHook/useFind";
import DetailsPupUp from "../../components/DetailsPopup/DetailsPupUp";
import useAuth from "../../hooks/CustomApi/useAuth";
import { FaWifi, FaCarAlt, FaBed } from "react-icons/fa";
import moment from "moment/moment";
import Review from "../../components/Review/Review";
import { Helmet } from "react-helmet";
let array = [];
const RoomDetails = () => {
  const axiosFind = useFind();
  // const [sitAble, setSitSitAble] =useState()
  const [room, setRoom] = useState({});
  const { id } = useParams();
  const {
    startDate,
    reviewCount,
    setReviewCount,
    // setStartDate,
    // setEndDate
  } = useAuth();
  // console.log(startDate, endDate);

  useEffect(() => {
    axiosFind.get(`/rooms/${id}`).then((res) => {
      setRoom(res.data);
    });
  }, [id, axiosFind]);

  useEffect(() => {
    axiosFind.get(`/reviews/${id}`).then((res) => {
      setReviewCount(res.data);
    });
  }, [id, axiosFind, setReviewCount]);

  const {
    _id,
    // booking,
    description,
    price,
    size,
    availability,
    images,
    Offers,
    rating,
    sit,
    Facilities,
    title,
    location,
    // reviews,
  } = room;
  // console.log(booking);
  // console.log(booking, findDate)

  // if(!booking){
  //   console.log('kkkkkkkhhhh')
  //     // setArr([...new Array, startDate])

  //   }

  // sum offers
  const sum = price - price * (Offers / 100);
  const bookingPrice = Offers > 0 ? sum : price;

  // date formatting
  const bookingDate = moment(startDate).format("MM/DD/YYYY");
  // const time = moment(booking[0]).isSame(bookingDate, "day")
  // const date1 = moment(booking[0]).format('MM/DD/YYYY')
  // console.log(time, bookingDate[0])

  // compare two date
  // const findDate = booking?.find(book => moment(book).isSame(bookingDate, "day"))
  //  if(sit===0 && findDate){
  //   setSitSitAble(true)
  //  }else{
  //   setSitSitAble(false)
  //  }
  // console.log(findDate)

  array = [bookingDate];
  const bookingSum = {
    booking: array,
    id: _id,
    title: title,
    sit: sit,
    price: bookingPrice,
    size: size,
    description: description,
    img: images,
  };
  // console.log(Facilities)

  return (
    <div className="mt-16 py-10 bg-base-300 px-8 ">
      <Helmet>
      <title>Room Details || Booking</title>
      </Helmet>
      <div className=" lg:flex max-w-6xl mx-auto p-5 bg-base-100 rounded-xl">
        <div className=" md:w-4/5 lg:w-3/5 ">
          <img src={images} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="lg:flex ">
          <div className="lg:w-2/5 justify-start mt-6 lg:mt-0 lg:flex-1 gap-3 flex  lg:flex-col">
            {images?.map((room) => (
              <div key={room} className="">
                <img
                  src={room}
                  alt=""
                  className="w-32 md:w-36 h-28 md:h-36 lg:mx-4 rounded-lg"
                />
              </div>
            ))}
          </div>
          <div>
            {/* <h2 className="text-2xl mt-3 font-semibold">{title}</h2> */}
            <p className=" flex items-center border p-2 md:w-1/2 lg:w-full rounded-md mt-5">
              <AiFillStar className="text-orange-500  mr-1 text-lg" />
              {rating > 4.5
                ? rating + " " + "Exceptional"
                : `${rating + " " + "Superb"}`}
              <span className="ml-2">({reviewCount.length} Reviews)</span>
            </p>
            <p className="text-2xl mt-3 font-semibold text-teal-500">
              {Facilities && Facilities[0]}
            </p>
            {Offers > 0 ? (
              <div>
                <p className="mt-2 bg-orange-500 text-lg w-28 text-center rounded-3xl py-1 text-white">
                  {Offers + "% off"}
                </p>
                <p className="text-xl line-through mt-2 font-bold">
                  USD {price}
                </p>
                <p className="text-2xl mt-2 font-bold text-primaryColor">
                  USD {sum}
                </p>
              </div>
            ) : (
              <div>
                {/* <p className="mt-2 bg-orange-500 text-lg w-28 text-center rounded-3xl py-1 text-white">
                  {"no off"}
                </p> */}
                <p className="text-2xl mt-2 font-bold">USD {price}</p>
              </div>
            )}
            <p className="mt-2">for 1 Night</p>
            {sit && sit !== 0 ? (
              <p className="flex items-center gap-2 mt-2">
                <FaBed className="text-lg" />
                {sit + " " + "Bed"} {availability}
              </p>
            ) : (
              <p className="flex text-red-600 items-center gap-2 mt-2">
                {" "}
                <FaBed className="text-lg" />
                Not Available
              </p>
            )}
            <p className="flex items-center gap-2 mt-2">
              <FaRegSquareFull className="" />
              {size}
            </p>
            <div className="flex gap-4">
              <p className="flex items-center gap-2 text-lg mt-2">
                <FaWifi />
                {Facilities && Facilities[1]}
              </p>
              <p className="flex items-center gap-2 text-lg mt-2">
                <FaCarAlt />
                {Facilities && Facilities[2]}
              </p>
            </div>
            <p className="flex items-center gap-2 text-lg mt-2">
              <MdLocationPin />
              {location}
            </p>
            <DetailsPupUp bookingSum={bookingSum}></DetailsPupUp>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="max-w-6xl mx-auto p-5 bg-base-100 rounded-xl mt-8">
        <h2 className="text-2xl mb-3 font-semibold">Room Description</h2>
        <p>{description}</p>
      </div>
      {/* review */}
      <div className="max-w-6xl mx-auto p-5 bg-base-100 rounded-xl mt-8">
        <h2 className="text-2xl mb-3 font-semibold">Room review</h2>
        <div className="grid mt-6 grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {reviewCount.length > 0 ? (
            reviewCount
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
  );
};

export default RoomDetails;
