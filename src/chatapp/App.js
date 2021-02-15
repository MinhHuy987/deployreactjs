
import Navbar from './Navbar'
import Chat from './Chat'
import Chap from './Chap';
import ABC from './ABC';
import Yugioh from './Yugioh'
import './publics/App.css'
import {BrowserRouter,Route,Link} from 'react-router-dom'
function App(){
    return(
      <div className="app">
           {/* <div className="app_body"> */}
             {/* <Navbar/>
             <Chat/> */}
          {/* <ABC/> */}
          {/* <BrowserRouter>
          
          <Route exact path="/profile/:id" component={Navbar}/>
          <Route path="/profile/:id/:chap" component={Chap}/>
         
          <Route exact path="/">
            <Chat/>
          </Route>
          </BrowserRouter>  */}
          
       {/* </div> */}
       <Yugioh/>
      </div>
    )
}
export default App;