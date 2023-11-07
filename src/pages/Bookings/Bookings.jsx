import { useEffect } from "react";
import useAuth from "../../hooks/CustomApi/useAuth";
import useFind from "../../hooks/GetHook/useFind";

const Bookings = () => {
  const { user } = useAuth();
  const axiosFind = useFind();
  const email = user?.email;
//   console.log(email);
  useEffect(() => {
    axiosFind.get(`/books/${email}`).then((res) => {
      console.log(res.data);
    });
  }, [axiosFind, email]);
  return <div>bookings</div>;
};

export default Bookings;
