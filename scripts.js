let pwd = document.querySelector("#password");
let confirm_pwd = document.querySelector("#confirm-password");
let error_label = document.querySelector(".error-label");

pwd.addEventListener("input", checkPasswords);
confirm_pwd.addEventListener("input", checkPasswords);

function checkPasswords() {

  if(pwd.value === "" && confirm_pwd.value === "") {

    error_label.classList.add("hide");
    pwd.classList.remove("error");
    confirm_pwd.classList.remove("error");    

  } else {

    if (pwd.value === confirm_pwd.value) {

      error_label.classList.add("hide");
      pwd.classList.remove("error");
      confirm_pwd.classList.remove("error");
      
    } else {

      error_label.classList.remove("hide");
      pwd.classList.add("error");
      confirm_pwd.classList.add("error");

    }

  }

}