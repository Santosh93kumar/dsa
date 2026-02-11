 // fibonacci series


//  const fabonacci= (n)=>{
//     if(n<2){
//         return n;
//     }

//     var prev=0, curr=1, next;
//     for(let i=2;i<=n;i++){
//         next = prev+curr;
//         prev=curr;
//         prev=next;

//     }
//     return next;
//  }

//  console.log(fabonacci(3))

// sum of an array

// function sumofArray(n){
//     var sum =0;  //
//     console.log(n.length)
   
//     for(let i=0;i<n.length;i++){
//         sum =sum+ n[i]
//         console.log('sum :', sum)
//     }
//     return sum;

// }

// var a=[1,2,3,6]
// console.group(sumofArray(a));


// find the missing number of an array

// function missingnumber(n){
//         return n.length*(n.length+1)/2 - n.reduce((acc,curr) => acc+curr);
        
// }

// console.log(missingnumber([0,1,2]))


// const countfruit=(n)=>{
//     var count = n.reduce((acc, n)=>{
//         acc[n] = (acc[n] || 0) +1
//         return acc;
//     },{})

//     return count
// }
// const fruits = ["apple", "banana", "apple", "orange", "banana"];

// console.log(countfruit(fruits))




