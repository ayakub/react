import React from "react";
import reactDom from "react-dom";

// // function Greeting() {
// //   return(
// <div>
// //  <h4>This is my first componant</h4>;
// </div>
// );
// // }

// function Greeting() {
//   return (
//     <div>
//       <h3>hello people</h3>
//       <ul>
//         <li>
//           <a href="#">hello world</a>
//         </li>
//       </ul>
//     </div>
//   )
// }

function Greeting() {
  return (
    <div>

      <Person />
      <p>this is message</p>
    </div>
  );
}

const Person = () => <h2>Ayakub ALi</h2>

reactDom.render(<Greeting/>,document.getElementById('root'))
