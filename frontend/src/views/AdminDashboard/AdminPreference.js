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


      useEffect(() => {
        getAllPrefernces(); 
      }, []);
    
      const getAllPrefernces = async () => {
        let response = await userService.getAllPrefernce();
        setChipData(response.data);

        console.log("I am HERE!!",response.data);
      };


    //   const updatePreferences = () => {
    //     console.log("selectedChips",transformJSONBody(selectedChips));
    //     userService.updatePrefernce(id, transformJSONBody(selectedChips));
       
    //   };
   

      const deletePreferences = (id) => {
        userService.deletePrefernce(id);
       
      };

    return ( <>
    <div style={{ textAlign: 'right', marginRight: '70px' }}>
        <button>Add Preference</button>
      </div>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', marginTop:'20px'}}>Preferences
        </h1>
          <TableContainer component={Paper} style={{ width: '1000px', marginLeft: '70px', marginTop: '50px'}}>
          <Table>
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20'}}>
              <TableRow style={{ fontSize: '50px'}}>
                <TableCell/>
                <TableCell><b>Title</b></TableCell>
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
                  <button onClick={() => deletePreferences(row._id)}>Delete</button>
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