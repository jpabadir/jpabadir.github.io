import books from './books.json';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './Books.css';

export default function Books() {
  return (
    <div>
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'inherit' }}>Author</TableCell>
              <TableCell sx={{ color: 'inherit' }}>Title</TableCell>
              <TableCell sx={{ color: 'inherit' }}>Date Started</TableCell>
              <TableCell sx={{ color: 'inherit' }}>Date Finished</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {books.map((row) => (
              <TableRow key={row.title} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ color: 'inherit' }} label="Title">
                  {row.title}
                </TableCell>
                <TableCell sx={{ color: 'inherit' }} label="Author">
                  {row.author}
                </TableCell>
                <TableCell sx={{ color: 'inherit' }} label="Date Started">
                  {row.dateStarted}
                </TableCell>
                <TableCell sx={{ color: 'inherit' }} label="Date Finished">
                  {row.dateFinished}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
