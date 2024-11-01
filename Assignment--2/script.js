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
// Function to update the user's selection based on which button was clicked
function updateSelection(buttonId, choice) {
  switch (buttonId) {
     // Update character selection
    case 'btn1':  
      selectedCharacter = choice;
      break;
      // Update action selection
    case 'btn2':  
      selectedAction = choice;
      break;
      // Update place selection
    case 'btn3':  
      selectedPlace = choice;
      break;
      // Update object selection
    case 'btn4': 
      selectedObject = choice;
      break;
      // Update time selection
    case 'btn5':  
      selectedTime = choice;
      break;
  }
}
// Function to combine all the selected parts into a full story
function createStory() {
  // Ensure that all parts of the sentence have been selected
  if (selectedCharacter && selectedAction && selectedPlace && selectedObject && selectedTime) {
    // Create the story using the selected parts
    const story = `${selectedCharacter} ${selectedAction} ${selectedPlace} ${selectedObject} ${selectedTime}.`;
    // Display the final story in the designated paragraph
    document.getElementById('story').innerText = story;
  } else {
    // If not all parts are selected, show a reminder to the user
    document.getElementById('story').innerText = "Please make sure all parts of the story are selected!";
  }
}
// Event listeners and functionality are set up once the window has fully loaded
window.onload = function() {
  //each button should be initialized with the options array and display element
  cycleOptions('btn1', characters, 'choice1');
  cycleOptions('btn2', actions, 'choice2');
  cycleOptions('btn3', places, 'choice3');
  cycleOptions('btn4', objects, 'choice4');
  cycleOptions('btn5', times, 'choice5');
  // Add event listener to the "Show My Story" button to display the final story
  document.getElementById('showStory').addEventListener('click', createStory);
};
