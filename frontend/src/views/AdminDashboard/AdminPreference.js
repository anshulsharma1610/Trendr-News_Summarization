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




export default function AdminPreferences() {

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
        let response = await userService.getAllPrefernce();
        setChipData(response.data);
      };


    function transformJSONBody(body) {
        const transformedBody = body.map(item => item._id);
      
        return {'preferences' : transformedBody};
      } 

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

    return ( <><div>
        <Button variant="contained" onClick={handleClickOpen}>
          Add Preferences
        </Button>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Preferences</DialogTitle>
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
          <TableContainer component={Paper} style={{ width: '1000px', marginLeft: '70px', marginTop: '50px'}}>
          <Table>
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20'}}>
              <TableRow style={{ fontSize: '50px'}}>
                <TableCell/>
                <TableCell><b>Preferences</b></TableCell>
                <TableCell style={{ textAlign: 'right' }}></TableCell>
                <TableCell style={{ textAlign: 'right' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
           
            <TableBody>
            {chipData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.prefernceName}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>{row.content}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <Button startIcon={<DeleteIcon />}  variant="contained"onClick={() => deletePreferences(row._id)}>Delete</Button>
                </TableCell>
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