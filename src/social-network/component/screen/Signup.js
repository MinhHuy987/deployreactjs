import {useState} from 'react'
import axios from 'axios'
import {Redirect,Link} from 'react-router-dom'
function Signup() {
  const [username,setUsername]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const [name,setName]=useState("");
  const Postdata=(e)=>{
    e.preventDefault();
   
    var request={
      username:username,password:password,name:name
    }
    axios.post("http://localhost:9000/signup",request).then(solve=>{
      if(solve.data==="username already exist"){
        setError(true);
      }
      
  }).catch(err=>console.log(err))
    
    
  }
var showError=error?<span>User already exist </span>:""

    return (
     <div id="signup" class="container">
       {showError}
  
<form id="formsignup"> 
        My Social

     <div class="form-group">
      
       <input name="username" value={username} onChange={(e)=>setUsername(e.target.value)} type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
       {/* <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small> */}
     </div>
     <div class="form-group">
      
       <input name="password" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
     </div>
     <div class="form-group">
      
       <input name="name" value={name} onChange={(e)=>setName(e.target.value)} type="text" class="form-control" id="exampleInputPassword2" placeholder="Name"/>
     </div>
     
    
     <button onClick={(e)=> Postdata(e) }
     type="submit" class="btn btn-primary">Register</button>
   </form>  
   
     </div>
    )
  }
  export default Signup;