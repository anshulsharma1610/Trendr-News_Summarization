import React from "react";
import { Typography, Box, Button } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom'

// code defines a component that displays a cancellation message and provides a link to contact support,
//  along with a button to return to the home page.
function Cancel() {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
            <Typography variant="h4" gutterBottom>
                Oops! Your payment has been cancelled.
            </Typography>
            <Typography variant="body1" gutterBottom>
                Sorry for the inconvinience! If you have any questions, please email us at{" "}
                <a href="mailto:support@trendr.com">support@trendr.com</a>.
            </Typography>
            <RouterLink to="/user">
                <Button variant="contained" color="primary">
                    Go to Home Page
                </Button>
            </RouterLink>
        </Box>
    );
}

export default Cancel;
