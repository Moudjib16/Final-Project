rech.style.display = "none";

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

let arslane = document.getElementById("arslane");

let input_1 = document.getElementById("input1");
let input_2 = document.getElementById("input2");
let input_3 = document.getElementById("input3");
let input_4 = document.getElementById("input4");

if (input1 !== undefined) {
  arslane.style.display = "flex";
  input_1.value = input1;
  input_2.value = input2;
  input_3.value = input3;
  input_4.value = input4;
}

function createCard(
  depart_date,
  depart_place,
  prix,
  arrive_date,
  arrive_place,
  driver_name,
  rate,
  places,
  id
) {
  const card = document.createElement("div");
  card.classList.add("card");
  let place = "";
  if (places === "1 places") {
    place = "1 place";
  } else {
    place = places;
  }
  card.innerHTML =
    `
      <div class="widget0">
          <p class="depart" id="depart-date">` +
    depart_date +
    `</p>
          <img src="pics/pos.svg" class="pos1">
          <p class="depart" id="depart">` +
    depart_place +
    `</p>
          <p class="prix" id="prix">` +
    prix +
    `</p>
      </div>
      <div class="widget1">
          <p class="difrence" id="defrence">` +
    "4:00" +
    `</p>
          <img src="pics/line.svg" class="line-img">
          <p class="places" id="places">` +
    place +
    `</p>
      </div>
      <div class="widget0">

          <p class="depart" id="arrive-date">` +
    arrive_date +
    `</p>
          <img src="pics/pos.svg" class="pos1">
          <p class="depart" id="arrive">` +
    arrive_place +
    `</p>
      </div>
      <div class="line1"></div>
      <div class="widget0">
          <img src="pics/pfp.svg" class="driver-pfp">
          <p class="deiver" id="driver-name">` +
    driver_name +
    `</p>
          <img src="pics/star.svg" class="star">
          <p class="rating" id="rating">` +
    rate +
    `</p>
      </div>
      <div class="invi" id="invi" >` +
    id +
    `</div>
  `;
  card.id = "card";
  console.log(card + "card created succesfully");
  return card;
}

function createCard_s(
  depart_date,
  depart_place,
  prix,
  arrive_date,
  arrive_place,
  driver_name,
  rate,
  places,
  id
) {
  const card = document.createElement("div");
  card.classList.add("card-s");
  let place = "";
  if (places === "1 places") {
    place = "1 place";
  } else {
    place = places;
  }
  card.innerHTML =
    `
        <div class="widget0">
            <p class="depart" id="depart-date">` +
    depart_date +
    `</p>
            <img src="pics/pos.svg" class="pos1">
            <p class="depart" id="depart">` +
    depart_place +
    `</p>
            <p class="prix" id="prix">` +
    prix +
    `</p>
        </div>
        <div class="widget1">
            <p class="difrence" id="defrence">` +
    "4:00" +
    `</p>
            <img src="pics/line.svg" class="line-img">
            <p class="places" id="places">` +
    place +
    `</p>
        </div>
        <div class="widget0">
  
            <p class="depart" id="arrive-date">` +
    arrive_date +
    `</p>
            <img src="pics/pos.svg" class="pos1">
            <p class="depart" id="arrive">` +
    arrive_place +
    `</p>
        </div>
        <div class="line1"></div>
        <div class="widget0">
            <img src="pics/pfp.svg" class="driver-pfp">
            <p class="deiver" id="driver-name">` +
    driver_name +
    `</p>
            <img src="pics/star.svg" class="star">
            <p class="rating" id="rating">` +
    rate +
    `</p>
        </div>
        <div class="invi" id="invi" >` +
    id +
    `</div>
    `;
  card.id = "card";
  console.log(card + "cards created succesfully");
  return card;
}

function searchCards(date, departurePlace, arrivalPlace, availablePlaces) {
  return cardData.filter((card) => {
    // Check if date matches
    if (date && card.date != date) {
      console.log("no cards on this date");
      return false;
    }

    // Check if departure place matches
    if (departurePlace && card.departure.place != departurePlace) {
      console.log("no cards on this depart");
      return false;
    }

    // Check if arrival place matches
    if (arrivalPlace && card.arrival.place != arrivalPlace) {
      console.log("no cards on this arrivee");
      return false;
    }

    // Check if available places match
    if (availablePlaces && card.available_places > availablePlaces)
      return false;

    // If all criteria match, return true to keep the card in the filtered arra
    return true;
  });
}

