import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function EducationTable(props){
    var tableData = props.tableData

    console.log(tableData)
    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Institution</TableCell>
                <TableCell align="right">Degree</TableCell>
                <TableCell align="right">Start Date</TableCell>
                <TableCell align="right">End Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.institution}
                  </TableCell>
                  
                  <TableCell align="right">{row.degree}</TableCell>
                  <TableCell align="right">{row.startDate}</TableCell>
                  <TableCell align="right">{row.endDate}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}