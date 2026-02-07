// Intro to JavaScript dsa
// 1. Sum of Natural Numbers

// function sumOfNaturalNumbers(n) {
//     sum =0;
//     if (n <= 0) {
//         return 0;
//     }
//     for (let i = 1; i <= n; i++) {
//         sum += i;
//     }
//     return sum;
// }
// console.log(sumOfNaturalNumbers(5)); // Output: 15

// 2. sum of all digit of the number

// function sumofdigt(n){
//     let sum=0;
//     while(n>0){
//         sum = sum + (n%10)
//         n= Math.floor(n/10)
//     }
//     return sum
// }
// console.log(sumofdigt(123))


//3. count the number of digit of the number

// method : 1

// function coutnumberofdigit(n){
//     let num = Math.abs(n);
//     let digit = [];
//     if(num ===  0){
//         digit.push(0)
//     }
//     while (num>0){
//         digit.push(num % 10);

//         num = Math.floor(num/10)
//     }
//     return digit.length;


// }
// console.log(coutnumberofdigit(123))

// method 2

// function countnumberofdigit(n){
//     let num = Math.abs(n);
//     console.log(num);
    
//     var count = 0
//     while(num > 0){
//         count++;
//         console.log('count :',count)
//         num = Math.floor(num/10)
//         console.log('num :', num);
        
//     }
//     return count;

// }
// console.log(countnumberofdigit(12));

// check the number is palindrome
const palindrome=(n)=>{
    var num =n
    let  reverse = 0
    var digit =0
    
    while(num>0){
        digit = num%10

        
        reverse = (reverse*10)+digit
        var num = Math.floor(num/10);
    }
    if( n === reverse){
        return true
    }else{
        return false
    }
}
console.log(palindrome(122))
