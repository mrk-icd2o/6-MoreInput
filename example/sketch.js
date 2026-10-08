/*
   Description: Lesson 6 - More Input example
   Author: Mr. Kowalczewski
   Date of last edit: September 23, 2026
*/

// declare the variables - but don't give them a value yet!
let myInputBox;
let myMenu;
let myButton;
let answer = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(200);
  // ----- createInput() -----
  // set the variable equal to createInput() (an input box)
  myInputBox = createInput('', 'date');
  // sets the (x, y) position of the box (from the window)
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
  myButton.mousePressed(drawASingleCircle);
}

function draw() {
  
  textSize(20);

   // use .value() to extract the value from the textbox
  // .value() gives you a STRING type
  text(`The value is: ${myInputBox.value()}`, 50, 180);

  
  // ----- Number() -----
  // doing some simple math with the value
  // .value() gives you STRING (text)
  // convert it into a Number( ) if that's what you want
  answer = Number(myInputBox.value()) + 5;

  // only shows text() when there is something in the input box
  if(myInputBox.value() != ''){
    text(`${myInputBox.value()} plus 5 is: ${answer}`, 50, 200);
  }
  

  // reading the dropdown menu
  text("Menu Selection is: " + myMenu.value(), 50, 250);

  //using if statements dependent on the .value()
  if (myMenu.value() == 'Hello') {
    rect(random(0, 300), random(0, 300), 50, 50);
  }
}

// function that runs when myButton is pressed
// this function runs ONE TIME when the button is pressed
function drawASingleCircle() {
  background(200);
  circle(400, 400, 50);
}
