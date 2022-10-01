import React, { Fragment } from "react";
import "../App.css";
import { ImLocation2 } from "react-icons/im";
import { useState, useEffect } from "react";
import axios from "axios"
import {TiWeatherPartlySunny } from "react-icons/ti";
import {FaTemperatureLow} from "react-icons/fa";
import {WiHumidity} from "react-icons/wi";
import {ImEarth} from "react-icons/im";


const Tempapp = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState();
  const getData = async (city)=>{
  
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=56b8be80b1cab6dc81b70d8d014ef5b0`).then((response)=>{
          console.log(response.data)
          setData(response.data)
      }).catch((e)=>{console.log(e)})

  }
  useEffect(()=>
  {
    getData(city);
  },[city])
console.log(city);
  console.log(data);

  return (
    <Fragment>
      <div id="main-page">
        <div id="box">
          <div id="input-box">
            <div>
              <h1>Todays Climate</h1>
            <TiWeatherPartlySunny size="3.5em" style={{color:"blue", marginTop:"1vh"}}/>
            </div>
            <input
              type="search"
              id="searchbar"
              placeholder="location"
              value={city}
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />

          </div>
          <div id="info">
            <h2 className="location">
              <ImLocation2 size="1.5em" style={{color:"darkblue"}}/>
            <b> {city}</b> 
            </h2>
            <h2 className="location"><ImEarth size="1.2em" style={{color:"darkgreen"}} /> Timezone : {!data?"-" :    data.timezone}</h2>
            <h2 className="location"><WiHumidity size="1.5em" style={{color:"magenta"}}/>Humidity : {!data?"-" : data.main.humidity}</h2>
            <h3 className="location"><FaTemperatureLow style={{color:"darkblue"}}/>Min : { !data?"-" : data.main.temp_min} celcius | <FaTemperatureLow style={{color:"red"}}/> Max :{!data?"-" : data.main.temp_max} celcius </h3>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Tempapp;
