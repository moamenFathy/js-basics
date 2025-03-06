// const newH1 = document.createElement('h1');

// newH1.style.color = 'darkblue';
// newH1.textContent = 'FK';

// document.getElementById('box1').append(newH1);
// document.body.prepend(newH1);
// const boxes = document.querySelectorAll('.box');
// document.body.insertBefore(newH1,boxes[0]);

// const myButton = document.getElementById("myButton");

// myButton.addEventListener("click", event => {
//   var theme = document.getElementsByTagName("body")[0];

//   if (theme.className == "light") theme.className = "dark";

//   else theme.className = "light";
// });

// const small = document.getElementById("small");
// const medium = document.getElementById("medium");
// const large = document.getElementById("large");
// const xLarge = document.getElementById("x-large");
// const xxLarge = document.getElementById("xx-large");
// var myP = document.getElementsByClassName("p")[0];

// small.addEventListener("click", event => {
//   myP.className = 'small';
// });

// medium.addEventListener("click", event => {
//   myP.className = 'medium';
// });

// large.addEventListener("click", event => {
//   myP.className = 'large';
// });

// xLarge.addEventListener("click", event => {
//   myP.className = 'x-large';
// });

// xxLarge.addEventListener("click", event => {
//   myP.className = 'xx-large';
// });

// console.log(myP);

// const inc = document.getElementById("increase");
// const dec = document.getElementById("decrease");
// var myP = document.getElementsByTagName("p")[0];
// let i = 20;

// inc.addEventListener("click", event => {
//   i += 5;
//   myP.style.fontSize = i + "px";
// });

// dec.addEventListener("click", event => {
//   i -= 5;
//   myP.style.fontSize = i + "px";
// });

// console.log(myP);

// const links = document.getElementById("myDropdown");
// const myButton = document.getElementsByClassName("dropbtn")[0];

// myButton.addEventListener("click", event => {
//   if (links.className == "dropdown-content") links.className = "dropdown-content show";
//   else if (links.className == "dropdown-content show") links.className = "dropdown-content";
// });

// console.log(myButton);

// const myBox = document.getElementById("myBox");
// moveAmount = 5;
// let y = 0;
// let x = 0;

// document.addEventListener("keydown" , event => {
//   myBox.textContent = "🤦‍♂️";
//   myBox.style.backgroundColor = "blue";
// });

// document.addEventListener("keyup", event => {
//   myBox.textContent = "🤷‍♂️";
//   myBox.style.backgroundColor = "lightblue";
// });

// document.addEventListener("keydown" , event => {
//   if (event.key.startsWith("Arrow")) {
//     event.preventDefault();
//     switch (event.key) {
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
// })

// let buttons = document.querySelectorAll(".myButton");

// buttons.forEach(button => {
//   button.textContent += "😂";
//   button.style.backgroundColor = "green";
// });

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.style.backgroundColor = "red";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.style.backgroundColor = "red";
//   });
// });

// buttons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.style.backgroundColor = "hsl(205, 100%, 60%)";
//   });
// });

// const newButton = document.createElement("button");

// newButton.textContent = "Button 5";
// newButton.classList = "myButton";

// document.body.append(newButton);
// buttons = document.querySelectorAll(".myButton");

// buttons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.remove();
//     buttons = document.querySelectorAll(".myButton");
//     console.log(buttons);
//   });
// });

// const myButton = document.getElementById("myButton");

// myButton.classList.add("enabled");
// myButton.classList.remove("enabled");
// myButton.classList.add("hover");

// myButton.addEventListener("click", event => {
//   if (event.target.classList.contains("enabled")) event.target.classList.toggle("disabled");
// });

// myButton.addEventListener("click", event => {
//   event.target.classList.add("enabled");
// });

// myButton.addEventListener("mouseover", event => {
//   event.target.classList.toggle("hover");
// });

// myButton.addEventListener("mouseout", event => {
//   event.target.classList.toggle("hover");
// });

// myButton.addEventListener("click", event => {
//   if (event.target.classList.contains("disabled")) myButton.textContent += "😂";
// });

