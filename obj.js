console.log("Objects in JS!");
// Unordered, key value pairs
let instructor ={
    firstName: "Riza", 
    isInstructor: true, 
    favNum: [33, 44, 55, 43]
}

// when to Use objects
// when dont need order 
// fast access/ insertion and removal
// Insertion Removal and access O(1) and Searching O(n)
// instructor.add = {
//     unit: "B 23", 
//     street : "King Street", 
//     city : "Toronto", 
//     postal: "L1T 3F1"
// }
console.log(Object.keys(instructor));
console.log("-----------------------------------")
console.log(Object.values(instructor));
console.log("-----------------------------------")
console.log(Object.entries(instructor));
console.log("-----------------------------------")
console.log(instructor.hasOwnProperty("firstName"));
// console.log(instructor);