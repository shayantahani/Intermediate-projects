const sidebar = document.querySelector(".sidebar");
const userBtn = document.querySelector("#dropdown-btn-user");
const notifBtn = document.querySelector("#dropdown-btn-notif");
const userDropdown = document.querySelector(".dropdown-content-user");
const notifDropdown = document.querySelector(".dropdown-content-notif");
const dropBtn = document.querySelector("#drop-icon");
const dropnBtn = document.querySelector("#drop-icon-n");
function openDrop(){
    userDropdown.classList.toggle("activedrop");
    dropBtn.classList.toggle("dropbtn");
}
function opennDrop(){
    notifDropdown.classList.toggle("activedrop");
    dropnBtn.classList.toggle("dropnbtn");
}
