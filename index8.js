//! Forms:
//* 8. Iniciar Sesión:

const formIS = document.getElementById("formIS");
const email = document.getElementById("email");
const password = document.getElementById("pass");

formIS.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validate = () => {
  const mail = email.value.trim();
  const pass = password.value.trim();

  if (mail === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(email, errorMessage);
  } else if (!emailRegex.test(mail)) {
    let errorMessage = "El email no es válido";
    inputError(email, errorMessage);
  } else {
    inputSuccess(email);
    window.location.href = "./12. bienvenido.html";
  }

  if (pass === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(password, errorMessage);
  } else if (!passRegex.test(pass)) {
    let errorMessage =
      "La contraseña no es válida. Debe tener, al menos, 8 caracteres, una mayúscula, una minúscula y un número";
    inputError(password, errorMessage);
  } else {
    inputSuccess(password);
    window.location.href = "./12. bienvenido.html";
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