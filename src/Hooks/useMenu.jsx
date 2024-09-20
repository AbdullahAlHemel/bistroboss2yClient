import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import useAxiosPublic from './useAxiosPublic';

const useMenu = () => {
   const axiosPublic = useAxiosPublic();
   const { data:menu = [], isPending:loading ,refetch  } = useQuery({
      queryKey: ['menu'],
      queryFn: async () => {
         const res = await axiosPublic.get('/menu');
         return res.data;
      }
    })
  
   return [menu, loading , refetch]
};

export default useMenu;




















//{note: Normal Fetch}
// import { useEffect, useState } from "react";

// const useMenu = () => {
//    const [menu , setMenu] = useState([]);
//    const [loading, setLoading] = useState(true);
//    useEffect(() => {
//    //  fetch('menu.json')
//       fetch('https://bistro-boss-2y-server.vercel.app/menu')
//     .then(res => res.json())
//     .then(data => {
//          setMenu(data);
//          setLoading(false)
//     })
//    },[])
//    return [menu, loading]

// };

// export default useMenu;