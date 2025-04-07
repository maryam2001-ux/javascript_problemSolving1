// *! red comment
// * green comment
// *? blue comment
// TODO orange comment

// TODO ---------------------------------------------------- PROBLEM 1 ----------------------------------------------------

//*? 1) Write a program that allow to user enter number then print it

// let number = prompt("enter any number");
// console.log(number);

// TODO ---------------------------------------------------- PROBLEM 2 ----------------------------------------------------

//*? 2) Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no

// let number = prompt("enter any number");

// number = Number(number);

// if(number % 3 == 0 && number % 4 == 0  ){
//   console.log('result = yes');

// } 
// else{
//   console.log('result = no');
// }

// TODO ---------------------------------------------------- PROBLEM 3 ----------------------------------------------------

//*? 3) Write a program that allows the user to insert 2 integers then print the max

// let number1 = prompt("enter  number 1");
// let number2 = prompt("enter  number 2");

// number1 = Number(number1);
// number2 = Number(number2);

// if(number1 > number2   ){
//   console.log('result = number 1 is max');
// }
// else{
//   console.log('result = number 2 is max');
// }

// TODO ---------------------------------------------------- PROBLEM 4 ----------------------------------------------------

//*? 4) Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.

// let number1 = prompt("enter  number 1");
// number1 = Number(number1);

// if(number1 < 0   ){
//   console.log('result = number 1 is negative');
// }

// else {
//   console.log('result = number 1 is positive');
// }

// TODO ---------------------------------------------------- PROBLEM 5 ----------------------------------------------------

//*? 5) Write a program that take 3 integers from user then print the max element and the min element.

// let number1 = prompt("enter  number 1");
// let number2 = prompt("enter  number 2");
// let number3 = prompt("enter  number 3");

// number1 = Number(number1);
// number2 = Number(number2);
// number3 = Number(number2);

// if(number1 > number2 && number1> number3  ){
//   console.log('result = number 1 is max');
//   console.log('result = number 2 & 3 is min');

// }

// else if(number2 > number1 && number2> number3 ){
//   console.log('result = number 2 is max');
//   console.log('result = number 1 & 3 is min');

// }

// else {
//   console.log('result = number 3 is max');
//   console.log('result = number 1 & 2 is min');

// }

// TODO ---------------------------------------------------- PROBLEM 6 ----------------------------------------------------

//*? 6) Write a program that allows the user to insert integer number then check If a number is even or odd

// let number = prompt("enter any number");
// number = Number(number);

// if(number % 2 == 0){
//   console.log('result = number  is even');
// }

// else {
//   console.log('result = number  is odd');

// }

// TODO ---------------------------------------------------- PROBLEM 7 ----------------------------------------------------

//*? 7) Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant

// let character = prompt("enter any character");
// character = character.toLowerCase();

// if(character == 'a' || character == 'e' || character == 'i' || character == 'o' || character == 'u' ){
//   console.log('result = character is vowel');
// }

// else {
//   console.log('result = number  is consonant');

// }

// TODO ---------------------------------------------------- PROBLEM 8 ----------------------------------------------------

//*? 8) Write a program that allows user to insert integer then print all numbers between 1 to that’s number

// let number = prompt("enter any number");
// number = Number(number);

// for(let i = 1 ; i <= number ; i++){
// console.log(i);

// }

// TODO ---------------------------------------------------- PROBLEM 9 ----------------------------------------------------

//*? 9) Write a program that allows user to insert integer then print a multiplication table up to 12.

// let number = prompt("enter any number");
// number = Number(number);

// for(let i = 1 ; i <= 12 ; i++){
// console.log(`${number} * ${i} = ${number * i}`);

// }

// TODO ---------------------------------------------------- PROBLEM 10 ----------------------------------------------------

//*? 10) Write a program that allows to user to insert number then print all even numbers between 1 to this number

// let number = prompt("enter any number");
// number = Number(number);

// for(let i = 1 ; i <= number ; i++){

//       if(i % 2 == 0){
//         console.log(i);
//     }
// }

// TODO ---------------------------------------------------- PROBLEM 11 ----------------------------------------------------

//*? 11) Write a program that take two integers then print the power

// let number1 = prompt("enter  number 1");
// let number2 = prompt("enter  number 2");

// number1 = Number(number1);
// number2 = Number(number2);2

// console.log(`the result of  ${number1} to power ${number2}   = ${number1 ** number2}`);

// TODO ---------------------------------------------------- PROBLEM 12 ----------------------------------------------------

//*? 12) Write a program to enter marks of five subjects and calculate total, average and percentage.

// let mark1 = prompt("enter mark of english ");
// let mark2 = prompt("enter of math ");
// let mark3 = prompt("enter of science");
// let mark4 = prompt("enter of arabic");
// let mark5 = prompt("enter of biology");

// let total = Number(mark1) + Number(mark2) + Number(mark3) + Number(mark4) + Number(mark5);
// let average = total / 5;
// let percentage = (total / 500) * 100;

