//! Forms:
//* 9. Registrate:

const formR8 = document.getElementById("formR8");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const cellphone = document.getElementById("cellphone");
const password1 = document.getElementById("pass1");
const password2 = document.getElementById("pass2");
const yesNo = document.getElementById("yesNo");


formR8.addEventListener("submit", (e) => {
  e.preventDefault();
  validate();
});

  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

  const cellphoneRegex = /^\\(?(\d{3,5})?\\)?\s?(15)?[\s|-]?(4)\d{2,3}[\s|-]?\d{4}$/;

  const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  const validate = () => {
  const user = username.value.trim();
  const userssurname = surname.value.trim();
  const mail = email.value.trim();
  const phone = cellphone.value.trim();
  const pass1 = password1.value.trim();
  const pass2 = password2.value.trim();
  const yn = yesNo.value.trim();

  if (user === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(username, errorMessage);
  } else if (user.length < 2 || user.length > 30) {
    let errorMessage =
      "El nombre debe tener entre 2 y 30 caracteres";
    inputError(username, errorMessage);
  } else {
    inputSuccess(username);
  }

  if (userssurname === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(surname, errorMessage);
  } else if (userssurname.length < 2 || userssurname.length > 30) {
    let errorMessage =
      "El apellido debe tener entre 2 y 30 caracteres";
    inputError(surname, errorMessage);
  } else {
    inputSuccess(surname);
  }

  if (mail === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(email, errorMessage);
  } else if (!emailRegex.test(mail)) {
    let errorMessage = "El email no es válido";
    inputError(email, errorMessage);
  } else {
    inputSuccess(email);
  }

  if (phone === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(cellphone, errorMessage);
  } else if (!cellphoneRegex.test(phone)) {
    let errorMessage = "El teléfono no es válido";
    inputError(cellphone, errorMessage);
  } else {
    inputSuccess(cellphone);
  }

  if (pass1 === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(password1, errorMessage);
  } else if (!passRegex.test(pass1)) {
    let errorMessage =
      "La contraseña no es válida. Debe tener, al menos, 8 caracteres, una mayúscula, una minúscula y un número";
    inputError(password1, errorMessage);
  } else {
    inputSuccess(password1);
  }

  if (pass2 === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(password2, errorMessage);
  } else if (pass2 !== pass1) {
    let errorMessage = "Las contraseñas no coinciden";
    inputError(password2, errorMessage);
  } else {
    inputSuccess(password2);
  }

  if (yn === "") {
    let errorMessage = "Esta casilla no puede estar vacía";
    inputError(yesNo, errorMessage);
  } else {
    inputSuccess(yesNo);
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