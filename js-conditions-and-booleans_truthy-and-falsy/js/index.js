const truthyOrFalsy = Boolean(3 >= 2);
console.log("The expression is " + truthyOrFalsy);

const questionOne = Boolean(2 == "2");
console.log("The expression is " + questionOne);

const questionTwo = Boolean(2 === "2");
console.log("The expression is " + questionTwo);

const questionThree = Boolean(2 === 2);
console.log("The expression is " + questionThree);

const questionFour = Boolean("hello world");
console.log("The expression is " + questionFour);

const questionFive = Boolean("");
console.log("The expression is " + questionFive);

const questionSix = Boolean(true);
console.log("The expression is " + questionSix);

const questionSeven = Boolean(0);
console.log("The expression is " + questionSeven);

const questionEight = Boolean(-50);
console.log("The expression is " + questionEight);

const questionNine = Boolean(50);
console.log("The expression is " + questionNine);

const questionTen = Boolean(5 > 1);
console.log("The expression is " + questionTen);

const questionEleven = Boolean(1 > 10);
console.log("The expression is " + questionEleven);

const questionTwelve = Boolean(false);
console.log("The expression is " + questionTwelve);
