document.getElementById("undi").addEventListener("click", function(){
   var mr = Math.trunc(Math.random() * 99)

   if (mr % 2 !== 0){
      console.log(mr, "menang")
   }else{
      console.log(mr, "kalah")
   }
})


