let modal = document.getElementById('myModal')
let btnAdd = document.getElementById('btnAdd')
let btnClose = document.getElementById('close')

btnAdd.onclick = function(e){
  modal.style.display = "block"
  if(e.target == btnAdd){
    document.getElementById('addOrEdit').innerHTML = 'Add' 
    document.getElementById('title').focus()
  }
}

btnClose.onclick = function(e){
  modal.style.display = "none"
  if(e.target == btnClose){
    document.getElementById('addOrEdit').innerHTML = null
  }
}

window.onclick = function(e){
  if(e.target == btnClose){
    document.getElementById('idPost').innerHTML = null
    document.getElementById('title').value = ''
    document.getElementById('body').value = ''
    document.getElementById('checkbox').checked = false
  }

  // if (e.target == modal) {
  // modal.style.display = "none"
  // }
}




