//Set function to reload page(restart)
const restart = document.querySelector("#restart-button");
restart.addEventListener("click", function() {
  location.reload();
});

const pets = [
  {
    id: 1,
    emoji: "🐾",
    name: "Whiskers",
    Epitaph: "Curiosity didn't just kill the cat; it made Whiskers legendary.",
  },
  {
    id: 2,
    emoji: "🐩",
    name: "Fluffy",
    Epitaph: "Curiosity didn't just kill the cat; it made Whiskers legendary.",
  },
  {
    id: 3,
    emoji: "🦇",
    name: "Shadow",
    Epitaph: "In loving memory of Fluffy, forever our cuddle buddy.",
  },
  {
    id: 4,
    emoji: "🧤",
    name: "Mittens",
    Epitaph: "Gone but never forgotten, our loyal Shadow.",
  },
  {
    id: 5,
    emoji: "☀️",
    name: "Sunny ",
    Epitaph: "Sunny, forever bringing warmth to our hearts.",
  },
  {
    id: 6,
    emoji: "🌙",
    name: "Midnight",
    Epitaph: "Under the midnight sky, our feline friend rests.",
  },
  {
    id: 7,
    emoji: "🍪",
    name: "Oreo",
    Epitaph: "Oreo, the sweetest cookie in our lives.",
  },
  {
    id: 8,
    emoji: "🌸",
    name: "Bella",
    Epitaph: "Beautiful Bella, gone but forever in our hearts.",
  },
  {
    id: 9,
    emoji: "🦁",
    name: "Simba",
    Epitaph: "Simba, the king of our jungle.",
  },
  {
    id: 10,
    emoji: "🌕",
    name: "Luna",
    Epitaph: "Luna, lighting up our darkest nights.",
  },
];

//First Step - get animals to pop up on the screen
const petsContainer = document.getElementById("pets-container");

//Create the pet element with all its child elements (emoji, name, 2 x meters, button)
function createPetElement(pet) {
  const petContainer = document.createElement("div");
  //target the id & add a class
  petContainer.id = `pet-container-${pet.id}`;
  petContainer.classList.add("pet-container");
  //create emoji div and add emoji
  const petEmoji = document.createElement("div");
  petEmoji.id = "pet-emoji";
  petEmoji.textContent = pet.emoji;
  //create h3 element for name and add
  const petName = document.createElement("h3");
  petName.textContent = pet.name;

  //create hunger container that will hold the label + 2 x bars
  const hungerContainer = document.createElement("div");
  //hungerContainer.classList.add("meter-container");
  hungerContainer.classList.add("hunger-container");

  const hungerLabel = document.createElement("label");
  hungerLabel.setAttribute("for", "hunger");
  hungerLabel.textContent = "Hunger";

  //creat div that holds the 2 meters that is on top of each other
  const hungerMeterContainer = document.createElement("div");
  hungerMeterContainer.classList.add("hunger-meter-container");
  hungerContainer.appendChild(hungerMeterContainer);
  //add the meterOverlay, this will be the <div> that changes color

  const hungerMeter = document.createElement("meter");
  hungerMeter.classList.add("hunger-meter");
  hungerMeter.value = "";
  const overlayHunger = document.createElement("div");
  overlayHunger.classList.add("overlay-hunger");

  hungerContainer.appendChild(hungerLabel);
  hungerContainer.appendChild(hungerMeter);
  hungerMeter.appendChild(overlayHunger);

  const loveContainer = document.createElement("div");
  loveContainer.classList.add("meter-container");
  //loveContainer.classList.add("love-container");

  const loveLabel = document.createElement("label");
  loveLabel.setAttribute("for", "love");
  loveLabel.textContent = "Love";

  //add the meterOverlay, this will be the <div> that changes color for love
  const meterOverlayLove = document.createElement("div");
  meterOverlayLove.classList.add("meter-overlay-love");

  /*const greenBarHunger = document.createElement("div");
  redBarHunger.id = "green-bar-hunger";*/

  const loveIndicator = document.createElement("meter");
  loveIndicator.classList.add("love-indicator");
  loveIndicator.value = "";

  loveContainer.appendChild(loveLabel);
  loveContainer.appendChild(meterOverlayLove);
  loveContainer.appendChild(loveIndicator);

  const feedButton = document.createElement("button");
  feedButton.classList.add("bread");
  //feedButton.id = `feed-button-${pet.id}`; //if I need an id later
  feedButton.textContent = "Feed me 🍞";

  petContainer.appendChild(petEmoji);
  petContainer.appendChild(petName);
  petContainer.appendChild(hungerContainer);
  petContainer.appendChild(loveContainer);
  petContainer.appendChild(feedButton);

  return petContainer;
}

//function for meter containers to get color every 3seconds
function animateMeters() {
  const overlayContainer = document.querySelectorAll(".overlay-hunger");

  overlayContainer.forEach((container) => {
    let value = 0;
    const interval = setInterval(() => {
      if (value >= 90) {
        clearInterval(interval);
      } else {
        value += 5; // Increment value
        container.style.width = `${value}%`;
      }
    }, 3000);
  });
}

let currentIndex = 0;

function addNextPet() {
  const currentPet = pets[currentIndex];
  const petElement = createPetElement(currentPet);

  petsContainer.appendChild(petElement);

  currentIndex = (currentIndex + 1) % pets.length;
  // Call the animation function after adding a new pet
  animateMeters();
}

// Initial display
addNextPet();

// Set interval to add the next pet every 30 seconds
setInterval(addNextPet, 30000);
