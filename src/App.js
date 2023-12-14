// CSS in REACT 
// import React, { useState } from "react";
// function App() {
// const applycss = {
// backgroundColor: "red",
// width: "200px",
// height: "200px",
// marginLeft: "10px",
// };
// return (
// <div>
// <div style={applycss}></div>
// <div
// style={{
// backgroundColor: "red",
// width: "200px",
// height: "200px",
// marginLeft: "10px",
// }}
// ></div>
// </div>
// );
// }
// export default App;


// PROPS
// import React, { useState } from "react";
// import Card from "./card";
// function App() {
// return (
// <div>
// <div style={{ display: "flex", flexWrap: "wrap" }}>
// <Card name="mobile"
// picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/>
// <Card name="car"
// picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/>
// <Card name="bike"
// picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/>
// <Card name="laptop"
// picture="https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180"/>
// </div>
// </div>
// );
// }
// export default App;

// import React, { useState } from "react";
// import Card from "./card";
// function App() {
// const jsonResponse = [
// {
// img: "https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180",
// name: "mobile",
// },
// {
// img: "https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180",
// name: "laptop",
// },
// {
// img: "https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180",
// name: "bike",
// },
// {
// img: "https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180",
// name: "car",
// },
// {
// img: "https://tse3.mm.bing.net/th?id=OIP.vbHfsrK2IfWE1ZT9NMw5PgHaE7&pid=Api&P=0&h=180",
// name: "AC",
// },
// ];
// return (
// <div>
// <div style={{ display: "flex", flexWrap: "wrap" }}>
// {jsonResponse.map((item, index) => {
// return <Card name={item.name} picture={item.img} />;
// })}
// </div>
// </div>
// );
// }
// export default App;


// Export Named
// import { useState } from "react";
// import {phoneValidation, passwordValidaion} from './utils'
// const App = () => {
// const [number, setNumber] = useState("")
// function handleFunc(){
// let phoneValidations = phoneValidation(number)
// console.log(phoneValidations, 'phoneValidation')
// }
// return (
// <div>
// <input type="number" value={number} onChange={(e)=> setNumber(e.target.value)} />
// <button type="button" onClick={()=> handleFunc()}>Submit</button>
// </div>
// )
// }
// export default App;


// // Package Toastify
// import { useState } from "react";
// import { phoneValidation, passwordValidaion } from "./utils";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const App = () => {
// const [number, setNumber] = useState("");
// function handleFunc() {
// let phoneValid = phoneValidation(number);
// if(!phoneValid){
// toast.error("Please enter valid phone number")
// return;
// }
// }
// return (
// <div>
// <ToastContainer />
// <input
// type="number"
// value={number}
// onChange={(e) => setNumber(e.target.value)}
// />
// <button type="button" onClick={() => handleFunc()}>
// Submit
// </button>
// </div>
// );
// };
// export default App;


// // API Call & UseEffect
// import { useEffect, useState } from "react";
// import { phoneValidation, passwordValidaion } from "./utils";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// const App = () => {
// const [number, setNumber] = useState("");
// const [userInfo, setUserInfo] = useState({});
// async function callingGetApi() {
// let response = await fetch("https://dummyjson.com/products/1");
// let user = await response.json();
// setUserInfo(user);
// }
// console.log("render ");
// useEffect(() => {
// callingGetApi();
// console.log("useeffect ");
// }, []);
// return (
// <div>
// <ToastContainer />
// <input type="number" value={number} onChange={(e) => setNumber(e.target.value)}
// />
// {userInfo.brand}
// {userInfo.category}
// </div>
// );
// };
// export default App

// Routes 
// import React from "react";
// import Section from "./section";
// import AboutUs from "./about";
// import Contact from "./contact";
// import PageNotFound from './pageNotFound'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// const App = () => {
// return (
// <div>
// <BrowserRouter>
// <Routes>
// <Route path="/" element={<Section />}></Route>
// <Route path="/aboutus" element={<AboutUs />}></Route>
// <Route path="/contact" element={<Contact />}></Route>
// <Route path="*" element={<PageNotFound />}></Route>
// </Routes>
// </BrowserRouter>
// </div>
// );
// };
// export default App;

