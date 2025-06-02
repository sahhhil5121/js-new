//

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)

//console.log(marvel_heros);       //  o/p - [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
//console.log(marvel_heros[3][1]);  //o/p- flash

 const allHeros = marvel_heros.concat(dc_heros)  // push jab karte hai toh hamara original array mei change aata hai lekin 
 //console.log(allHeros);                       // jab concat karte hai toh naya array return karta hai
 // //  o/p - [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// ek aur tareeka 2 array ko jodne ka - spread karna 
 const all_new_heros = [...marvel_heros, ...dc_heros]
 //console.log(all_new_heros);       //   o/p - [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

 const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_another_array);  // o/p- [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// console.log(Array.isArray("sahil")) // o/p- flase
// console.log(Array.from("sahil")) //o/p-  [ 's', 'a', 'h', 'i', 'l' ]

let score1 = 200
let score2 = 300
let score3 = 400

console.log(Array.of(score1, score2, score3))