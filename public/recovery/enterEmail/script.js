const submitButton = document.getElementById('enter-gmail');

submitButton.addEventListener("click", async (event) => {
    event.preventDefault();
    const emailInput = document.getElementById("passwordInput").value.trim();
    const errorMessage = document.getElementById("errorMessage");
    
    try {
        const response = await fetch('/enterEmail', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email : emailInput })
        });
        console.log(emailInput);
        if (response.ok) {
            window.location.href = '../confirmCode';
        } else {
            console.error('Server error:', response.status);
        }
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
});
