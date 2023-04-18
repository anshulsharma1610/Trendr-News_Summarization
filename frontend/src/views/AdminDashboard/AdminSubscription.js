import { useState, useEffect } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import userService from 'services/userService.js';
import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import DeleteIcon from '@mui/icons-material/Delete';
import SaveIcon from '@mui/icons-material/Save';
import FormComponent from './FormComponent';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


export default function AdminSubscription() {
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
      const [modalOpen,setModalOpen] = useState(false);
      const [updatedSubscription,setSubscription] = useState({});

      const handleUpdate = (data) => {    
        console.log("data::", data);
        setSubscription(data);
        setModalOpen(true);
      };

      useEffect(() => {
        getAllSubscriptions(); 
      }, []);
    
      const getAllSubscriptions = async () => {
        let response = await userService.getAllSubscription();
        setChipData(response.data);
      };

      const deleteSubscription = (id) => {
        userService.deleteSubscriptions(id);
         window.location.reload();
      };
    
    //   const handleSave = (row) => {
    //     setEditingRow(null);
    //     userService.updateSubscription(row);
    //   };
    
    //   const handleEdit = (index) => {
    //     setEditingRow(index);
    //   };
    
      const updateDescription = (id,body) => {
        // console.log("id:::",id, " body::", body);
        userService.updateDescriptions(id,body);
         window.location.reload();
        setModalOpen(false);
        
      };


      const addSubscription =(id, body)=>{
        userService.addSubscriptions(id,body);
        window.location.reload();
       setModalOpen(false);
      }



        const handleModalClose = () => setModalOpen(false);
        const handleUpdateChange = (event)=>{
          event.preventDefault();
          console.log(event.target.id);
          const newData = Object.assign({},updatedSubscription);
          if(event.target.id=='title_id'){
            newData.title=event.target.value;
          }
          if(event.target.id=='link_id'){
            newData.desc=event.target.value;
          }
          if(event.target.id=='features'){
            newData.features=event.target.value;
          }
          if(event.target.id=='description_id'){
            newData.tenureDays=event.target.value;
          }
          if(event.target.id=='price'){
            newData.price=event.target.value;
          }
          setSubscription(newData);
      
        }
    return ( 
    <>
 <Modal
  open={modalOpen}
  onClose={handleModalClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '8px',
    width: '70%',
    borderColor:'#00abff',
    overflow: 'auto',
    height:'80%',
    textAlign: 'center',
    border: '1px solid #ccc',
    fontSize: '50px',
    transform: 'translate(-50%, -50%)',
    justifyContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <div sx={{ mb: 2 }}>
    <Typography textAlign="left" style={{color: '#2196f3', fontSize: '16px',marginTop:"15px", marginBottom:"15px" }}>Title</Typography>
      <TextField fullWidth id="title_id" variant="standard" value={updatedSubscription.title} onChange={handleUpdateChange} />
    </div>

    <div sx={{ mb: 2 }}>
    <Typography style={{color: '#2196f3', fontSize: '16px' ,marginTop:"15px", marginBottom:"15px"}} textAlign="left">Description</Typography>
      <TextField fullWidth id="link_id" variant="standard" value={updatedSubscription.desc} onChange={handleUpdateChange} />
    </div>

    <div sx={{ mb: 12 }} style={{marginTop:"10px"}}>
      <Typography style={{color: '#2196f3', fontSize: '16px',  marginTop:"15px", marginBottom:"15px"}} textAlign="left">Features</Typography>
      <TextField fullWidth id="features" variant="standard" value={updatedSubscription.features} onChange={handleUpdateChange}></TextField>
        </div>

    <div sx={{ mb: 2 }}>
    <Typography style={{color: '#2196f3', fontSize: '16px',marginTop:"15px", marginBottom:"15px" }}textAlign="left">Days</Typography>
      <TextField fullWidth id="description_id"  variant="standard" value={updatedSubscription.tenureDays} onChange={handleUpdateChange} />
    </div>

    <div sx={{ mb: 2 }}>
    <Typography style={{color: '#2196f3', fontSize: '16px',marginTop:"15px", marginBottom:"15px" }}textAlign="left">Price</Typography>
      <TextField fullWidth id="price"  variant="standard" value={updatedSubscription.price} onChange={handleUpdateChange} />
    </div>

    <div style={{justifyContent:"center",textAlign:"center", marginTop:"50px"}}>
    <Button startIcon={<SaveIcon />} style={{  margin: '200 auto', backgroundColor: '#2196f3', color: 'white', mb: 2 }} onClick={()=>updateDescription(updatedSubscription._id,updatedSubscription)}>Update</Button>
    </div>
   
  </Box>
</Modal>
        <Button variant="contained" onClick={<FormComponent/>}>
          Add Subscriptions
        </Button>

          <TableContainer component={Paper} style={{ marginTop: '50px'}}>
          <Table>
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20'}}>
              <TableRow style={{ fontSize: '50px'}}>
                <TableCell/>
                <TableCell><b>Title</b></TableCell>
                <TableCell>Description</TableCell>
                <TableCell >Features</TableCell>
                <TableCell style={{ textAlign: 'right' }}>Days</TableCell>
                <TableCell style={{ textAlign: 'right' }}>Price</TableCell>
                <TableCell style={{ textAlign: 'right' }}></TableCell>
                <TableCell style={{ textAlign: 'right' }}></TableCell>
              </TableRow>
            </TableHead>
           
            <TableBody>
            {chipData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.title}</TableCell>
                <TableCell>{row.desc}</TableCell>
                <TableCell>{row.features}</TableCell>
                <TableCell>{row.tenureDays}</TableCell>
                <TableCell>{row.price}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>{row.content}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>
                  <Button startIcon={<SaveIcon />} size ="small" variant="contained" onClick={()=>handleUpdate(row)}>Update</Button>
              <>    </>
                  <Button startIcon={<DeleteIcon />} size ="small"  variant="contained" onClick={() => deleteSubscription(row._id)}>Delete</Button>

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