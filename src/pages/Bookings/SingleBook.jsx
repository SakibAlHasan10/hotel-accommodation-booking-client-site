import useFind from "../../hooks/GetHook/useFind";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
const SingleBook = ({ book }) => {
  const axiosFind = useFind()
  const {
    // _id,
    // RoomDescription,
    // PricePerNight,
    // RoomSize,
    // Availability,
    // RoomImages,
    // SpecialOffers,
    // Rating,
    // Confirm,
    // Title,
    // Location,
    // Reviews,
    // bookDate,
    // email,
    _id,
    title,
    bookDate,
    price,
    img,
  } = book;
  const handleDeleteBooking = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosFind.delete(`/remove/${_id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Deleted!",
              text: "Your room has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  //   console.log(Object.keys(book).join(','))
  return (
    <div className="flex border h-44 p-4 gap-3 rounded-lg">
      <img src={img} alt="" className="h-36 w-40 rounded-lg" />
      <div>
        <h2 className="text-2xl font-semibold">{title}</h2>
        <p>USD {price}</p>
        {/* <p>{size}</p> */}
        <p>{bookDate.startDate}</p>
        <p>{bookDate.endDate}</p>
        <div>
          <button className="btn btn-outline border-2 hover:border-white border-primaryColor hover:bg-primaryColor mr-5">
            change date
          </button>
          <button
            onClick={handleDeleteBooking}
            className={`btn bg-primaryColor hover:bg-blue-600
             text-white`}
          >
            deleted
          </button>
        </div>
      </div>
    </div>
  );
};
SingleBook.propTypes = {
  book: PropTypes.object,
};
export default SingleBook;
