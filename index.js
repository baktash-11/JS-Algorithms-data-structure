console.log("Write a function that accepts a string input and returns a reversed copy!");

function reversString (str){
    let newStr ="";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reversString("baktash sana a software engineer!"));

// calculates the sum of all numbers from 1 up to (and including) some number n.

const addUpTo = (n)=>{
    let total =0; 
    for (let i = 1; i <= n; i++) {
       total += i; 
    }
    return total; 
}

function addUpTo2(n){
    return n*(n + 1)/2;
}

// console.log(addUpTo(1000000000));
let t1 = performance.now();
console.log(addUpTo2(1000000000));
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000}`);
