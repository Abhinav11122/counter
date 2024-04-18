
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Mapping = () => {
  var data = [
    {name:"Abhinav",age:19,place:"Thrissur"},
    {name:"hary",age:20,place:"mala"},
  ];
  return (
    <div>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name </TableCell>
                        <TableCell>Age </TableCell>
                        <TableCell>Place </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.map((val,i)=>{
                    return <TableRow key={i}>
                        <TableCell key={i}>{val.name}</TableCell>
                        <TableCell key={i}>{val.age}</TableCell>
                        <TableCell key={i}>{val.place}</TableCell>


                    </TableRow>
                })}
                </TableBody>
            </Table>
        </TableContainer>
         </div>
  )
}

export default Mapping
