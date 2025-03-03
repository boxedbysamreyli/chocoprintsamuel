document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const nameInput = document.getElementById('name');
    const resultDiv = document.getElementById('result');
    const nameResultDiv = document.getElementById('name-result');

    // Validation pour l'email
    emailInput.addEventListener('keyup', function() {
        const emailValue = emailInput.value;
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (emailPattern.test(emailValue)) {
            resultDiv.textContent = "ok";
            resultDiv.style.color = "green";
        } else {
            resultDiv.textContent = "non";
            resultDiv.style.color = "red";
        }
    });

    // Validation pour le nom
    nameInput.addEventListener('keyup', function() {
        const nameValue = nameInput.value.toLowerCase();

        // Vérifier si le nom est "root" ou "admin"
        if (nameValue === "root" || nameValue === "admin") {
            nameResultDiv.textContent = "non";
            nameResultDiv.style.color = "red";
        } else {
            nameResultDiv.textContent = "ok";
            nameResultDiv.style.color = "green";
        }
    });
});