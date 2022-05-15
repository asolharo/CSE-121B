/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let name = "Angel Solano"


// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').innerHTML = name

// Step 3: declare and instantiate a variable to hold the current year
let current_Year = new Date().getFullYear()

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').innerHTML = current_Year

// Step 5: declare and instantiate a variable to hold the name of your picture
var picLocation = "images/myself.png"

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('#photo').setAttribute('src', picLocation)


/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let food= ["Chilaquiles", "Spring Mix Salad", "Watermelon"]

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').innerHTML = food.join(", ")

food[0] = "Enchiladas"

document.querySelector('#food').innerHTML = food.join(", ")


// Step 3: declare and instantiate a variable to hold another favorite food
var food2 = "Chicken Condon Blue"

// Step 4: add the variable holding another favorite food to the favorite food array
food.push(food2)

// Step 5: repeat Step 2
document.querySelector('#food').innerHTML = food.join(", ")

// Step 6: remove the first element in the favorite foods array
food.shift()

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = food.join(", ")

// Step 8: remove the last element in the favorite foods array
food.pop()

// Step 7: repeat Step 2
document.querySelector('#food').innerHTML = food.join(", ")


