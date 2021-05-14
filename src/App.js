import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import POTD from './components/POTD';
import details from './components/details'
// import header from './components/header'

function App() {
  const [photo, setPhoto] = useState([])


  useEffect(function(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function(res){
      console.log(res.data)
      setPhoto(res.data)
    })
    .catch(function(err) {
      console.log(err)
    })
  }, [])

  console.log(photo)

  const Header = () => (
    <div className='head'> 
    <h1> NASA Photo of the Day </h1>
    <p>Check back every day for a new picture!</p>
    </div>
  )

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
