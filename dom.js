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