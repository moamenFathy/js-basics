//? DOM Selectors

// element selectors = used to to target and manipulate elements

// 1. document.getElementById()   // ELEMENT OR NULL
// 2. document.getElementsByClassName()  // HTML COLLECTION(live): select all of the same class name and return it Like an array
// 3. document.getElementsByTagName()  // HTML COLLECTION(live): select all of the same tag name and return it like an array
// 4. document.queryselector()  // ELEMENT OR NULL
// 5. document.queryselectorAll() // NODELIST(Static)

// const myHeading = document.getElementById('main-heading');
// myHeading.style.backgroundColor = 'blue';
// myHeading.style.textAlign = 'center';

// console.log(myHeading);

// const films = document.getElementsByClassName("list-items");

// Array.from(films).forEach(film => {
//   film.style.backgroundColor = 'blue';
// });

// const h1elements = document.getElementsByTagName('h1');
// const liElements = document.getElementsByTagName('li');

// console.log(h1elements);

// Array.from(h1elements).forEach(h1element => {
//   h1element.style.backgroundColor = 'blue';
// });

// Array.from(liElements).forEach(liElement => {
//   liElement.style.backgroundColor = 'red';
// });

// h1elements[0].style.backgroundColor = 'yellow';

// for (let h1element of h1elements) {
//   h1element.style.backgroundColor = 'blue';
// }

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = 'red';
// }

// const element = document.querySelector("ul");

// element.style.backgroundColor = "blue";

// const films = document.querySelectorAll(".list-items");

// films[4].style.backgroundColor = 'yellow';

// console.log(films);

// films.forEach(film => {
//   film.style.backgroundColor = 'yellow';
// });

//? DOM Navigation

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

//-------------------------.firstChild-------------------------//

// const element = document.getElementById("movies");
// const firstChild = element.firstElementChild;
// firstChild.style.backgroundColor = 'yellow';

// const ulElements = document.querySelectorAll('ul');

// ulElements.forEach(ulElements => {
//   const firstChild = ulElements.firstElementChild;
//   firstChild.style.backgroundColor = 'yellow';
// })

//-------------------------.lastElementChild-------------------------//

// const element = document.getElementById('films');
// const lastChild = element.lastElementChild;
// lastChild.style.backgroundColor = 'yellow';

// const ulElements = document.querySelectorAll('ul');

// ulElements.forEach(ulElement => {
//   const lastChild = ulElement.lastElementChild;
//   lastChild.style.backgroundColor = 'yellow';
// });

//-------------------------.nesElementSibling-------------------------//

// const element = document.getElementById('pics');
// const nextSibling = element.nextElementSibling;
// nextSibling.style.backgroundColor = 'yellow';

//-------------------------.previousElementSibling-------------------------//

//   const element = document.getElementById('harry');
// const prevSibling = element.previousElementSibling;
// prevSibling.style.backgroundColor = 'yellow';

//-------------------------.parenElement-------------------------//

// const element = document.getElementById('war');
// const parent = element.parentElement;
// parent.style.backgroundColor = 'yellow';

//-------------------------.children-------------------------//

// const element = document.getElementById('films');
// const children = element.children;
// console.log(children);

// Array.from(children).forEach(child => {
//   child.style.backgroundColor = 'yellow';
// });

//? edit on html elements

//-------------------------EXAMPLE 1 <h1> -------------------------//

// STEP 1 CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
// const newH2 = document.createElement('h2');

// STEP 2 CREATE THE ATTRIBUTES/PROPERTIES
// newH1.textContent = "I like pizza!";
// newH1.id = "myH1";
// newH1.style.color = 'tomato';

// newH2.textContent = 'I like showermma';
// newH2.id = 'myH2';
// newH2.style.color = 'blue';
// newH1.style.textAlign = 'left';

// STEP 3 APPEND THE ELEMENT TO DOM
// document.body.append(newH1);
// document.body.prepend(newH1);
// document.getElementById('box1').append(newH1);
// document.getElementById('box1').prepend(newH1); // I like pizza

// document.getElementById('box2').prepend(newH2); // I like showermma

// const box2 = document.getElementById('box2');
// document.body.insertBefore(newH1, box2); // New Method: insertBefore(newElement, currentElement);

// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1, boxes[0])

// REMOVE HTML ELEMENT

