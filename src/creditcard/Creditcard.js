import React, {useState} from 'react';
import './Creditcard.css'

function Card() {
  const [name,setname]=useState("")
  const [RIB,setRIB]=useState("****************")
  const [date,setDate]=useState("")
  
  return (
    <div className="container">
      <div className="card">
        <h2> {RIB} </h2>
        <h4> {date} </h4>
        <h3> {name} </h3>
        
      </div>
      <div className="data">
        <label  for="RIB">Type your RIB</label> <br/>
        <input type="text" id="RIB" placeholder={RIB} onChange={event=> setRIB(event.target.value)} /> <br/>
        <label  for="date">Type the date </label> <br/>
        <input type="text" id="date" onChange={event => setDate(event.target.value)} /> <br/> 
        <label  for="name">Type your name</label> <br/>
        <input type="text" id="name" onChange={event => setname(event.target.value)} /> 
        
        

      </div>
   
    </div>
  );
}

export default Card;