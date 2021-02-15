import { Redirect,Link } from 'react-router-dom'

import {useState} from 'react'
 import axios from 'axios'
function Signin() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [check,setCheck]=useState("");
  // if (localStorage.getItem('token')) {
  //   return <Redirect to="/" />
  // }
const onLogin=(e)=>{
 e.preventDefault();
 var request={
   username:username,
   password:password
 }
 axios.post('http://localhost:9000/login',request)
 .then(resolve=>{
  console.log(resolve.data.message)
  
  if(resolve.data.message==="succes"){
    localStorage.setItem("token",resolve.data.token);
    setCheck(resolve.data.message)
   
  }
 })
 .catch(err=>console.log(err))

}
if(localStorage.getItem("token")){
  return  <Redirect to="/" />
 }

  return (

    <div id="login" className="container">

      <form id="formlogin"   >
        My Social

        <div class="form-group">

          <input name="username" value={username}
          onChange={(e)=>setUsername(e.target.value)}
          type="email" name="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
          {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
        </div>
        <div class="form-group">

          <input name="password" value={password}
          onChange={(e)=>setPassword(e.target.value)}
          type="password" name="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div class="form-check">
          <a href="#">Forgot your password? </a>
         <Link to="/signup">Don't have an account?</Link>
        </div>
        <button onClick={(e)=>onLogin(e)} type="submit" class="btn btn-primary">Login</button>
      </form>
    </div>
  )
}



export default Signin;
