import { loadStripe } from '@stripe/stripe-js';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle'
import { Elements } from '@stripe/react-stripe-js';
import CheckOutForm from '../Payment2/CheckOutForm';

//todo
const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_pk);
const Payment = () => {
    return (
        <div>
            <SectionTitle Heading='Payment' subHeading='Please pay to eat'></SectionTitle>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    )
};

export default Payment