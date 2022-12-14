const urlParams = new URLSearchParams(window.location.search)
const myParam = urlParams.get("idPost")
console.log(myParam)

const blogUsers = document.getElementById("blogUsers")
const blogTitle = document.getElementById("blogTitle")
const blogAuthor = document.getElementById("blogAuthor")
const blogBody = document.getElementById("blogBody")
const blogPublish  = document.getElementById("blogPublish")

const userAvatar = document.getElementById("userAvatar")
const userName = document.getElementById("userName")
const userCreated = document.getElementById("userCreated")

const blogComment = document.getElementById("blogComment")
const blogSbmComment = document.getElementById("blogSbmComment")




let users
let blogData
let usernames
let response


const getUserList = async() => {
   const res = await fetch(`http://localhost:3000/users`)
   const data = await res.json()

   users = data

   const option = data
   .map(function(val){
      return `<option value="${val.id}">${val.username}</option>`
   })
   .join('')
  
   blogUsers.innerHTML = option
   blogAuthor.innerHTML = users.find(user => user.id == blogData?.authorId)?.username
}
getUserList()

const getBlog = async() => {
   fetch(`http://localhost:3000/posts/${myParam}`,{
      method:'GET',
   })
   .then((res) => res.json())
   .then((res) => {
      blogData = res
      console.log(res)
      console.log(users)

      blogTitle.innerHTML = res.title
      blogPublish.innerHTML = res.createdContent
      blogBody.innerHTML = res.body
      blogAuthor.innerHTML = users.find(user => user.id == res.authorId)?.username
      // userName.innerHTML = usernames.find(userr => userr.id == res.userId)?.username
   });
}
getBlog()

const getCommentUrl = async(myParam) =>{
   const res = await fetch(`http://localhost:3000/comments?idPost=${myParam}`)
   const data = await res.json()
   return data
}

const getComment = async(myParam) =>{
   const array = await getCommentUrl(myParam)
   array.forEach(async(el) => {
      const res = await fetch (`http://localhost:3000/users/` + el.userId)
      console.log(res)

      const data = await res.json()

      const div = document.createElement('div')
      div.innerHTML = 
      // style.display.block
      `
      <div class="d-flex flex-row align-items-center gap-3">
         <img src="${data.avatar}" alt="" class="rounded-circle" width="53px" height="50px">
         <div class="user-comment">
            <span>${data.username}</span>
                &nbsp; <b>|</b> &nbsp;
            <span>${el.createdAt}</span>
         </div>
      </div>
      <div>"${el.comment}"</div>
      `
      blogComment.appendChild(div)

      console.log("line 95",data.avatar)
   });
}
getComment()


const postComment = async() =>{
   const res = await fetch(`http://localhost:3000/comments/`, {
      method:'POST',
      headers:{
         'Content-Type':'application/json'
      },
      body:JSON.stringify({
         userId:blogUsers.value,
         comment:blogMssComment.value,
         createdAt: createdAt,
         idPost: myParam
      })
   })
   window.location.reload()

}
blogSbmComment.addEventListener('submit',() => postComment())

// let promises =  [getUserList(), getBlog(), getComment()]
// Promise.all(promises)
// .then((result)=>{

// })






