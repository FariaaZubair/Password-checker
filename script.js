function checkPassword() {
    const password = document.getElementById('password').value;
    const resultDiv = document.getElementById('result');

    let isValid = false;

    do {
        if (password.length >= 6) {
            isValid = true;
            resultDiv.innerHTML = `<span class="valid">Password is valid!</span>`;
        } else {
            isValid = false;
            resultDiv.innerHTML = `<span class="invalid">Password must be at least 6 characters long.</span>`;
        }
    } while (false); 

    if (!isValid) {
        document.getElementById('password').value = '';
    }
}
