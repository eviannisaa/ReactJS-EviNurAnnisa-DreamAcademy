var modal = document.getElementById('myModal')
var button = document.getElementById('btnAdd')
console.log(button)
var span = document.getElementsByClassName('close')[0]

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
}