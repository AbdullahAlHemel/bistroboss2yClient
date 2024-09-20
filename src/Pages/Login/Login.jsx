import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/Authprovider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../Components/SocialLogin/SocialLogin';

const Login = () => {

    const{signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);

            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login successfully",
              showConfirmButton: false,
              timer: 1500
            });

            navigate(from, {replace: true});
            
        })
    }

    return (
<div>
  <div className="hero bg-base-200 min-h-screen">
   <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
     <h1 className="text-5xl font-bold">Login now!</h1>    
    </div>
    <div className=" bg-base-100 w-[400px] shadow-2xl p-10">
      <form onSubmit={handleLogin} >
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <input type="submit" value={'Login'} className="btn btn-primary"/>
        </div>
        <p className='text-center'><small>New here? <Link className='text-lg underline text-blue-600' to='/signup'>Sign In</Link></small></p>
      </form>
         <div className='divider'></div>
            <SocialLogin></SocialLogin> 
     </div>
   </div>
 </div>
</div>
    );
};

export default Login;