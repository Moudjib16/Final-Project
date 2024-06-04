
let notElements = document.querySelectorAll(".not");

    notElements.forEach(n => {
      n.addEventListener("click", function() {
        let name =n.childNodes[1].childNodes[0].innerText;
        let rate= n.childNodes[2].innerText;
        let gender= n.childNodes[3].innerText
         let signal= n.childNodes[4].innerText
        
        let mn = document.getElementsByClassName("main")
        mn[0].style.width="100%";
        mn[0].style.transform = 'translateX(0%)';

        
        notElements.forEach(el => {
            let signal1= el.childNodes[4].innerText
          el.style.backgroundColor = "#E3F1F6";
          el.style.color="black"; 
          el.childNodes[0].style.borderRadius="30px"

          if(signal1==1){
            el.style.backgroundColor="red";
            
        }
          
        });
        n.style.backgroundColor = "#0082AE"; 
        n.style.color="white";
        n.childNodes[0].style.borderRadius="100px";
      
       
      
        document.getElementById("name-focus").innerText=name
        let stars =rate+' stars';
        document.getElementById("stars").innerText=stars;
        
        stars =roundStarRating();
        updateStars(stars)
       
        if(gender === "female")
        {
            document.getElementById("leftbar").childNodes[1].childNodes[1].src="/notification/notify-client/pics/female.svg"
         
           
        }
        else
        {
             document.getElementById("leftbar").childNodes[1].childNodes[1].src="/notification/notify-client/pics/pfp.svg"
        }
        
        if(signal==1){
           
            document.getElementById("leftbar").childNodes[19].innerText="1" ;
        }else
        {
            document.getElementById("leftbar").childNodes[19].innerText="0" ; 
        }
    
      });
    });


    function roundStarRating() {
      
        const starElement = document.getElementById('stars');
  
       
        const starText = starElement.textContent;
  
     
        const starNumber = parseFloat(starText);
  
       
        const roundedStars = Math.round(starNumber);
  

      
  
    
  
        return roundedStars;
      }
   
     


      function updateStars(num){

        let txt="";
        let i = 0;
        while(i<5){
            if(i<num)
            {
                txt= txt+"★"
            }
            else{
                txt=txt+"☆"
            }

            i++;
        }
        let St = document.getElementById("star-num")
       
        St.innerText=txt;
     

      }

      document.getElementById("ign").addEventListener('click', () => {

    let banButtons = document.querySelectorAll('.ban-btn');


    let confirmationContainer = document.querySelector('.container');


   let blurBackground = document.getElementById('blur-background');
     
   

    let cancelButton = document.querySelector('.Annuler');

    document.querySelector(".ban").innerText="Suprimer";
    document.querySelector(".text1").innerText="Vous êtes sûr que vous voulez suprimer cette notification ?";



    confirmationContainer.style.display = 'flex';
   blurBackground.style.display = 'block';
    
        cancelButton.addEventListener('click', function() {
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        });
  
        SupOrSig(confirmationContainer,blurBackground);
      

});

 
  let i = document.getElementById("count");




  document.getElementById("sig").addEventListener('click', () => {

if(i.innerText==0)
{




    let confirmationContainer = document.querySelector('.container');


   let blurBackground = document.getElementById('blur-background');
     
    const ouiButton = document.querySelector('.oui');

    let cancelButton = document.querySelector('.Annuler');

 

    document.querySelector(".ban").innerText="signialer";
    document.querySelector(".text1").innerText="Vous êtes sûr que vous voulez sigialer cette utulisateur ?";

    confirmationContainer.style.display = 'flex';
   blurBackground.style.display = 'block';
    
        cancelButton.addEventListener('click', function() {
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        });

        SupOrSig(confirmationContainer,blurBackground);

}
else{
    alert("vous avez deja signialer")
}

});


function index(){

let list = document.querySelectorAll(".not")
let i=0;
while(i< list.length )
{
  
if(list[i].style.backgroundColor=="rgb(0, 130, 174)")
{
    return i;
}
i++;
}

}


function SupOrSig(confirmationContainer,blurBackground){
    const ouiButton = document.querySelector('.oui');
    ouiButton.addEventListener('click', function() {
        let i = document.getElementById("count");
        let inum = index();
       
        if(ouiButton.parentElement.parentElement.childNodes[1].innerText=="Suprimer")
        {
            console.log("deleting")
          
            let element =document.querySelectorAll('.big')[inum];
            if (element) {
                element.remove();
              }
            confirmationContainer.style.display = 'none';
            blurBackground.style.display = 'none';
        }
        else{
            if(ouiButton.parentElement.parentElement.childNodes[1].innerText=="signialer")
            {
             i.innerText= 1;
             let select = document.querySelectorAll(".not")[inum]
           
             select.childNodes[4].innerText=1;
                  
              
              confirmationContainer.style.display = 'none';
               blurBackground.style.display = 'none';
            }
        }
      
            
        
       
       
    
    });

}





