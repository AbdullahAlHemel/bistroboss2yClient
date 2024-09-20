import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss-2y-server.vercel.app',
  });

const useAxiosPublic = () => {
    return axiosPublic
}

export default useAxiosPublic

