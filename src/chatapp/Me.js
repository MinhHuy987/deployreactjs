
import Mesquare from './Mesquare'
import Card from './Card'

import React,{Component} from 'react'
class Me extends Component{

    constructor(props){
        super(props);
        this.state={
            meonHand:[{
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
                name:"phù thủy thời gian",
                image:"timewizard.jpg",
                title:"làm giảm 500 atk khi tấn công",
                type:"WARIOR",
                star:2,
                atk:500,
                def:400

            },{
                name:"chiến binh rồng thiêng",
                image:"alligatorSword.jpg",
                title:"nhận khiên chắn phép",
                type:"  warioir",
                star:4,
                atk:1500,
                def:1200
            },
        {
            name:"rồng con",
            image:"littledragon.png",
            title:"",
            type:"DRAGON",
            star:3,
            atk:1200,
            def:1100
        }]
        }
        
    }
    render(){
        var {meonHand}=this.state;
        var onHand=meonHand.map((list,index)=><Card key={index} list={list} />)
        return(
            <div className="me">
              <div className="desk">

              </div>
              <div className="me_field">
                  <div className="onField">
                      <Mesquare/>
                      <Mesquare/>
                      <Mesquare/>
                      <Mesquare/>
                      <Mesquare/>
                  </div>
                <div className="onHand">
               {onHand}
                </div>
                
              </div>
              <div className="spell">

              </div>

            </div>
        )
    }
}
export default Me;
