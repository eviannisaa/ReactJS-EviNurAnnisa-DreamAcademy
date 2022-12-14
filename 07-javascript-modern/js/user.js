const user = document.getElementById('user')
const root = document.getElementById('root')


user.addEventListener('click', ()=>{
   history.pushState({}, '', '/user')
   root.innerHTML = `
   <div class="container-sm">
      <div class="d-flex column justify-content-between mt-5 mb-4">
         <h3>User</h3>
         <button id="btnAdd" type="button" class="btn btn-primary">Add New</button>
      </div> 

      <table class="table table-bordered mt-5 rounded-4">
         <thead class="table-dark">
           <tr class="text-center">
             <th scope="col">ID</th>
             <th scope="col">Username</th>
            <th scope="col">Posts</th>
           </tr>
         </thead>
         <tbody id="myTable">
         </tbody>
      </table>
   </div>
   `
})