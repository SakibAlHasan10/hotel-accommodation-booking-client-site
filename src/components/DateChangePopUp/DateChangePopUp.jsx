import { useNavigate, useParams } from "react-router-dom";
import useFind from "../../hooks/GetHook/useFind";
import DatePicker from "react-datepicker";
import useAuth from "../../hooks/CustomApi/useAuth";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
const DateChangePopUp = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { startDate, setStartDate } = useAuth();
  const axiosFind = useFind();
  const bookingDate = moment(startDate).format("DD/MM/YYYY");

  const handleDateUpdate = () => {
    const booking = [bookingDate];
    console.log(booking);
    axiosFind.patch(`/update/${id}`, booking).then((res) => {
      if (res.data.modifiedCount > 0) {
        toast.success("your sign in successful");
        navigate(-1);
      }
      console.log(res.data);
    });
  };
  //   console.log(admission, discharge);
  // console.log(id, bookRoom)
  return (
    <div className="pt-32 mb-24 max-w-screen-lg mx-auto px-6">
        <Helmet>
        <title>Update Date || Booking</title>
      </Helmet>
      <h2 className="text-3xl font-semibold mb-10">Update Your Booking Date</h2>
      <div className="border-2 text-left justify-center p-6 flex items-center gap-3 rounded-lg w-full ">
        <div className="w-full mx-auto ">
          <p className="text-center mb-8 text-xl font-medium">New Date</p>
          <DatePicker
            className=" h-16 border-2 border-primaryColor rounded-lg  w-full mx-auto text-center"
            selected={startDate}
            withPortal
            onChange={(date) => setStartDate(date)}
          />
        </div>
      </div>
      <div className="w-52 mx-auto mb-10 ">
        <button
          onClick={handleDateUpdate}
          className="btn w-full mx-auto bg-[#ffffff01] border-primaryColor border-2 mt-14 hover:bg-primaryColor hover:text-white text-center"
        >
          confirm
        </button>
      </div>
    </div>
  );
};

export default DateChangePopUp;
