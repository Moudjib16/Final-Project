document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById('passwordInput');
  const submitButton = document.getElementById('timerButton');
  const errorMessage = document.getElementById('errorMessage');
  const pasteButton = document.getElementById('pasteButton');

  if (!passwordInput || !submitButton || !errorMessage || !pasteButton) {
      console.error('Error: One or more elements not found.');
      return; // Exit the function if elements are not found
  }

  passwordInput.addEventListener('input', async function() {
      const inputValue = passwordInput.value.trim();

      if (inputValue.length === 6) {
          // Compare the input value with the recovery token stored in the session
          console.log(passwordInput.value);
          const response = await fetch('/verifyToken', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ token: inputValue })
          });

          if (response.ok) {
              // Redirect to the reset-password page if the token is correct
              window.location.href = '../reset';
          } else {
              // Show error message if the token is incorrect
              errorMessage.textContent = 'Error: Incorrect Verification code';
              passwordInput.value = ''; // Clear the input field
          }
      } else {
          errorMessage.textContent = ''; // Clear error message if input length is not 6
      }
  });

  // Click event for pasteButton
  pasteButton.addEventListener('click', async function() {
      navigator.clipboard.readText()
          .then( async clipText => {
              // Check if clipboard text is equal to 6 characters
              if (clipText.length === 6) {
                  passwordInput.value = clipText.substr(0, 6); // Paste the first 6 characters from clipboard
                  console.log(passwordInput.value);
                  // Compare the pasted text with the recovery token stored in the session
                  const response = await fetch('/verifyToken', {
                      method: 'POST',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify({ token: passwordInput.value })
                  });

                  if (response.ok) {
                      // Redirect to the reset-password page if the token is correct
                      window.location.href = '../reset';
                  } else {
                      // Show error message if the token is incorrect
                      errorMessage.textContent = 'Error: Incorrect Verification code';
                  }
              } else {
                  errorMessage.textContent ='u have to enter 6 caracters';
              }
          })
          .catch(err => {
              console.error('Failed to read clipboard contents: ', err);
          });
  });
});
