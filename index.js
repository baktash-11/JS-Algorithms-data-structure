console.log("Write a function that accepts a string input and returns a reversed copy!");

function reversString (str){
    let newStr ="";
    for (let i = str.length-1; i >= 0; i--) {
        newStr += str[i];
        console.log(i);
    }
    return newStr;
}

console.log(reversString("baktash sana a software engineer!"));

// calculates the sum of all numbers from 1 up to (and including) some number n.

const addUpTo = (n)=>{
    let total =0; 
    for (let i = 0; i < n; i++) {
       total += i; 
    }
    return total; 
}

console.log(addUpTo(99));