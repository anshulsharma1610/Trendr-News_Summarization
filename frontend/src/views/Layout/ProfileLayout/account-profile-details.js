import { useCallback, useState, useEffect } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  TextField,
  Unstable_Grid2 as Grid
} from '@mui/material';
import userService
 from 'services/userService';

 //const id="643879915855ff1fede9af06";

export const AccountProfileDetails = () => {
  const  isLoggedIn  = useSelector((state) => {
    return state.user.isLoggedIn;
  });
  const dispatch = useDispatch();
  let id ;
  if (isLoggedIn) id = useSelector((state) => state.user.user.user._id);
  
  const getUserData = async () => {
    let response = await userService.getUserDetail(id);
    setValues(response.data);
    return response.data;
  };

  const [values, setValues] = React.useState([]);

  useEffect(() => {
    getUserData(); 
  }, []);

  const updateUserDetails= async()=>{
    let response = await userService.updateUser(id,values);
    setValues(response.data);
    window.location.reload();

  }

  const handleChange = useCallback(
    (event) => {
      setValues((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value
      }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
    },
    []
  );
  return (
    <form
      autoComplete="off"
      noValidate
      onSubmit={handleSubmit}
    >
      <Card>
        <CardHeader
          subheader="Update Your Details"
          // title="Profile"
        />
        <CardContent sx={{ pt: 0 }}>
          <Box sx={{ m: -3.5 }}>
            <Grid
              container
              spacing={1.5}
            >
              <Grid
                xs={10}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="First name"
                  // label="First name"
                  fname="firstName"
                  onChange={handleChange}
                  required
                  value={values.fname}
                />
              </Grid>
              <Grid
                xs={8}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Last name"

                 // label="Last Name"
                  lname="lastName"
                  onChange={handleChange}
                  required
                  value={values.lname}
                />
              </Grid>
              <Grid
                xs={10}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Email id"

                  // label="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                  value={values.email}
                />
              </Grid>
              <Grid
                xs={10}
                md={6}
              >
                <TextField
                  fullWidth
                  helperText="Phone Number"

                  // label="Phone Number"
                  name="phone"
                  onChange={handleChange}
                  type="number"
                  value={values.phone}
                />
              </Grid>
              {/* <Grid
                xs={12}
                md={6}
              >
                
              </Grid> */}
              {/* <Grid
                xs={12}
                md={6}
              >
               
              </Grid> */}
            </Grid>
          </Box>
        </CardContent>
        {/* <Divider /> */}
        <CardActions sx={{ justifyContent: 'flex-end' }}>
          <Button variant="contained"  onClick={() => updateUserDetails()}>
            Save details
          </Button>
        </CardActions>
      </Card>
    </form>
  );
};

