function factorial(n){
   if(typeof n !== "number" || n < 0 ) return null
   
   if(n==0) return 1
   
   return factorial(n-1) * n
}

const fe = [10, 13, 0, -5, "oke", "10", "6", true]
fe.forEach((input)=> {
   console.log(factorial(input))
})

