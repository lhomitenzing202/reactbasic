//Hooks, usestate
import { useState } from "react"

const Home = () => {
//  const state = useState(0)//[0, function] 
//   const state1 = state[0]//initial value
//   const state2= state[1]//function
//   //Or can do
//   return (
//      <div>
//  <h1>{state1}</h1>
//  <button onClick = {()=>state2(state1+1)}>+</button>
//      </div>  //or can do

//soln2
const[count,setCount] = useState(0)
return (
 <div>
<h1>{count}</h1>
<button onClick = {()=>setCount(count+1)}>+</button>
    </div>  //or can do


//soln 3
//     const increasedCount = ()=>{
//       setCount(count+1)
//       console.log(count)
//     } 
//     return (
//     <div>
// <h1>{count}</h1>
// <button onClick = {increasedCount}>+</button>
//     </div>
   )
 }

export default Home


//components and Props
// import Button from "./Button"

// const Home = () => {
//     return (
//         <>
//       <div>
//           <h1>I am Tenzing Lhomi</h1>
//           <h2>
//           I am a student
//           </h2>
//           <Button textInsideButton='Home'bgColor = "Blue"/>
//       </div>
//       </>
//     )
//   }
  
//   export default Home