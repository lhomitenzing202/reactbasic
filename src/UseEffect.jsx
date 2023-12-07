import { useEffect, useState } from "react"


// const UseEffect = () => {

//   useEffect(()=> {
//     console.log("hello world")
//   },[])
//   return (
//     <div>UseEffect</div>

//type 1 use effect on execution basis 
// const UseEffect = ()=>{
// const [count,setCount]= useState(0)
// const [count1,setCount1]= useState(0)

//   useEffect(()=> {
//     console.log("UseEffect triggered")
//   },[count])
//   return (
//         <div>
//           <h1>count:{count}</h1>
//           <button onClick={()=>setCount(count+1)}>+</button>
//           <h1>count1:{count1}</h1>
//           <button onClick={()=>setCount1(count1-1)}>-</button>
//           </div>

//type 2 use effect
const UseEffect = ()=>{
  const [count,setCount]= useState(0)
  const [count1,setCount1]= useState(0)
  
    useEffect(()=> {
      document.title = count // title ma count dekhau cha
      console.log("UseEffect triggered")
    },[count, count1])

  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count+1)}>+</button>
      <h1>count1:{count1}</h1>
      <button onClick={()=>setCount1(count1-1)}>-</button>
      </div>

// type 3 use effect   // jun btn click garda ni triggered huncha popular chaina not suitable 
// const UseEffect = ()=>{
//   const [count,setCount]= useState(0)
//   const [count1,setCount1]= useState(0)
  
//     useEffect(()=> {
//       console.log("UseEffect triggered")
//     })

//   return (
//     <div>
//       <h1>count:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>+</button>
//       <h1>count1:{count1}</h1>
//       <button onClick={()=>setCount1(count1-1)}>-</button>
//       </div>
   )

 }

export default UseEffect