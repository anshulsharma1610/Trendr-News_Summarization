import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Box } from '@mui/material';
import StripePayment from './PlansCard';

function SubscriptionPlans() {
    const [plans, setPlans] = useState([]);

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