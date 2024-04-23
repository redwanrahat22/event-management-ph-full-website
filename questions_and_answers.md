




1. Write the correct answer from the following options and give an explanation (2-5 lines).
let greeting;
greetign = {};
console.log(greetign);
A: {}
B: ReferenceError: greetign is not defined
C: undefined
Answer: A: {}
Explanation: Despite the misspelling of "greetign" instead of "greeting" in the code, the assignment greetign = {} creates an empty object. when console.log(greetign) is executed, it logs an empty object {} to the console.

2. Write the correct answer from the following options and give an explanation (2-5 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
A: NaN
B: TypeError
C: "12"
D: 3
Answer: A: NaN
Explanation: The function sum(a, b) adds the parameters a and b.when 2 is passed as the second argument, JavaScript performs implicit type conversion. Since adding a number to a string results in concatenation, 1 + 2 equals 12. it becomes finally Nan

3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
A: ['🍕', '🍫', '🥑', '🍔']
B: ['🍝', '🍫', '🥑', '🍔']
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
D: ReferenceError

Answer: A: ['🍕', '🍫', '🥑', '🍔']
Explanation: The reassigment of info.favoriteFood to 🍝 but it doesnt alter the original food array. so console.log(food) prints the original array containing ["🍕", "🍫", "🥑", "🍔"].


4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
A: Hi there,
B: Hi there, undefined
C: Hi there, null
D: ReferenceError
Answer: B: Hi there, undefined
Explanation: When the function sayHi() is called without passing any arguments, the parameter name inside the function becomes undefined. So, the function returns "Hi there, undefined".

5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
A: 1
B: 2
C: 3
D: 4
Answer: B: 2
Explanation: The forEach method iterates over each element in the nums array. 0 is considered a falsy value, so the condition if (num) evaluates to false for the element 0. Therefore, only the elements 1, 2, and 3 increment the count variable. So console.log(count) prints 2.