function sortByDepartureAscending(cards) {
  return cards.sort((a, b) => {
    const departureA = a.departure.date.split(":").map(Number); // Extract hour and minute from departure time
    const departureB = b.departure.date.split(":").map(Number);
    if (departureA[0] !== departureB[0]) {
      return departureA[0] - departureB[0]; // Compare hours
    } else {
      return departureA[1] - departureB[1]; // Compare minutes if hours are equal
    }
  });
}

function sortByRateDescending(cards) {
  return cards.sort((a, b) => {
    const rateA = parseFloat(a.driver.rate); // Extract the rate from the driver object
    const rateB = parseFloat(b.driver.rate);
    return rateB - rateA; // Compare in reverse order for descending sorting
  });
}
function sortByPriceAscending(cards) {
  return cards.sort((a, b) => {
    const priceA = parseFloat(a.price.split(" ")[0]); // Extracting the numeric part of price
    const priceB = parseFloat(b.price.split(" ")[0]);
    return priceA - priceB;
  });
}

let filteredCards = [];

function show(i) {
  arslane.style.display = "none";
  column1.innerHTML = "";
  column2.innerHTML = "";
  adjust1.innerHTML = "";
  adjust2.innerHTML = "";
  if (
    input_1.value === "" ||
    input_2.value === "" ||
    isNaN(input_3.value) ||
    input_3.value < 1 ||
    input_3.value > 5
  ) {
    return;
  }
  filteredCards = searchCards(
    input_2.value,
    input_1.value,
    input_4.value,
    input_3.value + " places"
  );

  if (i === 0) {
    sortByDepartureAscending(filteredCards);
  } else {
    if (i === 1) {
      sortByPriceAscending(filteredCards);
    } else {
      if (i === 2) {
        sortByRateDescending(filteredCards);
      }
    }
  }

  column2.style.display = "none";
  filteredCards.forEach((data, index) => {
    const { departure, arrival, price, driver, available_places, id } = data;
    const card = createCard(
      departure.date,
      departure.place,
      price,
      arrival.date,
      arrival.place,
      driver.name,
      driver.rate,
      available_places,
      id
    );

    if (index % 2 === 0) {
      column1.appendChild(card);
    } else {
      column2.style.display = "block";
      column2.appendChild(card);
    }
  });
  if (filteredCards.length !== 0) {
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
      cheapest.available_places,
      cheapest.id
    );
    let cd2 = createCard_s(
      mostComfortable.departure.date,
      mostComfortable.departure.place,
      mostComfortable.price,
      mostComfortable.arrival.date,
      mostComfortable.arrival.place,
      mostComfortable.driver.name,
      mostComfortable.driver.rate,
      mostComfortable.available_places,
      mostComfortable.id
    );

    adjust1.innerHTML = "  <p class='tit'>Le moins cher</p>";
    adjust2.innerHTML = "  <p class='tit'>Le plus comfort</p>";

    adjust1.appendChild(cd1);
    adjust2.appendChild(cd2);

    arslane.style.display = "flex";

    var cards = document.querySelectorAll("#card");

    cards.forEach(function (element) {
      element.addEventListener("click", function () {
        let cardParams = {
          id: element.querySelector("#invi").textContent,
          depart_date: element.querySelector("#depart-date").textContent,
          depart_place: element.querySelector("#depart").textContent,
          arrive_date: element.querySelector("#arrive-date").textContent, // Assuming this is the same as depart_date
          arrive_place: element.querySelector("#arrive").textContent, // Assuming this is the same as depart_place
          prix: element.querySelector("#prix").textContent,
          place: element.querySelector("#places").textContent,
          driver_name: element.querySelector("#driver-name").textContent,
          rate: element.querySelector("#rating").textContent,
        };

        // Constructing the query string
        let queryString = Object.keys(cardParams)
          .map((key) => `${key}=${encodeURIComponent(cardParams[key])}`)
          .join("&");

        // Redirecting to the next page with query parameters
        window.location.href = `../trajet?${queryString}`;
      });
    });
  }
}

const form = document.getElementById("myForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
});

lk = document.getElementById("look");
er = document.getElementById("error");

