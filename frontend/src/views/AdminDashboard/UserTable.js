import { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getAlluser } from '../fetch.js';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UserTable = () => {
  const [userData, setUserData] = useState(null);

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
  
  return (
  <div>
      <h1 style={{ textAlign: 'left' }}>USER</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Email</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData && userData.map(user => (
              <TableRow key={user._id}>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(user._id)}>Delete</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
</div>
  );
};

export default UserTable;

