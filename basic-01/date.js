//DATE 

let mydate = new Date()

// console.log(mydate);
// console.log(mydate.toDateString());
// console.log(mydate.toLocaleString());
// console.log(typeof mydate);

// let mycreateddate = new Date(2025, 0 , 23)
// let mycreateddate = new Date(2023 , 0, 23, 5, 3)
// let mycreateddate = new Date("2025-01-14")
let mycreateddate = new Date("01-14-2025")
// console.log(mycreateddate.toLocaleString());

let mytimestamp = Date.now()

// console.log(mytimestamp);
//  console.log(mycreateddate.getTime());
//  console.log(Math.floor(Date.now()/1000));

 let newdate = new Date()
 console.log(newdate);
 console.log(newdate.getMonth()+1);
 console.log(newdate.getDay());

//  ' ${newdate.getDay()} and the time '
 
newdate.toLocaleString('default', {
    weekday: "long"
})

 


