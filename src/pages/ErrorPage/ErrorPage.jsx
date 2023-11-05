import { NavLink } from "react-router-dom";
import notFound from "../../../src/assets/404.png"
const ErrorPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] ">
      <div  className="w-full text-center py-5">
        <img src={notFound} alt="" className="mx-auto w-1/3 mb-10 " />
        <NavLink
          className="text-white bg-[#0a5299] px-3 rounded-md py-1 hover:shadow-md"
          to="/"
        >
          Go Home
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorPage;
