import React from "react";
import { Typography, Box, Link, Button } from "@mui/material";
import { CheckCircleOutline } from "@mui/icons-material";

function Success() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
            <CheckCircleOutline sx={{ fontSize: "5rem", color: "#2ecc71" }} />
            <Typography variant="h4" component="h2" gutterBottom>
                Thank you for your order!
            </Typography>
            <Typography variant="h6" gutterBottom>
                Your payment was successful.
            </Typography>
            <Typography variant="body1" gutterBottom>
                We appreciate your business! If you have any questions, please email us at{" "}
                <Link href="mailto:support@trendr.com" underline="hover" color="primary">
                    support@trendr.com
                </Link>
                .
            </Typography>
            <Box sx={{ mt: 5 }}>
                <Button variant="contained" color="primary" href="/">
                    Go to Home Page
                </Button>
            </Box>
        </Box>
    );
}

export default Success;