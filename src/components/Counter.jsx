import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const Counter = () => {
    var[Count,setCount]=useState(0)

    const addCount=()=>{
        setCount(Count+1)
    }
    const subCount=()=>{
        setCount(Count-1)
    }
  return (
    <div>
      <Typography variant='h3'>{Count}</Typography>
      <br />
      <Button onClick={addCount}><ArrowUpwardIcon></ArrowUpwardIcon></Button>
      <Button onClick={subCount}><ArrowDownwardIcon></ArrowDownwardIcon></Button>

    </div>
  )
}

export default Counter