// document.body.removeChild(newH1);
// document.getElementById('box1').removeChild(newH1);
// Access the dom.Parent.removeChild
// New Method: removeChild(); remove the element

// const newH1 = document.createElement("h1");

// newH1.textContent = 'Ramadan kareem';
// newH1.id = 'me';
// newH1.style.color = 'blue';

// document.getElementById('box1').prepend(newH1);

//-------------------------EXAMPLE 3 <li> -------------------------//

// STEP 1 CREATE THE ELEMENT
// const newListItem = document.createElement("li");

// STEP 2 CREATE THE ATTRIBUTES/PROPERTIES
// newListItem.textContent = 'coconut';
// newListItem.id = 'coconut';
// newListItem.style.fontWeight = 'bold';
// newListItem.style.backgroundColor = 'lightgreen';

// STEP 3 APPEND THE ELEMENT TO DOM
// document.body.append(newListItem);
// document.body.prepend(newListItem);
// document.getElementById('fruits').append(newListItem);
// document.getElementById('fruits').prepend(newListItem);

// const apple = document.getElementById('apple');
// document.getElementById('fruits').insertBefore(newListItem, apple);

// const listItem = document.querySelectorAll('#fruits li');
// document.getElementById('fruits').insertBefore(newListItem, listItem[3]);

// REMOVE HTML ELEMENT

// document.getElementById('fruits').removeChild(newListItem);

//?  MOUSE EVENTS

// eventListener = Listen for specific events to create interactive web pages
// events: click, mouseover, mouseout
// .addEventListener(click, callback OR anonymous function OR arrow function);

// const myBox = document.getElementById('myBox');
// const myButton = document.getElementById('myButton');

// myButton.addEventListener('click', event =>  {
//   myBox.style.backgroundColor = 'red';
//   myBox.textContent = 'OUCH! 😒';

// });

// myButton.addEventListener('mouseover', mybox => {
//   myBox.style.backgroundColor = 'yellow'
//   myBox.textContent = "Don't Do It 😯";
// });

// myButton.addEventListener('mouseout', event=> {
//   myBox.style.backgroundColor = 'lightgreen';
//   myBox.textContent = 'click Me 😁';
// });

// const myButton = document.getElementById('myButton');
// const myBody = document.getElementsByTagName('body')[0];

// console.log(myBody);

// myButton.addEventListener('click', event => {
//   myBody.style.backgroundColor = 'red';
// });

//? eventListener = Listen for specific events to create interactive web pages
// events: keydown, keyup
// document.addEventListener(event, callback);

// const myBox = document.getElementById("myBox");

// const moveAmount = 10;

// let x = 0;
// let y = 0;

// document.addEventListener("keydown", event => {
//   myBox.textContent = "😍";
//   myBox.style.backgroundColor = "tomato";
// }
// );

// document.addEventListener("keyup", event => {
//   myBox.textContent = "😊";
//   myBox.style.backgroundColor = "lightblue";
// }
// );

// document.addEventListener("keydown", event => {
//   if (event.key.startsWith("Arrow")) {

//     event.preventDefault();
//     switch(event.key) {
//       case "ArrowUp":
//         y -= moveAmount;
//         break;
//       case "ArrowDown":
//         y += moveAmount;
//         break;
//       case "ArrowLeft":
//         x -= moveAmount;
//         break;
//       case "ArrowRight":
//         x += moveAmount;
//         break;
//     }
//     myBox.style.top = `${y}px`;
//     myBox.style.left = `${x}px`;
//   }
// });

//? Show/Hide HTML element

// const myButton = document.getElementById("myButton");
// const myImg = document.getElementById("myImg");

// myButton.addEventListener("click", event => {
//   if (myImg.style.visibility === "hidden") {
//     myImg.style.visibility = "visible";
//     myButton.textContent = "Hide";
//   }
//   else {
//     myImg.style.visibility = "hidden";
//     myButton.textContent = "show";
//   }
// });

//? NodeList = Static collection of HTML elements by (id, class, element)
// Can be created by using querySelectorAll()
// similar to an array, butn no (Map, FileSystemEntry, reduce)
// NodeList won't update to automatically reflect changes

// let buttons = document.querySelectorAll(".myButton");

// buttons.forEach(button => {
//   button.style.backgroundColor = "green";
//   button.textContent += "😂";
// });

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "blue";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 40%)";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });

