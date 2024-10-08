// Arrays of options for each button
// Each array contains options for different parts of the sentence
const characters = ["A wizard", "A cat", "An astronaut", "A robot", "A pirate"];
const actions = ["flies", "jumps", "runs", "dances", "sings"];
const places = ["on the moon", "in the forest", "in a castle", "on a ship", "in space"];
const objects = ["with a magic wand", "with a treasure map", "with a sword", "with a book", "with a guitar"];
const times = ["at midnight", "during the day", "in the morning", "at sunset", "at dawn"];
// Variables that stores the user's selected choices for each part of the sentence
let selectedCharacter = '';
let selectedAction = '';
let selectedPlace = '';
let selectedObject = '';
let selectedTime = '';
// Function to cycle through the options for each button
// Takes in the button's id, the array of options to cycle through, 
// and the id of the element to display the selected option

function cycleOptions(id, optionsArray, displayElementId) {
  let index = 0;  // Keeps track of the current option
  // Add an event listener to the button to change the displayed option on click

  document.getElementById(id).addEventListener('click', function() {
    // Cycle through options in the array
    index = (index + 1) % optionsArray.length;  
    // Display the selected option
    document.getElementById(displayElementId).innerText = optionsArray[index];  
    // Update the selection variable
    updateSelection(id, optionsArray[index]);  
