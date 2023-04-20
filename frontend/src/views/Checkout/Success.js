import React from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { userSubbed } from "store/slices/subscriptionSlice";
import { Link as RouterLink } from 'react-router-dom'


//code defines a React component that displays a success message and
// dispatches an action to update the user's subscription status upon successful payment.
function Success() {
    const dispatch = useDispatch();
    dispatch(userSubbed());
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
            <CheckCircleOutline sx={{ fontSize: "5rem", color: "#2ecc71" }} />
            <Typography variant="h4" component="h2" gutterBottom>
                Ohh! You so PRO!
            </Typography>
            <Typography variant="h6" gutterBottom>
                Your payment was successful. Thank you for your purchase of TRENDR PRO!
            </Typography>
            <Typography variant="body1" gutterBottom>
                We appreciate doing business with you! If you have any questions, please email us at{" "}
                <Link href="mailto:support@trendr.com" underline="hover" color="primary">
                    support@trendr.com
                </Link>
                .
            </Typography>
            <Box sx={{ mt: 5 }}>
                <RouterLink to="/user">
                    <Button variant="contained" color="primary">
                        Go to Home Page
                    </Button>
                </RouterLink>
            </Box>
        </Box>
    );
}

export default Success;