// const newButton = document.createElement("button"); //STEP 1
// newButton.textContent = "Button5"; // STEP 2
// newButton.classList = "myButton";
// document.body.appendChild(newButton); // STEP 3

// buttons = document.querySelectorAll(".myButton");
// console.log(buttons);

// REMOVE AN ELEMENT
// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.remove();
//     buttons = document.querySelectorAll(".myButton");
//     console.log(buttons);
//   });
// });

//? ClassList = Element property in JavaScript used to interact
// with an element's list of classes (css classes)
// Allows you to make reusable classes for many Elemensts
// across your webpage.

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

// const myButton = document.getElementById("myButton");
// const myH1 = document.getElementById("myH1");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// myButton.classList.add("hover")

// myButton.addEventListener("mouseover", event => {
// event.target.classList.add("hover");
//   event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
// event.target.classList.remove("hover");
//   event.target.classList.toggle("hover");
// });

// myH1.classList.add("enabled");
// myButton.classList.add("enabled");

// myH1.addEventListener("click", event => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😂";
//   }
//   else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// event.target.classList.replace("enabled", "disabled");
// myButton.classList.replace("enabled", "disabled")
// });

// myButton.addEventListener("click", event => {
//   if (event.target.classList.contains("disabled")) {
//     event.target.textContent += "😂";
//   }
//   else {
//     event.target.classList.replace("enabled", "disabled");
//   }
// event.target.classList.replace("enabled", "disabled");
// myButton.classList.replace("enabled", "disabled")
// });

// let buttons = document.querySelectorAll(".myButtons");

// buttons.forEach(button => {
//   button.classList.add("enabled");
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     if (event.target.classList.contains("disabled")) {
//       event.target.textContent += "😂";
//     }
//     else {
//       event.target.classList.replace("enabled", "disabled");
//     }
//     event.target.classList.replace("enabled", "disabled");
//   });
// });

//? ROCK PAPER SCISSORS

// const choices = ["rock", "paper", "scissors"];
// const playerDisplay = document.getElementById("playerDisplay");
// const computerDisplay = document.getElementById("computerDisplay");
// const resultDisplay = document.getElementById("resultDisplay");
// const playerScoreDisplay = document.getElementById("playerScoreDisplay");
// const computerScoreDisplay = document.getElementById("computerScoreDisplay");
// let playerScore = 0;
// let computerScore = 0;

// function playGame(playerChoice) {
//   const computerChoice = choices[Math.floor(Math.random() * 3)];
//   let result = "";

//   if (playerChoice === computerChoice) {
//     result = "IT's A TIE!"
//   }
//   else {
//     switch(playerChoice) {
//       case "rock":
//         result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
//         break;
//       case "paper":
//         result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
//         break;
//       case "scissors":
//         result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
//         break;
//     }
//   }

//   playerDisplay.textContent = `PLAYER: ${playerChoice}`;
//   computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
//   resultDisplay.textContent = result;

//   resultDisplay.classList.remove("greenText", "redText");

//   switch(result) {
//     case "YOU WIN!":
//       resultDisplay.classList.add("greenText");
//       playerScore++;
//       playerScoreDisplay.textContent = playerScore;
//       break;
//     case "YOU LOSE!":
//       resultDisplay.classList.add("redText");
//       computerScore ++;
//       computerScoreDisplay.textContent = computerScore;
//       break;
//   }
// }

//? img Slider

// const slides = document.querySelectorAll(".slides img");
// let slideIndex = 0;
// let intervalId = null;

// initializeSlider();
// document.addEventListener("DOMContentLoaded", initializeSlider())

// function initializeSlider() {

//   if (slides.length > 0) {
//     slides[slideIndex].classList.add("displaySlide");
//     intervalId = setInterval(nextSlide, 5000);
//     console.log(intervalId);
//   }

// }

// function showSlide(index) {

//   if (index >= slides.length) {
//     slideIndex = 0;
//   }
//   else if(index < 0) {
//     slideIndex = slides.length - 1;
//   }
//   slides.forEach(slide => {
//     slide.classList.remove("displaySlide");
//   });
//   slides[slideIndex].classList.add("displaySlide");
// }

// function prevSlide() {
//   clearInterval(intervalId);
//   slideIndex--;
//   showSlide(slideIndex);
// }

// function nextSlide() {
//   slideIndex++;
//   showSlide(slideIndex);
// }

// Callback Hell = Situation in JavaScript where callbacks
// are nested within other callbacks to the
// degree where the code is difficult to read.
// old pattern to handle asynchronous function.
// Use promises + async/await to avoid callback hell

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 complete");
//     callback();
//   }, 2000)
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 complete");
//     callback();
//   }, 1000);
// }
// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 complete");
//     callback();
//   }, 3000)
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4 complete");
//     callback();
//   }, 4000);
// }

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => console.log("All tasks completed"));
//     });
//   });
// });
// task2();
// task3();
// task4();
// console.log("All tasks complete");