//Search functionality project
// import React, { useState } from 'react'
// const App = () => {
// const [searchValue, setSearchValue] = useState("")
// const [itemList, setItemList] = useState(['cricket', 'apple','apple juice', 'mango', 
// 'zebra', 'mango juice', 'football', 'rabbit', 'india', 'bangladesh', 'nepal', 'country'])
// const [copyItemList, setCopyItemList] = useState(['cricket', 'apple','apple juice', 'mango', 
// 'zebra', 'mango juice', 'football', 'rabbit', 'india', 'bangladesh', 'nepal', 'country'])
// const handleOnchange = (value) => {
// setSearchValue(value) 
// const result = copyItemList.filter((item, index)=> {
// return item.includes(value)
// })
// setItemList(result)
// }
// return (
// <div>
// <input type='text' value={searchValue} onChange={(e)=>handleOnchange(e.target.value)}
// placeholder='search...' />
// {itemList.map((item)=> {
// return <p key={item}>{item}</p>
// })}
// </div>
// )
// }
// export default App

//Todo project
// import { useState } from "react";
// import { GrEdit } from "react-icons/gr";
// import { AiOutlineDelete } from "react-icons/ai";
// import { v4 as uuidv4 } from "uuid";
// const App = () => {
// const [todoInput, setTodoInput] = useState("");
// const [todoList, setTodoList] = useState([]);
// const handleTodo = () => {
// const copyOfTodoList = todoList.slice(); //taking exiting todo
// const addObj = {
// id: uuidv4(),
// name: todoInput,
// };
// copyOfTodoList.push(addObj); //adding one more todo
// setTodoList(copyOfTodoList); //updating todo list
// setTodoInput(""); //reseting input to empty
// };
// const handleDelete = (selectedId) => {
// console.log(selectedId, "todoList", todoList);
// const deleteTodo = todoList.filter((item) => {
// console.log(item.id, selectedId, "item", item.id !== selectedId);
// return item.id !== selectedId;
// });
// setTodoList(deleteTodo);
// };
// return (
// <div>
// <input
// type="text"
// placeholder="Enter..."
// value={todoInput}
// onChange={(e) => setTodoInput(e.target.value)}
// />
// <button type="button" onClick={handleTodo}>
// Add
// </button>
// {todoList.map((item) => {
// return (
// <div key={item.id} className="todo-list">
// <p>{item.name}</p>
// <div>
// <GrEdit style={{ marginRight: "10px" }} />
// <AiOutlineDelete
// style={{ marginRight: "10px" }}
// onClick={() => handleDelete(item.id)}
// />
// </div>
// </div>
// );
// })}
// </div>
// );
// };
// export default App


//Passing Props from child to parent component
// import React from 'react';
// import Menulist from './menulist';
// import PageNotFound from './pageNotFound';
// import MenuDescription from './menudescription';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// const App = () => {
// return (
// <div>
// <BrowserRouter>
// <Routes>
// <Route path='/' element={<Menulist />}></Route>
// <Route path='/menuDescription/:id' element={<MenuDescription />}></Route>
// <Route path='*' element={<PageNotFound />}></Route>
// </Routes>
// </BrowserRouter>
// </div>
// )
// }
// export default App

// import React, {UseMemo, Usestate} from "react";
// const Demo =() =>{
//      const [number ,setNumber] = UseState(0)
//      const [counter ,setcounter] = UseState(0)
//      //const squareOfNumber = handleSquareNumber(number) 
//      const squareOfNumber = useMemo(()=> {
//         return handleSquareNumber(number)
//      },[number])
//      function handleSquareNumber (number){
//         console.log ("handleSquareNumber function is calling")
//         return number * number;
//      }
//      return (
//         <div>
// <input type ="number" value ={number} onchange = {(e) => setNumber(e.target.value)}/>
// <p>square number: Square</p>
// <button type="button" onclick ={()=>setcounter(counter + 1)}>counter </button>
// <div>counter:{counter}</div>
//         </div>
//      )
// }
// export default App;

