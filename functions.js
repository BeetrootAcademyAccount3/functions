// import { exportValue } from "./variables.js";

// console.log(exportValue);

// function greeting(name, programmingLanguage) {
//   console.log("Hello!");

//   if (name === "Ivo") {
//     return;
//   }

//   console.log(`My name is ${name}`);
//   console.log(
//     `I like ${programmingLanguage ? programmingLanguage : "Programming"}!`
//   );
// }

// greeting("Ivo");
// greeting("Ana", "JAVA");
// greeting("John", "c#");

// console.log(greeting("Ama", "C#"));
// console.log("END");

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(2, 2);

// function outerFunction() {
//   const a = 3;
//   const b = 5;

//   function innerFunction() {
//     return a + b;
//   }

//   return innerFunction;
// }

// const result = outerFunction();

// console.log(result());

// const sum = function (a, b) {
//   console.log(a + b);
// };

// sum(2, 2);

// const sum = (a, b) => console.log(a + b);

// const sum = (a, b) => a + b;

// console.log(sum(2, 2));

// (function () {
//   const a = 2;
//   const b = 2;
//   console.log(a + b);
// })();

// setTimeout(() => {
//   console.log("hello");
// }, 5000);

const randomNumberSum = (a, b) => {
  const num1 = a * Math.floor(Math.random() * 10);
  const num2 = b * Math.floor(Math.random() * 10);

  return num1 + num2;
};

console.log(randomNumberSum(2, 2));
