import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Review = ({ children }) => {
  // console.log(Object.keys(children).join(','))
  const {
    // _id, id,
    name,
    rating,
    comment,
  } = children;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <div className=" rounded-lg h-full bg-slate-300 text-center mx-auto p-5">
        <div data-aos="zoom-in" data-aos-offset="200" data-aos-duration="1000">
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
