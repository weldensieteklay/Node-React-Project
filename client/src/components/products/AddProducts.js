import { Button, Box, TextField} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const AddProducts = ()=>{
    const [state, setState] = useState({name: '', price: null, quantity: null})

    const submit = ()=>{
    console.log("product added")
    }
    const inputHandler = (event)=>{
       const {name, value} = event.target
       setState(prev=>({...prev, [name]: value}))
    }
    return (
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center'}}>
            <h1 style={{textAlign:"center",backgroundColor:"Gray"}}>Add Product</h1>
            <TextField type="text" name="name"  value={state.name} onChange={inputHandler} placeholder="Product Name" style={{width:"50%",margin:"10px"}}></TextField>
            <TextField type="number" name="price"  value={state.price} onChange={inputHandler} placeholder="Product Price" style={{width:"50%",margin:"4px"}}></TextField>
            <TextField type="number" name="price"  value={state.quantity} onChange={inputHandler} placeholder="Product Quantity" style={{width:"50%",margin:"4px"}}></TextField>

            <Button onClick={submit} variant="contained" sx={{ width: '230px', marginTop: 2 }}>Add Product</Button>
        </Box>
    )
}
export default AddProducts;