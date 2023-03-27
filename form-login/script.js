const userInput = document.querySelector(".user-input");
const passInput = document.querySelector(".pass-input");
const signinBtn = document.querySelector(".login-btn");
const userMsg = document.querySelector(".user-msg");
const passMsg = document.querySelector(".passsword-msg");
const signinMsg = document.querySelector(".signin-msg");

signinBtn.addEventListener("click", (e) => {
  e.preventDefault();
  userMsg.innerHTML = "";
  passMsg.innerHTML = "";
  let ifSendData = true;
  let inputuserValue = userInput.value;
  let InputpassValue = passInput.value;
  if (
    inputuserValue.length === 0 ||
    inputuserValue.indexOf("@") === -1 ||
    inputuserValue.indexOf(".") === -1
  ) {
    userMsg.innerHTML = "Please enter a valid email...";
    ifSendData = false;
  }
  if (InputpassValue.length <= 4) {
    passMsg.innerHTML = "Your password is short and weak";
    ifSendData = false;
  }
  if (ifSendData) {
    let body = {
      email: inputuserValue,
      password: InputpassValue,
    };
    let headers = {
      "Content-type": "application/json; charset=UTF-8",
    };
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: body,
      headers: headers,
    }).then((response) => {
      if (response.ok) {
        signinMsg.innerHTML = "You've signed in successfully !";
      }
    });
  }
});
