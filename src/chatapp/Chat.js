import React,{Component} from 'react';
import {test} from './test1';
import './publics/Chat.css'
import {Link} from 'react-router-dom'
import Upload from './Upload';
import {Avatar,IconButton} from '@material-ui/core';
import {AttachFile,MoreVert,SearchOutlined,InsertEmoticon,Mic} from '@material-ui/icons'
// var socket=io("http://localhost:8000",{
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd"
//   }
//  });

export  class Chat extends Component {
    constructor(props) {
      super(props);
      this.state = {
        dataBoard: [],
      }
     
    };

    componentWillMount(){
      test(3).then(res=>console.log(res.data)).catch(err=>console.log(err))
    }

  //   componentWillMount(){
  
  //   // socket.on("connect",()=>{
  //   //   console.log(socket.id)
  //   socket.on("hi",data=>console.log(data))
  //   // })
   
  // }
  //   componentDidUpdate(){
  //   const handleSend=()=>{
  //     socket.emit("senddata","send message")
  //   }
  // }
  handleSend=()=>{
  
    alert("hello");
 
   }
  
  
   

    render () {
      const { dataBoard } = this.state;
      
  
      return (
   <div className="chat">
     {/* <Upload/> */}
      
      {/* <button onclick={this.handleSend}>send</button>
      <Link to={"/profile/"+3}>get link</Link> */}
<div className="chat_header">
      <Avatar/>
      <div className="chat_headerinfo">
        <h3>Room name</h3>
        <p> last seen at ...</p>
      </div>
      <div className="chat_headerRight">
          <IconButton>
            <SearchOutlined/>
          </IconButton>
          <IconButton>
            <AttachFile/>
          </IconButton>
          <IconButton>
            <MoreVert/>
          </IconButton>
        
          
      </div>
</div>
<div className="chat_body">
  <p className="chat_message">
  <span className="chat_name">sonny</span>

      this is message
      <span className="chat_time">
    {new Date().toLocaleString()}
  </span>
  </p>
  <p className="chat_message chat_sender">
  <span className="chat_name">my</span>

      this is message
      <span className="chat_time">
    {new Date().toLocaleString()}
  </span>
  </p>
  
</div>
<div className="chat_sendmessage">
  <InsertEmoticon/>
  <form>
    <input type="text" placeholder="type a message"/>
    <button onClick={this.handleMessage}>Send a message</button>
  </form>
  <Mic/>
</div>
   </div>
      )
    }
  }
  export default Chat;
