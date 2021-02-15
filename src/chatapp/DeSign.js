

import React,{Component} from 'react'
import './publics/Design.css';
import Me from './Me';
import Enermy from './Enermy';
class Design extends Component{

    constructor(props){
        super(props);
      
    }
    render(){
        return(
            <div className="main">
                <Enermy/>
                <Me/>
            </div>
        )
    }
}
export default Design;