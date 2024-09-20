import React, { useContext } from 'react';
import { useForm } from "react-hook-form"
import { AuthContext } from '../../Providers/Authprovider';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SignUp = () => {

    const {register, handleSubmit, reset, formState: { errors } } = useForm();
    const {createUser, updateUserProfile }= useContext(AuthContext);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data.email, data.password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            updateUserProfile(data.name, data.photoUrl)
            .then(() => {
               //create user entry in the database
              const userInfo = {
                name: data.name,
                email: data.email
              }

               axiosPublic.post(('/users'), userInfo)
               .then(res => {
                if(res.data.insertedId){
                  console.log('user Added to the DataBase');
                  reset();
                  Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Sign Up successfully",
                    showConfirmButton: false,
                    timer: 1500
                  });
                  navigate('/')
                }
            })
            })
            .catch(error => console.log(error)
            )
            
            
        })
    }

    // console.log(watch("example")) 
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="name" {...register("name",{ required: true })} name='name' placeholder="name" className="input input-bordered" />
                {errors.name && <span className='text-red-500'>Name is required</span>}
                </div>  
                <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoUrl</span>
                </label>
                <input type="text" {...register("photoUrl",{ required: true })} name='photoUrl' placeholder="photo Url" className="input input-bordered" />
                {errors.name && <span className='text-red-500'>photoUrl is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" {...register("email",{ required: true })} name='email' placeholder="email" className="input input-bordered"  />
                {errors.email && <span className='text-red-500'>Email is required</span>}
                </div>
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" {...register("password",{ required: true ,  minLength: 6, maxLength: 20 })} name='password' placeholder="password" className="input input-bordered"  />
                {errors.password?.type === 'required' && <span className='text-red-500'>Password is required</span>}   
                {errors.password?.type === 'minLength' && <span className='text-red-500'>Password must be 6 characters</span>}   
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <input type="submit" name="submit" className='btn btn-primary' id="" />
                </div>
            </form>
              <p className='px-6'>New Here?<Link to='/signup'></Link></p>
            </div>
        </div>
        </div>
    );
};

export default SignUp;