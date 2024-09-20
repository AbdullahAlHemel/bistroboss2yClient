import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard.jsx";
import Cart from "../Pages/Dashboard/cart/Cart.jsx";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers.jsx";
import AdminRoute from "./AdminRoute";
import AddItems from "../Pages/Dashboard/AddItems/AddItems.jsx";
import ManageItems from "../Pages/Dashboard/ManageItem/ManageItems.jsx";
import UpdateItem from "../Pages/Dashboard/ManageItem/UpdateItem.jsx";
import Payment from '../Pages/Dashboard/Payment/Payment.jsx'
import PaymentHistory from "../Pages/Dashboard/PaymentHistory/PaymentHistory.jsx";
import UserHome from "../Pages/Dashboard/UserHome/UserHome.jsx";
import AdminHome from "../Pages/Dashboard/AdminHome/AdminHome.jsx";

export const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
	  children: [
	   {
	      path:'/',
	      element:<Home></Home>
	   },
     {
        path:'menu',
        element: <Menu></Menu>
	   },
     {
        path:'order/:category',
        element: <Order></Order>
     },
     {
        path:'order',
        element: <Order></Order>
     },
     {
        path:'login',
        element:<Login></Login> 
     },
     {
        path:'signup',
        element: <SignUp></SignUp>
     },

     {
        path:'secret',
        element:<PrivateRoute><Secret></Secret></PrivateRoute>
     }
	  ]
    },
    {
       path:'dashboard',
       element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
       children: [
         // normal user Routes
         {
            path:'userHome',
            element: <UserHome></UserHome>
         },
         {
            path:'cart',
            element: <Cart></Cart>
         },
         {
            path:'payment',
            element: <Payment></Payment>
         },
         {
            path:'paymentHistory',
            element: <PaymentHistory></PaymentHistory>
         },
         //admin routes only 
         {
            path: 'adminHome',
            element:<AdminRoute><AdminHome></AdminHome></AdminRoute>
         },
         {
            path: 'addItems',
            element:<AdminRoute><AddItems></AddItems></AdminRoute>
         },
         {
            path: 'manageItems',
            element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
         },
         {
            path: 'updateItem/:id',
            element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
            loader: ({params}) => fetch(`https://bistro-boss-2y-server.vercel.app/menu/${params.id}`)
         },
         {
            path: 'users',
            element:<AdminRoute><AllUsers></AllUsers></AdminRoute>
         }
       ]
    }
  ]);
