import React from 'react';
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
import {TablePagination} from '@mui/material';
import MainCard from 'components/cards/MainCard';





function Row(props) {
    const  row  = props.row;
    const [open, setOpen] = React.useState(false);


    const handleRowDelete = (id) => {
         props.delete(id);
    };

    const handleRowUpdate = (row) => {
      props.update(row);
 };
  //handleRowUpdate
  
    return (
      <React.Fragment>
        <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.title}
          </TableCell>
          <TableCell align="right">
            <button onClick={()=>handleRowUpdate(row)}>Update</button>
          </TableCell>
          <TableCell align="right">
            <button onClick={()=>handleRowDelete(row._id)}>Delete</button>
          </TableCell>
          {/* {props.delete(row.id)} */}
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1 }}>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell align="left">{row.description}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Link</TableCell>
                      <TableCell align="left">{row.link}</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  <TableCell><b>Summary</b></TableCell>
                      <TableCell align="left"><b>{row.summary}</b></TableCell>
                  </TableBody>
                </Table>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </React.Fragment>
    );
  }
  export default Row;