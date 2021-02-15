
import React,{Component} from 'react'
class Card extends Component{

    constructor(props){
        super(props);
        
    }
    render(){
        var {list}=this.props;

        return(
            <div className="me_card">
              <img  src={`${process.env.PUBLIC_URL}/asset/image/${list.image}`} />
               <div className="summon">
                   <li>
                   <button>
                       summon
                   </button>
                   </li>
                   <li>
                   <button>
                       set
                   </button>
                   </li>
                   <li>
                   <button>
                       view
                   </button>
                   </li>
                
               </div>
            </div>
        )
    }
}
export default Card;