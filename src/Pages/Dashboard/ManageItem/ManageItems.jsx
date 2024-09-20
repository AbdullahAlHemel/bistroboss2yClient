import React from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, loading ,refetch] = useMenu();
    const axiosSecure = useAxiosSecure()

    const handleUpdate = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }
    
    const handleDeleteItem = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then( async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                console.log(res.data);
                if(res.data.deletedCount > 0){
                    refetch()
                    Swal.fire({
                        title: "Deleted!",
                        text: `${item.name} has been deleted.`,
                        icon: "success"
                      });
                }
            }
          });

    }

    return (
        <div>
            <SectionTitle Heading='Manage All Items' subHeading='Hurry up'></SectionTitle>
           <div>
           <div className="overflow-x-auto">
        <table className="table">
        {/* head */}
       <thead>
        <tr>
            <th>#</th>
            <th>Image</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Update</th>
            <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {
            menu.map((item, index) => <tr key={item._id}>
                <td> {index +1} </td>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                            src={`${item.image}`}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                        </div>
                    </div>
                </td>
                <td>
                    <div>
                    <div className="font-bold">{item.name}</div>
                    </div>
                </td>
                <td className='font-bold'>
                    $ {item.price}
                </td>
                <td>
                    <Link to={`/dashboard/updateItem/${item._id}`}>
                    <button className='btn btn-circle'  
                        ><FaEdit className='text-blue-600'/>
                    </button>
                    </Link>
                </td>
                <td>
                    <button onClick={() => handleDeleteItem(item)} className="btn btn-ghost btn-sm text-red-600">
                        <FaTrash/>
                    </button>
                </td>
            </tr>)
        }

        </tbody>
    </table>
    </div>
           </div>
        </div>
    );
};

export default ManageItems;