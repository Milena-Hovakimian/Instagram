import React from 'react'
import '../Login/Login.css'
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom"


function Login({user,setText}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    function stop(e){
        const reg_data=user;
        if(username=='maria' && password=='maria1234'){
            // setText({username,password})
          navigate('/')
           
        }
        else{
            alert('Wrong data')
        }
        e.preventDefault()
        setUsername('maria')
        setPassword('maria1234')
      
      
    }

    
    const handleSubmit = (e) => {
        e.preventDefault();
        
    }
   
  return (
    <div id="wrapper">
    <div className="main-content" onSubmit={stop}>
    <div className="headerr">
      <img src="https://i.imgur.com/zqpwkLQ.png" />
    </div>
    <div className="l-part" onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" class="input-1"  onChange={(e) => setUsername(e.target.value)}/>
      <div class="overlap-text">
        <input type="password"  placeholder="Password" class="input-2"   onChange={(e) => setPassword(e.target.value)}/>
       
      </div>
     <input type="submit" value="Log in" class="btn"  onClick={stop}/> 
    
    
    </div>
  </div>
  <div class="sub-content">
    <div class="s-part">
      Don't have an account?
      <br/>
      <a href="">Sign up</a>
    </div>
  </div>
</div>


  )
}

export default Login