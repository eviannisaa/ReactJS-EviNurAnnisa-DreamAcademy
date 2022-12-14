const blog = document.getElementById('blog')
const root = document.getElementById('root')


blog.addEventListener('click', ()=>{
   history.pushState({}, '', '/blog')
   root.innerHTML = `
   <div class="container mt-4 d-flex flex-column gap-lg-5">
      <h2 id="blogTitle" class="text-center"></h2>
      <div class="by text-center">by 
         <span id="blogAuthor"></span>, at 
         <span id="blogPublish"></span>
      </div>
      <img src="/assets/img/elsa2.jfif" alt="" style="width: 100%; height: 95vh;">
      <div id="blogBody"></div>
      <div>
         <h5>Comments</h5>
         <div id="blogComment" class="flex row gap-2 mt-3"></div>

         <div class="mt-5">
            <h5>Say Something</h5>
            <textarea id="blogMssComment" class="form-control" rows="10"></textarea>
            <button id="blogSbmComment" type="button" class="btn btn-dark mt-2 mb-4" style="width: 100%;" onclick="postComment()">Submit</button>    
         </div>
      </div>
   </div>
   `
})