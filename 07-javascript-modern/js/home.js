const home = document.getElementById('home')
const root = document.getElementById('root')

// const listPost = document.getElementsByClassName('listPost')
console.log(listPost)
const submit = document.getElementById('submit')

const title = document.getElementById('title')
const body = document.getElementById('body')
const idPost = document.getElementById('idPost')
const users = document.getElementById('users')
const myTable = document.getElementById('myTable')
const table = document.getElementsByTagName('table')


home.addEventListener('click', ()=>{
   history.pushState({}, '', '/home')
   root.innerHTML = `
   <div class="container-sm">
      <div class="d-flex column justify-content-between mt-5 mb-4">
         <h3 id="user">User</h3>
         <button id="btnAdd" type="button" class="btn btn-primary">Add New</button>
      </div> 

      <table id="myTable" class="table table-bordered mt-5 rounded-4 table-class" data-source="data-source">
         <thead class="table-dark">
           <tr class="text-center">
             <th scope="col">ID</th>
             <th scope="col">Title</th>
             <th scope="col">Author</th>
             <th scope="col">Created at</th>
             <th scope="col">Last Modified at</th>
             <th scope="col">Published</th>
             <th scope="col">Action</th>
           </tr>
         </thead>
         <tbody id="listPost">
         </tbody>
      </table>

      <div id="myModal" class="modal">
         <div class="modal-content p-4">
            <span class="close text-end">X</i></span>
            <div>
               <h4 class="mb-5 text-center">[Add/Edit] Post Id <span id="idPost"></span></h4>
               <div class="mb-3 row">
                  <label for="title" class="col-sm-2 col-form-label">Title</label>
                  <div class="col-sm-10">
                     <input id="title" type="text" class="form-control">
                  </div>
               </div>

               <div class="mb-3 row">
                  <label for="body" class="col-sm-2 col-form-label">Body</label>
                  <div class="col-sm-10">
                     <textarea id="body" class="form-control" rows="3"></textarea>  
                  </div>
               </div>

               <div class="mb-3 row align-items-center">
                  <label for="checkbox" class="col-sm-2 col-form-label">Publish?</label>
                  <div class="col-sm-10">
                     <input id="checkbox" class="form-check-input" type="checkbox" role="switch" checked>
                  </div>
               </div>
               
               <div>
                  <button id="submit" type="submit" class="btn btn-primary" style="width: 100%;">save</button>
               </div>
            </div>
         </div>
      </div>
   </div>
   `
})

const getUrl = async() => {
   const res = await fetch(`http://localhost:3000/posts/`)
   const data = await res.json()
   return data
}

const getUser = async() => {
   const res = await fetch(`http://localhost:3000/users`)
   const data = await res.json()

   const option  = data.map(function(val){
      return `<option value="${val.id}">${val.username}</option>`
   }).join('')

   users.innerHTML = option
   console.log("user list",users.innerHTML)
}
// getUser()

const getData = async() => {
   const array = await getUrl()
   const res = await fetch(`http://localhost:3000/users`)
   const data = await res.json()

   array.forEach(async(el,i) => {
      function fc (val){
         return val.id == el.authorId
      }
      const users = data.find(fc)

      const tr = document.createElement('tr')
      tr.innerHTML = `
      <td class="text-center">${i + 1}</td>
      <td><a href="./blog.html?idPost=${el.id}" class="title">${el.title}</a></td>
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
      // document.getElementById('listPost').appendChild(tr)
      console.log('lispost', listPost.tr)
      console.log("tr",tr)
   });
}
getData()

