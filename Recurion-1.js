 // Recursion ===> When a function call itself then it is called the recursive function

 function fun(n){
    if(n==0 ){
        return 
    }
    fun(n-1)
    console.log('fun')
}
fun(2)