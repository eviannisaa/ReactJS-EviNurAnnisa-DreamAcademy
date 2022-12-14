const myTable = document.getElementById('myTable')
const title = document.getElementById('title')

// const getDataUser = async()=>{
//    const resUser = await fetch('http://localhost:3000/users/' ) //
//    // console.log(resUser)
//    const dataUser = await resUser.json()

//    console.log(dataUser)

//    const resPost = await fetch('http://localhost:3000/posts/' )
//    const dataPost = await resPost.json()


//    const tr = dataUser.map(function(user){
//       function titleId (post){
//          return  post.authorId == user.id
//       }
//       const postTitle = dataPost.filter(titleId).map(function(post){
//          return  `<a href="./blog.html?idPost=${post.id}">${post.title}</a>` //  post.title
//       })
//       console.log(postTitle)
//       return `
//          <tr>
//             <td class="text-center" id="">${user.id}</td>
//             <td>${user.username}</td>
//             <td>${postTitle}</td>
//          </tr>  
//          `
//       }).join('')
//       myTable.innerHTML = tr
// }

const createUser = () => {
   $('#rootTwo').html(`
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
   `)
// getDataUser()
// console.log($('#'))
}

$('#btnUser').click(()=>{
   createUser()
})
createUser()







