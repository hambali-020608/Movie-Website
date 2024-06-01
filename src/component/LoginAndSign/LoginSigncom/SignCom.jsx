import React from 'react'
import { Link } from 'react-router-dom'


const Sign=()=>{
  return(
    <>
    <p id="signin">Already have an acount ? <Link to="/login">Login</Link> </p>
    </>
  )
}




export const SignCom = (props) => {
  const {type}= props
  return (
      <>
    
    <div id="flex">
        <label>
            <input id="input" type="text" placeholder="" required=""/>
            <span>Firstname</span>
        </label>

        <label>
            <input id="input" type="text" placeholder="" required=""/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input id="input" type="email" placeholder="" required=""/>
        <span>Email</span>
    </label> 
        
    <label>
        <input id="input" type="password" placeholder="" required=""/>
        <span>Password</span>
    </label>
    <label>
        <input id="input" type="password" placeholder="" required=""/>
        <span>Confirm password</span>
    </label>
    <button id="submit">Submit</button>

{(type==="signup"? <Sign/>:"")}

    

    

    
    
    
    
    </>
  )
}
