import { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getAlluser } from '../fetch.js';
import { Grid, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton } from '@mui/material';
import { blue, red } from '@mui/material/colors';

const UserTable = () => {
  const [userData, setUserData] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  useEffect(() => {
    // Fetch data from the API
    getAlluser()
      .then(data => setUserData(data));
  }, []);

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
    setCurrentPage(newPage);
  };

  return (
    <div style={{ width: '1000px', marginLeft: '70px', marginTop: '50px'}} >
      <h1 style={{ textAlign: 'center' , marginBottom: '50px', color: 'black'}} margin>USER DETAILS</h1>
      <Grid container spacing={2}>
        {currentUsers && currentUsers.map(user => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={user._id}>
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '20px' }}>
              <p><b>Email:</b> {user.email}</p>
              <p><b>First Name:</b> {user.fname}</p>
              <p><b>Last Name:</b> {user.lname}</p>
              <div style={{color:'red'}}>
              <IconButton aria-label="delete"  onClick={() => handleDelete(user._id)}>
                <DeleteIcon />
              </IconButton>
              </div>
            </Paper>
          </Grid>
        ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={userData ? userData.length : 0}
        rowsPerPage={usersPerPage}
        page={currentPage - 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default UserTable;
