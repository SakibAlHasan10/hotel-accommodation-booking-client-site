import PropTypes from "prop-types";
const Review = ({ children }) => {
  // console.log(Object.keys(children).join(','))
  const {
    // _id, id,
    name,
    rating,
    comment,
  } = children;
  return (
    <div>
      <div className=" rounded-lg h-full bg-slate-300 text-center mx-auto p-5">
        <div >
          <h3 className="text-2xl font-semibold">{name}</h3>
          <div className="my-3">

          <p>{rating}</p>
          </div>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};
Review.propTypes = {
  children: PropTypes.object,
};
export default Review;
