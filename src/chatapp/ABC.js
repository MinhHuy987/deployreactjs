
import React,{Component} from 'react';
import io from 'socket.io-client';
var socket=io("http://localhost:8000",{
  withCredentials: true,
  extraHeaders: {
    "my-custom-header": "abcd"
  }
 });

class ABC extends Component{
    constructor(props){
        super(props);
        this.state={
            like:0,send:0,nofication:0
            // trong đó send là số liệu của các client khác sẽ nhìn thấy
        }
    }
    
    handleClick=()=>{
        var {like,nofication}=this.state;
        this.setState({
            like:like+1,nofication:nofication+1
        })
        socket.emit('like',{like:like+1,nofication:nofication+1});

        alert("hello")
    }
       
    Remove=()=>{
        this.setState({
            nofication:0
        })
    }
    render(){
        var {like,nofication}=this.state;
        var element=like!==0?like:"";
        var Nofication=nofication!==0?nofication:"";
        socket.on("showlike",data=>{
           
            this.setState({
                like:data.like,nofication:data.nofication
            })
        })
        return(
            <div className="test">
                <button onClick={this.handleClick}>{element} like </button>
                <a onClick={this.Remove}> Nofication  {Nofication} </a>
            </div>
        )
    }
}
export default ABC;
