const name = "ANKush"
const repoCount = 50

// console.log(name + repoCount + " value");

// console.log('Hello my name is ${name} and my repo count is ${repoCount}');


const gameName = new String('hitesh-hc-com')
 //string prototypes (50-more) jese hote hai.

//  console.log(gameName[3]);
//  console.log(gameName.__proto__);

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(4));
 console.log(gameName.indexOf('t'));

const newstring = gameName.substring(0,4)
console.log(newstring);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newstring01 = "     ANKUSH    "
console.log(newstring01);
console.log(newstring01.trim());

const url = "htttps://hitesh.com/ankush%20choudhary"


console.log(url.replace('%20',('_')));

console.log(url.includes('hitesh'))

console.log(gameName.split('-'));