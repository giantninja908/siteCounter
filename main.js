if(!localStorage.getItem('visit')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
if(!localStorage.getItem('visit')){
  localStorage.setItem('visit', 1);
  }else{
    localStorage.setItem('visit', localStorage.getItem('visit')+1);
  }
  setStyles();
}

function setStyles(){
  var h = document.getElementById("test")
  h.innerHTML = "Times visited: "+localStorage.getItem('visit').toString()
}