// let myButtons = document.querySelectorAll(".myButtons");

// myButtons.forEach(button => {
//   button.addEventListener("click", event => {
//     if (button.classList.contains("enabled")) button.classList.toggle("disabled");
//   });
// });

// myButtons.forEach(button => {
//   button.addEventListener("click", event => {
//     button.classList.add("enabled");
//   });
// });

// myButtons.forEach(button => {
//   button.addEventListener("mouseover", event => {
//     event.target.classList.toggle("hover");
//   });
// });

// myButtons.forEach(button => {
//   button.addEventListener("mouseout", event => {
//     event.target.classList.toggle("hover");
//   });
// });

// myButtons.forEach(button => {
//   button.addEventListener("click", event => {
//     if (button.classList.contains("disabled")) button.textContent += "🐦‍🔥";
//   });
// });

// myButtons.forEach(button => {
//   button.addEventListener("click", event => {
//     event.target.remove();
//     myButtons = document.querySelectorAll(".myButtons");
//     console.log(myButtons);
//   });
// });

// function task1(callback) {
//   setTimeout(() => {
//     console.log("Task 1 Completed");
//     callback();
//   }, 3000)
// }

// function task2(callback) {
//   setTimeout(() => {
//     console.log("Task 2 Completed");
//     callback();
//   }, 1000)
// }

// function task3(callback) {
//   setTimeout(() => {
//     console.log("Task 3 Completed");
//     callback();
//   }, 2000)
// }

// function task4(callback) {
//   setTimeout(() => {
//     console.log("Task 4 Completed");
//     callback();
//   }, 4000);
// }

// task1();
// task2();
// task3();
// task4();
// console.log("All Tasks Completed");

// task1(() => {
//   task2(() => {
//     task3(() => {
//       task4(() => console.log("All Tasks Completed"));
//     });
//   });
// });

// function dogWalked() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       walkingDog = true;

//       if (walkingDog) resolve("You Walked The Dog🐕");
//       else reject("You Didn't Walk The Dog");
//     }, 1000);
//   });
// }

// function takeOutTrash() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       trashOut = true;

//       if (trashOut) resolve("You Take Out The Trash♻️");
//       else reject("You Didn't Take Out The Trash");
//     }, 500);
//   });
// }

// function cleanKitchen() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       kitchenCleaned = true;
//       if (kitchenCleaned) resolve("You Cleaned The Kitchen🧹");
//       else reject("You Didn't Clean The Kitchen")
//     }, 1500);
//   });
// }

// callback Hell
// dogWalked(() => {
//   takeOutTrash(() => {
//     cleanKitchen(() => console.log("All Chores Are Completed"));
//   });
// });

// dogWalked().then(value => {console.log(value);return takeOutTrash();})
//            .then(value => {console.log(value);return cleanKitchen();})
//            .then(value => {console.log(value);return console.log("You Finished All The Chores");})
//            .catch(error => console.error(error));

// async function doChores() {

//   try {
//   const dogWalkedResult = await dogWalked();
//   console.log(dogWalkedResult);

//   const takeOutTrashResult = await takeOutTrash();
//   console.log(takeOutTrashResult);

//   const kitchenCleanedResult = await cleanKitchen();
//   console.log(kitchenCleanedResult);

//   console.log("YOU FINISHED");
//   }

//   catch(error) {
//     console.error(error);
//   }
// }

// doChores();

// fetch("people.json")
//       .then(response => response.json())
//       .then(values => values.forEach(value => console.log(value.isEmployed)));


// async function fetchData() {
//   try {
//     const pokemonInput = document.getElementById("pokemon").value.toLowerCase();
//     const pokemonImg = document.getElementById("thePokemon");
//     const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
//     if (!response.ok) {
//       throw new Error("Can't fetch data from api")
//     }
//       const data = await response.json();
//       const pokemonSprite = data.sprites.front_default;
//       pokemonImg.src = pokemonSprite;
//       pokemonImg.style.display = "block";
//   }
//   catch(error) {
//     console.error(error);
//   }
// }