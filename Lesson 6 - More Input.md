# Lesson 6 - More Input

We have learned how to let the user press single keys or click the mouse to interact with our programs. This lesson covers some other ways we can gather input from the user.

## createInput()

We use the `createInput()` function to create textboxes (and other input types). We'll begin with a textbox:

1. Create a global variable, but don't assign it a value yet.
2. Inside `setup()`, set it equal to `createInput()`, and use `.position()` to position it.
3. Later we access the value inside the textbox using `.value()`. Note that this will be a string.

```javascript
// declare a variable - but don't give it a value yet!
let myInputBox;

function setup() {
  createCanvas(600, 600);

  // set the variable equal to createInput() (an input box)
  myInputBox = createInput();
  // sets the (x, y) position of the box
  myInputBox.position(20, 55);
}

function draw() {
  background(200);
  // use .value() to extract the value from the textbox
  // .value() gives you a STRING type
  text(`The value is: ${myInputBox.value()}`, 20, 80);
}
```

When you use `.value()` to extract the value, it will be a string (text). We can do whatever we like with this value, including using it in if statements or printing it to the screen.

To do math calculations you have to convert it into a number using the `Number()` function:

```javascript
let num = "5";

let answer = 3 + num; // will give you 35
num = Number(num);    // now num is a Number type
answer = 3 + num;     // will give you 8
```

There are other types of input you can make with `createInput()`, such as password inputs and date inputs. See the [p5.js reference](https://p5js.org/reference/p5/createInput/) and the [MDN input reference](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input) for more.

## createSelect()

Similar to the above, we can use `createSelect()` to create a dropdown menu with different options. After creating the dropdown menu we use `.option()` to create the various options. `.value()` is used again to get the current value.

```javascript
let myMenu;

function setup() {
  createCanvas(600, 600);

  // creates a dropdown menu with different 'options'
  myMenu = createSelect();
  myMenu.position(300, 55);
  myMenu.option("Hello");
  myMenu.option("There");
  myMenu.option("General");
  myMenu.option("Kenobi");
  myMenu.option("!");
}

function draw() {
  background(200);
  text("Menu Selection is: " + myMenu.value(), 20, 150);

  if(myMenu.value() == 'Hello'){
    rect(random(0, 300), random(0, 300), 50, 50);
  }
}
```

## createButton()

We can also create buttons and program what they will do when pressed. `createButton()` is created and positioned just like the examples above, but we also have to program what it does. We do this by writing our own function (similar to `mousePressed()` and others):

```javascript
let myButton;

function setup(){
  // other stuff
  myButton = createButton("Press Me");
  // when myButton is pressed, the code in drawRectangle() will be run
  myButton.mousePressed(drawRectangle);
}

// function to draw a random rectangle
function drawRectangle(){
  rect(random(600), random(600), 50, 50);
}
```

We name functions similar to variables (descriptive, and in camelCase). We will learn more about functions later in the course.
