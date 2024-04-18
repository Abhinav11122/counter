import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Welcome = () => {
    var[data,setData]=useState()
    const btnGallery=()=>{
        setData("Gallery")
    }
    const btnHome=()=>{
        setData("Home")
    }
    const btnContactUS=()=>{
        setData("Contact US")
    }


  return (
    <div>
    <Typography varient="h2"> Welcome to{data}</Typography>
    <Button variant="contained" onClick={btnHome} color="success">Home</Button>&nbsp;
    <Button variant="contained" onClick={btnGallery} color="primary">Gallery</Button>&nbsp;
    <Button variant="contained" onClick={btnContactUS} color="secondary" >ContactUS</Button>&nbsp;

    </div>
  )
}

export default Welcome