//? Promises = An Objec that manges asynchronous operation.
// Wrap a Promise Object around {asynchronous code}
// "I promise to return a value"
// PENDING -> RESOLVED or REJECTED
// new Promise((resolve, reject) => {asynchronous code});

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) resolve("You Walk The Dog 🐕");
//       else reject("You Didn't Walk The Dog");
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       kitchenCleaned = true;

//       if (kitchenCleaned) resolve("You clean the Kitchen 🧹");
//       else reject("You Didn't Clean The Kitchen");
//     }, 2000);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       trashTaken = false;

//       if (trashTaken) resolve("You Take Out The Trash ♻️");
//       else reject("You Did'n Take The Trash")
//     }, 500);
//   });
// }

// walkDog(() => {
//   cleanKitchen(() => {
//     takeOutTrash(() => console.log("You Finished All The Chores!"));
//   });
// });

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log("You Finished All The Chores!")})
//          .catch(error => console.error(error));

//? Async/Await = Async = makes a function return a promis
                  // Await = makes an async functino wait for a promise
                  // Allows you write asynchronous code in a synchrounous manner
                  // Async doesn't have resolve or reject parameters
                  // Everything after Await is placed in an event queue


// function walkDog() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const dogWalked = true;

//       if (dogWalked) resolve("You Walk The Dog 🐕");
//       else reject("You Didn't Walk The Dog");
//     }, 1500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       kitchenCleaned = true;

//       if (kitchenCleaned) resolve("You clean the Kitchen 🧹");
//       else reject("You Didn't Clean The Kitchen");
//     }, 2000);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       trashTaken = true;

//       if (trashTaken) resolve("You Take Out The Trash ♻️");
//       else reject("You Did'n Take The Trash")
//     }, 500);
//   });
// }

// async function doChores() {

//   try {
//   const walkDogResult = await walkDog();
//   console.log(walkDogResult);

//   const cleanKitchenResult = await cleanKitchen();
//   console.log(cleanKitchenResult);

//   const takeOutTrashResult = await takeOutTrash();
//   console.log(takeOutTrashResult);

//   console.log("YOU FINISHED");
//   }
//   catch(error) {
//     console.error(error);
//   }
// }

// doChores();

//? JSON = (JavaScript Object Notation) data-interchange format
          // used for exchanging data between a server and a web apllictaion
          // JSON files {key:value} OR [value1, value2, value3]

          // JSON.stringify() = converts a JS object || array to a JSON string.
          // JSON.parse() = converts a JSON string to a JS object

// const names = `["spongebob", "patrick", "squidward", "sandy"]`;
// const jsonNames = `["spongebob", "patrick", "squidward", "sandy"]`;

// const person = `{"name": "spongebob", "age" : 30, "isEmployed": true, "hobbies": ["Jellyfishing", "karate", "cooking"]}`;
// const jsonPerson = `{"name": "spongebob", "age" : 30, "isEmployed": true, "hobbies": ["Jellyfishing", "karate", "cooking"]}`;

// const people = `[{"name": "Spongebob", "age" : 30, "isEmployed": true},
//                   {"name": "Patrick", "age" : 34, "isEmployed": false},
//                   {"name": "Squidward", "age" : 50, "isEmployed": true},
//                   {"name": "Sandy", "age" : 27, "isEmployed": true}]`;
// const jsonPeople = `[{"name": "Spongebob", "age" : 30, "isEmployed": true},
//                   {"name": "Patrick", "age" : 34, "isEmployed": false},
//                   {"name": "Squidward", "age" : 50, "isEmployed": true},
//                   {"name": "Sandy", "age" : 27, "isEmployed": true}]`;

// const jsonString = JSON.stringify(names);

// console.log(names); // print object
// console.log(jsonString); // print array

// const jsonString = JSON.stringify(person);

// console.log(jsonString);
// console.log(person);

