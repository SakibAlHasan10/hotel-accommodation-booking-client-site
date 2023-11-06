import axios from "axios";

const singleRoom = axios.create({
    baseURL:`http://localhost:5000`, withCredentials:true
})
const useSingleRoom = () => {
    return singleRoom
};

export default useSingleRoom;