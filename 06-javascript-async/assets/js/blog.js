const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get("idPost")
console.log(myParam)
// const myName = urlParams.get("")

const blogUsers = document.getElementById("blogUsers")
const blogTitle = document.getElementById("blogTitle")
const blogAuthor = document.getElementById("blogAuthor")
const blogBody = document.getElementById("blogBody")
const blogPublish  = document.getElementById("blogPublish")

const userAvatar = document.getElementById("userAvatar")
const userName = document.getElementById("userName")
const userCreated = document.getElementById("userCreated")

const blogComment = document.getElementById("blogComment")
const blogMssComment = document.getElementById("blogMssComment")
const blogSbmComment = document.getElementById("blogSbmComment")

let users
let blogData
let response


async function getUserList(){
   const res = await fetch(`http://localhost:3000/users`)
   const data = await res.json()

   users = data

   const option = data
   .map(function(val){
      return `<option value="${val.id}">${val.username}</option>`
   })
   .join('')
  
   blogUsers.innerHTML = option
   blogAuthor.innerHTML = users.find(user => user.id == blogData.authorId)?.username
}
getUserList()

async function getBlog(){
   fetch(`http://localhost:3000/posts/${myParam}`,{
      method:'GET',
   })
   .then((res) => res.json())
   .then((res) => {
      blogData = res
      console.log(res)
      console.log(users)

      blogTitle.innerHTML = res.title
      blogAuthor.innerHTML = users.find(user => user.id == res.authorId)?.username
      
      blogPublish.innerHTML = res.createdContent
      blogBody.innerHTML = res.body

      console.log(res.authorId)
});
}
getBlog()

async function getCommentUrl(){
   const res = await fetch(`http://localhost:3000/comments`)
   const data = await res.json()
   // response = json
   return data

   // blogComment.innerHTML = response.comment
      // blogMssComment.value = res.comment
}
getCommentUrl()

async function getComment(){
   const array = await getCommentUrl()
      array.forEach(async(el,i) => {
         const res = await fetch('http://localhost:3000/comments/' + el.userId) // + el.authorId
         console.log(res)
         const data = await res.json()

         blogComment.innerHTML = res.comment
         userName.innerHTML = data.username
         userCreated.innerHTML = res.createdAt
      })  
}
getComment()

async function postComment(){
   const res = await fetch(`http://localhost:3000/comments/`, {
      method: 'POST',
      headers: {
         'Content-Type':'application/json'
      },
      body: JSON.stringify({
         comment:blogMssComment.value,
      })
   })
   const data = await res.json()
  
   console.log(data)
   e.preventDefault()
   if(!res.ok){
      console.log(data)
      return
   }

   window.location.reload()
}
blogSbmComment.addEventListener('submit', postComment())
console.log(blogSbmComment)
// blogSbmComment.addEventListener('submit', (e)=>{
//    e.preventDefault()

//    fetch(`http://localhost:3000/comments/` + authorId, {
//       method: 'POST',
//       headers:{
//          'Content-Type':'application/json'
//       },
//       body: JSON.stringify({
//          comment:blogMssComment.value
//       })
//    })
//    .then(res => res.json())
//    console.log(blogSbmComment)

//    .then(data => {
//       const dataArr = []
//       dataArr.push(data) 
//       getComment(dataArr)
//    })

// })











