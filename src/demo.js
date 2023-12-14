// import React, { useRef } from "react";
// const Demo = () => {
//     const inputRef = useRef(null)
//     const handleFunc = () => {
//         inputRef.current.focus()
//         inputRef.current.style.color ="red"
//         inputRef.current.value ="learning useref" 
//     }
//     return (
//         <div>
//             <input type="text" ref={inputRef}/>
//             <button type="button" onClick={handleFunc}>Submit</button>
//         </div>
//     )
// }
// export default Demo;

import React, {useMemo, usestate} from "react";
const Demo =() =>{
     const [number ,setNumber] = useState(0)
     const [counter ,setcounter] = useState(0)
     //const squareOfNumber = handleSquareNumber(number) 
     const squareOfNumber = useMemo(()=> {
        return handleSquareNumber(number)
     },[number])
     function handleSquareNumber (number){
        console.log ("handleSquareNumber function is calling")
        return number * number;
     }
     return (
        <div>
<input type ="number" value ={number} onchange = {(e) => setNumber(e.target.value)}/>
<p>square number: Square</p>
<button type="button" onclick ={()=>setcounter(counter + 1)}>counter </button>
<div>counter:{counter}</div>
        </div>
     )
}