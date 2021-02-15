import React from 'react';
import {Link,Redirect} from 'react-router-dom'

function Navbar() {
    function logout() {
     localStorage.clear();
    }
    return (
     
      
            <nav  className="navbar navbar-expand-lg navbar-light bg-primary">
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/"><i class="fas fa-home"></i> </Link>
      </li>
      <li className="nav-item">
     
      <Link onClick={logout} className="nav-link" to="/login"> <i  className=" fas fa-sign-out-alt "></i></Link>
     
     
      </li>
     
      
      <li className="nav-item">
        <Link className="nav-link disabled" to="/profile"><i class="far fa-id-card"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/chat"><i class="fas fa-envelope"></i></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link disabled" to="/nofication"><i class="fas fa-bell"></i></Link>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
     
    )
  }
  
  export default Navbar;