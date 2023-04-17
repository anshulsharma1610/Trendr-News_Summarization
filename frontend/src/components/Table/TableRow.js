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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Row(props) {
  const row = props.row;
  const [open, setOpen] = React.useState(false);

  const handleRowDelete = (id) => {
    props.delete(id);
  };

  const handleRowUpdate = (row) => {
    props.update(row);
  };

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
          <IconButton aria-label="update" onClick={() => handleRowUpdate(row)}>
            <EditIcon />
          </IconButton>
        </TableCell>
        <TableCell align="right">
          <IconButton
          aria-label="delete"
          className="delete-button"
            onClick={() => handleRowDelete(row._id)}
          >
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases" sx={{ fontSize: 25 }}>
                <TableHead>
                  <TableRow>
                    <TableCell>Description</TableCell>
                    <TableCell align="left">{row.description}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Link</TableCell>
                    <TableCell align="left">{row.link}</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>
                      <Typography variant="subtitle1">
                        <b>Summary</b>
                      </Typography>
                    </TableCell>
                    <TableCell align="left">{row.summary}</TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default Row;
