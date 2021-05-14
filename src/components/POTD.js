import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function POTD(props) {
    const { photo } = props
    const [potd, setPotd] = useState(null)


useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod/${photo}?api_key=DEMO_KEY`)
    .then((res) => {
        setPotd(res.data);
    })
    .catch(err => {
        console.log(err)
    })
}, [photo])

return 
// (
    // <div className='img'>
    //     <img></img>
    // </div>
// )
}