//..... classcomponents//
// import react, { useEffect, useState } from "react";
// import ClassComponent from './ClassComponent'
// function App(){
//     const [available,setavailble] = useState (false)
//     // useEffect () {
//     // console.log("useEffect is running..")}

//     return (
//         <div>
//             <ClassComponent name={"dharshu"} age={"21"}/>
//             <input type='checkbox' checked ={available}
//             onChange={()=> setavailble(!available) }/><span>Available</span>
//             </div>
//     )
// }
// export default App;


// import React, {useState} from 'react';

// import ReactDOM from 'react-dom';
// import './App.css';
// function App() {
//     const [name , setName] = useState('');
//     const [age , setAge] = useState('');
//     const [email , setEmail] = useState('');
//     const [password , setPassword] = useState('');
//     const [confPassword , setConfPassword] = useState('');
//  // function to update state of name with 
// // value enter by user in form
//     const handleChange =(e)=>{
//       setName(e.target.value);
//     }
//     // function to update state of age with value 
//     // enter by user in form
//     const handleAgeChange =(e)=>{
//       setAge(e.target.value);
//     }
//     // function to update state of email with value
//     // enter by user in form
//     const handleEmailChange =(e)=>{
//       setEmail(e.target.value);
//     }
//      // function to update state of password with 
//       // value enter by user in form
//     const handlePasswordChange =(e)=>{
//       setPassword(e.target.value);
//     }
      // function to update state of confirm password 
  //     // with value enter by user in form
  //   const handleConfPasswordChange =(e)=>{
  //     setConfPassword(e.target.value);
  //   }
  //   // below function will be called when user 
  //   // click on submit button .
  //   const handleSubmit=(e)=>{
  //     if(password!=confPassword)
  //     {
  //       // if 'password' and 'confirm password'
  //       // does not match.
  //       alert("password Not Match");
  //     }
  //     else{
  //       // display alert box with user 
  //       // 'name' and 'email' details .
  //       alert('A form was submitted with Name :"' + name +
  //       '" ,Age :"'+age +'" and Email :"' + email + '"');
  //     }
  //     e.preventDefault();
  //   }
  // return (
  //   <div className="App">
  //   <header className="App-header">
  //   <form onSubmit={(e) => {handleSubmit(e)}}>

  //    {/*when user submit the form , handleSubmit() 

  //       function will be called .*/}

  //   <h2> Geeks For Geeks </h2>

  //   <h3> Sign-up Form </h3>

  //   <img src="/gfg.png" />

  //       <label >

  //         Name:

  //       </label><br/>

  //       <input type="text" value={name} required onChange={(e)   => 

  //             {handleChange(e)}} /><br/>

  //         { /*when user write in name input box , handleChange()

  //             function will be called. */}

  //       <label >

  //         Age:

  //       </label><br/>

  //       <input type="text" value={age} required onChange={(e) =>

  //              {handleAgeChange(e)}} /><br/>

  //           { /*when user write in age input box , handleAgeChange()

  //              function will be called. */}

  //       <label>

  //         Email:

  //       </label><br/>

  //       <input type="email" value={email} required onChange={(e) =>

  //                {handleEmailChange(e)}} /><br/>

  //         {/* when user write in email input box , handleEmailChange() 

  //             function will be called.*/}

  //       <label>

  //         Password:

  //       </label><br/>

  //       <input type="password" value={password} required onChange={(e) =>

  //           {handlePasswordChange(e)}} /><br/>

              /* when user write in password input box ,

                  handlePasswordChange() function will be called.*/

//         <label>

//           Confirm Password:

//         </label><br/>

//         <input type="password" value={confPassword} required onChange={(e) =>

//              {handleConfPasswordChange(e)}} /><br/>

//                 {/* when user write in confirm password  input box ,

