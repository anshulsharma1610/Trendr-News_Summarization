import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Box } from '@mui/material';
import StripePayment from './PlansCard';
import { useSelector, useDispatch } from 'react-redux';

function SubscriptionPlans() {
    const [plans, setPlans] = useState([]);
    const isLoggedIn = useSelector((state) => {
        console.log('---state here at checkout', state);
        return state.user.isLoggedIn;
    });
    const dispatch = useDispatch();
    let user;
    if (isLoggedIn) user = useSelector((state) => state.user.user.user);

    useEffect(() => {
        const fetchPlans = async () => {
            const response = await fetch(
                "http://localhost:8000/api/subscriptions",
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );

            const plans = await response.json();
            setPlans(plans);
        };

        fetchPlans();
    }, []);

    const handleMakePayment = async (product) => {
        product = {
            name: product.title,
            price: product.price,
            productId: product._id,
            description: product.desc,
            productTenure: product.tenureDays,
            productOwner: "Trendr",
            quantity: 1,
            user: user
        }
        console.log('----- product', product)
        const stripe = await loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);
        const body = { product };
        const headers = {
            "Content-Type": "application/json",
        };

        const response = await fetch(
            "http://localhost:8000/api/checkout",
            {
                method: "POST",
                headers: headers,
                body: JSON.stringify(body),
            }
        );

        const session = await response.json();

        const result = stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            console.log(result.error);
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
            {plans.map(plan => (
                <StripePayment
                    key={plan._id}
                    product={plan}
                    makePayment={() => handleMakePayment(plan)}
                />
            ))}
        </Box>
    );
}

export default SubscriptionPlans;