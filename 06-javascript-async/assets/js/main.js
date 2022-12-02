const listPost = document.getElementById('listPost')
const submit = document.getElementById('submit')

const title = document.getElementById('title')
const body = document.getElementById('body')
const idPost = document.getElementById('idPost')
const users = document.getElementById('users')
const myTable = document.getElementById('myTable')
const table = document.getElementsByTagName('table')

// date
const now = new Date()
const date = now.getDate()
const month = now.getMonth()
const year = now.getFullYear()
// time
const time = now.getTime()
const hour = now.getHours()
const minute = now.getMinutes()
const second = now.getSeconds()

// createdAt, lastModified, comments
const createdAt = `${date}/${month + 1}/${year} ${hour}:${minute}:${second}`

// blog
arrbulan = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const blogCreated = `${arrbulan[month]} ${date} st, ${year}`

const limit = 10

async function getUrl(){
   const res = await fetch(`http://localhost:3000/posts/`)
   const data = await res.json()
   return data
}

async function getUser(){
   const res = await fetch(`http://localhost:3000/users`)
   const data = await res.json()

   const option = data.map(function(val){
      return `<option value="${val.id}">${val.username}</option>`
   }).join('')

   users.innerHTML = option
   console.log(users.innerHTML)
}
getUser()

async function getData(){
   const array = await getUrl()
   const res = await fetch('http://localhost:3000/users/' ) 
   const data = await res.json()

      array.forEach(async(el,i) => {
         function fc(val){
            return val.id == el.authorId
         }
         const users = data.find(fc)  

         const tr = document.createElement('tr')
         tr.innerHTML = `
            <td class="text-center">${i + 1}</td>
            <td><a href="./blog.html?idPost=${el.id}" class="title">${el.title}</a></td>
            <td>${users.username}</td>
            <td>${el.createdAt}</td>
            <td>${el.lastModified}</td>
            <td class="text-center">${el.published ? '<i class="fa-solid fa-check text-primary"></i>':'<i class="fa-solid fa-xmark text-danger"></i>'}</td>
            <td class="text-center">
            <div class="d-flex column gap-3 justify-content-center">
               <button class="btn btn-primary">
                  <i id="edit" class="fa-solid fa-pen-to-square" onclick="editData(${el.id})"></i>
               </button>
                        
               <button class="btn btn-danger">
                  <i id="delete"  class="fa-solid fa-trash" onclick="deleteData(${el.id})"></i>
               </button>
            </div>
            </td>
            `
            listPost.appendChild(tr)
            $(document).ready(function () {
               $('#myTable').DataTable()
            })
      })     
}
getData()

async function deleteData(id){
   await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
   })
   window.location.reload()
}

async function editData(id){
   modal.style.display = "block"

   const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'GET'
   })
   const data = await res.json()

   title.value = data.title
   body.value = data.body
   idPost.innerHTML = data.id
}
submit.addEventListener('click', async()=>{
   if(idPost.innerHTML){
      await fetch(`http://localhost:3000/posts/${idPost.innerHTML}`, {
         method: 'PATCH',
         headers: {
            'Content-Type': 'application/json'
         },
         body:JSON.stringify({
            title:title.value,
            body:body.value,
            published:checkbox.checked,
            lastModified:createdAt
         })
      })
   }else{
      await postData()
      return
   }
   window.location.reload()
})

async function postData(){
   const res = await fetch(`http://localhost:3000/posts`, {
      method: 'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body: JSON.stringify({
         title:title.value,
         body:body.value,
         createdAt:createdAt,
         createdContent: blogCreated,
         lastModified:createdAt,
         published:checkbox.checked,
         authorId:users.value,
      })
   })
   const data = await res.json()
  
   console.log(data)
   if(!res.ok){
      console.log(data)
      return
   }
   window.location.reload()
}

