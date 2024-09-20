import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/Authprovider';
import { FaShoppingCart } from "react-icons/fa";
import useCart from '../../../Hooks/useCart';
import useAdmin from '../../../Hooks/useAdmin';

const NavBar = () => {

     const {user,logOut}  = useContext(AuthContext); 
     const [isAdmin] = useAdmin();
     const [cart] = useCart()

     const handleLogOut = () => {
      logOut()
      .then(() => {})
      .catch(error => console.log(error))
     }

     const navOptions = 
       <>
         <li><button className='btn btn-ghost'><Link to='/'>Home</Link></button></li>
         <li><button className='btn btn-ghost'><Link to='/menu'>Menu</Link></button></li>
         <li><button className='btn btn-ghost'><Link to='/order'>Order</Link></button></li>
          
         {user && isAdmin &&<li><button className='btn btn-ghost'>
                                  <Link to='/dashboard/adminHome'>Dashboard</Link>
                                </button></li>
         }
         {user && !isAdmin &&<li><button className='btn btn-ghost'>
                                  <Link to='/dashboard/userHome'>Dashboard</Link>
                                </button></li>
         }

         <button className="btn">
          <Link to='/dashboard/cart'>
           <FaShoppingCart className='text-2xl' />
            <div className="badge badge-secondary">+{cart.length}</div>
            {console.log({cart})}
           </Link>
          </button>

         {
          user? <>
            <button onClick={handleLogOut} className='btn btn-ghost'>Logout</button>
          </> : <>
            <li><button className='btn btn-ghost'><Link to='/login'>Login</Link></button></li>
          </>
         }
       </>
     

    return (
        <div>
           <div className="navbar fixed z-10 bg-opacity-30 opacity-90 text-white bg-black max-w-screen-xl mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {navOptions}
    </ul>
  </div>
  {user?

  <div className="navbar-end">
      <div className="avatar online mr-4">
         <div className="w-12 rounded-full">
           <img src={user?.photoURL} />      
         </div>
      </div>
   <a className="btn btn-active btn-neutral">{user?.displayName}</a>
  </div>
  
  :<></>} 
</div>
        </div>
    );
};

export default NavBar;