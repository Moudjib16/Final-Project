







let plusbtn=document.getElementById('pluss');
let minusbtn=document.getElementById('minuss');
let prix=document.getElementById('prix');


function adjust_color()
{    
if(parseInt(prix.value) <= 3 && parseInt(prix.value) > 1)
{
    prix.style.color='green';

  
}
else 
{
if(parseInt(prix.value) > 3)
{
    prix.style.color='#e05457'; 
  
  
    

}
else{
    prix.style.color='black'; 
}
}
}



let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');
let p5 = document.getElementById('p5');

console.log(p1);


function update_caracters(a){
    switch(a){
    case 1:
        p1.style.display='none';
        p2.style.display='none';
        p4.style.display='none';
        p5.style.display='none';
    break;
    case 2:
        p1.style.display='block';
        p2.style.display='none';
        p4.style.display='none';
        p5.style.display='none';
    break;
    case 3:
        p1.style.display='block';
        p2.style.display='none';
        p4.style.display='none';
        p5.style.display='block';
    break;
    case 4:
        p1.style.display='block';
        p2.style.display='block';
        p4.style.display='none';
        p5.style.display='block';
    break;
    case 5:
        p1.style.display='block';
        p2.style.display='block';
        p4.style.display='block';
        p5.style.display='block';
    break;

    default:
        p1.style.display='none';
        p2.style.display='none';
        p4.style.display='none';
        p5.style.display='none';
    }

}



prix.addEventListener('input',function(event){

    adjust_color();
    update_caracters(parseInt(prix.value));
})


plusbtn.addEventListener('click',function(){
if(parseInt(prix.value) < 5)
{
    prix.value=parseInt(prix.value)+1;
    adjust_color();
    update_caracters(parseInt(prix.value));
}

})


minusbtn.addEventListener('click',function(){
if(parseInt(prix.value) > 1)
{
    prix.value=parseInt(prix.value)-1;
    adjust_color();
    update_caracters(parseInt(prix.value));
}

     
 })




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
    window.location.href = '../prix'; // Replace 'new_page.html' with the URL of the new page
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
    btn7.style.backgroundColor = '#0082AE';
  
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
        });
      
      
  });
  
  