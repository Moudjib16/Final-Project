// Function to get email from URL
function getEmailFromURL() {
    const url = window.location.href;
    const emailPattern = /comments\/\?([^&]+)/;
    const match = url.match(emailPattern);

    if (match) {
        return decodeURIComponent(match[1]);
    }
    return null;
}

// Use the extracted email
const gmail = getEmailFromURL();

// Log the extracted email
console.log(gmail);



const username =  document.getElementById('user-name').innerText;


async function submitComment() {
    const commentInput = document.getElementById('comment-input');
    const ratingInput = document.getElementById('output');
    const commentsList = document.getElementById('comments-list');
    
    const response = await fetch('/comments/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ driverEmail : gmail, name : username, comment: commentInput.value    , rate: ratingInput.innerText})
    });

    if (commentInput.value.trim() === '') {
        alert('Please write a comment.');
        return;
    }

    const commentText = commentInput.value;
    const rating = "★".repeat(parseInt(ratingInput.innerText));
    
    const leftovers = "★".repeat(parseInt(5-ratingInput.innerText));

    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');


    const comment_writer = document.createElement('div');
    comment_writer.classList.add('user');
    comment_writer.textContent = user.nom + user.prenom;


    const commentTextDiv = document.createElement('div');
    commentTextDiv.classList.add('comment-text');
    commentTextDiv.textContent = commentText;

    const commentRatingDiv = document.createElement('div');
    commentRatingDiv.classList.add('comment-rating');
    commentRatingDiv.innerHTML = `Rating:  `;

    
    const star = document.createElement('div');
    star.classList.add('star1');
    star.innerHTML = ` ${rating} `;

    const left = document.createElement('div');
    left.classList.add('star2');
    left.innerHTML = ` ${leftovers} `;


    commentDiv.appendChild(comment_writer);
    commentDiv.appendChild(commentTextDiv);
    commentRatingDiv.appendChild(star);
    commentRatingDiv.appendChild(left);
    commentDiv.appendChild(commentRatingDiv);
    
    commentsList.appendChild(commentDiv);

    // Clear the input fields
    commentInput.value = '';
    ratingInput.value = '1';

    newrating();

    const response0 = await fetch('/comments/rating', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ driverEmail : gmail, rate: document.getElementById("stars").innerText})
    });
}




let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
// Funtion to update rating
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = + n ;
}
 
// To remove the pre-applied styling
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}






function roundStarRating() {
      
    const starElement = document.getElementById('stars');

   
    const starText = starElement.textContent;

 
    const starNumber = parseFloat(starText);

   
    const roundedStars = Math.round(starNumber);


  



    return roundedStars;
  }

 


  function updateStars(num){
    let St = document.getElementById("star-num")
   
    if(!num)
        {
            document.getElementById('stars').innerText=0;
            return  
        }
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
   
    St.innerText=txt;
 

  }


  let i = roundStarRating();
  updateStars(i)


let l = document.querySelector(".ret");
  l.addEventListener("click",function(){


    window.history.back();
  })




  
function newrating()
{

    allstar = document.querySelectorAll(".star1");
    let average=0;
     allstar.forEach(S => {
       
        average= average + S.innerText.length;
     })
    
     
    
     document.getElementById("stars").innerText=(average/allstar.length).toFixed(1);
    
     let fix = Math.round(innerText=(average/allstar.length).toFixed(1))
    
     updateStars(fix)
  
}
newrating()