
rech.style.display = 'none';

function getQueryParams() {
    var params = {};
    var queryString = window.location.search.substring(1);
    var pairs = queryString.split("&");
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split("=");
        params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
    }
    return params;
}

// Get the query parameters
var queryParams = getQueryParams();

// Access the parameter valuesif

var input1 = queryParams.input1;
var input2 = queryParams.input2;
var input3 = queryParams.input3;
var input4 = queryParams.input4;

let arslane = document.getElementById('arslane');

let input_1 = document.getElementById('input1');
let input_2 = document.getElementById('input2');
let input_3 = document.getElementById('input3');
let input_4 = document.getElementById('input4');

if(input1 !== undefined)
{
arslane.style.display='flex';
input_1.value=input1;
input_2.value=input2;
input_3.value=input3;
input_4.value=input4;

}








function createCard(depart_date,depart_place,prix,arrive_date,arrive_place,driver_name,rate,places) {
  const card = document.createElement('div');
  card.classList.add('card');
  let place = ''
  if(places === "1 places")
  {
    place = '1 place'
  }
  else
  {
    place= places;
  }
  card.innerHTML = `
      <div class="widget0">
          <p class="depart" id="depart-date">`+ depart_date+`</p>
          <img src="pics/pos.svg" class="pos1">
          <p class="depart" id="depart">`+ depart_place+`</p>
          <p class="prix" id="prix">`+ prix+`</p>
      </div>
      <div class="widget1">
          <p class="difrence" id="defrence">`+ '4:00' +`</p>
          <img src="pics/line.svg" class="line-img">
          <p class="places" id="places">`+ place +`</p>
      </div>
      <div class="widget0">

          <p class="depart" id="arrive-date">`+ arrive_date+`</p>
          <img src="pics/pos.svg" class="pos1">
          <p class="depart" id="arrive">`+ arrive_place+`</p>
      </div>
      <div class="line1"></div>
      <div class="widget0">
          <img src="pics/pfp.svg" class="driver-pfp">
          <p class="deiver" id="driver-name">`+ driver_name+`</p>
          <img src="pics/star.svg" class="star">
          <p class="rating" id="rating">`+ rate +`</p>
      </div>
  `;
  card.id = 'card';
  console.log(card + "card created succesfully");
  return card;

  
}




function createCard_s(depart_date,depart_place,prix,arrive_date,arrive_place,driver_name,rate,places) {

    const card = document.createElement('div');
    card.classList.add('card-s');
    let place = ''
    if(places === "1 places")
    {
      place = '1 place'
    }
    else
    {
      place= places;
    }
    card.innerHTML = `
        <div class="widget0">
            <p class="depart" id="depart-date">`+ depart_date+`</p>
            <img src="pics/pos.svg" class="pos1">
            <p class="depart" id="depart">`+ depart_place+`</p>
            <p class="prix" id="prix">`+ prix+`</p>
        </div>
        <div class="widget1">
            <p class="difrence" id="defrence">`+ '4:00' +`</p>
            <img src="pics/line.svg" class="line-img">
            <p class="places" id="places">`+ place +`</p>
        </div>
        <div class="widget0">
  
            <p class="depart" id="arrive-date">`+ arrive_date+`</p>
            <img src="pics/pos.svg" class="pos1">
            <p class="depart" id="arrive">`+ arrive_place+`</p>
        </div>
        <div class="line1"></div>
        <div class="widget0">
            <img src="pics/pfp.svg" class="driver-pfp">
            <p class="deiver" id="driver-name">`+ driver_name+`</p>
            <img src="pics/star.svg" class="star">
            <p class="rating" id="rating">`+ rate +`</p>
        </div>
    `;
    card.id = 'card';
    console.log(card + "cards created succesfully");
    return card;
  
    
  }




  
  
