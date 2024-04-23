



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


bugatti.addEventListener('click', function(){
    bugatti.style.transform="translateX( -1920%)"
    bugatti1.style.display='flex'

  
    setTimeout(() => {
     
        bugatti1.style.transform="translateX(0%)"

    },1200);
    setTimeout(() => {
        
        bugatti.style.display='none'
        bugatti.style.transform="translateX(100%)"

    },2000);


})


bugatti1.addEventListener('click', function(){
    bugatti1.style.transform="translateX( -1920%)"
    bugatti.style.display='flex'

  
    setTimeout(() => {
      
        bugatti.style.transform="translateX(0%)"
   
    },1200);

    setTimeout(() => {
        
    bugatti1.style.display='none'
    bugatti1.style.transform="translateX(100%)"

    },2000);
})