/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date = new Date()

// Step 2: Declare another variable to hold the day of the week
let day

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
day = date.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let mssg

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day > 0 & day < 6) {
    mssg = "Hang in there!"
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
    mssg = "Woohoo! It is the weekend!"
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let day_name

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day){
    case 0:
        day_name = "Sunday";
        break;
    case 1:
        day_name = "Monday";
        break;
    case 2:
        day_name = "Tuesday";
        break;
    case 3:
        day_name = "Wednesday";
        break;
    case 4:
        day_name = "Thursday";
        break;
    case 5:
        day_name = "Friday";
        break;
    case 6:
        day_name = "Saturday";
}
/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector('#message1').innerHTML = mssg

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector('#message2').innerHTML = day_name


/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples
let templesList =[]

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
function output(temples){
    templesList = temples
    let element = document.getElementById('temples');

    templesList.forEach(temple => {

// - Creates an HTML <article> element
        let new_article = document.createElement("article")

// - Creates an HTML <h3> element and add the temple's templeName property to it
        let name = document.createElement('h3');
        name.innerHTML = temple.templeName;

// - Creates an HTML <h4> element and add the temple's location property to it
        let location = document.createElement("h4")
        location.innerHTML = temple.location

// - Creates an HTML <h4> element and add the temple's dedicated property to it
        let dedicated = document.createElement("h4")
        dedicated.innerHTML = temple.dedicated

// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
        let image = document.createElement("img")
        image.setAttribute('src', temple.imageUrl)

// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
        new_article.appendChild(name)
        new_article.appendChild(location)
        new_article.appendChild(dedicated)
        new_article.appendChild(image)

// - Appends the <article> element to the HTML element with an ID of temples
        element.appendChild(new_article)

      })
    }

// Step 3: Create another function called getTemples. Make it an async function.
async function getTemples(){

// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'.
// Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
    let list = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json')
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1).
// Make sure the the execution of the code waits here as well until it finishes.
    let templesInput = await list.json()
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.
    output(templesInput)
    }

getTemples(templesList)

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset(){
    return document.getElementById('temples').innerHTML = ''
}

// Step 8: Declare a function named sortBy that does the following:

function sortBy() {
    // - Calls the reset function
    reset();

    // - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
    sort = document.getElementById('sortBy').value

    // - Calls the output function passing in the sorted list of temples

    if (sort === 'templeNameAscending') {
        let sorted = templesList.sort(function(a,b) {return a.templeName>b.templeName ? 1 : -1})

        return output(sorted)

    } else if (sort === 'templeNameDescending') {
        let sorted = templesList.sort(function(a,b) {return b.templeName>a.templeName ? 1 : -1})
        //sorted = templesList.reverse()

        return output(sorted)
    }
    return sort
}
console.log(typeof templesList)


// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.getElementById('sortBy').addEventListener('change', sortBy);
/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
