import axios from "axios";


const axiosPublic = axios.create({
    baseURL: 'https://to-do-list-server-pi.vercel.app'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;