//TIme complexity is basically the amount of time that an alg will take to exe the program


// Vigo notation == O
// N+2 = O(n+2)

//three type of time==> best , avg, & worse
// we care about the worse case 


//sum of the matrix

function Matrix(n){
    let sum =0;
    for(let i=0;i<n.length;i++){
        for(let j=0;j<n[i].length;j++){
            sum += n[i][j]
            console.log(sum)
        }
    }
    return sum;
}
console.log(Matrix([[1,2,3],[4,5,6],[7,8,9]]))