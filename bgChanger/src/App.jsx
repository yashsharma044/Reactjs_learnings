import { useState } from "react"


function App() {
  
const [color,setColor]=useState("olive")
  return (
    <div className="w-full h-screen duration-200 " style={{backgroundColor:color}}>
      <div className="p-4 m-0">
        <button onClick={()=>setColor("red")}>red</button>
      </div>
    </div>
  )
}

export default App
     