function searchCards(date, departurePlace, arrivalPlace, availablePlaces) {
  return cardData.filter(card => {
      // Check if date matches
      if (date && card.date != date) {
        console.log("no cards on this date")
        return false;}

      // Check if departure place matches
      if (departurePlace && card.departure.place != departurePlace) {
        console.log("no cards on this depart")
        return false;}

      // Check if arrival place matches
      if (arrivalPlace && card.arrival.place != arrivalPlace) {
        console.log("no cards on this arrivee")
        return false;}

      // Check if available places match
      if (availablePlaces && card.available_places != availablePlaces) {
        console.log("no cards on this places")
        return false;}

      // If all criteria match, return true to keep the card in the filtered array
      console.log("found some cards");
      return true;
  });
}



let filteredCards = [];



function show(){

  arslane.style.display="none";
  column1.innerHTML = "";
  column2.innerHTML = "";
  adjust1.innerHTML ="";
  adjust2.innerHTML ="";
if (input_1.value === '' || input_2.value === '' || isNaN(input_3.value) || input_3.value < 1 || input_3.value > 5) 
{
  return
}
filteredCards=searchCards(input_2.value,input_1.value,input_4.value,  input_3.value+" places");
 
column2.style.display='none';
filteredCards.forEach((data, index) => {
    const { departure, arrival, price, driver, available_places } = data;
    const card = createCard(
        departure.date,
        departure.place,
        price,
        arrival.date,
        arrival.place,
        driver.name,
        driver.rate,
        available_places
    );
  
    if (index % 2 === 0) {
      
        column1.appendChild(card);
    } else {
      column2.style.display='block';
        column2.appendChild(card);
    }
});
console.log(filteredCards)
if(filteredCards.length !== 0)
{

  let cheapest = findCheapestCard(filteredCards);
  let mostComfortable = findMostComfortableCard(filteredCards);
  

  let cd1 = createCard_s(
  cheapest.departure.date,
  cheapest.departure.place,
  cheapest.price,
  cheapest.arrival.date,
  cheapest.arrival.place,
  cheapest.driver.name,
  cheapest.driver.rate,
  cheapest.available_places
  );
  let cd2 = createCard_s(
      mostComfortable.departure.date,
      mostComfortable.departure.place,
      mostComfortable.price,
      mostComfortable.arrival.date,
      mostComfortable.arrival.place,
      mostComfortable.driver.name,
      mostComfortable.driver.rate,
      mostComfortable.available_places
      );

      adjust1.innerHTML ="  <p class='tit'>Le moins cher</p>";
      adjust2.innerHTML ="  <p class='tit'>Le plus comfort</p>";
  
   adjust1.appendChild(cd1);
   adjust2.appendChild(cd2);

 
arslane.style.display="flex";





var cards = document.querySelectorAll("#card");


cards.forEach(function(element)
{
element.addEventListener('click',function(){

  let cardParams = {
    depart_date: element.querySelector('#depart-date').textContent,
    depart_place: element.querySelector('#depart').textContent,
    arrive_date: element.querySelector('#arrive-date').textContent, // Assuming this is the same as depart_date
    arrive_place: element.querySelector('#arrive').textContent, // Assuming this is the same as depart_place
    prix: element.querySelector('#prix').textContent,
    place: element.querySelector('#places').textContent,
    driver_name: element.querySelector('#driver-name').textContent,
    rate: element.querySelector('#rating').textContent
};

  // Constructing the query string
  let queryString = Object.keys(cardParams).map(key => `${key}=${encodeURIComponent(cardParams[key])}`).join('&');

  // Redirecting to the next page with query parameters
  window.location.href = `../trajet?${queryString}`;


});
});
}
 

}










document.getElementById('look').addEventListener('click', function() {


    if (input_1.value === '' || input_2.value === '' || isNaN(input_3.value) || input_3.value < 1 || input_3.value > 5) {
        window.location.href='../no-location';
        return;
    }

   show()
   


});




  show()