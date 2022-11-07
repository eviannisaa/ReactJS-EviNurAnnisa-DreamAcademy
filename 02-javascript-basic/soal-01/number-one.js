function names(name) {
   if ( name.length < 20){
      console.log("Hallo,", name)
   }
   else if (name.length >= 20){
      console.log("Panjang Umur Yang mulia" , name)      
   }
   else {
      console.log("Invalid.\nMaaf saya tidak bisa mengeja namanya")
   }
}

names("John Doe")
names("Sri Sultan Hamengkubuwono I")
names(10)
names(true)

