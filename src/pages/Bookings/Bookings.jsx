import { useState } from "react";
import useAuth from "../../hooks/CustomApi/useAuth";
import useFind from "../../hooks/GetHook/useFind";
import { useQuery } from "@tanstack/react-query";
import SingleBook from "./SingleBook";
import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet";

const Bookings = () => {
  const { user } = useAuth();
  const axiosFind = useFind();
  const [allBook, setAllBook] = useState([]);
  const email = user?.email;
  const { isPending, error, data, isLoading } = useQuery({
    queryKey: ["allBookRoom"],
    queryFn: () =>
      axiosFind.get(`/books/${email}`).then((res) => {
        setAllBook(res.data);
      }),
  });

  isPending

  return (
    <div className=" max-w-screen-lg mx-auto pt-28 px-6">
      <Helmet>
      <title>My Booking || Booking</title>
      </Helmet>
      <h2 className="text-3xl font-semibold mb-8">My Bookings</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        <Outlet />
        {allBook &&
          allBook?.map((book) => (
            <SingleBook key={book._id} book={book}></SingleBook>
          ))}
      </div>
    </div>
  );
};

export default Bookings;