//                     handleConfPasswordChange() function will be called.*/}

//         <input type="submit" value="Submit"/>

//       </form>

//     </header>

//     </div>

//   );
// }
 

// export default App;




/////////Functionality project///////////
// import React, { useState } from 'react'
// const App = () => {
// const [searchValue, setSearchValue] = useState("")
// const [itemList, setItemList] = useState(['cricket', 'apple','apple juice', 'mango',
// 'zebra', 'mango juice', 'football', 'rabbit', 'india', 'bangladesh', 'nepal', 'country'])
// const [copyItemList, setCopyItemList] = useState(['cricket', 'apple','apple juice', 'mango',
// 'zebra', 'mango juice', 'football', 'rabbit', 'india', 'bangladesh', 'nepal', 'country'])
// const handleOnchange = (value) => {
// setSearchValue(value)
// const result = copyItemList.filter((item, index)=> {
// return item.includes(value)
// })
// setItemList(result)
// }
// return (
// <div>
// <input type='text' value={searchValue} onChange={(e)=>handleOnchange(e.target.value)}
// placeholder='search...' />
// {itemList.map((item)=> {
// return <p key={item}>{item}</p>
// })}
// </div>
// )
// }
// export default App;


///////////Todo project/////////
import { useState } from "react";
import { GrEdit } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import { v4 as uuidv4 } from "uuid";
const App = () => {
const [todoInput, setTodoInput] = useState("");
const [todoList, setTodoList] = useState([]);
const handleTodo = () => {
const copyOfTodoList = todoList.slice(); //taking exiting todo
const addObj = {
id: uuidv4(),
name: todoInput,
};
copyOfTodoList.push(addObj); //adding one more todo
setTodoList(copyOfTodoList); //updating todo list
setTodoInput("");
};
const handleDelete = (selectedId) => {
console.log(selectedId, "todoList", todoList);
const deleteTodo = todoList.filter((item) => {
console.log(item.id, selectedId, "item", item.id !== selectedId);
return item.id !== selectedId;
});
setTodoList(deleteTodo);
};
return (
<div style={{ margin: "20px" }}>
<input
type="text"
placeholder="Enter..."
value={todoInput}
onChange={(e) => setTodoInput(e.target.value)}
/>
<button
type="button"
onClick={handleTodo}
style={{ backgroundColor: "#000", color: "#fff" }}
>
Add
</button>
{todoList.map((item) => {
return (
<div key={item.id} className="todo-list">
<p>{item.name}</p>
<div>
<AiOutlineDelete
style={{ marginRight: "10px" }}
onClick={() => handleDelete(item.id)}
/>
</div>
</div>
);
})}
</div>
);
};
export default App;

//instagram//


