function start() {
    const showPasswordInput = document.querySelector("#show-password");
    showPasswordInput.addEventListener("change", showPassword);

    const btnSave = document.querySelector("#btn-save");
    btnSave.addEventListener("click", saveDataToLocalStorage);
}

function showPassword() {
    const showPasswordInput = document.querySelector("#show-password");

    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#password-confirm");

    if (showPasswordInput.checked) {
        password.type = "text";
        passwordConfirm.type = "text";
    } else {
        password.type = "password";
        passwordConfirm.type = "password";
    }
}

function validatePassword() {
    const password = document.querySelector("#password");
    const passwordConfirm = document.querySelector("#password-confirm");

    if (password.value !== passwordConfirm.value) {
        alert("As senhas não conferem!");
        return false;
    }

    return true;
}

function validateFields() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const passwordConfirmInput = document.querySelector("#password-confirm");

    if (nameInput.value === "") {
        alert("Informe o nome!");
        return false;
    }

    if (emailInput.value === "") {
        alert("Informe o e-mail!");
        return false;
    }

    if (passwordInput.value === "") {
        alert("Informe a senha!");
        return false;
    }

    if (passwordConfirmInput.value === "") {
        alert("Informe a confirmação da senha!");
        return false;
    }

    return true;
}

function getData() {
    const validatedFields = validateFields();
    const validatedPassword = validatePassword();

    if (!validatedFields || !validatedPassword) {
        return;
    }

    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");

    const user = {
        name: nameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
    };

    return user;
}

function resetForm() {
    const nameInput = document.querySelector("#name");
    const emailInput = document.querySelector("#email");
    const passwordInput = document.querySelector("#password");
    const passwordConfirmInput = document.querySelector("#password-confirm");

    nameInput.value = "";
    emailInput.value = "";
    passwordInput.value = "";
    passwordConfirmInput.value = "";
}

function saveDataToLocalStorage() {
    const data = getData();

    if (data) {
        localStorage.setItem("users", JSON.stringify(data));
        resetForm();
    }
}
