import React,{Component} from 'react';
class Monster extends Component{
    constructor(props){
        super(props);
      this.state={
          atk:0,def:0,status:false
      }
       
    }
    Atribute=(id,name)=>{
        this.props.idmonster(id,name);
    }
    Attack=(id,atk)=>{
        
         this.props.attack(id,atk);   
    }
    Select=(id,atk)=>{
        this.props.select(id,atk);
    }
    
    render(){
       const EquipSpell=()=>{
            var {spell,list}=this.props;
            this.setState({
                atk:spell+list.atk,status:true
            })
       }
     
     var {list,spell,active,index}=this.props;
     var {status,atk}=this.state;
      var equipcard=status?atk:list.atk;
      
        var equip=list.status===true?<button
         className={active===true?"equip":"none"}
        onClick={EquipSpell}
        >Trang bị</button>:'';
        var atribute=list.status===true?<button
        onClick={()=>this.Atribute(index,list.name)}>
        Hiến tế
    </button>:""
        return(
            <div className="main_monster">
              
               
                {list.name}
               <h3>{equipcard}</h3>
               <div  className="main_equip">
             
                {equip}
                {atribute}
             <button onClick={()=>this.Attack(index,list.atk)}>Tấn công</button>
             <button onClick={()=>this.Select(index,list.atk)}>Select</button>
             
               </div>

                
            </div>
        )
    }
}
export default Monster;