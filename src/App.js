import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      style={{   display: "flex",
      flexDirection: 'column',
          justifyContent: "center",
          alignItems: "center",
          justifycontent: "space-between"
        
       }}
    >
      
          <div>
        <h3>Invoice Form</h3>
        </div>
        <div>
        <h3>Invoice Form</h3>
        
      <div>
       
        <TextField
          required
          id="outlined-required"
          label="Company Name"
         
        />
      
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Company Email"
        
        />
      
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Company Phone No"
         
        />
      
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Company Address"
         
        />
      
      </div>
      </div>
      <div>
        <h3>Client Company Informations</h3>
      
      <div>
        <TextField
          required
          id="outlined-required"
          label="Client Company Name"
         
        />
      
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Client Company Email"
         
        />
      
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Client Company Phone No"
         
        />
      
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Client Company Address"
         
        />
      
      </div>
      </div>
      <br/>
    

      <Button variant="contained"  >Submit</Button>
    <br/>
    <br/>
    </Box>
  );
}
