import {useState } from "react";
import useAuth from "../../hooks/CustomApi/useAuth";
import useFind from "../../hooks/GetHook/useFind";
import SingleBook from "./SingleBook";
import { useQuery } from "@tanstack/react-query";

const Bookings = () => {
  const { user } = useAuth();
  const axiosFind = useFind();
  const [allBook, setAllBook]=useState([])
  const email = user?.email;
  const { isPending, error, data } = useQuery({
    queryKey: ['allBookRoom'],
    queryFn: () =>
    axiosFind.get(`/books/${email}`).then((res) => {
              setAllBook(res.data);
            })
  })
//   console.log(allBook);
//   useEffect(() => {
//     axiosFind.get(`/books/${email}`).then((res) => {
//       setAllBook(res.data);
//     });
//   }, [axiosFind, email]);
  return (
    <div className=" max-w-screen-lg mx-auto pt-28 h-screen">
        <h2 className="text-3xl font-semibold mb-8">My Bookings</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 ">
        {
            allBook&&allBook?.map(book=><SingleBook
            key={book._id}
            book={book}
            ></SingleBook>)
        }
    </div>
    </div>
  );
};

export default Bookings;
