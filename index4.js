//! Forms:
//* 4. Contactanos:

const formContact = document.getElementById("formContact");
const username = document.getElementById("username");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const asunto = document.getElementById("asunto");
const tipoDeConsulta1 = document.getElementById("tipoDeConsulta1");
const comentarioTextArea = document.getElementById("comentarioTextArea");

formContact.addEventListener("submit", (e) => {
    e.preventDefault();
    validate();
});

const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i;

tipoDeConsulta1.selectedIndex = -1;

const validate = () => {
    const user = username.value.trim();
    const userssurname = surname.value.trim();
    const mail = email.value.trim();
    const motivodelasunto = asunto.value.trim();
    const consulta = tipoDeConsulta1.value.trim();
    const texto = comentarioTextArea.value.trim();

    if (user === "") {
        let errorMessage = "Esta casilla no puede estar vacía";
        inputError(username, errorMessage);
    } else if (user.length < 2 || user.length > 30) {
        let errorMessage =
            "El nombre debe tener entre 2 y 30 caracteres";
        inputError(username, errorMessage);
    } else {
        inputSuccess(username);
        window.location.href = "./10. respuesta-contactus.html";
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
        window.location.href = "./10. respuesta-contactus.html";
    }

    if (mail === "") {
        let errorMessage = "Esta casilla no puede estar vacía";
        inputError(email, errorMessage);
    } else if (!emailRegex.test(mail)) {
        let errorMessage = "El email no es válido";
        inputError(email, errorMessage);
    } else {
        inputSuccess(email);
        window.location.href = "./10. respuesta-contactus.html";
    }

    if (motivodelasunto === "") {
        let errorMessage = "Esta casilla no puede estar vacía";
        inputError(asunto, errorMessage);
    } else if (motivodelasunto.length < 2 || motivodelasunto.length > 30) {
        let errorMessage =
            "El nombre debe tener entre 2 y 30 caracteres";
        inputError(asunto, errorMessage);
    } else {
        inputSuccess(asunto);
        window.location.href = "./10. respuesta-contactus.html";
    }

    if (consulta === "") {
        let errorMessage = "";
        inputError(tipoDeConsulta1, errorMessage);
    } else {
        inputSuccess(tipoDeConsulta1);
        window.location.href = "./10. respuesta-contactus.html";
    }

    if (texto === "") {
        let errorMessage = "Esta casilla no puede estar vacía";
        inputError(comentarioTextArea, errorMessage);
    } else if (texto.length < 2 || texto.length > 30) {
        let errorMessage =
            "El mensaje debe tener entre 2 y 30 caracteres";
        inputError(comentarioTextArea, errorMessage);
    } else {
        inputSuccess(comentarioTextArea);
        window.location.href = "./10. respuesta-contactus.html";
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