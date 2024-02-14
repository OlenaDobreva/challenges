console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

const currentTime = new Date();
function getGreeting() {
  // Code here
  const currentHour = currentTime.getHours();

  if (currentHour >= 6 && currentHour <= 12) {
    return "Good morning!";
  } else if (currentHour >= 13 && currentHour <= 18) {
    return "Good afternoon!";
  } else if (currentHour >= 18 && currentHour <= 22) {
    return "Good Evening!";
  } else {
    return "Good night!";
  }
}

const currentDay = new Date();
function getDayColor() {
  // Code here
  const weekDay = currentDay.getDay();
  if (weekDay === 1) {
    return "darkgray";
  } else if (weekDay >= 2 && weekDay <= 5) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting(currentTime);
document.body.style.backgroundColor = getDayColor(currentDay);
