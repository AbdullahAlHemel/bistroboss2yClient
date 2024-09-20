import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";


const FoodCard = ({item}) => {

    const {user} = useAuth();
    const {name, price, image , recipe, _id} = item;
    const navigate = useNavigate()
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const[, refetch] = useCart()
    

    const handleAddToCart = () => {
      if(user && user.email){
          //TODO: send cart item to the Datase
          const cartItem = {
            menuId: _id,
            email: user.email,
            name,
            image,
            price
          }
          axiosSecure.post('carts', cartItem)
          .then(res => {
            console.log(res.data);
            if(res.data.insertedId){
                Swal.fire(`${name} added!`);
            }
            refetch()
          })
      }

      else{
        Swal.fire({
            title: "You are not Login",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Login now"
          }).then((result) => {
             if(result.isConfirmed){
               navigate('/login',{ state: { from: location } })}
          });}
      
    }

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img src={image} alt="Shoes" />
            </figure>
             <p className='bg-stone-950 text-white absolute right-5 top-3 p-3 font-bold'>$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center">
                <button onClick={handleAddToCart} className="btn btn-outline mt-5">Add to cart</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default FoodCard;