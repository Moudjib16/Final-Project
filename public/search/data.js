

let cardData = [
  {
    date: "2024-04-22",
    departure: {
      date: "12:06",
      place: "Alger"
    },
    arrival: {
      date: "12:06",
      place: "Oran"
    },
    price: "450 da",
    driver: {
      name: "Ahmed Belkacem",
      rate: "4.5"
    },
    available_places: "2 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "13:00",
      place: "Oran"
    },
    arrival: {
      date: "15:30",
      place: "Constantine"
    },
    price: "500 da",
    driver: {
      name: "Fatima Zohra",
      rate: "4.8"
    },
    available_places: "1 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "09:30",
      place: "Constantine"
    },
    arrival: {
      date: "13:45",
      place: "Annaba"
    },
    price: "600 da",
    driver: {
      name: "Karim Toufik",
      rate: "4.3"
    },
    available_places: "3 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "08:15",
      place: "Annaba"
    },
    arrival: {
      date: "12:30",
      place: "Batna"
    },
    price: "700 da",
    driver: {
      name: "Nadia Saadi",
      rate: "4.7"
    },
    available_places: "2 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "270 da",
    driver: {
      name: "ahmed rami",
      rate: "5"
    },
    available_places: "5 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "270 da",
    driver: {
      name: "ahmed rami",
      rate: "5"
    },
    available_places: "5 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "270 da",
    driver: {
      name: "ahmed rami",
      rate: "5"
    },
    available_places: "5 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "270 da",
    driver: {
      name: "ahmed rami",
      rate: "5"
    },
    available_places: "5 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "270 da",
    driver: {
      name: "ahmed rami",
      rate: "5"
    },
    available_places: "5 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "150 da",
    driver: {
      name: "ahmed rami",
      rate: "3"
    },
    available_places: "5 places"
  },
  {
    date: "2024-04-22",
    departure: {
      date: "10:45",
      place: "Batna"
    },
    arrival: {
      date: "14:00",
      place: "Setif"
    },
    price: "400 da",
    driver: {
      name: "ahmed rami",
      rate: "10"
    },
    available_places: "5 places"
  },
];





document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Fetch card data from the server
    const response = await fetch('/api/cards');
    const data = await response.json();

    // Replace cardData array with fetched data
    cardData = data;

    // Now you can use the updated cardData array as needed
    console.log(cardData); // Example usage

    // You can call your functions here or perform any other operations with the fetched data
    const cheapestCard = findCheapestCard(cardData);
    const mostComfortableCard = findMostComfortableCard(cardData);

    console.log('Cheapest Card:', cheapestCard);
    console.log('Most Comfortable Card:', mostComfortableCard);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});












function findCheapestCard(cards) {
  if (cards.length === 0) {
      return null; 
  }

  let cheapestCard = cards[0];

  for (let i = 1; i < cards.length; i++) {
      if (parseInt(cards[i].price) < parseInt(cheapestCard.price)) {
          cheapestCard = cards[i]; 
      }
  }

  return cheapestCard;
}


function findMostComfortableCard(cards) {
  if (cards.length === 0) {
      return null; 
  }

  let mostComfortableCard = cards[0]; 

  for (let i = 1; i < cards.length; i++) {
      if (parseFloat(cards[i].driver.rate) > parseFloat(mostComfortableCard.driver.rate)) {
          mostComfortableCard = cards[i];
      }
  }

  return mostComfortableCard;
}