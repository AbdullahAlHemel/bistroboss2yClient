import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/Authprovider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return <h2 className='flex justify-center items-center my-[15%]'><span className="loading loading-bars loading-lg"></span></h2>
    }

    if(user) {
        return children;
    }
    return <Navigate state={{from:location}} to='/login' replace></Navigate>
};

export default PrivateRoute;