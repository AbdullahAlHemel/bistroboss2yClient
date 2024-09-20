// import React from 'react';
// import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// import { Elements } from '@stripe/react-stripe-js';
// import { loadStripe } from '@stripe/stripe-js';
// import CheckOutForm from './CheckOutForm'

// //TODO: add PublishedAble key
// const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_Pk);

// const Payment = () => {
//     return (
//         <div>
//             <SectionTitle Heading={'Payment'} subHeading={'Please Pay To Eat'}></SectionTitle>
//             <div className='w-[450px] border rounded-md px-6 py-8 m-auto'>
//                 <Elements stripe={stripePromise}>
//                    <CheckOutForm></CheckOutForm>
//                 </Elements>
//             </div>
//         </div>
//     );
// };

// export default Payment;