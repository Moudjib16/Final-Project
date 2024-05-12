
const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {

    event.preventDefault();

});

lk=document.getElementById('look');
er= document.getElementById('error');
lk.addEventListener('click', function() {
    var input1 = document.getElementById('input1').value.trim();
    var input2 = document.getElementById('input2').value.trim();
    var input4 = document.getElementById('input4').value.trim();
    var input3 = parseInt(document.getElementById('input3').value);
    er.style.display="none";


    const [year, month, day] = input2.split('-');

    const currentDate = new Date();

    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const currentDay = currentDate.getDate();


    if ( parseInt(year) < currentYear  || parseInt( month) < currentMonth || parseInt(day)  < currentDay  ||   input1 === '' || input2 === '' || isNaN(input3) || input3 < 1 || input3 > 5 || input4 === '' || input1===input4 ||
    input1 !== "Batna" &&
    input1 !== "Adrar" &&
    input1 !== "Chlef" &&
    input1 !== "Laghouat" &&
    input1 !== "Oum El Bouaghi" &&
    input1 !== "Batna" &&
    input1 !== "Béjaïa" &&
    input1 !== "Biskra" &&
    input1 !== "Béchar" &&
    input1 !== "Blida" &&
    input1 !== "Bouira" &&
    input1 !== "Tamanrasset" &&
    input1 !== "Tébessa" &&
    input1 !== "Tlemcen" &&
    input1 !== "Tiaret" &&
    input1 !== "Tizi Ouzou" &&
    input1 !== "Algiers (Alger)" &&
    input1 !== "Djelfa" &&
    input1 !== "Jijel" &&
    input1 !== "Sétif" &&
    input1 !== "Saïda" &&
    input1 !== "Skikda" &&
    input1 !== "Sidi Bel Abbès" &&
    input1 !== "Annaba" &&
    input1 !== "Guelma" &&
    input1 !== "Constantine" &&
    input1 !== "Médéa" &&
    input1 !== "Mostaganem" &&
    input1 !== "M'Sila" &&
    input1 !== "Mascara" &&
    input1 !== "Ouargla" &&
    input1 !== "Oran" &&
    input1 !== "El Bayadh" &&
    input1 !== "Illizi" &&
    input1 !== "Bordj Bou Arréridj" &&
    input1 !== "Boumerdès" &&
    input1 !== "El Taref" &&
    input1 !== "Tindouf" &&
    input1 !== "Tissemsilt" &&
    input1 !== "El Oued" &&
    input1 !== "Khenchela" &&
    input1 !== "Souk Ahras" &&
    input1 !== "Tipaza" &&
    input1 !== "Mila" &&
    input1 !== "Aïn Defla" &&
    input1 !== "Naâma" &&
    input1 !== "Aïn Témouchent" &&
    input1 !== "Ghardaïa" &&
    input1 !== "Relizane" ||

    input4 !== "Adrar" &&
    input4 !== "Chlef" &&
    input4 !== "Laghouat" &&
    input4 !== "Oum El Bouaghi" &&
    input4 !== "Batna" &&
    input4 !== "Bejaia" &&
    input4 !== "Biskra" &&
    input4 !== "Bechar" &&
    input4 !== "Blida" &&
    input4 !== "Bouira" &&
    input4 !== "Tamanrasset" &&
    input4 !== "Tebessa" &&
    input4 !== "Tlemcen" &&
    input4 !== "Tiaret" &&
    input4 !== "Tizi Ouzou" &&
    input4 !== "Algiers (Alger)" &&
    input4 !== "Djelfa" &&
    input4 !== "Jijel" &&
    input4 !== "Setif" &&
    input4 !== "Saida" &&
    input4 !== "Skikda" &&
    input4 !== "Sidi Bel Abbes" &&
    input4 !== "Annaba" &&
    input4 !== "Guelma" &&
    input4 !== "Constantine" &&
    input4 !== "Medea" &&
    input4 !== "Mostaganem" &&
    input4 !== "MSila" &&
    input4 !== "Mascara" &&
    input4 !== "Ouargla" &&
    input4 !== "Oran" &&
    input4 !== "El Bayadh" &&
    input4 !== "Illizi" &&
    input4 !== "Bordj Bou Arreridj" &&
    input4 !== "Boumerdes" &&
    input4 !== "El Taref" &&
    input4 !== "Tindouf" &&
    input4 !== "Tissemsilt" &&
    input4 !== "El Oued" &&
    input4 !== "Khenchela" &&
    input4 !== "Souk Ahras" &&
    input4 !== "Tipaza" &&
    input4 !== "Mila" &&
    input4 !== "Ain Defla" &&
    input4 !== "Naama" &&
    input4 !== "Ain Témouchent" &&
    input4 !== "Ghardaia" &&
    input4 !== "Relizane"

) {

    if(parseInt(year) < currentYear  || parseInt( month) < currentMonth || parseInt(day) < currentDay)
    {
        alert('chose a valiable date');
    }

    if (input1 !== "Batna" &&
    input1 !== "Adrar" &&
    input1 !== "Chlef" &&
    input1 !== "Laghouat" &&
    input1 !== "Oum El Bouaghi" &&
    input1 !== "Batna" &&
    input1 !== "Bejaia" &&
    input1 !== "Biskra" &&
    input1 !== "Bechar" &&
    input1 !== "Blida" &&
    input1 !== "Bouira" &&
    input1 !== "Tamanrasset" &&
    input1 !== "Tebessa" &&
    input1 !== "Tlemcen" &&
    input1 !== "Tiaret" &&
    input1 !== "Tizi Ouzou" &&
    input1 !== "Algiers (Alger)" &&
    input1 !== "Djelfa" &&
    input1 !== "Jijel" &&
    input1 !== "Setif" &&
    input1 !== "Saida" &&
    input1 !== "Skikda" &&
    input1 !== "Sidi Bel Abbes" &&
    input1 !== "Annaba" &&
    input1 !== "Guelma" &&
    input1 !== "Constantine" &&
    input1 !== "Medea" &&
    input1 !== "Mostaganem" &&
    input1 !== "MSila" &&
    input1 !== "Mascara" &&
    input1 !== "Ouargla" &&
    input1 !== "Oran" &&
    input1 !== "El Bayadh" &&
    input1 !== "Illizi" &&
    input1 !== "Bordj Bou Arreridj" &&
    input1 !== "Boumerdes" &&
    input1 !== "El Taref" &&
    input1 !== "Tindouf" &&
    input1 !== "Tissemsilt" &&
    input1 !== "El Oued" &&
    input1 !== "Khenchela" &&
    input1 !== "Souk Ahras" &&
    input1 !== "Tipaza" &&
    input1 !== "Mila" &&
    input1 !== "Ain Defla" &&
    input1 !== "Naama" &&
    input1 !== "Ain Témouchent" &&
    input1 !== "Ghardaia" &&
    input1 !== "Relizane" ||


     input4 !== "Adrar" &&
    input4 !== "Chlef" &&
    input4 !== "Laghouat" &&
    input4 !== "Oum El Bouaghi" &&
    input4 !== "Batna" &&
    input4 !== "Bejaia" &&
    input4 !== "Biskra" &&
    input4 !== "Bechar" &&
    input4 !== "Blida" &&
    input4 !== "Bouira" &&
    input4 !== "Tamanrasset" &&
    input4 !== "Tebessa" &&
    input4 !== "Tlemcen" &&
    input4 !== "Tiaret" &&
    input4 !== "Tizi Ouzou" &&
    input4 !== "Algiers (Alger)" &&
    input4 !== "Djelfa" &&
    input4 !== "Jijel" &&
    input4 !== "Setif" &&
    input4 !== "Saida" &&
    input4 !== "Skikda" &&
    input4 !== "Sidi Bel Abbes" &&
    input4 !== "Annaba" &&
    input4 !== "Guelma" &&
    input4 !== "Constantine" &&
    input4 !== "Medea" &&
    input4 !== "Mostaganem" &&
    input4 !== "MSila" &&
    input4 !== "Mascara" &&
    input4 !== "Ouargla" &&
    input4 !== "Oran" &&
    input4 !== "El Bayadh" &&
    input4 !== "Illizi" &&
    input4 !== "Bordj Bou Arreridj" &&
    input4 !== "Boumerdes" &&
    input4 !== "El Taref" &&
    input4 !== "Tindouf" &&
    input4 !== "Tissemsilt" &&
    input4 !== "El Oued" &&
    input4 !== "Khenchela" &&
    input4 !== "Souk Ahras" &&
    input4 !== "Tipaza" &&
    input4 !== "Mila" &&
    input4 !== "Ain Defla" &&
    input4 !== "Naama" &&
    input4 !== "Ain Témouchent" &&
    input4 !== "Ghardaia" &&
    input4 !== "Relizane"

) {
    alert('Please enter a valid wilaya.');

}


        if(input1=== input4 && input1!=='')
        {
            console.log(input1);
           er.innerText='cant go to the same place';
           er.style.display="flex";

        }


   return
    }

    var parametre = [input1, input2, input3,input4];
    console.log('Paramètres:', parametre);

    var queryString = '?input1=' + encodeURIComponent(parametre[0]) + '&input2=' + encodeURIComponent(parametre[1]) + '&input3=' + encodeURIComponent(parametre[2])+'&input4=' + encodeURIComponent(parametre[3]);
    var nextPageURL = './search' + queryString;
    window.location.href = nextPageURL; // Redirect to pass.html with parameters
});

