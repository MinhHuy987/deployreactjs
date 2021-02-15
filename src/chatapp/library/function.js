
export const Summon=(onHand,field,id)=>{
    var ob={
        name:onHand[id].name,
        star:onHand[id].star,
        atk:onHand[id].atk,
        def:onHand[id].def,
        status:true
    }
   
    onHand.splice(id,1);
  
    var test=field.findIndex(list=>list.status===null)
    console.log(test);
  if(test!==-1){
    field.splice(test,1,ob);
    return field;
  }
  else{
      console.log("full slot")
  }
   
 

}
export const Check=(field)=>{
    return  field.filter(list=>list.status===true)
  }
  export const Attribute2=(atribute,field)=>{
    var ob={
        name:"",star:null,
        atk:null,def:null,
        status:null
    }

    field.splice(atribute[0].id,1,ob);
    field.splice(atribute[1].id,1,ob);
    return field;
   

}