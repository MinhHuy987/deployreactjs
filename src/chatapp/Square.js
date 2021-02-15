import { requirePropFactory } from '@material-ui/core';
import React,{Component} from 'react'

class Square extends Component {
    constructor(props){
        super(props);
        
    }
    handle=(id)=>{
        this.props.idset(id);
    }
    render(){
        var {onHand,index,list}=this.props;
       
       
     
        return(
            <div  className="main_square">
               <img height="271" src={`${process.env.PUBLIC_URL}/asset/image/${list.image}`} />
               
              <div className="main_details">
                
<div className="main_title">
   <h3>TYPE:{list.type}</h3>
<h3>{list.title}</h3>
</div>

                    <div style={{display:"flex",float:"right",height:"14px"}} className="footer">
                    <h3>
                   ATK/{list.atk}
               </h3>
               <h3>
                   DEF/{list.def}
               </h3>
                    </div>
              
                    <button onClick={()=>this.handle(index)}>summon</button>
              </div>
             
            </div>
        )
    }
}
export default Square;