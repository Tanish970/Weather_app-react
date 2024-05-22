import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const API_URL="http://api.openweathermap.org/geo/1.0/direct"
const KEY="11393df6659773e30f7a76240a285745"



export default function SearchBox() {
  
  
  
  
  let [city, setCity]=useState("");


  let handleChange=(evt)=>{
    setCity(evt.target.value)
  }
  let handleSubmit=(evt)=>{
    evt.preventDefault();
    getWeatherInfo(city)
    console.log("Searching for weather in:", city)
    setCity("")
  }

  let getWeatherInfo=async(city)=>{
    let responce=await fetch(`${API_URL}?q=${city}%limit=5&appid=${KEY}`)
    let responceJson=responce.json
    console.log('Checking done')
    console.log(responceJson)

  }

    return (
      <div className="SearchBox">
        <h3>Search for the weather</h3> 
        <form onSubmit={handleSubmit}>
        <TextField id={city} label="City Name" variant="outlined" onChange={handleChange} value={city}/>
        <br></br><br></br>
        <Button variant="contained" type="submit">Search</Button>

    </form>
      </div>
    );
  }
  


