// import React, { useEffect, useState } from 'react'

// const App = () => {
//   console.log("re-rendering");
//   let [todos,setTodos] = useState([]);
//  async function getTodos(){
//     let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     let data = await response.json();
//     setTodos(data);
    
//   }

//   //mounting phase
//   useEffect(()=>{
//     getTodos().then(()=>console.log("todos fetched"))
//     .catch((err)=>console.log(err.message))
//     //  let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     // let data = await response.json();
//     // setTodos(data);

//     //cleanup function -->optional
//     return ()=>{}
//   },[])
//   return (
//     <div>
//       {todos.map((t)=>{
//         return (<div key={t.id}>
//           <h1>{t.title}</h1>
//         </div>)
//       })}
//       {/* <button onClick={showTodo}>show todos</button> */}
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { useEffect,useState } from 'react';
// const App = () => {
//   console.log("re-rendering")
//   let [limit, setLimit]= useState(false);
//   let [count,setCount] = useState(1)
//   // let [somestate, setSomestate] = useState("");
 
 
//  useEffect(()=>{
//    setInterval(()=>{
//     setLimit(true);
//   },3000)
//   function changeTyre(){
//     console.log("tyre changed...!"+count)
//     setCount(count+1);
//     setLimit(false)
//   }
//   changeTyre();
//  },[limit])
//   return (
//     <div>
//       <h1>{limit}</h1>
//     </div>
//   )
// }

// export default App


//stop-watch

import React, { useEffect,useState } from 'react'

const App = () => {
  console.log("re-render")
  let [count,setCount] = useState(0);
  useEffect(()=>{
    console.log("useEffect-run")
    let id=setInterval(()=>{
      console.log("running")
      setCount((prev)=>prev+1);
    },1000)
    return ()=>{
      clearInterval(id); //to resolve memory leakage
    }
  },[])
  return (
    <div>
      <h3>{count}</h3>
    </div>
  )
}

export default App
