import './publics/Navbar.css'
import React,{Component} from 'react'
import {useState} from 'react'
import axios from 'axios';
class Chap extends React.Component {
 constructor(props){
   super(props);
 }
 
 
  render() {
   
    // var {id}=this.props.match.params;
     var {chap,id}=this.props.match.params;
    return(
      <div>
        I am show chap + {chap}+{id}
     
      </div>
    )
  }
}
export default Chap;