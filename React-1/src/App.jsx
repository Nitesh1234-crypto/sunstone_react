// // import React, { useRef, useState } from 'react'

// // const App = () => {
// //   console.log("component re-render")
// //   let [title,setTitle] = useState("")
// // //  let [inputValue,setInputValue] = useState("");
// //  let inputRef = useRef();
// //  console.log(inputRef)
// //   function input(value){
// //     console.log(value)
// //     // setInputValue(value)
// //   }
// //   function showOnUI(){
// //       setTitle(inputRef.current.value);
// //   }
// //   return (
// //     <div>
// //       <input ref={inputRef} type="text"  />
// //       <button onClick={showOnUI}>add</button>
// //       {/* <p>fhsdsf</p>
// //       <h1>fhsfslfskj</h1> */}
// //       <h1>the value : {title}</h1>

// //     </div>
// //   )
// // }

// // export default App
// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   let [user,setUser] = useState({})
//   function userData(data){
//     console.log(data)
//     setUser(data);
//   }
//   return (
//     <div>
//       <Child1 name="Nitesh" userData={userData} ></Child1>
//       <Child2 user={user}></Child2>
//     </div>
//   )
// }

// function Child1(props){
//   // console.log(props)
//   let data={id:1,name:"Nitesh",age:24}
//   let userData= props.userData;
  
//    return(
//     <div>
//       <h1>child One</h1>
//       <p>name is : {props.name}</p>
//       <button onClick={()=>userData(data)}>Send Data</button>
//     </div>
//    )
// }
// function Child2({user}){
//   // console.log(props);
//   return(
//     <div>
//       <h1>Child Two</h1>
//       <p>name is :{user.name}</p>
//       <h2>age = {user.age}</h2>

//     </div>
//   )
// }

// export default App
import React from 'react'

const App = () => {
  let age=19;
  return (
    <div>
      {/* {age>18? <h1>allowed to vote</h1>:<h1>Not allowed to vote</h1>} */}
      {age>18 && <h1>allowed to vote</h1>}
      {age > 18 || <h1>Not allowed to vote</h1>}
      
    </div>
  )
}

export default App
