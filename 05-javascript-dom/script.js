const myForm = document.getElementById('myForm')
const myInput = document.getElementById('myInput')
const status = document.getElementById('status')
const todos = document.getElementById('todo-list')
const number = document.getElementById('number')

// const
let items = JSON.parse(localStorage.getItem("activity")) || []
console.log(items)
myInput.focus()

// submit

items.map(function(el, i){
   const row = document.createElement("tr")
   const colId = document.createElement('td')
   const colActv = document.createElement('td')
   const colStt = document.createElement('td')
   const colAct = document.createElement('td')

   colId.innerHTML = i + 1
   colActv.innerHTML = el.activity
   colStt.innerHTML = el.status ? '<span class="text-lime-600">Done</span>': '<span class="text-red-600">Not Started</span>'
   colAct.innerHTML = `
   <div>
      <button id="${el.no}" class="edit rounded-xl bg-slate-900 px-5 py-1 text-white">edit</button> 
      <button id="${el.no}" class="delete rounded-xl bg-slate-900 px-5 py-1 text-white"> hapus </button>
   </div>
   `

   row.appendChild(colId)
   row.appendChild(colActv)
   row.appendChild(colStt)
   row.appendChild(colAct)
   todos.appendChild(row)
   
   // console.log(el)new
})

myForm.addEventListener('submit', function(e) {
   e.preventDefault()
   todos.innerHTML = ""
   if(myForm["number"].value ){
      const todo = {
         no : myForm["number"].value ,
         activity : myInput.value,
         status : status.checked,
      }
   const indexx = items.findIndex(function(val){
      return val.no == todo.no
   })
   items[indexx] = todo
   }else{
      const todo = {
         no : new Date().getTime(),
         activity : myInput.value,
         status : status.checked,
      }
   
      items.push(todo)
      // console.log(items)
   }
   
   localStorage.setItem("activity", JSON.stringify(items))
   myInput.value = ""
   status.checked = false
   myInput.focus()

   // console.log(btnDelete)
   location.reload()
})

const btnDelete = document.querySelectorAll(".delete")
Array.from(btnDelete).map(function(el, i){
   el.addEventListener('click', function(e){
      // console.log(e.target.id)
      const newTodo = items.filter(function(el){
         return el.no != e.target.id

      })
 
   localStorage.setItem("activity", JSON.stringify(newTodo))
   location.reload() 
   })

})

const btnEdit = document.querySelectorAll(".edit")
Array.from(btnEdit).map(function(el, i){
   el.addEventListener('click', function(e){
      const newTodo = items.find(function(el){
         return el.no == e.target.id

      })
      myInput.value= newTodo.activity
      status.checked = newTodo.status
      number.value = newTodo.no

   })
})



















