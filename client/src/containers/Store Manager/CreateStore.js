// import { Modal } from '@mui/material'
import React,{useState} from 'react'
//import { Modal } from 'react-bootstrap'
import { useHistory } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, TextField } from '@mui/material';
import { MenuItem } from '@mui/material';



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  //   width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  
export const CreateStore=({open,toggleModal})=>{
    const history=useHistory()
    const type=[
        {
            value: 'Clothes',
            label: 'Clothes',
          },
          {
            value: 'Dairy Products',
            label: 'Dairy Products',
          },
          {
              value:'Shoes',
              label:'Shoes'
          },
          {
              value:'Electronics',
              label:'Electronics'
          },
          {
              value:'Accessories',
              label:'Accessories'
          },
          {
              value:'Tools',
              label:'Tools'
          },
      
    ]
    const [storeDetails,setStoreDetails]=useState({
        name:'',
        type:'',        
    })

    const[show,setShow]=useState(false)

    const handleChange=(e)=>{
        setStoreDetails({...storeDetails,[e.target.name]:[e.target.value]})
    }

    const addProduct=(e)=>{
        e.preventDefault()
        setStoreDetails({
            'name':'',
            'type':''
        })
        setShow(true)
        
        history.push('/addproduct')
    }

 

    return(
        <div>

<Modal
        open={open}
    onClose={toggleModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Create a Store..
          </Typography>
          <Divider/>
          <br/>
          <br/>
          <TextField
                  required
                  id="outlined-required"
                  label="Name of Store"
                  name="name"
          value={storeDetails.name}
          onChange={handleChange}
          />
                          <TextField
                  sx={{
                    width: "45%",
                    marginLeft:5
                  }}
                  id="outlined-select-currency"
                  select
                  label="Type of Store"
                  value={storeDetails.type}
                  name="type"
                  onChange={handleChange}
                  helperText="Please select anyone"
                >
                  {type.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>


          <Button variant='contained' size='medium' sx={{marginTop:3,marginLeft:56,backgroundColor:'rgb(28, 28, 29)'}}
          onClick={addProduct}
           >
              Add Products
          </Button>

        </Box>
      </Modal>

 
        </div>
    )
}


