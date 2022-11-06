function validation (int){
   return int >= 0 && Number.isInteger(int) ? true : false;
}

function ages(age, valid){
   const category = "Anda adalah golongan usia" 
   
   if(!valid(age)){
      console.log("invalid age")
   }
   else if(age <= 17){
      console.log( category, "dibawah umur" )
   }
   else if (age <= 29){
      console.log(category, "young adult")
   }
   else if(age <= 60){
      console.log(category, "dewasa")
   }
   else if (age > 60){
      console.log(category, "tua")
   }
   else{
      console.log("invalid age")
   }
  
}

ages(0, validation)
ages(10, validation)
ages("50", validation)
ages(29.5, validation)
ages("muda", validation)
ages(true, validation)
