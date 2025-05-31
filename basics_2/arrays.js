// array
const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 3, 4, 4, 5)

//  console.log(myArr[1]);
//  console.log(myArr2[2])

// Array methods

// myArr.push(6)     [0, 1, 2, 3, 4, 5, 6 ]
// myArr.pop()       [0, 1, 2, 3, 4, 5 ]

//myArr.unshift(9)   [9, 0, 1, 2, 3, 4, 5 ]
//myArr.shift()      [0, 1, 2, 3, 4, 5 ]

//console.log(myArr.includes(9))  // false
//console.log(myArr.indexOf(9))   // -1  agar aesa kuch ka index puch raha hai jo nahi hai toh -1 aayega 

const newArr = myArr.join()   // actual array ko string mei badal deta hai

// console.log(myArr)
// console.log(newArr)

// slice , splice

console.log("A", myArr)   // o/p - A [ 0, 1, 2, 3, 4, 5 ]
 
const myn1 = myArr.slice(1,3)
// console.log(myn1)              // o/p - [ 1, 2 ]
// console.log("B", myArr)       // o/p  - B [ 0, 1, 2, 3, 4, 5 ]   

const myn2 = myArr.splice(1,3)  
// console.log(myn2)               // o/p - [ 1, 2, 3 ]
// console.log("c", myArr)         // o/p - c [ 0, 4, 5 ]

