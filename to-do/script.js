var input = document.getElementById("user-input");
var btn = document.getElementById("btn");
var list = document.querySelector("ul");
var item = document.getElementsByTagName("li");

function creatTodo() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    list.appendChild(li);
    input.value = "";
    function cross() {
        li.classList.toggle("done");
    }
    li.addEventListener("click", cross);
    function END() {
        li.classList.toggle("delete");
    }
    var Dbtn = document.createElement("button");
    Dbtn.appendChild(document.createTextNode("X"));
    Dbtn.classList.toggle("Bg-btn");
    li.appendChild(Dbtn);
    Dbtn.addEventListener("click", END)
}


function inputlength() {
    return input.value.length;
}

function addpress(event) {

    if (inputlength() > 0 && event.which === 13) {
        creatTodo();
    }
}
function addclick() {
    if (inputlength() > 0) {
        creatTodo();
    }
}
input.addEventListener("keypress", addpress);
btn.addEventListener("click", addclick);
