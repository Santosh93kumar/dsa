// find the factorial of a number;

// const findfactorial= (n)=>{
//     if(n== 0 ){
//         return 1
//     }
//     if (n ==1) {
//         return 1
//     }
//     return n*findfactorial(n-1)
// }
// console.log(findfactorial(5));


// print a number to n
// function printnumbertoN(n){
//      if(n ==1 ){
//         return console.log(n)
//     }
//     printnumbertoN(n-1);
//     console.log(n)
   
    
   
// }


//sum of all element in the array
// function sumofArray(arr){
//  if(arr.length == 0){
//     return 1
//  }
//  return arr[arr.length-1] + sumofArray(arr.slice(0,arr.length-1))
// }

// console.log(sumofArray([1,3,4]))

// function productofArray(arr){
//     if(arr.length == 0){
//         return 1;
//     }
//     return arr[arr.length-1]*productofArray(arr.slice(0,arr.length-1))
// }
// console.log("Result:", productofArray([1,2]));



//





// console.log(printnumbertoN(3))


//  const fabonacci= (n)=>{
//     if(n<2){
//         return n;
//     }

//     var prev=0, curr=1, next;
//     for(let i=2;i<=n;i++){
//         next = prev+curr;
//         prev=curr;
//         curr=next;

//     }
//     return next;
//  }

//  console.log(fabonacci(6))