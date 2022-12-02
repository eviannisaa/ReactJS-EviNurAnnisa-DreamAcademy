const myTable = document.getElementById('myTable')
const title = document.getElementById('title')

async function getDataUser(){
         const resUser = await fetch('http://localhost:3000/users/' ) //
         // console.log(resUser)
         const dataUser = await resUser.json()

         const resPost = await fetch('http://localhost:3000/posts/' )
         const dataPost = await resPost.json()
         console.log(dataPost)

         
         const tr = dataUser.map(function(user){
            const postTitle = dataPost.filter(function(post){
               return post.authorId == user.id
            }).map(function(post){
               return post.title
            })
            console.log(postTitle)
            return `
            <tr>
               <td class="text-center" id="">${user.id}</td>
               <td>${user.username}</td>
               <td id="title">${postTitle}</td>
            </tr>  
            `
         }).join('')
         myTable.innerHTML = tr
}
getDataUser()


