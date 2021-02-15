

function Profile() {
    return (
  <div>
    <div style={{display:"flex",justifyContent:"center",borderBottom:"1px solid gray"}}>

    <div style={{
          marginTop:"20px"
      }}>
          <div>
              <img style={{width:"160px",height:"160px",borderRadius:"50%"}}
              src="https://images.unsplash.com/photo-1569124589354-615739ae007b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
          </div>
          <div>
              <h4 style={{textAlign:"center"}} >
                  Valt Aoi
              </h4>
             <div style={{display:"flex"}}>
             <div>40 Post</div>
             <div>60 Flower</div>
             <div>5 Flowing</div>
             </div>
          </div>
      </div>
    </div>

  <div>
  <div style={{float:"left"}} className="listfriend">
       <h3 style={{textAlign:"center"}}>Friend</h3>
   <div className="gallery">
        
        <div className="item"><img className="image" src="https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 " /></div>
        <div className="item"><img  className="image" src="https://images.unsplash.com/photo-1542206395-9feb3edaa68d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 " /></div>
        <div className="item"><img  className="image" src="https://images.unsplash.com/photo-1596199757746-4d68503325ed?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTl8fHBlcnNvbnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60 " /></div>

    </div>
   </div>
  
  </div>
  <div style={{float:"right"}} className="userpost">
     abc
   </div>
  </div>   
  
    )
  }
  export default Profile;