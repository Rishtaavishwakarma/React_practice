import React from 'react'
// normal function
// function DescribingUI() {
//   return (
//     <div>
//        <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//     </div>
//   )
// }
// exporting functions --to import {DD} from path
// export function DD(){
//     return(
//         <div><h1>Hello World Rishta</h1></div>
//     )
// }

// export default DescribingUI      //default way to pass the function from component


// export default function DescribingUI() {
//   let rishu= "I am Best";
//   return (
//   <div>
//     <h1>{rishu}</h1>
//     <img
//      src="https://i.imgur.com/yXOvdOSs.jpg" 
//      alt="Hedy Lamarr" 
//      className="photo"
//     /> 
//     <ul>
//       <li>Invent new traffic lights</li>
//       <li>Rehearse a movie scene</li>
//       <li>Improve the spectrum technology</li>
//     </ul>
//   </div>
 
//   );
// }



// date format code 

// const today = new Date();

// function formatDate(date) {
//   return new Intl.DateTimeFormat(
//     'en-US',
//     { weekday: 'long' }
//   ).format(date);
// }

// export default function DescribingUI() {
//   return (
//     <h1 style={{backgroundColor: 'lightblue' }}>To Do List for {formatDate(today)}</h1>
//   );
// }


//style using curlies

const person = {
  name: "Rishta",
  lastname:"Vishwakarma",
  theme:{
    backgroundColor: 'black',
    color: 'pink'
  }
}

function describing_UI() {
  return (
    <div>
      <h1 style={person.theme}>{person.name} {person.lastname}</h1>
    </div>
  )
}

export default describing_UI
