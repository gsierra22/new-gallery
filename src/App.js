
import './App.css';
import Body from './components/Body/Body'
import {useEffect} from 'react'
import axios from 'axios';

function App() {
  useEffect(()=>{
    getGallery()
  },[])

  const getGallery =()=>{
    console.log('getGallary');
    axios.get('/gallery').then((response)=>{
      console.log(response.data);
    }).catch((err)=>{
      alert('error!');
      console.log(err)
    })
  }

  return (
    <div className="App">
      <Body test={9*9}></Body>
    </div>
  );
}

export default App;
