function factorial(n){
   if(typeof n !== "number" || n < 0 ) return null
   
   if(n==0) return 1
   
   
   return factorial(n-1) * n
}

console.log(factorial(5))
console.log(factorial(13))
console.log(factorial(0))
console.log(factorial(-5))
console.log(factorial("oke"))
console.log(factorial("10"))
console.log(factorial("6"))
console.log(factorial(true))
