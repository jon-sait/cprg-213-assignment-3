/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

let dailyRate = 35;
let dayCounter = 0;

let mondayButton = document.getElementById("monday");
let tuesdayButton = document.getElementById("tuesday");
let wednesdayButton = document.getElementById("wednesday");
let thursdayButton = document.getElementById("thursday");
let fridayButton = document.getElementById("friday");

let clearButton = document.getElementById("clear-button");

let halfButton = document.getElementById("half");
let fullButton = document.getElementById("full");

let calculatedCostSpan = document.getElementById("calculated-cost");

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

function onDayButtonClicked(e) {
  if (!e.target.classList.contains("clicked")) {
    e.target.classList.add("clicked");
    dayCounter += 1;

    caldulateCost();
  }
}

mondayButton.addEventListener("click", onDayButtonClicked);
tuesdayButton.addEventListener("click", onDayButtonClicked);
wednesdayButton.addEventListener("click", onDayButtonClicked);
thursdayButton.addEventListener("click", onDayButtonClicked);
fridayButton.addEventListener("click", onDayButtonClicked);

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function onClearButtonClicked() {
  mondayButton.classList.remove("clicked");
  tuesdayButton.classList.remove("clicked");
  wednesdayButton.classList.remove("clicked");
  thursdayButton.classList.remove("clicked");
  fridayButton.classList.remove("clicked");
  dayCounter = 0;

  caldulateCost();
}

clearButton.addEventListener("click", onClearButtonClicked);

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

function onHalfButtonClicked() {
  dailyRate = 20;

  halfButton.classList.add("clicked");
  fullButton.classList.remove("clicked");

  caldulateCost();
}

halfButton.addEventListener("click", onHalfButtonClicked);

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function onFullButtonClicked() {
  dailyRate = 35;

  fullButton.classList.add("clicked");
  halfButton.classList.remove("clicked");

  caldulateCost();
}

fullButton.addEventListener("click", onFullButtonClicked);

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function caldulateCost() {
  let cost = dailyRate * dayCounter;

  calculatedCostSpan.innerHTML = cost;
}
