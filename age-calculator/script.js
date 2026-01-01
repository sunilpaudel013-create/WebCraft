const input = document.querySelector(".dateInput");
const resultElement = document.getElementById('result');
const calcAge = document.getElementById('calculateBtn');

calcAge.addEventListener('click', () => {
    // FIX 1: Convert the string value into a real Date object
    const birthDate = new Date(input.value);
    const today = new Date();

    if (input.value === "") {
        input.classList.add('error');
        alert('Please select the date');
        return;
    } else {
        input.classList.remove('error'); // Clear error if fixed

        // Basic year subtraction
        let age = today.getFullYear() - birthDate.getFullYear();
        
        // FIX 2: Use the variables you actually defined (months and days)
        let months = today.getMonth() - birthDate.getMonth();
        let days = today.getDate() - birthDate.getDate();

        // The "Birthday Check" logic
        if (months < 0 || (months === 0 && days < 0)) {
            age--; 
        }

        resultElement.innerText = "You are " + age + " years old.";
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        calcAge.click();
    }
});