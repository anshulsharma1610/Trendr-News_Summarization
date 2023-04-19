import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Box
} from '@mui/material';
// import { addNews } from '../fetch.js';
import axios from "axios";
import { useEffect } from 'react';
// import { padding } from '@mui/system';

const Add_Subscription_URL = "http://localhost:8000/api/subscriptions"



const FormSubscription = (props) => {
  // const [showForm, setShowForm] = useState(false);
  const [formData,setFormData] = useState({
    title:'',
    desc:'',
    features: '',
    days:'',
    price:''
  })
  useEffect(()=>{
    if(props.isType=='Add'){
      clearFormData();

    }
  },[])

  useEffect(()=>{
      console.log(props.updatedNews);
      clearFormData();
      const updateData = {...formData};
      if(props.updatedSubscription && props.isType=='Update'){
        setFormData(props.updatedSubscription);
      }
  },[props.updatedSubscription])

  const clearFormData = () =>{
    const clData = {
        title:'',
        desc:'',
        features: '',
        tenureDays:'',
        price:''
    }
    setFormData(clData);
  }
  const handleOnChange = (event)=>{
    event.preventDefault();
    const id = event.target.id;
    const updateData = {...formData};
    updateData[id] = event.target.value;
    setFormData(updateData);
  }

  const handleOnSubmit = async (event)=>{
    event.preventDefault();
    const data = JSON.stringify(formData);
    if(props.isType=='Update'){
      updateNews();
      props.afterUpdate(formData);
    }
    else if(props.isType=='Add'){
      const resp = await axios.post(Add_Subscription_URL,formData);
    //   console.log(resp.data);
    //   console.log(data);
      // alert('Added New News');
      props.afterUpdate(formData);

    }  
  }
  
  const updateNews = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/subscriptions/${formData._id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
        
      });
      
      if (!response.ok) {
        throw new Error('Failed to update news');
      }
      // alert('News has been updated.');
      clearFormData();
      props.afterUpdate(formData);
    } catch (error) {
      console.error(error);
      alert('Failed to update news');
    }
  }
  const closeModal = ()=>{
    props.closeModal();
}
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '50%',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
    },
    textfield:{
      marginTop:'10px'
    },
    btn:{
      alignItems:'center',
      justifyContent:'center',
      textAlign:'center',
      marginTop:'10px'
    }
  };

  return (
    <div style={styles.container}>
    <Box
      sx={{
        width: 800,
        maxWidth: '100%',
      }}
    >
      <h1 style={{textAlign:'center', marginBottom:'50px'}}>{props.isType} Subscription</h1>
      <div style={styles.textfield}>
          <TextField  fullWidth label="Title" id="title" onChange={handleOnChange} value={formData.title}/>
          <TextField fullWidth  label="Description" id="desc" style={{marginTop:'15px'}} onChange={handleOnChange} value={formData.desc}/>
      </div>

      <div style={styles.textfield}>
          <TextField style={{marginTop:'15px',width:'510px', paddingRight:'5px'}}  label="Features" id="features" onChange={handleOnChange} value={formData.features} />
          <TextField style={{marginTop:'15px',width:'105', paddingRight:'5px', paddingLeft:'5px'}} label="Days" id="tenureDays"  onChange={handleOnChange} value={formData.tenureDays}/> 
          <TextField style={{marginTop:'15px', width:'105px', paddingRight:'5px', paddingLeft:'5px'}} label="Price" id="price" onChange={handleOnChange} value={formData.price}/>  
      </div>

      <div style={styles.btn}>
          <Button variant="contained" style={{marginTop:'15px'}}  onClick={handleOnSubmit}>Submit</Button>
          <Button variant="contained" style={{background:'red', marginTop:'15px'}} onClick={closeModal}>Cancel</Button>
      </div>
    </Box> 
    </div>
  )}


export default FormSubscription;