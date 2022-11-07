
// function userName(name){
//    if(name?.length > 0 && name.length < 20){
//       console.log("Hallo", name)
//    }
//    else if(name?.length >= 20){
//       console.log("Panjang Umur Yang Mulia", name)
//    }
//    else{
//       console.log("Invalid.\nMaaf saya tidak bisa mengeja namanya")
//    }
// }


// function validation (int){
//    return int >= 0 && Number.isInteger(int) ? true : false;
// }


// function userAge(age, valid){
//    const category = "Anda adalah golongan usia" 
   
//    if(!valid(age)){
//       console.log(category, "invalid age")
//    }
//    else if(age <= 17){
//       console.log( category, "dibawah umur" )
//    }
//    else if(age <= 29){
//       console.log(category, "young adult")
//    }
//    else if(age <= 60){
//       console.log(category, "dewasa")
//    }
//    else if(age > 60){
//       console.log(category, "tua")
//    }
//    else{
//       console.log()
//    }
// }


// function userCheck(user){
//    if(typeof user !== "object" || user === null){
//       console.log("Saya tidak bisa membaca data anda") 
//    } 
//    else if (userName(user.name)){
//       console.log(user.name)
//    }
//    else if(userAge(user.age, validation)) {
//       console.log(user.age)
//    }
//    else{
//       console.log()
//    }
// }


function userName(name){
   if(name?.length > 0 && name.length < 20){
      console.log("Hallo", name)
   }
   else if(name?.length >= 20){
      console.log("Panjang Umur Yang Mulia", name)
   }
   else{
      console.log("Invalid.\nMaaf saya tidak bisa mengeja namanya")
   }
}


function validation (int){
   return int >= 0 && Number.isInteger(int) ? true : false;
}


function userAge(age, valid){
   const category = "Anda adalah golongan usia" 
   
   if(!valid(age)){
      console.log(category, "invalid age")
      return
   }
   if(age <= 17){
      console.log( category, "dibawah umur" )
      return
   }
   if(age <= 29){
      console.log(category, "young adult")
      return
   }
   if(age <= 60){
      console.log(category, "dewasa")
      return
   }
   if(age > 60){
      console.log(category, "tua")
      return
   }
}


function userCheck(user){
   if(typeof user !== "object" || user === null){
      console.log("Saya tidak bisa membaca data anda") 
      return
   } 

   userName(user.name)
   userAge(user.age, validation)

   



   // if (userName(user.name)){
   //    console.log(user.name)
   //    return
   // }
   // if(userAge(user.age, validation)) {
   //    console.log(user.age)
   //    return
   // }
}

userCheck({name: "jokowi", age :20})
userCheck({name: "prabowo"})
userCheck({name:""})
userCheck(null)
userCheck(10)
userCheck(true)
userCheck(undefined)
userCheck({})
userCheck("")
