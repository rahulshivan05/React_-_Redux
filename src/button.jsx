function Button() {
  return (
    <button>I'm a Button</button>
  )
}

export default Button;

// types of exporting functions in React
/* 1. --------------- app 'export default' ko functions ka last me hi use kare sakthe. ---------------

function fun(){
  <h2>this is first example of exportinf</h2>
}
exprtv default fun;

*/

/* 2. --------------- agar apne ek hi file me multiple component define karte ho aue export likh kar function bana rahe ho tab. --------------- but not accepted multiple place

export function fun(){
  <h2>this is first example of exportinf</h2>
}

tab aap component ko dushara file me import aise hoga

import {fun} from './fun'
*/

/*
3. --- Mixed export hota hai


*/