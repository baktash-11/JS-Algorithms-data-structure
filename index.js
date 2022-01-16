console.log("Space Complexity");

// Object(1) space 
function sum( arr){
    let total =0; 
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
        
    }
    return total;
}

const myArray = [5, 6, 7, 8, 6, 8, 3 ,1, 4, 10];
console.log(sum(myArray));

// O(n) space
function double(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
        
    }
    return newArr;
}

const doubledArray = double(myArray);
console.log(doubledArray);