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

    function getFileName(fileObj){
        console.log(fileObj[0])
        var file = fileObj[0];  
        var filename = file.name;
        return filename
     }

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>File</TableCell>
                <TableCell align="right">Type</TableCell>
                <TableCell align="right">Upload Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >  
                  
                  <TableCell align="left">{getFileName(row.file)}</TableCell>
                  <TableCell align="right">{row.type.toUpperCase()}</TableCell>
                  <TableCell align="right">{row.submitDate}</TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}