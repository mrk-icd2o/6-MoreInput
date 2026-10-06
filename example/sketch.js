/*
   Description: Lesson 6 - More Input example
   Author: Mr. Kowalczewski
   Date of last edit: September 23, 2026
*/

// declare the variables - but don't give them a value yet!
let myInputBox, myMenu, myButton;
let answer = 0;

function setup() {
  createCanvas(600, 600);

  // ----- createInput() -----
  // set the variable equal to createInput() (an input box)
  myInputBox = createInput();
  // sets the (x, y) position of the box
  myInputBox.position(20, 55);

  // ----- createSelect() -----
  // creates a dropdown menu with different 'options'
  myMenu = createSelect();
  myMenu.position(300, 55);
  myMenu.option("Hello");
  myMenu.option("There");
  myMenu.option("General");
  myMenu.option("Kenobi");
  myMenu.option("!");

  // ----- createButton() -----
  myButton = createButton("Draw Circle");
  myButton.position(300, 300);

  // when myButton is pressed, it will call the drawCircle function
  myButton.mousePressed(drawCircle);
}

function draw() {
  background(200);

  // use .value() to extract the value from the textbox
  // .value() gives you a STRING type
  text(`The value is: ${myInputBox.value()}`, 20, 80);

  // ----- Number() -----
  // doing some simple math with the value
  // use Number() to convert the input to a number!
  answer = Number(myInputBox.value()) + 5;
  text(`${myInputBox.value()} plus 5 is: ${answer}`, 20, 100);

  // reading the dropdown menu
  text("Menu Selection is: " + myMenu.value(), 20, 150);

  // using if statements dependent on the .value()
  if (myMenu.value() == 'Hello') {
    rect(random(0, 300), random(0, 300), 50, 50);
  }
}

// function that runs when myButton is pressed
function drawCircle() {
  circle(400, 400, 50);
}
