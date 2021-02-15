
import React,{Component} from 'react'
import Square from './Square'
import Monster from './Monster'
import { requirePropFactory } from '@material-ui/core'
const Function =require('./library/function')
class Yugioh extends Component {
    constructor(props){
        super(props);
        this.state={
            onHand:[{
                name:"phù thủy bóng dêm",
                image:"blackmagic.jpg",
                title:"The ultimate wizard in terms of attack and defense",
                type:"SPELLCASTER",
                star:7,
                atk:2500,
                def:2100
            },{
                name:"rồng trắng mắt xanh",
                image:"whitedragon.png",
                title:" This is legendary dragon is powerful engine of destruction.Virtually invincible very few have faced with awesome creature and lived to tell the tale",
               type:"DRAGON",
                star:8,
                atk:3000,
                def:2500
            },{
                name:"chiến binh tên lửa",
                image:"rocket.png",
                title:"làm giảm 500 atk khi tấn công",
                type:"WARIOR",
                star:4,
                atk:1500,
                def:1100

            },{
                name:"chiến binh khiên sắt",
                image:"warior.png",
                title:"nhận khiên chắn phép",
                type:"  warioir",
                star:4,
                atk:100,
                def:2600
            }],field:[{
                name:"rồng đen mắt đỏ",star:7,atk:2400,def:null,status:true
            },{
                name:"rồng con",star:3,atk:1200,def:null,status:true
            },{
                name:"",star:null,atk:null,def:null,status:null
            },{
                name:"",star:null,atk:null,def:null,status:null
            },{
                name:"",star:null,atk:null,def:null,status:null
            }],spell:0,active:false,btnatribute:false,atribute:[],stack:[],level:null,monsterattack:[]

        }
     
    }
    setmonster=(id)=>{
        var {onHand,field,atribute,stack,level}=this.state;
        console.log(id)
        if(onHand[id].star<=4){

           this.setState({
               field:Function.Summon(onHand,field,id)
           })

        }
        else if(5<=onHand[id].star && onHand[id].star<=6){
            console.log("bạn cần hiến tế 1 quái thú");
           
        }
        else if(7<=onHand[id].star && onHand[id].star<=8){
           
            if(Function.Check(field).length<2){
                console.log("bạn không đủ điều kiện hiến tế")

            }
            else{
                console.log("chọn quái thú để hiến tế")
                var ob={
                    name:onHand[id].name,
                    star:onHand[id].star,
                    atk:onHand[id].atk,
                    def:onHand[id].def,
                    id:id
                }
                stack.push(ob)
              this.setState({
                  stack:stack,level:2
              })
              
            }
            
        }

    }
   

   
    idatribute=(id,name)=>{
        var {atribute}=this.state;
     
        console.log(id,name)
        var ob={
            id:id,name:name
        }
        atribute.push(ob)
      this.setState({
         atribute:atribute
      })
      
      
     
    }
    Attack=(id,atk)=>{
        console.log(id,atk)
        var {monsterattack}=this.state;
        var ob={
            id:id,atk:atk
        }
        monsterattack.push(ob);
        this.setState({
            monsterattack:monsterattack
        })
    }
    Select=(id,atk)=>{
        var {monsterattack}=this.state;
        var total=monsterattack[0].atk-atk;
        console.log(id,atk,total)

    }
    
   
      render(){
          const hide=()=>{
              var {atribute,field}=this.state;
              this.setState({
                  field:Function.Attribute2(atribute,field)
              })
          }
       const cardspell=()=>{
         
            this.setState({
                spell:300,active:true
            })
        }
        const Summonatribute=()=>{
            var {stack,field,onHand}=this.state;
            this.setState({
                field:Function.Summon(onHand,field,stack[0].id)
            })
        }
        var {onHand,field,spell,active,level,atribute,monsterattack}=this.state;
      var Summon=atribute.length===level?<button onClick={Summonatribute}>Summon</button>:"";

        var square=onHand.map((list,index)=><Square idset={this.setmonster}  index={index} list={list} key={index} />);
        var monster=field.map((list,index)=><Monster select={this.Select}  attack={this.Attack} idmonster={this.idatribute} active={active} spell={spell} index={index} key={index} list={list} />)
          
        return(
            <div className="main">
                <div>
                {square}
                 {monster}
                 <button onClick={cardspell}>up 300atk</button>
             {Summon}
             <button onClick={hide}>hide</button>
                </div>
                
            </div>
        )
    }
}
export default Yugioh;