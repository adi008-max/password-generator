
const userinput = document.getElementById("userinput");
const submit = document.getElementById("submit");
const result = document.getElementById("result");

const passwordlength = 12;

const includelowercase = "abcdefghijklmnopqrstuvwxyz";
const includeuppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const includenumbers = "0123456789";
const includesymbols = "!@#$%^&*+-()";

function generatepassword() {

    let text = userinput.value;

    if (text == "") {
        result.textContent = "Please enter text!";
    } else {
        let characters = includelowercase + includeuppercase + includenumbers + includesymbols;

        let password = text;

        while (password.length < passwordlength) {
            let randomindex = Math.floor(Math.random() * characters.length);
            password += characters[randomindex];
        }

        password = password.slice(0, passwordlength);

        result.textContent = password;
    }
}

submit.onclick = generatepassword;
