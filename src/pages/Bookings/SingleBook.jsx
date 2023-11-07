const SingleBook = ({ book }) => {
  // console.log(Object.keys(book).join(','))
  const {
    _id,
    RoomDescription,
    PricePerNight,
    RoomSize,
    Availability,
    RoomImages,
    SpecialOffers,
    Rating,
    Confirm,
    Title,
    Location,
    Reviews,
    bookDate,
    email,
  } = book;
  console.log(bookDate.endDate,bookDate.startDate )
  const handleDeleteBooking=()=>{
    console.log(_id)
  }
  return (
    <div className="flex border h-44 p-4 gap-3 rounded-lg">
      <img src={RoomImages} alt="" className="h-36 w-40 rounded-lg" />
      <div>
        <h2 className="text-2xl font-semibold">{Title}</h2>
        <p>USD {PricePerNight}</p>
        {/* <p>{RoomSize}</p> */}
        <p>{ bookDate.startDate}</p>
        <p>{bookDate.endDate}</p>
        <div>
            <button className="btn btn-outline border-2 hover:border-white border-primaryColor hover:bg-primaryColor mr-5">change date</button>
            <button onClick={handleDeleteBooking} className="btn bg-primaryColor hover:bg-blue-600 text-white">deleted</button>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
