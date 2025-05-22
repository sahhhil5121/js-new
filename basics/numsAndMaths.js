// +++++++++Number++++++++++++++++++++++++++

//const score = 400 // (implicit) - matlab ki khud se samajh leta hai ki 400 daale hai toh datatype number hi hoga

// balance = new Number(100) //(explicit - matlab ki number hi datatype hoga, this return an object)

//use _proto_ on both as previous to get all methods

//console.log(balance.toString()) //rahega 100 hi lekin uska typeof change ho jayega string mei jisse usko addition properties milta hai

//const balance = 100.12323 

// console.log(balance.toFixed(2)) // 100.12 // // used for how many values after decimal

//console.log(balance.toPrecision(4)) // 100.1 (returns a string) //used for how many values to take in total (priority is before decimal)

//const hundreds = 1000000
// console.log(hundreds.toLocaleString()) // o/p - 1,000,000 (US standard)

//console.log(hundreds.toLocaleString('en-IN')); // o/p - 10,00,00 (Indian standard)

// Number k saath bhut sara function aata hai // jaise max value, min value etc.

// ================================   MATHS ==========================================

// console.log(Math)
// console.log(Math.abs(-4)); // -ve ko +ve mei convert kar dega
// console.log(Math.round(4.6));  // normal round-off kar dega no. ko
// console.log(Math.ceil(4.2));  // number ke upper value pe round off karta hai ex- 4.2 ya 4.9 ka 5
// console.log(Math.floor(4.9)); // number ke lower value pe round karta hai ex- 4.9 ya 4.2 ka 4
//console.log(Math.min(4, 3, 6, 8)); // arr ka min element dega
//console.log(Math.max(4, 3, 6, 8)); // arr la max element dega

//console.log(Math.random()); // 0 aur 1 k beech mei random value deta hai
//console.log((Math.random()*10) + 1); // 10 se multiply kiye taaki decimal aage badhe aur +1 kiye taaki 1 se upar hi aaye value
//console.log(Math.floor(Math.random()*10) + 1); // jo bhi value aayega rounded off rahega

//  ab agar ek max no. hai aur ek min no. hai aur value uss dono k beech mei chahiye

//const min = 10
//const max = 20

//console.log(Math.floor((Math.random() * (max - min +1)) + min) )


