// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.
console.log("Task:1 ");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}
// 2. Make a loop that prints the numbers from 10 to 20.
console.log("Task:2 ");
for (let i = 10; i <= 20; i++) {
  console.log(i);
}
// 3. Make a loop that prints the numbers from -10 to 10.
console.log("Task:3 ");
for (let i = -10; i <= 10; i++) {
  console.log(i);
}
// 4. Make a loop that prints the numbers from 10 to -10.
console.log("Task:4 ");
for (let i = 10; i >= -10; i--) {
  console.log(i);
}
// 5. Make a string. Then, make a loop that prints all the individual characters of that string.
console.log("Task:5 ");
const stringVar = "Let's do it!";
for (let i = 0; i < stringVar.length; i++) {
  console.log(stringVar.charAt(i));
}
// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.
console.log("Task: 6");
const arrayWithFiveItems = [1, 2, 3, 4, 5];
for (let i = 0; i < arrayWithFiveItems.length; i++) {
  const element = arrayWithFiveItems[i];
  console.log(element);
}

// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.
console.log("Task: 7");
const arrayWithSixItems = [1, 2, 3, 4, 5, 6];
for (let i = 1; i < arrayWithSixItems.length; i += 2) {
  const element = arrayWithSixItems[i];
  console.log(element);
}
// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.
console.log("Task: 8");

for (let i = 2; i < arrayWithSixItems.length; i += 3) {
  const element = arrayWithSixItems[i];
  console.log(element);
}
// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.
console.log("Task: 9");
const arrayWithTenItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 1; i < arrayWithTenItems.length; i += 3) {
  const element = arrayWithTenItems[i];
  console.log(element);
}
// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.
console.log("Task:10")
const arrayWithSevenObjects = [
  { counter: 1 },
  { counter: 2 },
  { counter: 3 },
  { counter: 4 },
  { counter: 5 },
  { counter: 6 },
  { counter: 7 },
];
for (i = 0; i < arrayWithSevenObjects.length; i++) {
  let element = arrayWithSevenObjects[i].counter;
  console.log(element);
}

// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.
console.log("Task: 11")
const randomNumber = Math.floor(Math.random()*101)

for (let i = 0; i <randomNumber; i++){
    console.log(i)
}