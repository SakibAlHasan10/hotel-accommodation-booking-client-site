import axios from "axios";

const singleRoom = axios.create({
    baseURL:`https://travel-zoo-server.vercel.app`, withCredentials:true
})
const useSingleRoom = () => {
    return singleRoom
};

export default useSingleRoom;