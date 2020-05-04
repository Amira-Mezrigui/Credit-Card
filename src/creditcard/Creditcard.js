import React, {useState} from 'react';
import './Creditcard.css'

function Card() {
  const [name,setname]=useState("")
  const [RIB,setRIB]=useState("****************")
  const [date,setDate]=useState("")

 const validateName = name =>{
            
            if(/[a-zA-Z ]/.test(name)){
                if(name.length>5 && name.length<9)
                setname(name.toUpperCase())
                
            }
        
        }
 const validateDate = date => {

       if(date.substr(0,2) <13){
        if(date.substr(2,2)>20 && date.substr(2,2)<25)

       { setDate((date.substr(0,2).concat("/")).concat(date.substr(2,2)))
        console.log(date) }
        
       }
       else if(date.substr(2,2)<20 || date.substr(2,2)>25)
       { setDate("")
         return alert("INVALID DATE")}
      else 
       { setDate("")
         return alert("INVALID DATE")}
   
  }
  
  return (
    <div className="container">
      <div className="card">
        <h2> {RIB} </h2>
        <h4> {date} </h4>
        <h3> {name.toUpperCase()} </h3>
        
      </div>
      <div className="data">
        <label  for="RIB">Type your RIB</label> <br/>
        <input 
        type="text" id="RIB" 
        placeholder={RIB} 
        onChange={event=> setRIB(event.target.value.replace(/\D+/, '').slice(0, 16).replace(/(\d{4})(?=\d)/g, '$1 '))}
         /> <br/>
        <label  for="date">Type the date </label> <br/>
        <input type="text" id="date" 
        onFocus ={validateDate(date)}
        onChange={event => setDate(event.target.value)}
        maxLength="4" 
        /> <br/> 

        <label  for="name">Type your name</label> <br/>
        <input type="text" id="name"  
        onFocus={validateName(name)}
        onChange={event => setname(event.target.value)} maxLength="8" /> 
        
        

      </div>
   
    </div>
  );
}

export default Card;