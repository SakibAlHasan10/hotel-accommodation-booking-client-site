import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import useAuth from "../../hooks/CustomApi/useAuth";
import { FaMoon, FaSun } from "react-icons/fa";
const Root = () => {
  const { theme, setTheme } = useAuth();
  const handleTheme = () => {
    setTheme(!theme);
  };
  return (
    <div>
      <h2 data-theme={`${theme ? "light" : "dark"}`}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <div className="top-1/2 right-0 fixed z-50 px-5 text-3xl ">
        <button onClick={handleTheme}>{theme ? <FaMoon className="border-2 border-black p-2 w-10 h-10 hover:bg-base-300 rounded-lg"/> : <FaSun className="border-2  p-2 w-10 h-10 text-white rounded-lg"/>}</button>
      </div>
      </h2>
    </div>
  );
};

export default Root;
