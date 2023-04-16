import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";

function StripePayment({ product, makePayment }) {

    return (
        <Card sx={{ maxWidth: 300, margin: '5px' }}>
            <CardMedia
                component="img"
                height="194"
                image=""
                alt="product image"
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.desc}
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
    );
}

export default StripePayment;