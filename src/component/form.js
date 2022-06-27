
import React from 'react'
import { useState, useEffect } from "react";
import TextField from '@mui/material/TextField';
import "../component/form.css"


function App() {
  const initialValues = { company_name: "", email: "", pnumber: "" , caddress:"",ccompany_name:"", cemail:"",cpnumber:"",ccaddress:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const eregex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const pregex = /^(?:[0-9] ?){6,14}[0-9]$/;
    
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!eregex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.cemail) {
      errors.cemail = "Email is required!";
    } else if (!eregex.test(values.cemail)) {
      errors.cemail = "This is not a valid email format!";
    }
    if (!values.pnumber) {
      errors.pnumber = "Phone No is required!";
    } else if (!pregex.test(values.pnumber)) {
      errors.pnumber = "This is not a valid Phone No format!";
    }
    if (!values.cpnumber) {
      errors.cpnumber = "Phone No is required!";
    } else if (!pregex.test(values.cpnumber)) {
      errors.cpnumber = "This is not a valid Phone No format!";
    }
   
    return errors;
  };

  return (
   
    <div className="container">
      {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Informations updated</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )} */}
<h3>Invoice Informations</h3>
      <form className='invoice' onSubmit={handleSubmit}>
      
        <div>
        
             
       
      
        <div className="first">
        <div className='inputform'>
     
     <TextField
       required
       id="outlined-required"
       label="Company Name"
       name="company_name"
           placeholder="Company name"
           value={formValues.company_name}
           onChange={handleChange}
      
     />
  
   
   </div>
   <div  className='inputform'>
     <TextField
       required
       id="outlined-required"
       label="Company Email"
       name="email"
           placeholder="Company Email"
           value={formValues.email}
           onChange={handleChange}
     
     />
   <p>{formErrors.email}</p>
   </div>
   <div  className='inputform'>
     <TextField
       required
       id="outlined-required"
       name='pnumber'
       label="Company Phone No"
       placeholder="Company Phone no"
       value={formValues.pnumber}
       onChange={handleChange}
      
     />
   <p>{formErrors.pnumber}</p>
   </div>
   <div  className='inputform'>
     <TextField
       required
       id="outlined-required"
       label="Company Address"
       name='caddress'
       placeholder="Company Address"
       value={formValues.caddress}
       onChange={handleChange}
      
     />
   
   </div>
   </div>
   <div>
     <h3>Client Company Informations</h3> 
   
    <div className='inputform'>
     <TextField
       required
       id="outlined-required"
       label="Client Company Name"
       name='ccompany_name'
       placeholder="Client Company Name"
       value={formValues.ccompany_name}
       onChange={handleChange}
      
     />
   
   </div>
   <div className='inputform'>
     <TextField
       required
       id="outlined-required"
       label="Client Company Email"
       name="cemail"
           placeholder="Client Company Email"
           value={formValues.cemail}
           onChange={handleChange}
      
     />
   <p>{formErrors.cemail}</p>
   </div>
   <div className='inputform'>
     <TextField
       required
       id="outlined-required"
       label="Client Company Phone No"
       name='cpnumber'
       placeholder="Client Company Phone no"
       value={formValues.cpnumber}
       onChange={handleChange}
      
     />
   <p>{formErrors.cpnumber}</p>
   </div>
   <div className='inputform'>
     <TextField
       required
       id="outlined-required"
       label="Client Company Address"
       name='ccaddress'
       placeholder="Client Company Address"
       value={formValues.ccaddress}
       onChange={handleChange}
     />
   
   </div>
          
          
         

          <button className="button">Submit</button>
        </div>
        </div>
      </form>
    </div>

  );
}

export default App;