lk.addEventListener("click", function () {
  er.style.display = "none";

  const [year, month, day] = input_2.value.split("-");

  const currentDate = new Date();

  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentDay = currentDate.getDate();

  if (
    parseInt(year) < currentYear ||
    parseInt(month) < currentMonth ||
    parseInt(day) < currentDay ||
    input_1.value === "" ||
    input_2.value === "" ||
    isNaN(input_3.value) ||
    input_3.value < 1 ||
    input_3.value > 5 ||
    input_4.value === "" ||
    input_1.value === input_4.value ||
    (input_1.value !== "Batna" &&
      input_1.value !== "Adrar" &&
      input_1.value !== "Chlef" &&
      input_1.value !== "Laghouat" &&
      input_1.value !== "Oum El Bouaghi" &&
      input_1.value !== "Batna" &&
      input_1.value !== "Bejaia" &&
      input_1.value !== "Biskra" &&
      input_1.value !== "Bechar" &&
      input_1.value !== "Blida" &&
      input_1.value !== "Bouira" &&
      input_1.value !== "Tamanrasset" &&
      input_1.value !== "Tebessa" &&
      input_1.value !== "Tlemcen" &&
      input_1.value !== "Tiaret" &&
      input_1.value !== "Tizi Ouzou" &&
      input_1.value !== "Algiers (Alger)" &&
      input_1.value !== "Djelfa" &&
      input_1.value !== "Jijel" &&
      input_1.value !== "Setif" &&
      input_1.value !== "Saida" &&
      input_1.value !== "Skikda" &&
      input_1.value !== "Sidi Bel Abbes" &&
      input_1.value !== "Annaba" &&
      input_1.value !== "Guelma" &&
      input_1.value !== "Constantine" &&
      input_1.value !== "Medea" &&
      input_1.value !== "Mostaganem" &&
      input_1.value !== "MSila" &&
      input_1.value !== "Mascara" &&
      input_1.value !== "Ouargla" &&
      input_1.value !== "Oran" &&
      input_1.value !== "El Bayadh" &&
      input_1.value !== "Illizi" &&
      input_1.value !== "Bordj Bou Arreridj" &&
      input_1.value !== "Boumerdes" &&
      input_1.value !== "El Taref" &&
      input_1.value !== "Tindouf" &&
      input_1.value !== "Tissemsilt" &&
      input_1.value !== "El Oued" &&
      input_1.value !== "Khenchela" &&
      input_1.value !== "Souk Ahras" &&
      input_1.value !== "Tipaza" &&
      input_1.value !== "Mila" &&
      input_1.value !== "Ain Defla" &&
      input_1.value !== "Naama" &&
      input_1.value !== "Ain Temouchent" &&
      input_1.value !== "Ghardaia" &&
      input_1.value !== "Relizane") ||
    (input_4.value !== "Adrar" &&
      input_4.value !== "Chlef" &&
      input_4.value !== "Laghouat" &&
      input_4.value !== "Oum El Bouaghi" &&
      input_4.value !== "Batna" &&
      input_4.value !== "Bejaia" &&
      input_4.value !== "Biskra" &&
      input_4.value !== "Bechar" &&
      input_4.value !== "Blida" &&
      input_4.value !== "Bouira" &&
      input_4.value !== "Tamanrasset" &&
      input_4.value !== "Tebessa" &&
      input_4.value !== "Tlemcen" &&
      input_4.value !== "Tiaret" &&
      input_4.value !== "Tizi Ouzou" &&
      input_4.value !== "Algiers (Alger)" &&
      input_4.value !== "Djelfa" &&
      input_4.value !== "Jijel" &&
      input_4.value !== "Setif" &&
      input_4.value !== "Saida" &&
      input_4.value !== "Skikda" &&
      input_4.value !== "Sidi Bel Abbes" &&
      input_4.value !== "Annaba" &&
      input_4.value !== "Guelma" &&
      input_4.value !== "Constantine" &&
      input_4.value !== "Medea" &&
      input_4.value !== "Mostaganem" &&
      input_4.value !== "MSila" &&
      input_4.value !== "Mascara" &&
      input_4.value !== "Ouargla" &&
      input_4.value !== "Oran" &&
      input_4.value !== "El Bayadh" &&
      input_4.value !== "Illizi" &&
      input_4.value !== "Bordj Bou Arreridj" &&
      input_4.value !== "Boumerdes" &&
      input_4.value !== "El Taref" &&
      input_4.value !== "Tindouf" &&
      input_4.value !== "Tissemsilt" &&
      input_4.value !== "El Oued" &&
      input_4.value !== "Khenchela" &&
      input_4.value !== "Souk Ahras" &&
      input_4.value !== "Tipaza" &&
      input_4.value !== "Mila" &&
      input_4.value !== "Ain Defla" &&
      input_4.value !== "Naama" &&
      input_4.value !== "Ain Témouchent" &&
      input_4.value !== "Ghardaia" &&
      input_4.value !== "Relizane")
  ) {
    if (
      parseInt(year) < currentYear ||
      parseInt(month) < currentMonth ||
      parseInt(day) < currentDay
    ) {
    }

    if (
      (input_1.value !== "Batna" &&
        input_1.value !== "Adrar" &&
        input_1.value !== "Chlef" &&
        input_1.value !== "Laghouat" &&
        input_1.value !== "Oum El Bouaghi" &&
        input_1.value !== "Batna" &&
        input_1.value !== "Bejaia" &&
        input_1.value !== "Biskra" &&
        input_1.value !== "Bechar" &&
        input_1.value !== "Blida" &&
        input_1.value !== "Bouira" &&
        input_1.value !== "Tamanrasset" &&
        input_1.value !== "Tebessa" &&
        input_1.value !== "Tlemcen" &&
        input_1.value !== "Tiaret" &&
        input_1.value !== "Tizi Ouzou" &&
        input_1.value !== "Algiers (Alger)" &&
        input_1.value !== "Djelfa" &&
        input_1.value !== "Jijel" &&
        input_1.value !== "Setif" &&
        input_1.value !== "Saida" &&
        input_1.value !== "Skikda" &&
        input_1.value !== "Sidi Bel Abbes" &&
        input_1.value !== "Annaba" &&
        input_1.value !== "Guelma" &&
        input_1.value !== "Constantine" &&
        input_1.value !== "Medea" &&
        input_1.value !== "Mostaganem" &&
        input_1.value !== "MSila" &&
        input_1.value !== "Mascara" &&
        input_1.value !== "Ouargla" &&
        input_1.value !== "Oran" &&
        input_1.value !== "El Bayadh" &&
        input_1.value !== "Illizi" &&
        input_1.value !== "Bordj Bou Arreridj" &&
        input_1.value !== "Boumerdes" &&
        input_1.value !== "El Taref" &&
        input_1.value !== "Tindouf" &&
        input_1.value !== "Tissemsilt" &&
        input_1.value !== "El Oued" &&
        input_1.value !== "Khenchela" &&
        input_1.value !== "Souk Ahras" &&
        input_1.value !== "Tipaza" &&
        input_1.value !== "Mila" &&
        input_1.value !== "Ain Defla" &&
        input_1.value !== "Naama" &&
        input_1.value !== "Ain Temouchent" &&
        input_1.value !== "Ghardaia" &&
        input_1.value !== "Relizane") ||
      (input_4.value !== "Adrar" &&
        input_4.value !== "Chlef" &&
        input_4.value !== "Laghouat" &&
        input_4.value !== "Oum El Bouaghi" &&
        input_4.value !== "Batna" &&
        input_4.value !== "Bejaia" &&
        input_4.value !== "Biskra" &&
        input_4.value !== "Bechar" &&
        input_4.value !== "Blida" &&
        input_4.value !== "Bouira" &&
        input_4.value !== "Tamanrasset" &&
        input_4.value !== "Tebessa" &&
        input_4.value !== "Tlemcen" &&
        input_4.value !== "Tiaret" &&
        input_4.value !== "Tizi Ouzou" &&
        input_4.value !== "Algiers (Alger)" &&
        input_4.value !== "Djelfa" &&
        input_4.value !== "Jijel" &&
        input_4.value !== "Setif" &&
        input_4.value !== "Saida" &&
        input_4.value !== "Skikda" &&
        input_4.value !== "Sidi Bel Abbes" &&
        input_4.value !== "Annaba" &&
        input_4.value !== "Guelma" &&
        input_4.value !== "Constantine" &&
        input_4.value !== "Medea" &&
        input_4.value !== "Mostaganem" &&
        input_4.value !== "MSila" &&
        input_4.value !== "Mascara" &&
        input_4.value !== "Ouargla" &&
        input_4.value !== "Oran" &&
        input_4.value !== "El Bayadh" &&
        input_4.value !== "Illizi" &&
        input_4.value !== "Bordj Bou Arreridj" &&
        input_4.value !== "Boumerdes" &&
        input_4.value !== "El Taref" &&
        input_4.value !== "Tindouf" &&
        input_4.value !== "Tissemsilt" &&
        input_4.value !== "El Oued" &&
        input_4.value !== "Khenchela" &&
        input_4.value !== "Souk Ahras" &&
        input_4.value !== "Tipaza" &&
        input_4.value !== "Mila" &&
        input_4.value !== "Ain Defla" &&
        input_4.value !== "Naama" &&
        input_4.value !== "Ain Témouchent" &&
        input_4.value !== "Ghardaia" &&
        input_4.value !== "Relizane")
    ) {
      alert("Please enter a valid wilaya.");
    }

    if (input_1.value === input_4.value && input_1.value !== "") {
      er.innerText = "cant go to the same place";
      er.style.display = "flex";
    }
    show(0);

    return;
  }

  show(0);
});

