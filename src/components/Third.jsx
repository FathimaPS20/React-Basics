import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Third = () => {
    var[input, setInput]= useState("AA");
    const InputHandler = (event)=>{
        console.log(event.target.value);

        setInput(event.target.value);
    }
    const displayValue =()=>{
        console.log("btn clicked");
        setOutput(input);
    }
  return (

    <div style={{textAlign:"center",marginTop:"20%"}}>
<Typography variant="h3">Hello{input}</Typography>
<br />
      <TextField variant="outlined" label="Name" onChange={InputHandler}/>
      <br/><br/>
      <Button variant='contained' color='success' onClick={SubmitEvent}>Submit</Button>
    </div>
  )
}

export default Third