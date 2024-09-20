import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaUtensils } from 'react-icons/fa';
import { IoIosStarHalf } from 'react-icons/io';
import { FaEnvelope, FaUser, FaUsers } from 'react-icons/fa6';
import useCart from '../Hooks/useCart';
import useAdmin from '../Hooks/useAdmin';
 

const Dashboard = () => {
     const [cart] = useCart()
     
     const [isAdmin] = useAdmin()

    return (
        <div className='flex w-[80%] m-auto'>
            {/*Dashboard side bar*/}
            <div className="w-64 min-h-screen bg-orange-400">
                <ul className='menu p-4 flex gap-3'>

               { isAdmin ? <>
                    <li>
                        <NavLink to='/dashboard/adminHome'>
                         <FaHome/>
                        Admin Home</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/addItems'>
                         <FaUtensils/>
                        Add Items</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/manageItems'>
                         <FaList/>
                        Manage Items</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/bookings'>
                        <FaAd/>
                        Manage Bookings</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/users'>
                          <FaUsers/>
                        All Users</NavLink>
                   </li>
                </>:<>
                <li>
                        <NavLink to='/dashboard/userHome'>
                         <FaHome/>
                        User Home</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/reservation'>
                         <FaCalendar/>
                        Reservation</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/cart'>
                        <MdOutlineShoppingCart/>
                        My cart  ({cart.length})</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/review'>
                        <IoIosStarHalf/>
                        Review</NavLink>
                   </li>
                   <li>
                        <NavLink to='/dashboard/paymentHistory'>
                          <FaList/>
                        Payment History </NavLink>
                   </li>
                </>
               }
                   
                   <div className="divider"></div>

                   <li>
                        <NavLink to='/'>
                          <FaHome/>
                        Home</NavLink>
                   </li>
                   <li>
                        <NavLink to='/order/salad'>
                          <FaSearch/>
                        Menu</NavLink>
                   </li>
                   <li>
                        <NavLink to='/order/contract'>
                          <FaEnvelope/>
                        Menu</NavLink>
                   </li>


                </ul>
            </div>

             {/*Dashboard Content*/}
            <div className='flex-1'>
                    <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;