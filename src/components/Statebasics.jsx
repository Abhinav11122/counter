import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
  var [name,SetName] = useState("Abhinav")
  const changename=()=>{
  console.log("btn clicked");
  SetName("Peter")
  }
  return (
    <div>
<Typography variant='h4'>My name is {name}</Typography>
<Button variant ='contained' onClick={changename}>Change</Button>
    </div>
  )
}

export default Statebasics
