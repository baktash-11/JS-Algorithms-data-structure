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