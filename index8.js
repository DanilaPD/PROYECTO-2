//! Forms:
//* 8. Iniciar Sesión:

const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("pass");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

const validate = () => {
    const mail = email.value.trim();
    const pass = password.value.trim();

    if (mail === "") {
        let errorMessage = "El mail no puede estar vacío";
        inputError(email, errorMessage);
    } else if (!emailRegex.test(mail)) {
        let errorMessage = "El mail no es válido";
        inputError(email, errorMessage);
    } else {
        inputSuccess(email);
    }

    if (pass === "") {
        let errorMessage = "La contraseña no puede estar vacía";
        inputError(password, errorMessage);
    } else if (!passRegex.test(pass)) {
        let errorMessage = "La contraseña no es válida. Debe tener, al menos, 8 catacteres, una mayúscula, una minúscula y un número";
        inputError(password, errorMessage);
    } else {
        inputSuccess(password);
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
    small.innerHTML = message;
    small.classList.add("error");
}