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
    epitaph: "Curiosity didn't just kill the cat; it made Whiskers legendary.",
  },
  {
    id: 2,
    emoji: "🐩",
    name: "Fluffy",
    epitaph: "Curiosity didn't just kill the cat; it made Whiskers legendary.",
  },
  {
    id: 3,
    emoji: "🦇",
    name: "Shadow",
    epitaph: "In loving memory of Fluffy, forever our cuddle buddy.",
  },
  {
    id: 4,
    emoji: "🧤",
    name: "Mittens",
    epitaph: "Gone but never forgotten, our loyal Shadow.",
  },
  {
    id: 5,
    emoji: "☀️",
    name: "Sunny ",
    epitaph: "Sunny, forever bringing warmth to our hearts.",
  },
  {
    id: 6,
    emoji: "🌙",
    name: "Midnight",
    epitaph: "Under the midnight sky, our feline friend rests.",
  },
  {
    id: 7,
    emoji: "🍪",
    name: "Oreo",
    epitaph: "Oreo, the sweetest cookie in our lives.",
  },
  {
    id: 8,
    emoji: "🌸",
    name: "Bella",
    epitaph: "Beautiful Bella, gone but forever in our hearts.",
  },
  {
    id: 9,
    emoji: "🦁",
    name: "Simba",
    epitaph: "Simba, the king of our jungle.",
  },
  {
    id: 10,
    emoji: "🌕",
    name: "Luna",
    epitaph: "Luna, lighting up our darkest nights.",
  },
  {
    id: 11,
    emoji: "🐶",
    name: "Charlie",
    epitaph: "Charlie, a tail-wagging bundle of joy.",
  },
  {
    id: 12,
    emoji: "🐍",
    name: "Cleo",
    epitaph: "Cleo, slithering into our hearts forever.",
  },
  {
    id: 13,
    emoji: "🎩",
    name: "Oliver",
    epitaph: "Oliver, a true gentleman among pets.",
  },
  {
    id: 14,
    emoji: "🌼",
    name: "Daisy",
    epitaph: "Daisy, forever blooming in our memories.",
  },
  {
    id: 14,
    emoji: "🥊",
    name: "Rocky",
    epitaph: "Rocky, our champion of love.",
  },
  {
    id: 15,
    emoji: "🎃",
    name: "Pumpkin",
    epitaph: "Pumpkin, a little spice in our lives.",
  },
  {
    id: 16,
    emoji: "x",
    name: "Maximus",
    epitaph: "Maximus, bravest of the fur warriors.",
  },
  {
    id: 17,
    emoji: "☕",
    name: "Mocha",
    epitaph: "Mocha, brewing happiness in every moment.",
  },
  {
    id: 18,
    emoji: "🌵",
    name: "Spike",
    epitaph: "Spike, the prickly pal we'll never forget.",
  },
  {
    id: 19,
    emoji: "☁️",
    name: "Misty",
    epitaph: "Misty, forever floating in our hearts.",
  },
  {
    id: 20,
    emoji: "🦁",
    name: "Leo",
    epitaph: "Leo, roaring with love and affection.",
  },
  {
    id: 21,
    emoji: "💰",
    name: "Penny",
    epitaph: "Penny, our priceless little friend.",
  },
  {
    id: 22,
    emoji: "🧁",
    name: "Cupcake",
    epitaph: "Cupcake, sweetness personified.",
  },

  /*Epitaph: "Cupcake, sweetness personified."
Thor ⚡

Epitaph: "Thor, the thunderous presence in our lives."
Princess 👑

Epitaph: "Princess, ruling our hearts with grace."
Mango 🥭

Epitaph: "Mango, a tropical burst of joy."*/
];

//First Step - get animals to pop up on the screen
let petsContainer = document.querySelector("#pets-container");
let intervalTimeout = [];

//let index = 0;
//Create the pet element with all its child elements (emoji, name, 2 x meters, button)
function createPetElement(index) {
  let loveBarValue = 100;
  let hungerBarValue = 0;

  const petCards = document.createElement("div");
  //target the id & add a class
  petCards.className = "pet-cards-alive";

  //create emoji div and add emoji
  let emote = document.createElement("p");
  //petEmoji.id = "pet-emoji";
  emote.className = "emoji-icon-alive";
  emote.textContent = pets[index].emoji;
  //petEmoji.textContent = pet.emoji;
  //create h3 element for name and add
  let petName = document.createElement("h3");
  petName.className = "pet-name";
  petName.textContent = pets[index].name;

  let labelHunger = document.createElement("label");
  labelHunger.textContent = "Hunger:";
  let progressHunger = document.createElement("progress");
  progressHunger.className = "hunger-bar";
  progressHunger.max = "100";
  progressHunger.min = "0";
  progressHunger.value = "0";

  let labelLove = document.createElement("label");
  labelLove.textContent = "Love:";
  let progressLove = document.createElement("progress");
  progressLove.className = "love-bar";
  progressLove.max = "100";
  progressLove.min = "0";
  progressLove.value = "100";

  let feedButton = document.createElement("button");
  feedButton.className = "feed";
  //feedButton.id = `feed-button-${pet.id}`; //if I need an id later
  feedButton.textContent = "Feed me 🍞";

  let epitaph = document.createElement("epitaph");
  epitaph.className = "epitaph";
  epitaph.textContent = `"${pets[index].epitaph}"`;

  petCards.appendChild(emote);
  petCards.appendChild(petName);
  petCards.appendChild(labelHunger);
  petCards.appendChild(progressHunger);
  petCards.appendChild(labelLove);
  petCards.appendChild(progressLove);
  petCards.appendChild(feedButton);
  petCards.appendChild(epitaph);

  petsContainer.appendChild(petCards);
  //index += 1;

  const progressInterval = setInterval(() => {
    loveBarValue = loveBarValue - 1;
    hungerBarValue = hungerBarValue + 1;
    progressLove.value = `${loveBarValue}`;
    progressHunger.value = `${hungerBarValue}`;

    if (loveBarValue === 0 || hungerBarValue === 100) {
      for (let i = 0; i < intervalTimeout.length; i++) {
        clearTimeout(intervalTimeout[1]);
      }
    }

    if (loveBarValue === 0 || hungerBarValue === 100) {
      petCards.replaceChildren();
      emote.className = "emote-icon-dead";
      petCards.className = "pet-cards-dead";

      petCards.appendChild(emote);
      petCards.appendChild(petName);
      petCards.appendChild(epitaph);

      clearInterval(progressInterval);
      //clearInterval(interval); //stops cards from generating
      for (let i = 0; i < intervalTimeout.length; i++) {
        clearTimeout(intervalTimeout[i]); //going through all and clearing timeout if animal die
      }
    }
  }, 1000);

  feedButton.addEventListener("click", function() {
    hungerBarValue = 0;
    progressHunger.value = `${hungerBarValue}`;
  });

  emote.addEventListener("click", function() {
    loveBarValue = 100;
    progressLove.value = `${loveBarValue}`;
  });
  //index += 1;
}

//addNextPet();
//createPetElement(index);
for (let i = 0; i < pets.length; i++) {
  let interval = setTimeout(createPetElement, i * 30000, i);
  intervalTimeout.push(interval);
}
