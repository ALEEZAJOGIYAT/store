import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useHistory } from 'react-router-dom';

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

export function BasicModal(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleYes=()=>{
      history.push('./login')
  }
  const handleNo=()=>{
    history.push('./signup')
}


  const history=useHistory()

  return (
    <div>
      <Button variant="contained" sx={{backgroundColor:'rgb(31, 31, 32)',fontWeight:800 , display:'flex',m:2}} onClick={handleOpen}>{props.name}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {/* <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography> */}
          <Typography id="modal-modal-description" variant='h6'
           //sx={{ mt: 2 }}
           >
            Do you have an account?
          </Typography>
          <Button variant='contained' size='small' sx={{marginTop:3,marginLeft:6}}
          onClick={handleYes} >
              Yes
          </Button>
          <Button  variant='contained' size='small'
          onClick={handleNo}
            sx={{marginLeft:1,marginTop:3}}>No</Button>

        </Box>
      </Modal>
    </div>
  );
}
