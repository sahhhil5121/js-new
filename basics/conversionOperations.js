let score = 23

//console.log(typeof score);
//console.log(typeof (score));  both line are basically same batayega konsa type of data type hai

let valueInNumber = Number(score)   // kuch bhi ho score mei uska type ko change kar dega number mei 
//console.log(typeof valueInNumber);  //type batayega
//console.log(valueInNumber);         // value batayega 
//agar string hai aur usko number mei change kiye upar wala command se uske baad bhi value NaN hi dikayega jo hota hai NotaNumber
// jaise "33" ka value in number 33
//"33abc" ka NaN
//true => 1; false=>0;
 
let stringNumber = String(score)
//console.log(stringNumber)
//console.log(typeof stringNumber)


///////// O P E R A T I O N S ////////

let negvalue = -score
//console.log(negvalue)


//console.log(2+2)
//console.log(2-2)
//console.log(2*2)
//console.log(2/2)
//console.log(2%2)

// similarly string bhi add kar sakte hai

let str1 = "hello"
let str2 = " sahil"

let str3 = str1 + str2 
console.log(str3)
