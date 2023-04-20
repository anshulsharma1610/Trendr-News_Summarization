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
import AddIcon from '@mui/icons-material/Add';
import FormSubscription from './FormSubscription.js';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


// This code defines a React component called AdminSubscription, 
// which manages pagination, chip data, and state of modal for adding or updating a subscription.

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
      const [isType, setIsType] = useState('Add');



//handleUpdate 
      const handleUpdate = (data) => {
        setIsType('Update');
        setSubscription(data);
        setModalOpen(true);
      };

      useEffect(() => {
        getAllSubscriptions(); 
      }, []);
    

      // The  code defines an asynchronous function named getAllSubscriptions,
      //  which makes an API call  and sets the response data to the state variable chipData

      const getAllSubscriptions = async () => {
        let response = await userService.getAllSubscription();
        setChipData(response.data);
      };

      // This code defines a function deleteSubscription that calls 
      //  with an id parameter, and then reloads the current window.

      const deleteSubscription = (id) => {
        userService.deleteSubscriptions(id);
         window.location.reload();
      };

      // This code defines a function that updates user description,
      //  reloads the window, and sets modal to closed.
    
      const updateDescription = (id,body) => {
        userService.updateDescriptions(id,body);
         window.location.reload();
        setModalOpen(false);
        
      };

      //  code defines a function that adds a subscription for a user  and sets the modal to open.
      const addSubscription =(id, body)=>{
        userService.addSubscriptions(id,body);
       setModalOpen(true);
      };
    
      //  code defines a function that sets the modal to closed and reloads the window after form data has been updated.
  const afterUpdate = (formData)=>{
    setModalOpen(false);
    window.location.reload();
  
  }


  //  code defines a function that sets the modal to closed.
  const closeModal = ()=>{
    setModalOpen(false);
  }


  //  code defines a function that sets the modal to closed.
  const handleModalClose = () => {
  setModalOpen(false);
}

//  code defines a function that updates the state of subscription based on the user's input in the form.
  
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
          },
          headerStyl:{
            display:'flex',
          },
          clear:{
            clear:'both'
          }
        };

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
    fontSize: '10px',
    transform: 'translate(-50%, -50%)',
    justifyContent:'center',
    alignItems: 'center',
    justifyContent: 'center',
      width: '1000px',
      maxWidth: '100%',
  }}>

      <div style={styles.container}>
    <Box
      sx={{
        width: 800,
        maxWidth: '100%',
      }}
    >

 {/* code renders a React component FormSubscription that displays a subscription form and takes in four props - isType, afterUpdate, updatedSubscription, and closeModal. */}
    <FormSubscription isType={isType}  afterUpdate={afterUpdate} updatedSubscription={updatedSubscription} closeModal={closeModal} /> 
    </Box>
    </div>
   
  </Box>
</Modal>
 {/* code renders a React component that displays a table of subscription
 data and includes several callback functions for adding, updating, and deleting subscription information. */}
 
<Button variant='contained' startIcon={<AddIcon />} size ="small" onClick={addSubscription}>Add Subscription</Button>

          <TableContainer component={Paper} style={{ marginTop: '50px'}}>
          <Table>
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20px'}}>
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
                  <Button startIcon={<ModeEditIcon />} size ="small" variant="contained" onClick={()=>handleUpdate(row)}>Update</Button>
              <>    </>
                  <Button startIcon={<DeleteIcon />}  size ="small" style={{

        backgroundColor: "#ed5e68",
      
    }} variant="contained" onClick={() => deleteSubscription(row._id)}>Delete</Button>
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