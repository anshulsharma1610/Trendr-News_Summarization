import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography
} from '@mui/material';

import { useCallback, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import userService from 'services/userService';
import * as React from 'react';




 export const AccountProfiles = () => {

  const isLoggedIn  = useSelector((state) => {
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
  useEffect(() => {
    getUserData(); 
  }, []);
  
  const [user, setValues] = React.useState([]);
  
  return <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 70,
            mb: 2,
            width: 80
          }}
        />
        <Typography
          gutterBottom
          variant="h5"
        >
          {user.fname +" " +user.lname}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.city} {user.phone}
        </Typography>
        <Typography
          color="text.secondary"
          variant="body2"
        >
          {user.email}
        </Typography>
      </Box>
    </CardContent>
   
    <CardActions>
      
    </CardActions>
  </Card>
};

