import { FaTrash } from "react-icons/fa";
import useCart from "../../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
    const axiosSecure = useAxiosSecure()
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce((total, item) => total + item.price,0);

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          .then((result) => {
             if (result.isConfirmed) {

                axiosSecure.delete(`carts/${id}`)
                .then(res => {
                       if(res.data.deletedCount > 0 ){
                           Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                           });
                       }
                       refetch()
                })
            }
          });
    }

    return (<>
        <div className="flex justify-evenly gap-5 mt-3 border border-red-100 p-2 mx-2">
            <h2 className="text-xl">Items : {cart.length}</h2>
            <h2 className="text-xl">Total Price : {totalPrice}</h2>
            
            {cart.length ? <Link to='/dashboard/payment'>
                <button className="btn btn-primary">Pay</button>
            </Link>:<>
            <button disabled className="btn btn-primary">Pay</button>
            </>
            }
           
        </div> 

        <div className="overflow-x-auto">
        <table className="table w-full">
        {/* head */}
        <thead>
            <tr>
            <th>#</th>
            <th>image</th>
            <th>Price</th>
            </tr>
        </thead>
        <tbody>
           {
            cart.map((item, index) =>  <tr key={item._id}>
        
                 <td className="font-bold text-gray-600">{index +1 }</td>
                <td>
                    <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                        <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-semibold">{item.name}</div>
                    </div>
                    </div>
                </td>
                <td className="text-lg font-medium text-orange-600">{item.price} $ </td>
                <th>
                    <button onClick={() => handleDelete(item._id)} className="btn btn-ghost btn-sm text-red-600">
                        <FaTrash/>
                    </button>
                </th>
                </tr>)
           } 
        </tbody>    

        </table>
     </div>
    </>
    );
};

export default Cart;