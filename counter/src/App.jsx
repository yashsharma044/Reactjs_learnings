import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);
  // let counter=0;
  const addCount=()=>{
    counter=counter+1;
    if(counter>=0 && counter<=20)
    setCounter(counter);//setCounter is an work as an arrow function used for upadting the val of counter
    // setCounter(counter);
    // setCounter(counter);
    // setCounter(counter);
    //if we want to increase the vaal by the above code it dosn't affect because fibre upgradation used and all setter are passed in the bunch
    //so to this we used
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);
    // setCounter(prevCounter=>prevCounter+1);

    console.log("clicked",counter);
  }
  const removeCount=()=>{

    counter=counter-1;
    if(counter>=0)
    setCounter(counter);
    console.log("clicked",counter);

  }
  return (
    <>
     <h1>Counter updater</h1>
     <h2>Counter :{counter}</h2>
     <button onClick={addCount}>inc count</button>
     <br />
     <br />
     <button onClick={removeCount}>dec count</button>
    </>
  )
}

export default App
