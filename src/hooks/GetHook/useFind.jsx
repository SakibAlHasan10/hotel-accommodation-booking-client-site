import axios from "axios";
import { useEffect } from "react";
import useAuth from "../CustomApi/useAuth";
import { useNavigate } from "react-router-dom";

const axiosFind = axios.create({
  baseURL: `http://localhost:5000`,
  withCredentials: true,
});
const useFind = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosFind.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || error.response.status === 403) {
          logout().then(() => {
            navigate("/");
          });
        }
      }
    );
  }, [logout, navigate]);
  return axiosFind;
};

export default useFind;
