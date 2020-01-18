const regex = /\S+@\S+\.\S+/;

let emailValidation = (email) =>
{
    if(!regex.test(email.value)) return false;
    else return true;
};

let displayError = () =>
{
    let errorMessage = document.querySelector(".error-message");
    let errorIcon = document.querySelector(".error-icon");
    let input = document.querySelector(".input-container input");

    errorMessage.style.display = "block";
    errorIcon.style.display = "block";

    input.focus();

    if(!input.parentElement.classList.contains("error"))
        input.parentElement.classList.add("error");
};

document.querySelector("button").onclick = function()
{
    let input = document.querySelector(".input-container input");
    if (!emailValidation(input.value))
        displayError();
}

console.log("hola");