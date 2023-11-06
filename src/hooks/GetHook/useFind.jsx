import axios from "axios";

const axiosFind = axios.create({
    baseURL:`http://localhost:5000`
})
const useFind = () => {
    return axiosFind
};

export default useFind;