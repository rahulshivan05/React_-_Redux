// import Hello from './hello';
// import { Random } from './random';
// // return value return only one value that's why we use react Freagment to render things in web
// // jsx --> JavaScript XML

// export function App2() {

//   // in here we can also use <React.Freagment><React.Freagment/>
//   return (
//     <>
//       {/* Return ka under ham 3 types ka code likh sakte hai
//         1. HTML
//         2. JSX
//         3. JavaScript
//       */}
//       <h1>Hello guy's</h1>
//       <Hello /> {/*self closing tag */}
//       {/* <Random /> */}
//       <Random></Random>
//       {/* You also use '<Hello></Hello>' */}
//     </>
//   );
// }

import React from "react";

export default function App() {

  // map is used to convert one to another data.

  let foodItems = []
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk'];

  // Conditional rendering are 3 types:
  // 1. if else statement
  // if (foodItems.length == 0) {
  //   return <h3>I am still hungry.</h3>
  // }

  // Falsey Value --> Null, undefined, 0, empty, NotANumber (agar ye ha to .jsx use false return karega )

  // 2. Ternery operators
  // let emptyMessage = foodItems.length == 0 ? <h3>i'm still hungry</h3>
  //   : null

  // 3. 


  // When you want to render any thing in Website then you have to ensure that give only one return to website 
  return (
    // To avoid extra div or level of coding in web 
    // Use React Fragement or (<></>) for Wrap all (Grouping of multiple elements) the components in One elements
    // 
    <>
      <h1>Healthy Food</h1>

      {foodItems.length == 0 && <h3>I'm still hungry</h3>}
      <ul className="list-group">
        {/* Key --> is used to prevent render all the data in website again and agina. It prevents the render data again and again and update only those data that's actualy updated not update all the data. */}

        {/* React takes the Key in Virtual to fetch which data is updated and which one is not. */}

        {/* VirtualDOM take 2 things:
        1. Last VirtualDOM Tree
        2. Updated VirtualDOM Tree
        and fetch which components is required update or which one not.
        */}

        {foodItems.map(item => <li className="list-group-item" key={item}>{item}</li>)}

      </ul>
    </>
  );
}

// export default App3; // aap ek component ke ander ek se jada defalt export nahi laga sakhta ho

// export function App() {
//   return <h1>Conditional Renedering</h1>
// }

// export default App;



