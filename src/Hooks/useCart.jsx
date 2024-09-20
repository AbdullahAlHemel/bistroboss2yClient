import {
    useQuery,
  } from '@tanstack/react-query'
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    //tanStack Query 
    const { error, refetch , data: cart = [] } = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/carts?email=${user.email}`)
            return res.data
          },
      })
    
      if (error) return 'An error has occurred: ' + error.message
    return [cart, refetch]
};

export default useCart;

