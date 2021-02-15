
import React,{Component} from 'react';
import './publics/NavbarChat.css';
import {Avatar,IconButton} from '@material-ui/core';
class NavbarChat extends Component{
    constructor(props){
        super(props);
        
    };
    render(){
        var {image}=this.props;
        return(
            <div className="navbarchat">
                <Avatar src={image} />
                <div className="navbarchat_info">
                  <h3>Room name</h3>
                  <p>this is the last message</p>
        
                  

            
                


                </div>
            </div>
        )
    }
}
export default NavbarChat;