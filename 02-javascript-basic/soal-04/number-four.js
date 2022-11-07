function validation (int){
   return int >= 0 && Number.isInteger(int) ? true : false;
}

function ages(age, valid){
   const category = "Anda adalah golongan usia" 
   
   if(!valid(age)) return "invalid age"

   if(age <= 17) return category, "dibawah umur" 
  
   if (age <= 29) return category, "young adult"

   if(age <= 60) return category, "dewasa"

   if (age > 60) return category, "tua"
}

const fe = [0, 10, "50", 29.5, "muda", true]

fe.forEach((input)=>{
   console.log(ages(input, validation))
})
