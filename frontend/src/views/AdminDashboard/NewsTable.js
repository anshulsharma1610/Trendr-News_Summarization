import { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getAllnews } from '../fetch.js';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
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
import { Label } from '@mui/icons-material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const NewsTable = () => {
  const [newsData, setNewsData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [expandedRow, setExpandedRow] = useState(null);
  const [modalOpen,setModalOpen] = useState(false);
  const [updatedNews,setUpdatedNews] = useState({});


  useEffect(() => {
    getAllnews().then(data => {setNewsData(data); 
    });
  
  }, []);

  const handleDelete = (id) => {
    // Implement logic for deleting news with specified ID
    fetch(`http://localhost:8000/api/news/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          alert('News has been deleted.');
          setNewsData(newsData.filter((news) => news._id !== id));
        }
      })
      .catch((error) => console.error(error)); 
  };

  const handleUpdate = (data) => {
    setUpdatedNews(data);
    setModalOpen(true);
  };

  const updateNews = () =>{
    console.log(updatedNews);
    fetch(`http://localhost:8000/api/news/${updatedNews._id}`, {
      method: 'PUT',
      body: JSON.stringify(updatedNews)
    })
      .then((response) => {
        if (response.ok) {
          alert('News has been updated.');
         setNewsData(newsData.filter((news) => news._id != updatedNews._id));
        }
      })
      .catch((error) => console.error(error));
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleModalClose = () => setModalOpen(false);
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
  return ( 
    <>
      <Modal
        open={modalOpen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
<Box sx={style}>
       <div>
              <TextField fullWidth id="title_id" label="Title" variant="standard" value={updatedNews.title} onChange={handleUpdateChange}/>
       </div>
       <div>
              <TextField fullWidth id="link_id" label="Link" variant="standard" value={updatedNews.link} onChange={handleUpdateChange}/>
       </div>
       <FormLabel>Summary</FormLabel>
       <div>
              <TextareaAutosize id="summary_id" style={{width:'400px'}} label="Summary" variant="standard" value={updatedNews.summary} onChange={handleUpdateChange}/>
       </div>
       <FormLabel>Description</FormLabel>
       <div>
              <TextareaAutosize id="description_id"  style={{width:'400px'}} label="Description" variant="standard" value={updatedNews.description} onChange={handleUpdateChange}/>
       </div>
        <Button onClick={updateNews}>Update Data</Button>
</Box>
      </Modal>
        <h1 style={{ textAlign: 'center', marginBottom: '20px', marginTop:'20px'}}>News Details
        <button>+</button>
        </h1>
          <TableContainer component={Paper} style={{ width: '1000px', marginLeft: '70px', marginTop: '50px'}}>
          <Table aria-label="collapsible table">
            <TableHead style= {{ backgroundColor: '#bbbbc6',fontSize: '20'}}>
              <TableRow style={{ fontSize: '50px'}}>
                <TableCell/>
                <TableCell><b>Title</b></TableCell>
                <TableCell style={{ textAlign: 'right' }}>Update</TableCell>
                <TableCell style={{ textAlign: 'right' }}>Delete</TableCell>
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
      </>
 
  );
};

export default NewsTable;