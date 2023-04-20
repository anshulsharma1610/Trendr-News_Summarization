import { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getAllnews } from '../fetch.js';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import Row from '../../components/Table/TableRow';
import TablePagination from '@mui/material/TablePagination';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { Button, FormLabel } from '@mui/material';
import TextareaAutosize from '@mui/base/TextareaAutosize';
import { CenterFocusStrong, Label, PropaneSharp } from '@mui/icons-material';
import { color } from '@mui/system';
import FormComponent from './FormComponent.js';
import { useTheme } from '@mui/material/styles';
import AddIcon from '@mui/icons-material/Add';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '60%',
  textAlign:CenterFocusStrong,
  height: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewsTable = () => {


 const theme = useTheme();
  const [newsData, setNewsData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [expandedRow, setExpandedRow] = useState(null);
  const [modalOpen,setModalOpen] = useState(false);
  const [updatedNews,setUpdatedNews] = useState({});
  const [isType, setIsType] = useState('Add');

  useEffect(() => {
    getAllnews().then(data => {setNewsData(data); 
    });
  
  }, []);

  // code defines a function that deletes a news article with a specified id by sending a DELETE 
  // request to a backend API and updates the state of newsData.

  const handleDelete = (id) => {
    // Implement logic for deleting news with specified ID
    fetch(`http://localhost:8000/api/news/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setNewsData(newsData.filter((news) => news._id !== id));
        }
      })
      .catch((error) => console.error(error)); 
  };

  //code defines a function that sets the state of isType to 'Update', 
  //sets the state of updatedNews to data, and sets the state of modalOpen to true.

  const handleUpdate = (data) => {
    setIsType('Update');
    setUpdatedNews(data);
    setModalOpen(true);
  };

  // code defines a function that sets the state of isType to 'Add' and sets the state of modalOpen to true.
  const addNews = () =>{
    setIsType('Add');
    setModalOpen(true);

  }

  // Asynchronous function to update news data via API call and update the state of newsData.

  const updateNews = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/news/${updatedNews._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNews)
      });
      
      if (!response.ok) {
        throw new Error('Failed to update news');
      }
      setModalOpen(false);
      
      setNewsData(prevNewsData => prevNewsData.map(news => {
        if (news._id === updatedNews._id) {
          return updatedNews;
        }
        return news;
      }));
    } catch (error) {
      console.error(error);
   
    }
  }
  // function closes the modal and reloads the page after updating the form data.
  const afterUpdate = (formData)=>{
    setModalOpen(false);
    window.location.reload();
  }
  
  // function closes the modal and reloads the page after updating the form data.
  const closeModal = ()=>{
    setModalOpen(false);
  }

  // function is used to handle changes in the page number of a paginated table.
  // It takes in two parameters, event and newPage, and sets the state variable page to the new page number.
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleModalClose = () => setModalOpen(false);
  // function updates the updatedNews state based on the target ID and value of the input field.
  const handleUpdateChange = (event)=>{
    event.preventDefault();
    console.log(event.target.id);
    const newData = Object.assign({},updatedNews);
    if(event.target.id=='title_id'){
      newData.title=event.target.value;
    }
    if(event.target.id=='link_id'){
      newData.link=event.target.value;
    }
    if(event.target.id=='summary_id'){
      newData.summary=event.target.value;
    }
    if(event.target.id=='description_id'){
      newData.description=event.target.value;
    }
    setUpdatedNews(newData);

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
      // width: '80%',
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
      
      {/* <h1 style={{textAlign:'center', marginBottom:'50px'}}>ADD NEWS</h1>
      <div style={styles.textfield}>
          <TextField  style={{width:'400px'}} label="Title" id="title" value={updatedNews.title} onChange={handleUpdateChange}/>
      
      </div>
      <div>
      <TextField maxWidth style={{marginLeft:'10px'}} label="Link" id="link"value={updatedNews.link} onChange={handleUpdateChange} />
      </div>

      <div style={styles.textfield}>
          <TextField style={{width:'400px'}}  label="Summary" id="summary" value={updatedNews.summary} onChange={handleUpdateChange} />
          <TextField style={{marginLeft:'10px',width:'400px'}} label="Image URL" id="Image_URL" /> 
      </div>

      <div style={styles.btn}>
          <Button variant="contained" >Submit</Button>
      </div> */}
    <FormComponent isType={isType} afterUpdate={afterUpdate} updatedNews={updatedNews} closeModal={closeModal}/>
    </Box>
  
    </div>
   
  </Box>
</Modal>



    {/* <Box
      sx={{
        maxWidth: '100%',
      }}
    > */}
    <div>
        {/* <div style={styles.headerStyl}> */}
{/* <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}> */}
  {/* <Typography variant="h4" style={{ fontSize:'20px'}}>News Details</Typography> */}
  {/* <div style={{ marginLeft: 'auto' }}> */}
    <Button variant="contained" size ="small" startIcon={<AddIcon />} onClick={addNews}>
      Add News
    </Button>
  {/* </div>
</span> */}
        
        {/* </div> */}
          <TableContainer component={Paper} style={{  marginTop: '50px'}}>
          <Table aria-label="collapsible table">
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20px'}}>
              <TableRow style={{ fontSize: '50px'}}>
                <TableCell/>
                <TableCell style= {{fontSize: '20px', color: 'black'}}><b>Title</b></TableCell>
                <TableCell style={{ textAlign: 'right' ,fontSize: '20px', color: 'black' }}>Update</TableCell>
                <TableCell style={{ textAlign: 'right' ,fontSize: '20px', color: 'black' }}>Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {newsData && newsData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,id) => (
                <Row key={id} row={row} delete={handleDelete} update={handleUpdate}/> 
              ))}
            </TableBody>
          </Table>
          <TablePagination
              rowsPerPageOptions={[5, 10, 20]}
              component="div"
              count={newsData ? newsData.length : 0}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableContainer>

      </div>
{/* </Box>     */}

</>
 
  );
};

export default NewsTable;