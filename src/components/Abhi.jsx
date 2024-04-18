import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Abhi = () => {
    var  [Input,SetInput] = useState()
    var[b,SetB]=useState()
    const InputHandler =(e)=>{
        console.log(e.target.value)
        SetInput(e.target.value)

    }
    const btnClicked=()=>{
      SetB(Input)
      
    }
  return (
    <div style={{margin:'10%'}}>
        <Typography variant ='h3'>{b}</Typography>
      <TextField varient ='outlined' label="Enter your name" onChange={InputHandler}/><br/>
      <Button variant ="contained" onClick={btnClicked}>Click</Button>
    </div>
  )
}

export default Abhi
