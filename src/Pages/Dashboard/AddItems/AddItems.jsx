import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import { useForm } from 'react-hook-form';
import { FaUtensils } from 'react-icons/fa';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`

const AddItems = () => {
    const {register,handleSubmit, reset} = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

      const onSubmit = async(data) => {
        console.log(data);
        const imageFile = {  image:data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile,{
            headers: {
                'content-type': "multipart/form-data"
            }
        } );
        if(res.data.success){
            const menuItem = {
                name : data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: res.data.data.display_url
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data);
            if(menuRes.data.insertedId){
               reset();
               Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Add to menu successfully",
                showConfirmButton: false,
                timer: 1500
              });
            }
            
        }
        console.log('with image url',res.data);
    }

    return (
        <div>
           <SectionTitle Heading={'add an Item'} subHeading={"what's new"}></SectionTitle>
           <div>
           <form className='px-7 py-9 mx-3 rounded-lg bg-slate-200' onSubmit={handleSubmit(onSubmit)}>
               
           <label className='flex flex-col'>Recipe Name*
           <input className='p-3.5 my-1 border text-red-300  rounded-md' type='text' placeholder='Recipe Name' {...register("name", { required: true })} />
           </label>
               <div className='grid grid-cols-2 gap-4'>
                    <label className='flex flex-col'>Recipe Name*
                        <select defaultValue='default' className=' p-3.5 my-1 border  rounded-md' placeholder='Category' {...register("category", { required: true })} >
                            <option disabled value='default'>Select a category</option>
                            <option value="salad">Salad</option>
                            <option value="pizza">pizza</option>
                            <option value="soup">Soup</option>
                            <option value="dessert">Dessert</option>
                            <option value="drinks">Drinks</option>
                        </select>
                    </label>
                    <label className='flex flex-col'>Price
                    <input className='p-3.5 my-1 border rounded-md' type='number' placeholder='price' {...register("price", { required: true })} />
                    </label>
              </div>
            <label className='flex flex-col'>Recipe Details
           <textarea className='p-3.5 h-32 my-1 border rounded-md' type='text' placeholder='Recipe Details' {...register("recipe", { required: true })} />
           </label> 
             <label className='flex flex-col'>Recipe Photo
            <input className=' my-1 p-0.5 border  rounded-md' type="file"  {...register("image", { required: true })} />
            </label> 
             <button type="submit"  className='btn btn-neutral mt-3' >
              add item <FaUtensils/>
             </button> 
            </form>
            </div> 
        </div>
    );
};

export default AddItems;