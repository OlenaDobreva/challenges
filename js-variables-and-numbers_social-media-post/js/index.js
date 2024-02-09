console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/

// --v-- write your code here --v--
const aTitle = "Chat GPT";
const aText =
  "What is the GPT chat? ChatGPT is a natural language processing tool driven by AI technology that allows you to have human-like conversations and much more with the chatbot. The language model can answer questions and assist you with tasks, such as composing emails, essays, and code.";
let likesNumber = 132;
const user = "Olena Dobreva";
const isReported = false;
// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/

// --v-- write your code here --v--
console.log("aTitle: ", aTitle);
console.log("aText: ", aText);
console.log("likesNumber", likesNumber);
console.log("user", user);
console.log("isReported", isReported);
console.log("likesNumber++", likesNumber);
likesNumber++;
console.log("likesNumber++", likesNumber);
// --^-- write your code here --^--