document.addEventListener('click', function(event) {


    let lok = lk.contains(event.target);

    if(!lok)
    {
        er.style.display='none';
    }

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

  let in1 = document.getElementById('input1');
  let in2 = document.getElementById('input4');
  let sug1 = document.getElementById('suggest1');
  let sug2 = document.getElementById('suggest2');



function slect(){
    let op1 = document.querySelectorAll('.wilaya');
    op1.forEach(function(event) {
        event.addEventListener('click', function() {
            if(sug1.style.display==="flex")
            {     
             in1.value = event.innerText;
            sug1.style.display='none';
             }
             if(sug2.style.display==="flex")
            {     
             in2.value = event.innerText;
            sug2.style.display='none';
             }


        });
    });


}
  slect();


in1.addEventListener('click',function(){

    sug1.style.display='flex';

})
in2.addEventListener('click',function(){

    sug2.style.display='flex';

})


document.addEventListener('click', function(event) {

    let isClickInside = in1.contains(event.target);
    let isClickInside1 = sug1.contains(event.target);

    let isClickInside2 = in2.contains(event.target);
    let isClickInside12 = sug2.contains(event.target);

    let lok = lk.contains(event.target);
    if(!lk)
    {
        er.style.display='none';
    }

    if(!isClickInside && !isClickInside1) 
    {
            sug1.style.display = 'none';  
    }

    if(!isClickInside2 && !isClickInside12) 
    {
            sug2.style.display = 'none';  
    }
});







const input1 = document.getElementById('input1');
const input2 = document.getElementById('input4');
const suggest1 = document.getElementById('suggest1');
const suggest2 = document.getElementById('suggest2');

const wilayas = Array.from(suggest1.querySelectorAll('.wilaya'));

input1.addEventListener('input', function() {
    const inputValue = input1.value.toLowerCase();
    const matchedWilayas = wilayas.filter(function(wilaya) {
        return wilaya.textContent.toLowerCase().startsWith(inputValue);
    });

    // Clear previous suggestions
    suggest1.innerHTML = '';

    // Append matched wilayas to suggestion container
    matchedWilayas.forEach(function(matchedWilaya) {
        suggest1.appendChild(matchedWilaya.cloneNode(true));
    });

    slect();
});

input2.addEventListener('input', function() {
    const inputValue = input2.value.toLowerCase();
    const matchedWilayas = wilayas.filter(function(wilaya) {
        return wilaya.textContent.toLowerCase().startsWith(inputValue);
    });

    // Clear previous suggestions
    suggest2.innerHTML = '';

    // Append matched wilayas to suggestion container
    matchedWilayas.forEach(function(matchedWilaya) {
        suggest2.appendChild(matchedWilaya.cloneNode(true));
    });

    slect();
});