// import {useState} from 'react'

// import axios from 'axios';
    
// const Createpost=(props)=>{
//     // var {user}=this.props;
//     const [post,setPost]=useState("");
//     function Poststatus(){
        
//         var request={
//             userpost:props.userpost.name,
//             idpost:props.userpost.Iduser,
//             postcomment:post
            
//         }
      
//             // console.log(user);
//             axios.post("http://localhost:9000/poststatus",request).then(resolve=>{
//                 console.log(resolve.data)
//             }).catch(err=>console.log(err))


//     }
//     return(

//         <div>
//            <form>
//            <textarea value={post} onChange={(e)=>setPost(e.target.value)} rows="5" cols="57"/>
//             <button>File</button><label>pathfile</label>
//             <button type="submit" onClick={Poststatus} className="btn btn-primary">Upload</button>

//            </form>

//         </div>
//     )


// }
// export default Createpost;