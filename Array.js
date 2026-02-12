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

// console.log(arr.slice(0,2));

// array shallow vs deep copy
// var newAray= arr;
// console.log('shallow Array :',newAray.splice(1,1), arr);


// const deepArray= [...arr];
// var deepCopy = Array.from(arr);
// console.log(deepCopy);


// check if 2 array are equal;


var isEqualArray =(arr1, arr2)=>{
    if (arr1.length !== arr2.length) return false;
    for(let i=0; i<arr.length;i++){
        if(arr1[i]!== arr2[i]) return false
    } 

    return true
}
var a=[1,2,3];
var b=[1,2,3]
console.log(isEqualArray(a,b));


//sort an array
//in ascending 
console.log(arr.sort());
//in descending
console.log(arr.sort((a,b)=> b-a))




const newArray=[1,2,3,4,5,6,7,8];
const map = newArray.map((value, index)=> value*value)
console.log('map : ', map);

const filter = newArray.filter((value, index)=> value>5);
console.log('filter : ', filter)

const forEch = newArray.forEach((value, index, arr)=> {
    arr[index]=value+1
    console.log(arr[index])
})
console.log('forEach : ', newArray);

// find the greatest one
const reduce = newArray.reduce((acc, cur)=> {
    if(acc> cur){
        return acc
    }
    else{
        return cur
    }}
)

console.log(reduce)

// sum of an Array

const sumofArray= newArray.reduce((acc,cur)=>{
    return acc+cur
})
console.log(sumofArray)


// what is the difference bet filter and find
// filter return all the element following the condition
// find return the first elemnt satify the condition
