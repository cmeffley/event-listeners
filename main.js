//console.log('Connected');

const button = document.querySelector('#main-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (event) => { //event = e
//   console.log(`YOU CLICKED ME ${event.target.id}!`);
//   //console.log(event.altKey);  //altKey from event list
//   console.log(event);
// })

const whatIsTheId = (event) => {
  console.log(`YOU CLICKED ${event.target.id}!`); //target.id comes from a list in console logging the event

  if (event.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON'; 
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON'; //innerhtml manipulates whats in the div
  }
}

button.addEventListener('click', whatIsTheId);

//TARGET 'other-btn' and on 'click', run whatIsTheId

const button2 = document.querySelector('#other-btn');

button2.addEventListener('click', whatIsTheId);
