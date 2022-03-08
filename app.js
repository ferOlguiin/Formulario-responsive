const formulario = document.getElementById("formulario");
const userName = document.getElementById("userName");
const userEmail = document.getElementById("userEmail");
const labelUserName = document.getElementById("labelUserName");
const labelUserEmail = document.getElementById("labelUserEmail");
const msgAlert = document.querySelector("#msgAlert");
const body = document.querySelector(".body1");

        // Expresiones regulares
const regUserName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
const regUserEmail = /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/;

formulario.addEventListener("submit", (e) => {
       e.preventDefault();
    // console.log(userName.value);
    // console.log(userEmail.value);

    // console.log(regUserName.test(userName.value));

    if (!regUserName.test(userName.value)) {
        // console.log("Formulario incorrecto padre");
        userName.classList.add("is-invalid");
        labelUserName.textContent = "Ese nombre es invalido, use otro porfavor";
        labelUserName.style.color = "#f74a3e";
    } else {
        userName.classList.remove("is-invalid");
        userName.classList.add("is-valid");
        labelUserName.textContent = "";
    }
    if (!regUserEmail.test(userEmail.value)) {
        // console.log("Formulario incorrecto padre");
        userEmail.classList.add("is-invalid");
        labelUserEmail.textContent = "Ingrese un correo válido porfavor";
        labelUserEmail.style.color = "#f74a3e";
    } else {
        userEmail.classList.remove("is-invalid");
        userEmail.classList.add("is-valid");
        labelUserEmail.textContent = "";
    }

    if (regUserEmail.test(userEmail.value) && regUserName.test(userName.value) == true) {
        msgAlert.classList.add("alert");
        msgAlert.classList.add("alert-primary");
        msgAlert.setAttribute("role", "alert");
        msgAlert.textContent = "Su mensaje ha sido enviado con exito";

    }
    
    // console.log("Formulario enviado");
})