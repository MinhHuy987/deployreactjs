import Navbar from './component/Navbar';
import './App.css';
import {BrowserRouter,Route} from 'react-router-dom';
// import Home from './component/screen/Home';
import Login from './component/screen/Login';
import Signup from './component/screen/Signup';
import Profile from './component/screen/Profile';
import axios from 'axios'
function App() {
 
  return (
  
   <BrowserRouter>
      <Navbar/>
      {/* <Route exact path="/">
        <Home/>
      </Route> */}
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/signup">
    <Signup/>
      </Route>
      <Route path="/profile">
        <Profile/>
      </Route>
   </BrowserRouter>
  )
}

export default App;
