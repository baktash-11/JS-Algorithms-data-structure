console.log("Write a function that accepts a string input and returns a reversed copy!");
// Big O how the runtime of an algorithm grows as the imputs grow (time complexity)
function reversString (str){
    let newStr ="";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reversString("baktash sana a software engineer!"));

// calculates the sum of all numbers from 1 up to (and including) some number n.

// example of big-O O(n)
const addUpTo = (n)=>{
    let total =0; 
    for (let i = 1; i <= n; i++) {
       total += i; 
    }
    return total; 
}
// example of big-O O(1)
function addUpTo2(n){
    return n*(n + 1)/2;
}

// example of big-O O(n)
function countUPAndDwon(n){
    console.log("Up")
    for (let i = 0; i < n; i++) {
        console.log(i);
        
    }
    console.log("Down");
    for (let j = n; j >=0; j--) {
        console.log(j);
        
    }
}
countUPAndDwon(5);

// console.log(addUpTo(5));
let t1 = performance.now();
console.log(addUpTo2(5));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);

// example of big-O O(n^2)
function printPairs(n){
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            console.log(i + " and "+ j)
            
        }
        
    }
}
printPairs(5);

// example of big-O O(n)
function logAtLeast5(n){
    for (let i = 1; i <= Math.max(5, n); i++) {
        console.log(i + " more than or equal to 5");
    }
}
logAtLeast5(3);
logAtLeast5(7);

// example of big-O O(1)
function logAtMostt5(n){
    for (let i = 1; i <= Math.min(5, n); i++) {
        console.log(i + " Lest than or equal to 5");
    }
}
console.log("--------------------------------------------------")
logAtMostt5(3);
logAtMostt5(7);