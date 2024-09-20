// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useEffect, useState } from 'react';
// import useAxiosSecure from '../../../Hooks/useAxiosSecure'
// import useAuth from '../../../Hooks/useAuth';
// import useCart from '../../../Hooks/useCart'

// const CheckoutFrom = () => {
//     const [error, setError] = useState('');
//     const [clientSecret, setClientSecret] = useState('')
//     const [transactionId, SetTransactionId] = useState('')
//     const stripe =  useStripe();
//     const elements = useElements();
//     const axiosSecure = useAxiosSecure();
//     const [cart] = useCart(); 
//     const { user } = useAuth()
//     const totalPrice = cart.reduce( (total, item) => total + item.price , 0)

//     useEffect(()=>{
//         axiosSecure.post('/create-payment-intent', {price: totalPrice})
//         .then(res => {
//             console.log(res.data.clientSecret);
//             setClientSecret(res.data.clientSecret)
//         })
//     },[axiosSecure, totalPrice])

//     const handleSubmit = async(event)=>{
//         event.preventDefault();

//         if(!stripe || !elements){
//             return 
//         }
//         const card = elements.getElement(CardElement)

//         if(card == null){
//             return
//         }
//         const {error, paymentMethod} = await stripe.createPaymentMethod({
//             type: 'card',
//             card
//         })
//         if(error){
//             console.log('payment error', error);
//             setError(error.message);
//         }
//         else{
//             console.log('payment method', paymentMethod);
//             setError('')
//         }
//         // confirm Payment
//         const {paymentIntent, error:confirmError} =await stripe.confirmCardPayment(clientSecret, {
//             payment_method:{
//                 card: card,
//                 billing_details:{
//                     email: user?.email || 'anonymous',
//                     name :user?.displayName || 'anonymous'
//                 }
//             }
//         })
//         if(confirmError){
//             console.log('confirm Error');
//         }else{
//             console.log('payment intent',paymentIntent);
//             if(paymentIntent.status === 'succeeded'){
//                 console.log('transaction_id', paymentIntent.id);
//                 SetTransactionId(paymentIntent.id);
//             }
            
//         }
//     }
//     return (
//         <form className='w-[450px] m-2 mx-auto' onSubmit={handleSubmit}>
//            <CardElement
//                 options={{
//                 style: {
//                     base: {
//                     fontSize: '16px',
//                     color: '#424770',
//                     '::placeholder': {
//                         color: '#aab7c4',
//                     },
//                     },
//                     invalid: {
//                     color: '#9e2146',
//                     },
//                 },
//                 }}
//             />
//             <button className='btn btn-sm btn-primary mt-4' type='submit'
//              disabled={!stripe || !clientSecret }>Pay</button>
//             <p className='text-red-600'>{error}</p>
//             {transactionId && <p className='text-green-600'>Your Transaction id:
//                 {transactionId}</p>}
//         </form>
//     );
// };

// export default CheckoutFrom;