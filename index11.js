//! Forms:
//* 11. Contraseña:

const passwordForm = document.getElementById("passwordForm");
const email = document.getElementById("email");

passwordForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const validate = () => {
  const mail = email.value.trim();

  if (mail === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(email, errorMessage);
  } else if (!emailRegex.test(mail)) {
    let errorMessage = "El email no es válido";
    inputError(email, errorMessage);
  } else {
    inputSuccess(email);
    window.location.href = "./13. respuesta-password.html";
  }
};

const inputSuccess = (input) => {
  const inputParent = input.parentElement;
  const small = inputParent.querySelector("small");
  inputParent.classList.add("success");
  inputParent.classList.remove("error");
  small.innerHTML = "";
};

const inputError = (input, message) => {
  const inputParent = input.parentElement;

  const small = inputParent.querySelector("small");
  inputParent.classList.add("error");
  inputParent.classList.remove("success");
  small.classList.add("error");
  small.innerHTML = message;
};