const btn = document.querySelector("#btn");
const sideBar = document.querySelector(".sidebar");
const logOutbtn = document.querySelector("#out-btn");
btn.onclick = function(){
    sideBar.classList.toggle("active");
}
logOutbtn.onclick = function(){
    sideBar.classList.toggle("active");
}