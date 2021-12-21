let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function(optional)
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}
function myfunction(x)
{
  x.classList.toggle("fa-thumbs-down");
}

let span = document.querySelector('.span')
let like = document.getElementById("#favorit")

function on() {
  document.getElementById("overlay").style.display = "block";
}

function next() {
  document.getElementById("overlay-next").style.display = "block";
}

function off() {
  document.getElementById("overlay").style.display = "none";
}