document.addEventListener("click", function (event) {
  let lok = lk.contains(event.target);

  if (!lok) {
    er.style.display = "none";
  }
});

// document.getElementById('look').addEventListener('click', function() {

//     if (input_1.value === '' || input_2.value === '' || isNaN(input_3.value) || input_3.value < 1 || input_3.value > 5) {
//         console.log(arslane);
//         return;
//     }

//    show(0)

// });

show(0);

const radioInputs = document.querySelectorAll(".allo");

radioInputs.forEach((input) => {
  // Add click event listener to each input
  input.addEventListener("click", function () {
    // Check if the radio input is checked
    if (input.checked) {
      console.log(input.nextElementSibling.textContent);
      if (input.nextElementSibling.textContent == "La date la plus proche") {
        show(0);
      } else {
        if (input.nextElementSibling.textContent == "Prix le plus bas") {
          show(1);
        } else {
          if (input.nextElementSibling.textContent == "Rating le plus haut") {
            show(2);
          }
        }
      }
    }
  });
});

let sug1 = document.getElementById("suggest1");
let sug2 = document.getElementById("suggest2");
console.log(sug2);

function slect() {
  let op1 = document.querySelectorAll(".wilaya");
  op1.forEach(function (event) {
    event.addEventListener("click", function () {
      if (sug1.style.display === "flex") {
        input_1.value = event.innerText;
        sug1.style.display = "none";
      }
      if (sug2.style.display === "flex") {
        input_4.value = event.innerText;
        sug2.style.display = "none";
      }
    });
  });
}
slect();