// console.log(`the total marks ${total} `);
// console.log(`the total average ${average} `);
// console.log(`the total percentage ${percentage} `);

// TODO ---------------------------------------------------- PROBLEM 13 ----------------------------------------------------

//*? 13)Write a program to input month number and print number of days in that month.

// let month = prompt("enter number of month from 1 to 12");
// month = Number(month);

// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 10 || month == 12 ){
//   console.log('this month contains  31 days ');
// }

// else if(month == 2 ){
//   console.log('this month contains  28 days ');
// }

// else {
//   console.log('this month contains  30 days ');
// }

// TODO ---------------------------------------------------- PROBLEM 14 ----------------------------------------------------

//*? 14) Write a program to input marks of five subjects , Find percentage and grade

// let mark1 = prompt("enter mark of english ");
// let mark2 = prompt("enter of math ");
// let mark3 = prompt("enter of science");
// let mark4 = prompt("enter of arabic");
// let mark5 = prompt("enter of biology");

// let total = Number(mark1) + Number(mark2) + Number(mark3) + Number(mark4) + Number(mark5);
// let percentage = (total / 500) * 100;

// if (percentage >= 90) {
//   console.log("grade = A+");
// } else if (percentage >= 80) {
//   console.log("grade = B+");
// } else if (percentage >= 70) {
//   console.log("grade = C+");
// } else if (percentage >= 60) {
//   console.log("grade = D+");
// } else if (percentage < 60) {
//   console.log("grade = F+");
// }

// TODO ---------------------------------------------------- PROBLEM 15 ----------------------------------------------------

//*? 15) Write a program to print total number of days in month

// let month = prompt("enter number of month from 1 to 12");
// month = Number(month);

// let days;

// switch(month) {
//   case 1:
//   case 3:
//   case 5:
//   case 7:
//   case 8:
//   case 10:
//   case 12:
//     days = 31;
//     console.log(`this month contains ${days} days`);
//     break;
//   case 4:
//   case 6:
//   case 9:
//   case 11:
//     days = 30;
//     console.log(`this month contains ${days} days`);
//     break;
//   case 2:
//     days = "28 or 29";
//     console.log(`this month contains ${days} days`);
//     break;
// }



// TODO ---------------------------------------------------- PROBLEM 16 ----------------------------------------------------

//*? 16) Write a program to check whether an alphabet is vowel or consonant


// let character = prompt("enter character ");
// character = character.toLowerCase();

// switch(character) {
//   case 'a':
//   case 'e':
//   case 'o':
//   case 'i':
//   case 'u':

//     console.log(`this charcter = ${character} => is vowel `);
//     break;
//   default:
//     console.log(`this charcter = ${character} => is consonant `);
// }

// TODO ---------------------------------------------------- PROBLEM 17 ----------------------------------------------------

//*? 17) Write a program to find maximum between two numbers

// let number1 = Number(prompt("Enter number 1:"));
// let number2 = Number(prompt("Enter number 2:"));

// switch(true) {
//     case number1 > number2:
//         console.log('Result: Number 1 is greater');
//         break;
//     case number2 > number1:
//         console.log('Result: Number 2 is greater');
//         break;
//     default:
//         console.log('Result: Both numbers are equal');
// }

// TODO ---------------------------------------------------- PROBLEM 18 ----------------------------------------------------

//*? 18) Write a program to check whether a number is even or odd


// let number = Number(prompt("Enter number :"));

// switch(number % 2) {
//     case 0:
//         console.log(`the number ${number} is even`);
//         break;
//     case 1:
//         console.log(`the number ${number} is odd`);
//       break;
//     default:
//         console.log('not even or odd');
// }

// TODO ---------------------------------------------------- PROBLEM 19 ----------------------------------------------------

//*? 19) Write a program to check whether a number is positive or negative or zero

// let number = Number(prompt("Enter number :"));

// switch(true) {
//     case number > 0:
//         console.log(`the number ${number} is positive`);
//         break;
//     case number < 0:
//         console.log(`the number ${number} is negative`);
//       break;
//     default:
//         console.log('the number is zero');
// }

// TODO ---------------------------------------------------- PROBLEM 20 ----------------------------------------------------

//*? 20) Write a program to create Simple Calculator

// let number1 = Number(prompt("Enter number 1:"));
// let number2 = Number(prompt("Enter number 2:"));
// let operator = prompt("Enter operator (+, -, *, /):");

// let result;

// switch(operator) {
//     case '+':
//         result = number1 + number2;
//         console.log(`Result: ${number1} + ${number2} = ${result}`);
//         break;

//     case '-':
//         result = number1 - number2;
//         console.log(`Result: ${number1} - ${number2} = ${result}`);
//         break;

//     case '*':
//         result = number1 * number2;
//         console.log(`Result: ${number1} * ${number2} = ${result}`);
//         break;

//     case '/':
//         result = number1 / number2;
//         console.log(`Result: ${number1} / ${number2} = ${result}`);
//         break;
//     default:
//         console.log('Invalid operator!');
// }
