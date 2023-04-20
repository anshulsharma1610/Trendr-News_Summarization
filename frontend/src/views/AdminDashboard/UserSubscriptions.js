import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Row from '../../components/Table/TableRow';
import TablePagination from '@mui/material/TablePagination';
import userService from 'services/userService.js';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';





export default function UserSubscriptions() {

// code defines state variables and functions to handle pagination and 
//retrieve user preferences using useEffect and async/await.
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };
      const [page, setPage] = useState(0);
      const [chipData, setChipData] = React.useState([]);
      const [rowsPerPage, setRowsPerPage] = useState(10);
      const [newPreference, setNewPreference] = useState('');


      useEffect(() => {
        getAllPrefernces(); 
      }, []);
    
      const getAllPrefernces = async () => {
        let response = await userService.getallUserSubscriptions();
        setChipData(response.data);
      };


    function transformJSONBody(body) {
        const transformedBody = body.map(item => item._id);
      
        return {'preferences' : transformedBody};
      } 

      //code defines a function to delete a user preference by ID, 
      //then reloads the page and calls getAllPreferences to update the list.

      const deletePreferences = (id) => {
        userService.deletePrefernce(id);
        window.location.reload();
       getAllPrefernces
      };

        const [open, setOpen] = React.useState(false);
      
        const handleClickOpen = () => {
          setOpen(true);
          setNewPreference('');
        };
      
        const handleClose = () => {
            console.log("-----here---");
            userService.addPreferences({ prefernceName: newPreference });
            setOpen(false);
        };
        
//code renders a table displaying user preferences with pagination and a dialog box to add new preferences.

    return ( <><div>
        {/* <Button variant="contained" size ="small" startIcon={<AddIcon />} onClick={handleClickOpen}>
          Add Preferences
        </Button> */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Subscriptions</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add new preferences for the users to select their NEWS preferences
            </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Preferences"
                type="text"
                fullWidth
                variant="standard"
                value={newPreference}
                onChange={(e) => setNewPreference(e.target.value)}
/>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose} disabled={!newPreference}>Add</Button>
          </DialogActions>
        </Dialog>
      </div>
        {/* <h1 style={{ textAlign: 'center', marginBottom: '20px', marginTop:'20px'}}>Preferences
        </h1> */}
          <TableContainer component={Paper} style={{ marginTop: '50px'}}>
          <Table>
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20'}}>
              <TableRow style={{ fontSize: '50px'}}>
                <TableCell/>
                <TableCell><b>User ID</b></TableCell>
                <TableCell><b>Subscriptions ID</b></TableCell>
                <TableCell><b>Price</b></TableCell>
                <TableCell><b>Created At</b></TableCell>
                <TableCell><b>Valid Till</b></TableCell>
                <TableCell style={{ textAlign: 'right' }}></TableCell>
              </TableRow>
            </TableHead>
           
            <TableBody>
            {chipData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.subId}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{row.validTill}</TableCell>
                <TableCell>{}</TableCell>

              </TableRow>
            ))}
            </TableBody>
          </Table>
          <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={chipData ? chipData.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>
     
        </>
      );
}