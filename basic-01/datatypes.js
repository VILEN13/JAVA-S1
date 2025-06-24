//data type is main 2 caterige hai primitive / nonprimitive

//******************Primitive*************************
//7 types : string, Number, Boolean, null, undefined, symbol, BigInt

const score = 100
const scorevalue = 100.5

const inLoggedIn = false
const outsidetemp = null
let useremail;

const id = Symbol('123')
const anotherid = Symbol('123')
// console.log(id===anotherid);

const bignumber = 562154021541n





//*********Refrence type (Nonprimitive)*******************

// Array , Objects, Function

// const heros= { "shaktiman", "nagraj", "doga"}
// let myobj = {
//     name: "hitesh"
//     Age: 22,
// }

// const myFunction = function(){
//    console.log("hello world");
// }

//    console.log(typeof myFunction);


//STACK (Primtive)     or    HEAP (non-primitive)

let myYoutubename = "Ankushunknowchanel"

let otherchanel = myYoutubename
otherchanel = "chaiorcode"

console.log(myYoutubename);
console.log(otherchanel);

//stack (primitive) me value ka copy diya jata original value me koi change nhi hota.


let userone = {
    email: "user@google.com",
    upi: "user@ybl"
}

let usertwo = userone

usertwo.email = "ankush@gmail.com"

console.log(userone.email);
console.log(usertwo.email);

//HEAP (non-primitive) me value ka refrence milta or main value me bhi change ho jata hai.
