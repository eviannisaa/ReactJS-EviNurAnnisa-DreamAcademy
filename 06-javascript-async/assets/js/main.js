const users = document.getElementById('users')
const title = document.getElementById('title')
const body = document.getElementById('body')
const checkbox = document.getElementById('checkbox')
const submit = document.getElementById('submit')
const idPost = document.getElementById('idPost')
const addOrEdit = document.getElementById('addOrEdit')
const myTable = document.getElementById('myTable')
const table = document.getElementsByTagName('table')
const listPost = document.getElementById('listPost')

// created, lastmodified
const createdAt = new Intl.DateTimeFormat("en-GB", {
   timeStyle: "medium",
   dateStyle: "short",
   timeZone: "UTC"
})

// blog
const blogCreated = new Intl.DateTimeFormat("en", {
   dateStyle: "long"
})

const limit = 10

async function getUrl(){
   const res = await fetch(`http://localhost:3000/posts/`)
   const data = await res.json()
   return data
}

// get User List
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

// get Data User
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
            <td class="text-center">${el.id}</td>
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

// delete Data
async function deleteData(id){
   if (confirm('Apakah kamu ingin menghapus data ini?') == true ){
      await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE'
   })
   window.location.reload()
   }
}

// edit Data
async function editData(id){
   modal.style.display = "block"

   const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: 'GET'
   })
   const data = await res.json()

   addOrEdit.innerHTML = 'Edit'
   title.value = data.title
   body.value = data.body
   idPost.innerHTML = data.id
   checkbox.checked = data.published
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
            lastModified:createdAt.format(Date.now()).split(', ').join(' | ')
         })
      })
   }
   else{
      await postData()
      return
   }
   window.location.reload()
})

// post Data
async function postData(){
   const res = await fetch(`http://localhost:3000/posts`, {
      method: 'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body: JSON.stringify({
         title:title.value,
         body:body.value,
         createdAt:createdAt.format(Date.now()).split(', ').join(' | '),
         createdContent: blogCreated.format(Date.now()).split(', ').join('st, '),
         lastModified:createdAt.format(Date.now()).split(', ').join(' | '),
         published:checkbox.checked,
         authorId:users.value
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