// import React, { useState } from "react";
// import { BiMessageRoundedDots } from "react-icons/bi";
// import { FaRegHeart } from "react-icons/fa";
// // import instaLogo from "./instagram-new-logo.png";
// // import profileImg from "./profile-img.jpg";
// import { HiDotsVertical } from "react-icons/hi";
// // import uploadedImg from "./uploaded-img.jpg";
// import { FiMessageCircle } from "react-icons/fi";
// import { LuSend } from "react-icons/lu";
// // import saved from "./saved-icon.png";
// import { instaJsonResp } from "./utils";
// import { FaHeart } from "react-icons/fa";
// // import savedProfile from "./savedimg.jpeg";
// import { IoMdSend } from "react-icons/io";
// const App = () => {
// const [instaAcctDetails, setInstaAcctDetails] = useState("instaJsonResp");
// const [enableMsg, setEnableMsg] = useState(false);
// const [selectedId, setSelectedId] = useState("");
// const [message, setmessage] = useState("");
// const handleLikeImg = (selectedId) => {
// let copyOfInstaAcctDetails = [...instaAcctDetails];
// copyOfInstaAcctDetails.forEach((item) => {
// if (item.id == selectedId) {
// item.like = item.like + 1;
// }
// return item;
// });
// setInstaAcctDetails(copyOfInstaAcctDetails);
// };
// const handleMessage = (id) => {
// setSelectedId(id);
// setEnableMsg(true);
// };
// const updateMessage = (id) => {
// let copyOfInstaAcctDetails = [...instaAcctDetails];
// copyOfInstaAcctDetails.forEach((item) => {
// if (item.id == selectedId) {
// let copyOfMessage = item.message;
// copyOfMessage.push(message);
// item.message = copyOfMessage;
// }
// return item;
// });
// setmessage("");
// setEnableMsg(false);
// setInstaAcctDetails(copyOfInstaAcctDetails);
// };
// const handleSave = (selectedId) => {
// let copyOfInstaAcctDetails = [...instaAcctDetails];
// copyOfInstaAcctDetails.forEach((item) => {
// if (item.id == selectedId) {
// item.saved = !item.saved;
// }
// return item;
// });
// setInstaAcctDetails(copyOfInstaAcctDetails);
// };
// console.log(instaAcctDetails, "instaAcctDetails");
// return (
// <div className="instagram-block">
// <div className="instagram-block-header d-flex justify-content-between align-itemscenter">
// {/* <img src={instaLogo} width={"200px"} /> */}
// <div>
// <FaRegHeart className="insta-icon" />
// <BiMessageRoundedDots className="insta-icon" />
// </div>
// </div>
// {instaAcctDetails.map((item, index) => {
// return (
// <div key={item.id} className="instagram-block-body">
// <div className="d-flex justify-content-between align-items-center mx-2 my-4">
// <div className="d-flex align-items-center">
// <img
// // src={profileImg}
// alt=""
// width={"45px"}
// height={"45px"}
// className="profile-img"
// />
// <h2 className="mx-3">{item.name}</h2>
// </div>
// <HiDotsVertical />
// </div>
// <div>
// <img
// // src={uploadedImg}
// alt=""
// width={"100%"}
// onDoubleClick={() => handleLikeImg(item.id)}
// />
// <div className="d-flex align-items-center justify-content-between">
// <div>
// {item.like ? (
// <FaHeart
// className="insta-icon"
// style={{ color: "red" }}
// onClick={() => handleLikeImg(item.id)}
// />
// ) : (
// <FaRegHeart
// className="insta-icon"
// onClick={() => handleLikeImg(item.id)}
// />
// )}
// <FiMessageCircle
// className="insta-icon"
// onClick={() => handleMessage(item.id)}
// />
// <LuSend className="insta-icon" />
// <p style={{ margin: "0 10px" }}>{item.like} Likes</p>
// </div>
// <div>
// {item.saved ? (
// <img
// // src={savedProfile}
// alt=""
// width={"30px"}
// height={"25px"}
// className="insta-icon"
// onClick={() => handleSave(item.id)}
// />
// ) : (
// <img
// // src={saved}
// alt=""
// width={"15px"}
// className="insta-icon"
// onClick={() => handleSave(item.id)}
// />
// )}
// </div>
// </div>
// </div>
// {item.message.map((val, index) => {
// return (
// <div key={index}>
// <div className=" m-2 d-flex align-items-center ">
// <img
// // src={profileImg}
// alt=""
// width={"20px"}
// height={"20px"}
// className="profile-img"
// />
// <div style={{margin: '0 5px'}}>
// <h6 style={{ margin: "0", fontSize: "10px", color:'#566565' }}>
// {item.name}
// </h6>
// <p style={{margin: "0", fontSize: '13px'}}>{val}</p>
// </div>
// </div>
// </div>
// );
// })}
// {enableMsg && item.id == selectedId && (
// <div>
// <input
// type="text"
// className="insta-input-message"
// placeholder="Enter Message..."
// value={message}
// onChange={(e) => setmessage(e.target.value)}
// />
// <IoMdSend
// className="insta-icon"
// onClick={() => updateMessage(item.id)}
// />
// </div>
// )}
// </div>
// );
// })}
// {/* <FiSend /> */}
// </div>
// );
// };
// export default App;

