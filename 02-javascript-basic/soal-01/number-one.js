function names(name) {
   if ( name.length < 20) {
      return `Hallo, ${name}`
   } 
   
   else if(name.length >= 20){
      return `Panjang Umur Yang mulia ${name}` 
   }  
   
   return "Invalid.\nMaaf saya tidak bisa mengeja namanya"
}

const fe = ["Jhon Doe", "Sri Sultan Hamengkubuwono I", 10, true]
fe.forEach((input) => {
   console.log (names(input))
})
