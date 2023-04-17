import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  Button,
  TextField,
  Box
} from '@mui/material';
import { addNews } from '../fetch.js';
import axios from "axios";

const NEWS_API_URL = "http://localhost:8000/api/news"



const FormComponent = () => {
  // const [showForm, setShowForm] = useState(false);
  const [formData,setFormData] = useState({
    title:'',
    keywords:'',
    creator: '',
    video_url:'',
    image_url:'',
    category:'',
    content:'',
    summary:''
  })
  
  //formData.title
  //formData["title"] === formData.title

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
    const resp = await axios.post(NEWS_API_URL,formData);
    console.log(resp.data);
    console.log(data);
  }

  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      marginTop:'10px'
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
      <h1 style={{textAlign:'center', marginBottom:'50px'}}>ADD NEWS</h1>
      <div style={styles.textfield}>
          <TextField  style={{width:'250px'}} label="Title" id="title" onChange={handleOnChange} value={formData.title}/>
          <TextField style={{marginLeft:'10px',width:'540px'}} label="Link" id="link" onChange={handleOnChange} value={formData.link}/>
      </div>

      <div style={styles.textfield}>
          <TextField style={{width:'250px'}}  label="Creator" id="creator" onChange={handleOnChange} value={formData.creator} />
          <TextField style={{marginLeft:'10px',width:'540px'}} label="Image URL" id="Image_URL"  onChange={handleOnChange} value={formData.Image_URL}/> 
      </div>

      <div style={styles.textfield}>
          <TextField style={{ width:'260px'}} label="category" id="category" onChange={handleOnChange} value={formData.category}/>  
          <TextField style={{ marginLeft:'10px', width:'250px'}} label="country" id="country" onChange={handleOnChange} value={formData.country}/>     
          <TextField style={{marginLeft:'10px', width:'270px'}} label="Source" id="source_id" onChange={handleOnChange} value={formData.source_id}/>    
      </div>
      
      <div style={styles.textfield}>
          <TextField fullWidth label="PubDate" type="date" id="pubDate" onChange={handleOnChange} value={formData.pubDate}/>     
      </div>
      
      <div style={styles.textfield}>
          <TextField fullWidth style={{height:'100px'}} label="Summary" id="summary" onChange={handleOnChange} value={formData.summary}/>    
      </div>

      <div style={styles.btn}>
          <Button variant="contained" onClick={handleOnSubmit}>Submit</Button>
      </div>

    </Box>
  
    </div>
  )}


export default FormComponent;