input_1.addEventListener("click", function () {
  sug1.style.display = "flex";
});
input_4.addEventListener("click", function () {
  sug2.style.display = "flex";
});

document.addEventListener("click", function (event) {
  let isClickInside = input_1.contains(event.target);
  let isClickInside1 = sug1.contains(event.target);

  let isClickInside2 = input_4.contains(event.target);
  let isClickInside12 = sug2.contains(event.target);

  let lok = lk.contains(event.target);
  if (!lk) {
    er.style.display = "none";
  }

  if (!isClickInside && !isClickInside1) {
    sug1.style.display = "none";
  }

  if (!isClickInside2 && !isClickInside12) {
    sug2.style.display = "none";
  }
});

const suggest1 = document.getElementById("suggest1");
const suggest2 = document.getElementById("suggest2");

const wilayas = Array.from(suggest1.querySelectorAll(".wilaya"));

input_1.addEventListener("input", function () {
  const inputValue = input_1.value.toLowerCase();
  const matchedWilayas = wilayas.filter(function (wilaya) {
    return wilaya.textContent.toLowerCase().startsWith(inputValue);
  });

  // Clear previous suggestions
  suggest1.innerHTML = "";

  // Append matched wilayas to suggestion container
  matchedWilayas.forEach(function (matchedWilaya) {
    suggest1.appendChild(matchedWilaya.cloneNode(true));
  });

  slect();
});

input_4.addEventListener("input", function () {
  const inputValue = input_4.value.toLowerCase();
  const matchedWilayas = wilayas.filter(function (wilaya) {
    return wilaya.textContent.toLowerCase().startsWith(inputValue);
  });

  // Clear previous suggestions
  suggest2.innerHTML = "";

  // Append matched wilayas to suggestion container
  matchedWilayas.forEach(function (matchedWilaya) {
    suggest2.appendChild(matchedWilaya.cloneNode(true));
  });

  slect();
});
