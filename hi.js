//! 1-
// let mainTitle = document.getElementById('maintitle')

// console.log('this is an element of type: ', mainTitle.nodeType);
// console.log('the Inner HTML is ', mainTitle.innerHTML);
// console.log('Child nodes: ', mainTitle.childNodes.length);

// let myLinks = document.getElementsByTagName('h1');
// console.log('Links: ', myLinks.length);

// let myListItems = document.getElementsByTagName('li');
// let myFirstList = document.getElementById('maintitle');
// let limitedList = myFirstList.getElementsByTagName('li');

// console.log(myListItems);
// console.log(myFirstList);
// console.log(limitedList);

// working with attributes
// myelement.getattribute('');
// myelelment.setattribute(name, value);

// let mainContent = document.getElementById('maintitle');
// mainContent.setAttribute('align', 'right');

// mainTitle = document.getElementById('maintitle');
// console.log(mainTitle.innerHTML);

// let myNewElement = document.createElement('li');
// myNewElement.innerHTML = 'New item text';
// console.log(myNewElement);

// function toDark() {
//   const dark = document.getElementsByTagName('button');
//   dark.style.backgroundColor = 'black';
// }

// function colorFlipper() {
//   const body = document.body;
  
  // Simple color switching
  // function colorSwitch(color) {
  //     body.style.backgroundColor = color;
  // }

  // Generate random RGB color
  // function randomColor() {
  //     const red = Math.floor(Math.random() * 256);
  //     const green = Math.floor(Math.random() * 256);
  //     const blue = Math.floor(Math.random() * 256);
  //     body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  // }

  // Reset to default
  // function resetColor() {
  //     body.style.backgroundColor = '#ffffff';
  // }

  // Add event listeners
//   document.addEventListener('click', (e) => {
//       if (e.target.matches('button')) {
//           const action = e.target.id || e.target.className;
//           switch (action) {
//               case 'red':
//               case 'green': 
//               case 'blue':
//                   colorSwitch(action);
//                   break;
//               case 'random':
//                   randomColor();
//                   break;
//               case 'reset':
//                   resetColor();
//                   break;
//           }
//       }
//   });
// }

// Initialize the color flipper
// colorFlipper();