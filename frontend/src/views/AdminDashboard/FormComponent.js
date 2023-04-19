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
import { useEffect } from 'react';

const NEWS_API_URL = "http://localhost:8000/api/news"



const FormComponent = (props) => {
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
  useEffect(()=>{
    if(props.isType=='Add'){
      clearFormData();
    }
  },[])
  useEffect(()=>{
      console.log(props.updatedNews);
      clearFormData();
      const updateData = {...formData};
      if(props.updatedNews && props.isType=='Update'){
        setFormData(props.updatedNews);
      }
  },[props.updatedNews])

  const clearFormData = () =>{
    const clData = {
      title:'',
      keywords:'',
      creator: '',
      video_url:'',
      image_url:'',
      category:'',
      content:'',
      summary:''
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
    }
    else if(props.isType=='Add'){
      const resp = await axios.post(NEWS_API_URL,formData);
      console.log(resp.data);
      console.log(data);
      props.afterUpdate(formData);

    }
  
    
  }
  
  const updateNews = async () => {
    try {
      const response = await fetch(`http://localhost:8000/api/news/${formData._id}`, {
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
//      setModalOpen(false);
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
      // height: '100vh',
      // marginTop:'10px'
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
      <h1 style={{textAlign:'center', marginBottom:'50px'}}>{props.isType} News</h1>
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
      
      {/* <div style={styles.textfield}>
  <TextField fullWidth label="PubDate" type="date" id="pubDate" onChange={handleOnChange} value={formData.pubDate || new Date().toISOString().slice(0, 10)}/>
      </div> */}

      <div style={styles.textfield}>
          <TextField  rows={10}
        multiline fullWidth  inputProps={{ style: { height: "100px",  textAlign: 'left'},
    }} label="Summary" id="summary" onChange={handleOnChange} value={formData.summary}/>    
      </div>

      <div style={styles.btn}>
          <Button variant="contained" style={{ marginTop:'30px',marginRight:'15px'}} onClick={handleOnSubmit}>Submit</Button> <>    </>
          <Button variant="contained" style={{marginTop:'30px',background:"#ed5e68"}} onClick={closeModal}>Cancel</Button>
      </div>

    </Box>
  
    </div>
  )}


export default FormComponent;