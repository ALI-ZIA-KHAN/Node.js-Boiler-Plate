// console.log("hello world");


// const square={
// area: (a)=> (a*a),
// parameter:(a)=> (4*a)

// }



 // whole node.js comes under this function
// function(exportd,require,module,__filename,___dirname){}

const square =require('./square.js');


const calsquare =(a)=>{
console.log(`The value of a is ${a} and area is  ` + square.area(a));

console.log(`The value of a is ${a} and area is  ` + square.parameter(a));



console.log(__filename);
console.log(__dirname)
}

calsquare(5);