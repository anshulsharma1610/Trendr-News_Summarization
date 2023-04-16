import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import MainCard from "components/cards/MainCard";

function StripePayment() {
    const [product, setProduct] = useState({
        name: "Trendr Pro",
        price: 20,
        productOwner: "Trendr",
        description: `Unlock premium features with Trendr Pro such as: `,
        features: [
            "Watch Trending News",
            "50 news per day",
        ],
        quantity: 1,
    });

    const makePayment = async () => {
        console.log('process.env.STRIPE_PUBLISHABLE_KEY', process.env.STRIPE_PUBLISHABLE_KEY)
        const stripe = await loadStripe("pk_test_51MtnTFGM0R8M0qdDfaDIoQZxtOnNpylLnHUF6IWeVXo3ZERf7s7IY5FbvoYKRjRZlkGZb63B4q8gJvcc3YqGUfUJ00VU1fXqP1");
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
            <Card sx={{ maxWidth: 300, margin: '5px' }}>
                <CardMedia
                    component="img"
                    height="194"
                    image="https://images.pexels.com/photos/12428359/pexels-photo-12428359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="product image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {product.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="ul">
                        {product.features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </Typography>
                    <Box sx={{ my: 3 }} />
                    <Typography variant="body2" color="text.secondary">
                        Price: ${product.price}
                    </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Button size="large" variant="contained" onClick={makePayment}>
                        Pay Now
                    </Button>
                </CardActions>
            </Card>
        </Box>

    );
}

export default StripePayment;
