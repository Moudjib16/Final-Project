
document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.getElementById('btn1');
    const btn2 = document.getElementById('btn2');
    const btn3 = document.getElementById('btn3');
    const btn4 = document.getElementById('btn4');
    const btn5 = document.getElementById('btn5');
    const btn6 = document.getElementById('btn6');
    const btn7 = document.getElementById('btn7');
    const btn8 = document.getElementById('btn8');
    const btn9 = document.getElementById('btn9');
  
    // Fonction pour réinitialiser la couleur de fond de tous les boutons
    function resetButtons() {
      btn1.style.backgroundColor = '#ffffff';
      btn2.style.backgroundColor = '#ffffff';
      btn3.style.backgroundColor = '#ffffff';
      btn4.style.backgroundColor = '#ffffff';
      btn5.style.backgroundColor = '#ffffff';
      btn6.style.backgroundColor = '#ffffff';
      btn7.style.backgroundColor = '#ffffff';
      btn8.style.backgroundColor = '#ffffff';
      btn9.style.backgroundColor = '#ffffff';
    }
  
    // Initialiser la couleur de fond du premier bouton
    btn1.style.backgroundColor = '#0082AE';
  
    btn1.addEventListener('click', function() {
      resetButtons();
      this.style.backgroundColor = '#0082AE';
    });
  
  
});





// Access the submit button by its ID
const submitButton = document.getElementById('suiv');


// Add event listener to the submit button
submitButton.addEventListener('click', async () => {
    try {
        // Get the value from the input field
        const depart = document.getElementById('commencer').value;

        // Send a POST request to the server with the data

        if (response.ok) {
            // Redirect to the next page after successful save
            window.location.href = '/publier/page2';
        } else {
            console.error('Server error:', response.status);
        }
    } catch (error) {
        console.error('Error sending data to server:', error);
    }
});



  
  // Add event listener to the "prochaine" button
//   prochaineButton.addEventListener('click', function() {
      // Navigate to a new page
       // Replace 'new_page.html' with the URL of the new page
//   });
  