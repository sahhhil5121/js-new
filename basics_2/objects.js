// normal agar kuch bhi(object) declare karege toh "singleton" nahi banta hai lekin agar constructor ak use karte hai toh banta hai

const mySym = Symbol("key1")   // symbol declare

const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",    // symbol ko as a key use aise karte hai
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.name)
// console.log(JsUser["full name"])
//console.log(JsUser[mySym])

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)                 // ye karne k baad value change nahi hoga
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}

// function bana rahe hai

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
// function mei kuch add karna hai toh aese - string interpolation kehte hai isko

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
