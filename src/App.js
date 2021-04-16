import React, { useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
// import POTD from './components/POTD';

function App() {
  const [photo, setPhoto] = useState(null)
  // const [date, setDate] = useState(null)

  useEffect(function(){
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(function(res){
      setPhoto(res.photo)
    })
    .catch(function(err) {
      console.log(err)
    })
  }, [])

  console.log(photo)

  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