// const jsonString = JSON.stringify(people);
// console.log(jsonString); 
// console.log(people);

// const parsedData = JSON.parse(jsonNames);

// console.log(parsedData); // print object
// console.log(jsonNames); // print array

// const parsedData = JSON.parse(jsonPeople);

// console.log(parsedData);

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value)))
//     .catch(error => console.error(error));

// fetch("people.json")
//     .then(response => response.json())
//     .then(values => values.forEach(value => console.log(value.name)))
//     .catch(error => console.error(error));

//? fetch = function used for making http requests to fetch resources
//          (JSON style data, images, files)
//          simplifies asynchronous data fetching in javascript and
//          used for interacting with APIs to retrieve and send
//          data asynchronously over the web.
//          fetch(url, {options})

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response => {

//       if (!response.ok) {
//         throw new Error("could not fetch resource");
//       }
//       return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.log(error));


// fetchData();
async function fetchData() {
  try {
    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    if (!response.ok) {
      throw new Error("Could not fetch resource");
    }
    const data = await response.json();
    const pokemonSprite = data.sprites.front_default;
    const imgElement = document.getElementById("pokemonSprite");
    imgElement.src = pokemonSprite;
    imgElement.style.display = "block";
  }
  catch(error) {
    console.error(error);
  }
}

//? Weather APP

// const weatherForm = document.querySelector(".weatherForm");
// const cityInput = document.querySelector(".cityInput");
// const card = document.querySelector(".card");
// const apiKey = "de6b66a46b3acafcff7749637b4901be";

// weatherForm.addEventListener("submit", async event => {
// event.preventDefault();

//   const city = cityInput.value;

//   if (city) {
//     try {
//       const weatherData = await getWeatherData(city);
//       displayWeatherInfo(weatherData);
//     }
//     catch(error) {
//       console.log(error);
//       displayError(error);
//     }
//   }
//   else {
//     displayError("Please Enter A City");
//   }
// });

// async function getWeatherData(city) {
//   const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

//   const response = await fetch(apiUrl);
//   if (!response.ok) {
//     throw new Error("could not fetch weather data");
//   }
//   return await response.json();
// }

// function displayWeatherInfo(data) {
//   const {name: city, main: {temp, humidity}, weather: [{description, id}]} = data;
//   card.textContent = "";
//   card.style.display = "flex";

//   const cityDisplay = document.createElement("h1");
//   const tempDisplay = document.createElement("p");
//   const humidityDisplay = document.createElement("p");
//   const descDisplay = document.createElement("p");
//   const weatherEmoji = document.createElement("p");

//   cityDisplay.textContent = city;
//   tempDisplay.textContent = `${(temp - 273.15).toFixed()}°c`;
//   humidityDisplay.textContent = `Humidity: ${humidity}%`;
//   descDisplay.textContent = description;
//   weatherEmoji.textContent = getWeatherEmoji(id);

//   cityDisplay.classList.add("cityDisplay");
//   tempDisplay.classList.add("tempDisplay");
//   humidityDisplay .classList.add("humidityDisplay");
//   descDisplay.classList.add("descDisplay");
//   weatherEmoji.classList.add("weatherEmoji");

//   card.appendChild(cityDisplay);
//   card.appendChild(tempDisplay);
//   card.appendChild(humidityDisplay);
//   card.appendChild(descDisplay);
//   card.appendChild(weatherEmoji);
// }

// function getWeatherEmoji(weatherId) {
//   switch(true) {
//     case(weatherId >= 200 && weatherId < 300):
//       return "⛈️";
//     case(weatherId >= 300 && weatherId < 400):
//       return "🌦️";
//     case(weatherId >= 500 && weatherId < 600):
//       return "🌧️";
//     case(weatherId >= 600 && weatherId < 700):
//       return "❄️";
//     case(weatherId >= 700 && weatherId < 800):
//       return "🌫️";
//     case(weatherId === 800):
//       return "☀️";
//     case(weatherId >= 801 && weatherId < 810):
//       return "☁️";
//     default:
//       return "?";
//   }
// } 

// function displayError(message) {
//   const errorDisplay = document.createElement("p");
//   errorDisplay.textContent = message;
//   errorDisplay.classList.add("errorDisplay");

//   card.textContent = "";
//   card.style.display = "flex";
//   card.appendChild(errorDisplay);
// }


// while (true) {
//   console.log("#");
// }