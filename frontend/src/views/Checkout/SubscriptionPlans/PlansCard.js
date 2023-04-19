import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import logo from 'assets/images/icons/pro-logo.jpeg';

function StripePayment({ product, makePayment }) {
    return (
        <Card sx={{
            width: 300,
            margin: '5px',
            paddingTop: '20px',
            paddingRight: '20px',
            maxWidth: 300
        }}>
            <CardMedia
                component="img"
                height="194"
                image={logo}
                alt="product image"
            />
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    justifyContent='center'
                    textAlign="center"
                >
                    <b>{product.title}</b>
                </Typography>
                <Typography
                    variant="body2"
                    color="text.primary"
                >
                    <b>{product.desc}</b>
                </Typography>
                <Typography
                    variant="body2"
                    color="text.primary"
                    component="ul"
                >
                    {product.features.map((feature, index) => (
                        <li key={index}> <b>{feature}</b></li>
                    ))}
                </Typography>
                <Box sx={{ my: 3 }} />
                <Typography variant="h4" color="text.primary">
                    <b>${product.price} for {product.tenureDays} days</b>
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button
                    size="large"
                    variant="contained"
                    onClick={() => makePayment(product)}
                >
                    Pay Now
                </Button>
            </CardActions>
        </Card>
    );
}

export default StripePayment;