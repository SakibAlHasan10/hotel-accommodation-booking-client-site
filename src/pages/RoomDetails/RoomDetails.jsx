import axios from "axios";
import { useParams } from "react-router-dom";

const RoomDetails = () => {
    const {id} = useParams()
    axios.get(`http://localhost:5173/details/${id}`)
    .then(res=>{
        console.log(res.data)
    })
    return (
        <div>
            room
        </div>
    );
};

export default RoomDetails;