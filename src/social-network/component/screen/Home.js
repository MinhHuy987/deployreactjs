
import React from 'react'
import { Redirect } from 'react-router-dom';
import axios from 'axios'
import Showpost from './Showpost';
import Createpost from './Createpost'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user:[],friends:[]};
  };
  
 

  componentWillMount() {
    const config={
      headers:{Authorization:localStorage.getItem("token")}
    }
    axios.get('http://localhost:9000/home',config).then(resolve=>
    {
      console.log(resolve.data.message)
    this.setState({
      user:resolve.data.message,friends:resolve.data.friends
    })
    }).catch(err=>console.log(err))
   
  };

  render() {
   var {user}=this.state;
   var {friends}=this.state;
   
    if (!localStorage.getItem("token")) {
      return <Redirect to="/login" />
    }
    
  
    return (
      <div className="home">
      <h4>{user.name}</h4>
      <h4>
     
      </h4>
      <div id="homepage" className="container">
        <Createpost userpost={user} />
       <Showpost checkfriend={friends} checkpost={user}/>
      
      <div className="card" style={{width: "30rem"}}>
        <h4>Valt Aoi</h4>
        <img className="card-img-top" src=" https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 " alt="Card image cap"/>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
         <div style={{display:"flex"}} className="card-content">
           <button className="btnhome"> Like</button>
           <button className="btnhome" > Comment</button>
           <button  className="btnhome"> Share</button>
         </div>
        </div>
      </div>
          </div>
      </div>
     
    );
  };
};
export default Home;