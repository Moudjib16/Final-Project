



document.getElementById('look').addEventListener('click', function() {
    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();
    var input4 = document.getElementById('input4').value.trim();
    var input3 = parseInt(document.getElementById('input3').value);

    if (input1 === '' || input2 === '' || isNaN(input3) || input3 < 1 || input3 > 5 || input4 === '') {
        alert('Veuillez remplir tous les champs correctement.');
        return;
    }

    var parametre = [input1, input2, input3,input4];
    console.log('Paramètres:', parametre);

    var queryString = '?input1=' + encodeURIComponent(parametre[0]) + '&input2=' + encodeURIComponent(parametre[1]) + '&input3=' + encodeURIComponent(parametre[2])+'&input4=' + encodeURIComponent(parametre[3]);
    var nextPageURL = '../recherche/pass.html' + queryString;
    window.location.href = nextPageURL; // Redirect to pass.html with parameters
});


bugatti = document.getElementById('bugatti');
bugatti1 = document.getElementById('bugatti1');


document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("input2").min = new Date().toISOString().split("T")[0];
  });


function animate() {
  
    setTimeout(() => {
        
       
        bugatti.style.transform = "translateX(-2000%)";
        bugatti1.style.display = 'flex';
    }, 1200);
    setTimeout(() => {
        
        bugatti1.style.transform="translateX(0%)"
       
    }, 2000);
    setTimeout(() => {
        
        bugatti1.style.transform="translateX(0%)"
       
    }, 2000);
    setTimeout(() => {
        
        bugatti1.style.transform= "translateX(-2000%)";
        bugatti.style.display = 'none';
        bugatti.style.transform = "translateX(100%)";
       
    }, 4000);
    setTimeout(() => {
        
   
        bugatti.style.display = 'flex';
       
    }, 5000);
    setTimeout(() => {    
        bugatti1.style.transform= "translateX(100%)";
        bugatti.style.transform = "translateX(0%)";
        
    }, 5600);
    setTimeout(() => {    
     
        bugatti1.style.display= "none";
    }, 5605);
}

// Call the animate function every 4 seconds
setInterval(animate, 6000);


animate();



function animate1() {
     // Check if any of the subboxes are being hovered over
     const isHovered = document.querySelectorAll('.subbox0:hover').length > 0;
     const isHovered2 = document.querySelectorAll('.subbox1:hover').length > 0;
     const isHovered3 = document.querySelectorAll('.subbox2:hover').length > 0;

     // If any subbox is hovered, return and don't start the animation
     if (isHovered || isHovered2 || isHovered3 ) {
      



        return;
     }
 
     let suubox1 = document.getElementById('subbox1');
     let suubox2 = document.getElementById('subbox2');
     let suubox3 = document.getElementById('subbox3');
  
    setTimeout(() => {
     suubox1.style.transform="translateY(-20%)"
     suubox1.rotate="20deg"
    }, 0);
  
  
    setTimeout(() => {
        suubox2.style.transform="translateY(-20%)"
    }, 200);
    
    // Reset the hover effect after a certain duration
    setTimeout(() => {
        suubox3.style.transform="translateY(-20%)"
    }, 400);
    

    
    setTimeout(() => {
        suubox1.style.transform="translateY(0%)"
       }, 1000);
     
     
       setTimeout(() => {
           suubox2.style.transform="translateY(0%)"

       }, 1200);
       
       // Reset the hover effect after a certain duration
       setTimeout(() => {
           suubox3.style.transform="translateY(0%)"

       }, 1400);
  }
  
  // Initial call to start the animation
  
  animate1();
  
  // Repeat the animation every 2 seconds
  setInterval(animate1, 6000);