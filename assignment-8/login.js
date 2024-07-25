var btnObject = document.getElementById("btn");
//attach event listner

//btnObject.onclick = validateLoginForm; //
btnObject.addEventListener("click", validateLoginForm);
//code to validate form

function validateLoginForm(event) {
  console.log("inside form validation", event);
  event.preventDefault();
  //username
  var inputUserNameObject = document.getElementById("userName");
  var enteredUserName = inputUserNameObject.value;
  var isValidUserName = false;
  var isValidPassword = false;
  console.log(enteredUserName);
  if (enteredUserName == "") {
    //"deepak"
    console.log("Error, emptyuserame");
    document.getElementById("inputErrorContainer").innerHTML = "Required";
    document.getElementById("userName").className = "error-input";
  } else {
    //check if alphanumberic char
    console.log("valid");
    document.getElementById("inputErrorContainer").innerHTML = "";
    document.getElementById("userName").className = "";
    isValidUserName = true;
  }
  //password
  var inputUserPasswordObject = document.getElementById("userPassword");
  var enteredPassword = inputUserPasswordObject.value;

  if (enteredPassword == "") {
    document.getElementById("passwordErrorContainer").innerHTML = "Required";
    document.getElementById("userPassword").className = "error-input";
  } else {
    //check if alphanumberic char
    console.log("valid");
    document.getElementById("passwordErrorContainer").innerHTML = "";
    document.getElementById("userPassword").className = "";
    isValidPassword = true;
  }
  //js
  if (isValidUserName && isValidPassword) {
    sessionStorage.setItem("isUserLoggedIn", true);
    location.href = "./dashboard.html";
  }
}

var isUserLoggedIn = sessionStorage.getItem("isUserLoggedIn");

if (isUserLoggedIn) {
  location.href = "./dashboard.html";
}
