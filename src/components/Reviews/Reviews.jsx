import toast from "react-hot-toast";
import useFind from "../../hooks/GetHook/useFind";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Reviews = () => {
  const [roomReviewId, setRoomReviewId] = useState({});
  const navigate = useNavigate()
  const { id } = useParams();
  const axiosFind = useFind();
  useEffect(() => {
    axiosFind.get(`/rooms/${id}`).then((res) => {
      setRoomReviewId(res.data);
    });
  }, [axiosFind, id]);
  // username, rating, comment, and timestamp.
  const { _id } = roomReviewId;
  const handleReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const rating = form.rating.value;
    const comment = form.textarea.value;
    const review = {
      id: _id,
      name,
      rating,
      comment,
    };
    axiosFind.post("/reviews", review).then((res) => {
      if (res.data.insertedId) {
        toast.success("Thanks for your review");
        navigate(-1)
      }
      console.log(res.data);
    });
  };
  return (
    <div>
      <h3 className="font-bold text-lg">Add Review</h3>
      <form onSubmit={handleReview}>
        {/* name */}
        <input
          type="text"
          placeholder="Your Name"
          name="name"
          className="input input-bordered mt-4 input-primary w-full max-w-xs"
        />
        {/* rating */}
        <input
          type="text"
          placeholder="Rating 1 to 5"
          name="rating"
          className="input input-bordered input-primary mt-4 w-full max-w-xs"
        />
        {/* comments */}
        <textarea
          className="textarea textarea-primary mt-5 max-w-xs w-full"
          name="textarea"
          placeholder="Comment"
        ></textarea>
        <button
          type="submit"
          className="btn mt-8 hover:shadow-lg shadow-primaryColor bg-primaryColor text-white w-full max-w-xs rounded-3xl hover:bg-blue-700"
        >
          Confirm
        </button>
      </form>
    </div>
  );
};
Reviews.propTypes = {
  reviewId: PropTypes.string,
};
export default Reviews;
