import React from "react";
import { Typography } from "@mui/material";
const First = (props) => {
    return(

<div>
    <h1>Hello {props.name}</h1>
    <Typography varient='h1'>Hello</Typography>
    <Typography varient='h2'>Hello</Typography>
    <Typography varient='h3'>Hello</Typography>
    <Typography varient='h4'>Hello</Typography>
    <Typography varient='h5'>Hello</Typography>
    <Typography varient='h6'>Hello</Typography>
</div>
)
}
export default First