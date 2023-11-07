import PropTypes from "prop-types";
import useFind from "../../hooks/GetHook/useFind";
import useAuth from "../../hooks/CustomApi/useAuth";
import toast from "react-hot-toast";
const DetailsPupUp = ({ bookingSum }) => {
  const { user } = useAuth();
  const axiosFind = useFind();
  const {
    title,
    // startDate,
    // endDate,
    description,
    price,
    size,
  } = bookingSum;
  const bookInfo = { email: user?.email, bookingSum };
  // console.log(startDate,endDate)
  const handleBooking = () => {
    axiosFind.patch("/bookings", bookInfo).then((res) => {
      if(res.data.modifiedCount>0){
        toast.success("your booking successful");
      }
      // console.log(res.data);
    });
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
      disabled={!user}
        className={`btn mt-8 hover:shadow-lg shadow-primaryColor bg-primaryColor text-white w-full rounded-3xl
        hover:bg-blue-700`}
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Book Now
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm text-black btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-lg">{title}</h3>
          {/* <p className="py-4">{startDate}</p> */}
          {/* <p className="py-4">{endDate}</p> */}
          <p>{size}</p>
          <p>USD {price}</p>
          <p>{description}</p>
          <button
            onClick={handleBooking}
            className="btn mt-8 hover:shadow-lg shadow-primaryColor bg-primaryColor text-white w-full rounded-3xl hover:bg-blue-700"
          >
            Confirm
          </button>
        </div>
      </dialog>
    </div>
  );
};
DetailsPupUp.propTypes = {
  bookingSum: PropTypes.object,
};
export default DetailsPupUp;
