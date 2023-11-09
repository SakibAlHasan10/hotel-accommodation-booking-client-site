import PropTypes from "prop-types";
const Gallery = ({ room }) => {
  const { images } = room;
  console.log(images);
  return (
    <div className="">
      <img src={images} alt="" className=" rounded-lg" />
    </div>
  );
};
Gallery.propTypes = {
  room: PropTypes.object,
};
export default Gallery;
