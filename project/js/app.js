//overlay homepage
function openOverlay(){
  var closeBtn = document.getElementById("overlayHide");
    closeBtn.classList.toggle("easeClose");
}
//fab button to ad a place  or see menu
function showFabButton(){
  var test = document.getElementsByClassName("fab--1");
  test.classList.toggle("close");
}
