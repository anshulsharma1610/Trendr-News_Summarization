import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import logo from 'assets/images/icons/pro-logo.jpeg'



function StripePayment({ product, makePayment }) {

    return (
        <Card sx={{ width: 300, margin: '5px', textAlign: 'center', paddingTop:'20px' , paddingRight:'20px' , maxWidth:300}}>
            <CardMedia
                component="img"
                height="194"
                image={logo}
                alt="product image"
            />
            <CardContent  style={{ fontSize:'20px'}} >
                <Typography  style={{ fontSize:'15px', textAlign: 'center'}} gutterBottom variant="h4" component="div">
                    <b>{product.name}</b>
                </Typography>
                <Typography style={{ fontSize:'15px', textAlign: 'center'}} variant="body2" color="text.secondary">
                    <b>{product.desc}</b>
                </Typography>
                <Typography style={{ fontSize:'15px', textAlign: 'center', justifyContent: 'center'}} variant="body2" color="text.secondary" component="ul">
                    {product.features.map((feature, index) => (
                        <li  key={index}> <b>{feature}</b></li>
                    ))}
                </Typography>
                <Box sx={{ my: 3 }} />
                <Typography variant="body2" color="text.secondary">
                    <b>Price: ${product.price}</b>
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="large" variant="contained" onClick={() => makePayment(product)}>
                    Pay Now
                </Button>

            </CardActions>
        </Card>
    );
}

export default StripePayment;