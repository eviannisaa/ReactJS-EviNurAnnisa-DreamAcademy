let time = []
document.getElementById("btn").addEventListener("click", function(){
   const now = moment().format("HH:mm:ss")
   // console.log(now)

   time.push(now)
   // console.log(time)

   time.map(function(item){
      const newItem = item.split(":")
      console.log(`Tercatat jam ${newItem[0]}, menit ${newItem[1]}, detik ${newItem[2]}` )
   })
})