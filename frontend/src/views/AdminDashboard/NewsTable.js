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
import Row from '../../components/Table/TableRow'
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   TablePagination,
//   Collapse
// } from '@mui/material';

const NewsTable = () => {
  const [newsData, setNewsData] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [expandedRow, setExpandedRow] = useState(null);
 const rowData = [
  {
    name:"dev",
    calories:1,
    fat:1,
    carbs:1,
    protein:1,
    price:1,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ]
  },
  {
    name:"dev1",
    calories:1,
    fat:1,
    carbs:1,
    protein:1,
    price:1,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ]
  },
  {
    name:"dev2",
    calories:1,
    fat:1,
    carbs:1,
    protein:1,
    price:1,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ]
  }
 ]
 const [rows,setRows] = useState([])
  useEffect(() => {
    getAllnews().then(data => setNewsData(data));
    setRows(rowData)
  }, []);

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

  const handleUpdate = (id) => {
    // Implement logic for updating news with specified ID
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Title</TableCell>
            <TableCell>Update</TableCell>
            <TableCell>Delete</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          
          {newsData && newsData.map((row,id) => (
            <Row key={id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
//     <div>
//       <h1 style={{ textAlign: 'left' }}>News</h1>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Title</TableCell>
//               <TableCell>Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {newsData &&
//               newsData
//                 .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
//                 .map((news) => (
//                   <TableRow key={news._id}>
//                     <TableCell>{news.title}</TableCell>
//                     <TableCell>
//                       <button onClick={() => handleDelete(news._id)}>Delete</button>
//                       <button onClick={() => handleUpdate(news._id)}>Update</button>
//                       <button onClick={() => setExpandedRow(expandedRow === news._id ? null : news._id)}>Expand</button>
//                     </TableCell>
//                     <Collapse in={expandedRow === news._id} timeout="auto" unmountOnExit>
//                           <div>{news.description}</div>
//                         </Collapse>
//                   </TableRow>
//                 ))}
//           </TableBody>
//         </Table>
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 20]}
//           component="div"
//           count={newsData ? newsData.length : 0}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </TableContainer>
//     </div>
  );
};

export default NewsTable;