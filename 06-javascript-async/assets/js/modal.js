let modal = document.getElementById('myModal')
let button = document.getElementById('btnAdd')
let span = document.getElementsByClassName('close')[0]
console.log("jashd",document.getElementById('title').value = ('')
)

button.onclick = function(){
  modal.style.display = "block"
}
span.onclick = function(){
  modal.style.display = "none"
}

window.onclick = function(e){
  if (e.target == modal) {
    modal.style.display = "none"
  }

  if(e.target == span){
    document.getElementById('idPost').innerHTML = null
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''
    document.getElementById('checkbox').checked = false
    document.getElementById('addOrEdit').innerHTML = `Add`
  }
}





