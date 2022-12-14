function dateInfo(){
   var yourName = document.getElementById("yourName").value; //name
   var yourBirthday = document.getElementById("yourBirthday").value //tanggal lahir

   const today = new Date();
   const bDate = new Date(yourBirthday);
   const bDay = new Date(today.getFullYear(), bDate.getMonth(), bDate.getDate())
   
   let age = new Date(today - bDate.getTime()).getUTCFullYear() - 1970; //usia
   if (age<0){
      age=0
   }

   const dayTo = parseInt((bDay.getTime() - today.getTime()) / (1000 * 3600 *24) +1 )  //hari
   console.log(dayTo)
   // const dayTo2 = Math.ceil((bDay.getTime() - today.getTime()) / (1000 * 3600 *24)) //hari
   // console.log(dayTo2)

   if( dayTo > 0 ){
      console.log(`Hallo nama ${yourName} usia anda ${age} tahun. anda berulang tahun ${dayTo} hari lagi`)
   }else{
      console.log(`Hallo nama ${yourName} usia anda ${age} tahun. anda berulang tahun ${Math.abs(dayTo)} hari yang lalu`)
   } 

}


function momentInfo(){
   var yourName = document.getElementById("yourName").value; //name
   var yourBirthday = document.getElementById("yourBirthday").value //tanggal lahir

   const today = moment()
   // console.log(today)
   const bDate = moment(yourBirthday)
   const bDay = moment({year:today.year(), month:bDate.month(), date:bDate.date()})
   // console.log(bDay)

   let age = today.diff(bDate, "year")
   if (age<0){
      age=0
   }

   const dayTo = parseInt(bDay.diff(today, "day") +1)

   if( dayTo > 0 ){
      console.log(`Hallo nama ${yourName} usia anda ${age} tahun. anda berulang tahun ${dayTo} hari lagi`)
   }else{
      console.log(`Hallo nama ${yourName} usia anda ${age} tahun. anda berulang tahun ${Math.abs(dayTo)} hari yang lalu`)
   } 
}

function sayGreeting(){
   dateInfo()
   momentInfo()
}


   