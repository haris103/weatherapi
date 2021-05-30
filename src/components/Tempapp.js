import React, { useEffect, useState } from 'react';
import "./css/style.css";
const Tempapp = () =>{
    const[city,setCity] = useState(null);
    const[search,setSearch] = useState("Kasur");
    useEffect(()=>{
        const fettchApi = async() =>{
            const URL =`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=099b1c517d71b9b46291cd9fa870d41f`;
           const response = await fetch(URL);
           const resJson = await response.json();
        //    console.log(resJson);
           setCity(resJson.main);
        }
        fettchApi();
    },[search])
return(
    <>
<div className="box">
<div className="inputbox">
<input 
type ="search"
value={search}
className="inputField"
onChange={(eventt)=>{
    setSearch(eventt.target.value)
}}/>
{
    !city ? (
        <p className="temp">No Data Found</p>
    ) :(
        <>
        <div className="info">
<h1 className="location">
<i className="fas fa-street-view"></i> {search}
</h1>
<h2 className="temp">
{city.temp} Cel
</h2>
<h3 className="tempmin_max">Min : {city.temp_min}Cel | Max : {city.temp_min}Cel</h3>
<h3  className="temp">Pressure: {city.pressure}</h3>
</div>
<div className="wave -one"></div>
<div className="wave -two"></div>
<div className="wave -three"></div>
</>

    )
}

</div>
</div>
    </>
)
}
export default Tempapp;