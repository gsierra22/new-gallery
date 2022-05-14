import logo from './logo.svg';
import './App.css';
import Body from './components/Body/Body'
import {useEffect} from 'react'

function App() {
  useEffect(()=>{
    getGallery()
  },[])

  const getGallery =()=>{
    console.log('hallo!')
  }

  return (
    <div className="App">
      <Body test={9*9}></Body>
    </div>
  );
}

export default App;
