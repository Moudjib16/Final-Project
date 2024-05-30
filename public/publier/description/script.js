

 // Get references to the buttons
const precedentButton = document.getElementById('precedent');
const prochaineButton = document.getElementById('prochaine');

// Add event listener to the "precedent" button
precedentButton.addEventListener('click', function() {
    // Navigate to the previous page
    window.history.back();
});

// Add event listener to the "prochaine" button
prochaineButton.addEventListener('click', function() {
    // Navigate to a new page
    window.location.href = '/publier/tripcreated'; // Replace 'new_page.html' with the URL of the new page
});






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
    btn9.style.backgroundColor = '#0082AE';
  
    btn1.addEventListener('click', function() {
      resetButtons();
      this.style.backgroundColor = '#0082AE';
      window.location.href = '../pub1/pass.html'; 
    });
  
    btn2.addEventListener('click', function() {
      resetButtons();
      this.style.backgroundColor = '#0082AE';
      window.location.href = '../pub2/pass.html'; 
    });
  
    btn3.addEventListener('click', function() {
      resetButtons();
      this.style.backgroundColor = '#0082AE';
      window.location.href = '../pub3/pass.html'; 
    });
  
    btn4.addEventListener('click', function() {
      resetButtons();
      this.style.backgroundColor = '#0082AE';
      window.location.href = '../pub4/pass.html'; 
    });
  
        btn5.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
          window.location.href = '../calendaire/index.html'; 
        });
      
        btn6.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
          window.location.href = '../heure/pass.html'; 
        });
      
        btn7.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
          window.location.href = '../people/pass.html'; 
        });
      
        btn8.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
          window.location.href = '../prix/pass.html'; 
        });
        btn9.addEventListener('click', function() {
          resetButtons();
          this.style.backgroundColor = '#0082AE';
        });
  });
  
  