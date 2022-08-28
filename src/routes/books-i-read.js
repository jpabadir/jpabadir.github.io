import books from '../books.json';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function Books() {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Author</TableCell>
              <TableCell align="right">Title</TableCell>
              <TableCell align="right">Date Started</TableCell>
              <TableCell align="right">Date Finished</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row) => (
              <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell align="right">{row.author}</TableCell>
                <TableCell align="right">{row.title}</TableCell>
                <TableCell align="right">{row.dateStarted}</TableCell>
                <TableCell align="right">{row.dateFinished}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
