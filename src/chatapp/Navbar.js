import './publics/Navbar.css'
import React,{Component} from 'react'
import {useState} from 'react'
import axios from 'axios';
import ChatIcon from '@material-ui/icons/Chat';
import DonutlargeIcon from '@material-ui/icons/DonutLarge';
import {Avatar,IconButton} from '@material-ui/core';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {SearchOutlined} from '@material-ui/icons';
import NavbarChat from './NavbarChat';
import Upload from './Upload'
class Navbar extends React.Component {
 constructor(props){
   super(props);
 }
 
 handlebtn=()=>{
    alert("search friends")
 }
  // componentWillMount(){
  //   var {id}=this.props.match.params;
  //   axios.get(`http://localhost:8000/profile/${id}`).then(resolve=>console.log(resolve.data))
  // }
  render() {
   
    // var {id}=this.props.match.params;
    return(
      <div className="navbar">
       
       <div className="navbar_header">
       <Avatar 
           />
         <div className="navbar_headerRight">
          
           <IconButton>
           <DonutlargeIcon/>
           </IconButton>
          <IconButton>
            <ChatIcon/>
          </IconButton>
          <IconButton>
            <MoreVertIcon/>
          </IconButton>
         </div>
       </div>
       <div className="navbar_search">
      <div className="navbar_searchContainer">
     <IconButton>   <SearchOutlined onClick={this.handlebtn} /></IconButton>
        <input type="search" placeholder=" search or start new chat"/>
      </div>
       </div>
       <div className="navbar_chats">
          
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
          <NavbarChat/>
         
       </div>
        {/* <a href={"/profile/"+id+"/wukong"}> get chap</a> */}
      </div>
    )
  }
}
export default Navbar;