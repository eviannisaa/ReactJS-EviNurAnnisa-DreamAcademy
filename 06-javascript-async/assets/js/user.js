async function getDataUser(){
   const resUser = await fetch('http://localhost:3000/users/' )
   const dataUser = await resUser.json()

   const resPost = await fetch('http://localhost:3000/posts/' )
   const dataPost = await resPost.json()

   const tr = dataUser.map(function(user){
      function titleId (post){
         return  post.authorId == user.id
      }

      const postTitle = dataPost.filter(titleId).map(function(post){
         return  `<a href="./blog.html?idPost=${post.id}"> ${post.title}</a>` //  post.title
      })

      console.log(postTitle)

      return `
         <tr>
            <td class="text-center" id="">${user.id}</td>
            <td>${user.username}</td>
            <td>${postTitle}</td>
         </tr>  
         `
      }).join('')
      myTable.innerHTML = tr
}
getDataUser()          





