const passwordElement = document.getElementById("password");
const generateButton = document.getElementById("generate");
const copyButton = document.getElementById("copy");

const length = 10;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers ="0123456789";
const symbol = "!@#~$%^&*(){}[]_-+";

const allchars = uppercase + lowercase + numbers+ symbol;

function createPassword()
{
    let password = "";
    password += uppercase[Math.floor(Math.random() *uppercase.length)];
    password += lowercase[Math.floor(Math.random() *lowercase.length)];
    password += numbers[Math.floor(Math.random() *numbers.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];

    while(length > password.length)
    {
        password += allchars[Math.floor(Math.random()*symbol.length)];

    }
    passwordElement.value = password;
    
}

generateButton.addEventListener('click',createPassword);


function copyPassword()
{
    passwordElement.select(); //this selects the password
    document.execCommand('copy'); //for copying
}

copyButton.addEventListener('click',copyPassword);