//const tinderUser = new Object()   // dono tareeka se obj declare kar sakte hai bas diff ye hai ki ye singleton object hai
const tinderUser = {}          // ye ek non singleton object hai

//console.log(tinderUser)


const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }                      // o/p- { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj3 = Object.assign({}, obj1, obj2, obj4)   // o/p - { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

console.log(obj3)