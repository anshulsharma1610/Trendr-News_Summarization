import { useState, useEffect } from 'react';
import MainCard from 'components/cards/MainCard';
import { getAllnews } from '../fetch.js';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const NewsTable = () => {
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    getAllnews()
      .then(data => setNewsData(data));
  }, []);

  const handleDelete = (id) => {
    // Implement logic for deleting news with specified ID
    fetch(`http://localhost:8000/api/news/${id}`, {
      method: 'DELETE',
    })
    .then(response => {
      if (response.ok) {
        setNewsData(newsData.filter(news => news._id !== id));
      }
    })
    .catch(error => console.error(error));
  };

  const handelUpdate = (id) => {
    // Implement logic for updating news with specified ID
  };


  return (
    <div>
      <h1 style={{ textAlign: 'left' }}>News</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {newsData && newsData.map(news => (
              <TableRow key={news._id}>
                <TableCell>{news.title}</TableCell>
                <TableCell>{news.description}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(news._id)}>Delete</button>
                  <button onClick={() => handelUpdate(news._id)}>Update</button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default NewsTable;
