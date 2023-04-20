import { useState, useEffect } from 'react';
import { getAlluser } from '../fetch.js';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { blue, red } from '@mui/material/colors';

import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Box
} from '@mui/material';


// This code defines a functional component  that initializes three state variables using the 
// useState hook, and fetches data from an API using the useEffect hook when the component mounts.

const UserTable = () => {
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    // Fetch data from the API
    getAlluser()
      .then(data => setUserData(data));
  }, []);


  // code defines a function handleDelete that sends a DELETE request to an API to delete a user with a specified ID, 
  // and updates the state to remove the deleted user from the list if the request is successful.

  const handleDelete = (id) => {
    // Implement logic for deleting user with specified ID
    fetch(`http://localhost:8000/api/users/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        // Update state to remove deleted user from the list
        setUserData(userData.filter(user => user._id !== id));
      }
    })
    .catch(error => console.error(error));
  };

  

  // Get current users
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = userData && userData.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const handlePageChange = (event, newPage) => {
    console.log('Page changed to', newPage);
    setCurrentPage(newPage + 1);
  };
  
  // This code defines a JavaScript object called styles that contains CSS styles for a container, 
  // table, text field, and button.

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',

    },
    Table: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    textfield:{
      marginTop:'10px'
    },
    btn:{
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      marginTop:'10px'
    }
  };

  // code returns a table of user details fetched from an API, 
  // along with pagination functionality and a button to delete users. 
  // The component uses Material-UI components and styles defined in a JavaScript object.

  return (
    <div style={styles.container}>
    <Box
      sx={{
        width: 1120,
        maxWidth: '100%',
        // fullWidth
      }}
    >
    <div>
      {/* <h1 style={{ textAlign: 'center' , marginBottom: '50px', color: 'black'}} margin>USER DETAILS</h1> */}
      <TableContainer component={Paper}>
        <Table fullWidth >
          <TableHead sx={{backgroundColor: '#bbbbc6',fontSize: '20px' }}>
            <TableRow>
              <TableCell sx={{  padding: '10px', fontSize: '18px' }} align="center" >Email</TableCell>
              <TableCell sx={{ padding: '10px', fontSize: '18px' }} align="center">First Name</TableCell>
              <TableCell sx={{  padding: '10px', fontSize: '18px' }} align="center">Last Name</TableCell>
              <TableCell sx={{ padding: '10px', fontSize: '18px' }} align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUsers && currentUsers.map(user => (
              <TableRow key={user._id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, fontSize: '50px', fontWeight: 'bold' }}>
                <TableCell sx={{padding: '10px' , width: '25%', fontSize: '15px'}} align="center" >{user.email}</TableCell>
                <TableCell sx={{ padding: '10px' , width: '25%', fontSize: '15px' }} align="center" >{user.fname}</TableCell>
                <TableCell sx={{padding: '10px' , width: '25%', fontSize: '15px' }} align="center" >{user.lname}</TableCell>
                <TableCell sx={{ padding: '10px' , width: '25%', fontSize: '15px' }} align="center">
                  <Button size ="small" startIcon={<DeleteIcon />} style={{

backgroundColor: "#ed5e68",

}} variant="contained"onClick={() => handleDelete(user._id)}>
                  Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {userData && (
  <TablePagination
    rowsPerPageOptions={[5, 10, 15, 20]}
    component="div"
    count={userData.length}
    rowsPerPage={usersPerPage}
    page={currentPage - 1}
    onPageChange={handlePageChange}
    sx={{ marginTop: '20px' }}
  />
)}
</div>
</Box>    
</div>
  );
};

export default UserTable;





