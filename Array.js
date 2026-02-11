var arr=[1,2,3]
arr.push(4)
console.log(arr);


//loop

// for(let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }

//for of ==>loop 
// for(let x of arr){
//     console.log(x)
// }
//for in ==> loop
// for(let x in arr){
//     console.log(arr[x])
// }

// find whether the num invlude an arary

//  function includeArray(target, arr){
//     for(let x of arr){
//         if(x == target) return true;
        
//     }
//     return false
// }
// console.log(includeArray(12,[1,2,3,4]))



//find element and return it's index

//  function includeArray(target, arr){
//     for(let x in arr){
//         if(arr[x] == target) return x;
        
//     }
//     return false
// }
// console.log(includeArray(4,[1,2,3,4]))


//how to read update and delate an specific no from an array

//splice(startIndex, deleteCount, Item to add sep by , only )
console.log(arr);
arr.splice(1,2);
console.log(arr)
arr.splice(1, 0,2,3,4,5);
console.log(arr)


// splice vs slice
// splice is used to read , update and delete an array from an specific element , return a new array
// slice is use to take from element from the array, doesn't chnage the original array;

console.log(arr.slice(0,2));

// array shallow vs deep copy
var newAray= arr;
console.log('shallow Array :',newAray.splice(1,1), arr);


const deepArray= [...arr];
var deepCopy = Array.from(arr);
console.log(deepCopy);



