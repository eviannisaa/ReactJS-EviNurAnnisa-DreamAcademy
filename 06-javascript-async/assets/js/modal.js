let modal = document.getElementById('myModal')
let button = document.getElementById('btnAdd')
let span = document.getElementsByClassName('close')[0]

button.onclick = function(){
  modal.style.display = "block"
}
span.onclick = function(){
  modal.style.display = "none"
  window.location.reload()
}

window.onclick = function(e){
  if (e.target == modal) {
    modal.style.display = "none"
  }
}



