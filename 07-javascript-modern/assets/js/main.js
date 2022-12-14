// const submit = document.getElementById('submit')

const myTable = document.getElementById("myTable");
const table = document.getElementsByTagName("table");
const users = document.getElementById("users");
const blogComment = document.getElementById("blogComment")
const blogSbmComment = document.getElementById("blogSbmComment")
const blogMssComment = document.getElementById("blogMssComment")


// date
const now = new Date();
const date = now.getDate();
const month = now.getMonth();
const year = now.getFullYear();
// time
const time = now.getTime();
const hour = now.getHours();
const minute = now.getMinutes();
const second = now.getSeconds();

// createdAt, lastModified, comments
const createdAt = `${date}/${month + 1}/${year} ${hour}:${minute}:${second}`;

arrbulan = [
   "January",
   "February",
   "March",
   "April",
   "May",
   "June",
   "July",
   "August",
   "September",
   "October",
   "November",
   "December",
];
const blogCreated = `${arrbulan[month]} ${date} st, ${year}`;

const limit = 10;

const getUrl = async () => {
   const res = await fetch(`http://localhost:3000/posts/`);
   const data = await res.json();
   return data;
};

const getUser = async () => {
   const res = await fetch(`http://localhost:3000/users`);
   const data = await res.json();

   const option = data
      .map(function (val) {
         return `<option value="${val.id}">${val.username}</option>`;
      })
      .join("");

   users.innerHTML = option;
   console.log(users.innerHTML);
};
// getUser()

const getData = async () => {
   const listPost = document.getElementById("listPost");
   const array = await getUrl();
   const res = await fetch("http://localhost:3000/users/");
   const data = await res.json();

   array.forEach(async (el, i) => {
      function fc(val) {
         return val.id == el.authorId;
      }
      const users = data.find(fc);

      const tr = document.createElement("tr");
      tr.innerHTML = `
            <td class="text-center">${i + 1}</td>
            <td><span id="id-${el.id}" class="title detail">${
         el.title
      }</span></td>
            <td>${users.username}</td>
            <td>${el.createdAt}</td>
            <td>${el.lastModified}</td>
            <td class="text-center">${
               el.published
                  ? '<i class="fa-solid fa-check text-primary"></i>'
                  : '<i class="fa-solid fa-xmark text-danger"></i>'
            }</td>
            <td class="text-center">
            <div class="d-flex column gap-3 justify-content-center">
               <button class="btn btn-primary">
                  <i id="edit" class="fa-solid fa-pen-to-square" onclick="editData(${
                     el.id
                  })"></i>
               </button>
                        
               <button class="btn btn-danger">
                  <i id="delete"  class="fa-solid fa-trash" onclick="deleteData(${
                     el.id
                  })"></i>
               </button>
            </div>
            </td>
            `;
      listPost.appendChild(tr);
      $(document).ready(function () {
         $("#myTable").DataTable();
      });
   });
};
// getData()
const createBlog = async(postId) => {
   $("#root").html(`
   <h2 id="blogTitle" class="text-center mt-5"></h2>
   <div class="by text-center mt-5 mb-5">by 
      <span id="blogAuthor"></span>, at 
      <span id="blogPublish"></span>
   </div>
   <img src="/assets/img/elsa2.jfif" alt="" style="width: 100%; height: 95vh;">
   <div id="blogBody" class="mt-5"></div>
   <div class="mt-5">
      <h5>Comments</h5>
      <div id="blogComment" class="flex row gap-2 mt-3"></div>
      <div class="mt-5">
         <h5>Say Something</h5>
         <textarea id="blogMssComment" class="form-control" rows="10"></textarea>
         <button id="blogSbmComment" type="button" class="btn btn-dark mt-2 mb-4" style="width: 100%;" onclick="postComment()">Submit</button>
      </div>
   </div>
   `);

   Promise.all([
      fetch(`http://localhost:3000/posts/${postId}`, {
         method: "GET",
      }).then((res)=>res.json()),
      fetch(`http://localhost:3000/users/`, {
         method: "GET",
      }).then((res)=>res.json()),
      // fetch(`http://localhost:3000/comments/`, {
      //    method: "GET",
      // }).then((res)=>res.json()),
    

   ]).then((res)=>{
      let blogData = res[0];

      let user = res[1]

      // let comment = res[2]

         blogTitle.innerHTML = blogData.title;
         blogPublish.innerHTML = blogData.createdContent;
         blogBody.innerHTML = blogData.body;
         blogAuthor.innerHTML = user.find(
            (user) => user.id == blogData.authorId
         )?.username;
   })
   await getComment(postId)
};

// const postComment = async() =>{
//    const res = await fetch(`http://localhost:3000/comments/`, {
//       method:'POST',
//       headers:{
//          'Content-Type':'application/json'
//       },
//       body:JSON.stringify({
//          userId:users.value,
//          comment:blogMssComment.value,
//          createdAt: createdAt,
//          idPost: myParam
//       })
//    })
//    // window.location.reload()
//    console.log("es", res)

// }
// blogSbmComment.addEventListener('submit',() => postComment())


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



$("#root").on("click", ".detail", async (e) => {
   let idBlog = e.target.id.split("-")[1];
   await createBlog(idBlog);
   history.pushState({page:'blog', blogId:idBlog}, 'Blog', '/blog?idPost='+idBlog)
})
// createBlog()

const deleteData = async (id) => {
   await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
   });
   createHome();
   // window.location.reload()
};

const editData = async (id) => {
   modal.style.display = "block";

   const res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "GET",
   });
   const data = await res.json();

   title.value = data.title;
   body.value = data.body;
   idPost.innerHTML = data.id;
};
$("#root").on("click", "#submit", async function () {
   const idPost = document.getElementById("idPost");
   if (idPost.innerHTML) {
      await fetch(`http://localhost:3000/posts/${idPost.innerHTML}`, {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            title: title.value,
            body: body.value,
            published: checkbox.checked,
            lastModified: createdAt,
         }),
      });
   } else {
      await postData();
      return;
   }
   // window.(location.reload()
   createHome();
});

const postData = async () => {
   const title = document.getElementById("title");
   const body = document.getElementById("body");

   const res = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      headers: {
         "Content-Type": "application/json",
      },
      body: JSON.stringify({
         title: title.value,
         body: body.value,
         createdAt: createdAt,
         createdContent: blogCreated,
         lastModified: createdAt,
         published: checkbox.checked,
         authorId: users.value,
      }),
   });
   const data = await res.json();

   console.log(data);
   if (!res.ok) {
      console.log(data);
      return;
   }
   // window.location.reload()
   createHome();
};

const createHome = () => {
   $("#root").html(` 
   <div class="d-flex column justify-content-end mt-5 mb-4">
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
   <tbody id="listPost"></tbody>
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
</div>`);
   getData();
   getUser();
   console.log($("#submit"));
};

$("#btnHome").click(() => {
   createHome()
   history.pushState({page:'home'}, 'Home', '/')
});
createHome();

$(window).on('popstate', async(e)=>{
   const state = e.originalEvent.state
   console.log(state)
   if (state.page == "home"){
      createHome()
   }else{
      await createBlog(state.blogId)
   }
})