const listPost = document.getElementById('listPost')
const myTable = document.getElementById('listPost')
const title = document.getElementById('title')
let users

async function getData(){
         const res = await fetch('http://localhost:3000/users/' ) // + el.authorId
         console.log(res)
         const data = await res.json()
         console.log(data)

         users = data
         
         const tr = data.map(function(val){
            return `
            <tr>
               <td class="text-center" id="">${val.id}</td>
               <td>${val.username}</td>
               <td id="title"></td>
            </tr>  
            `
         }).join('')
         myTable.innerHTML = tr
         title.innerHTML = `kjsadhaks`
         console.log(title.innerHTML)
}
getData()

async function getTitle(){
   const res = await fetch('http://localhost:3000/posts/' ) // + el.authorId
   console.log(res)
   const data = await res.json()
   console.log(data)

  
   // titles = data

   const option = data.map(function(val){
      return `<span>${val.title}</span>`
   }).join('')

   title.innerHTML = option
   // titles.innerHTML = option
   // console.log(titles.innerHTML)
}
getTitle()

