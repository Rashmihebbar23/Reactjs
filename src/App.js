import React,{useState,useEffect} from 'react';

import './App.css';
import User from './User';

function App(props) {

  // handling state in function based component
  let [getcolor,setcolor]= useState({color:'red'})
  let [getname,setname]=useState({name:'rashmi hebbar'})
  // let [getage,setage]=useState(age)



  //useEffect hook for function based

  useEffect(()=>{
    console.log(' at time of creation....');
  });

  useEffect(()=>{
    console.log(' at time of changes....');
  });

  useEffect(()=>{
    console.log('at time of destroy....');
    return()=>{
      console.log('clean up.......')
     }
  });

  let oncall=()=>{
    setcolor({color:'pink'})

  }
  let onEventHandler=(dataFromchild)=>{
    alert("hello"+ dataFromchild);

  }
  let onsumbit=(event)=>{
    event.persist();
    console.log("data",event);
    setname({'name':event.target.value})
    

  }

  
 let tempUI=null;
 if(getcolor.color === "red"){
     tempUI =(
         <p>If statement is displaying</p>
     )
 } else if(getcolor.color === "pink"){
     tempUI=(
         <p>Else statement is displaying</p>
     )
     }
    
  return (
    
    <div className="App">
      //binding data from parent to child
      <User name={getcolor.color} call={(data)=> onEventHandler(data)}>
       
        <h1>hi</h1>
      </User>
    
      //function basesd 
     <h1>{getcolor.color}</h1>
     {/* <h1>{getage.age}</h1> */}
     {/* setcolor */}
     <button type="button" onClick={oncall}>click me</button>
     <button type="button"onClick={oncall}>toggle</button>
     <button type="button" onClick={()=> props.increment()}>increment</button>
     <input type="text" value={getname.name} onChange={onsumbit}></input>
     <h3>name:{getname.name}</h3>
     {tempUI}
     <h1>redux</h1>
     <strong>{props.counter}</strong>
     </div>
  );
}
export default (App);
