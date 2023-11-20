/*
Filename: ComplexApp.js
Description: A complex and sophisticated JavaScript application that demonstrates advanced concepts and techniques.
*/

// Define a class for representing a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method to greet the person
  greet() {
    console.log(`Hello, my name is ${this.name}! I am ${this.age} years old.`);
  }
}

// Create an instance of Person
const john = new Person('John', 30);

// Create an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Function to calculate the sum of an array of numbers
function calculateSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
}

// Calculate and print the sum of numbers
const sum = calculateSum(numbers);
console.log(`Sum of numbers: ${sum}`);

// Define a class for representing a Rectangle
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }
}

// Create an instance of Rectangle
const rectangle = new Rectangle(5, 10);

// Calculate and print the area of the rectangle
const area = rectangle.calculateArea();
console.log(`Area of rectangle: ${area}`);

// Function to validate if a number is prime
function isPrime(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

// Check if a number is prime
const number = 13;
console.log(`${number} is prime: ${isPrime(number)}`);

// Define a class for representing a Car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  // Method to get the car's details
  getDetails() {
    return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}`;
  }
}

// Create an instance of Car
const car = new Car('Tesla', 'Model 3', 2022);

// Print the car's details
console.log(car.getDetails());

// Function to reverse a string
function reverseString(string) {
  return string.split('').reverse().join('');
}

// Reverse and print a string
const string = 'Hello, World!';
console.log(`Reversed string: ${reverseString(string)}`);

// ... continue with more sophisticated code ...
// ... with advanced concepts and techniques ...