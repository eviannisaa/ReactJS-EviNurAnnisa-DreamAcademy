function userName(name){
   if(name?.length > 0 && name.length < 20) return "Hallo", name

   if(name?.length >= 20) return "Panjang Umur Yang Mulia", name

   return "Invalid. Maaf saya tidak bisa mengeja namanya"
}

function validation (int){
   return int >= 0 && Number.isInteger(int) ? true : false;
}

function userAge(age, valid){
   if(!valid(age)) return "invalid age"

   if(age <= 17) return  "dibawah umur" 
  
   if (age <= 29) return "young adult"

   if(age <= 60) return "dewasa"

   if (age > 60) return "tua"
}

function userCheck(user){
   if(typeof user !== "object" || user === null) return "Saya tidak bisa membaca data anda"

   const x = userName(user.name)
   const y = userAge(user.age, validation)
   return x + " Anda adalah golongan usia " + y
}

const fe = [
   {name: "jokowi", age :20},
   {name: "prabowo"},
   {name:""},
   null,
   10,
   true,
   undefined,
   {},
   ""
]

fe.forEach((input)=>{
   console.log(userCheck(input))
})

