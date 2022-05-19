
import './App.css';
import Body from './components/Body/Body'
import {useEffect, useState} from 'react'
import axios from 'axios';

function App() {
  const [gallery, setGallery]=useState([]);
  
  useEffect(()=>{
    getGallery()
  },[])

  const getGallery =()=>{
    console.log('getGallary');
    axios.get('/gallery').then((response)=>{
      console.log(response.data);
      setGallery(response.data)
    }).catch((err)=>{
      alert('error!');
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Body gallery={gallery} getGallery={getGallery}></Body>
    </div>
  );
}

export default App;
