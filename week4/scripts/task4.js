/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
// Step 2: Inside of the object, add a property named name with a value of your name as a string
let myself = {'name':"Angel"}

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myself.photo = "images/myself.png"

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myself.favoriteFoods = ["Chilaquiles", "Spring Mix Salad", "Watermelon"]

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myself.hobbies = ["Play guitar", "Hicking", "Listen to music"]

// Step 6: Add another property named placesLived with a value of an empty array
myself.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
let tkt = {"place":"", "len":""}
myself.placesLived = [tkt]

// To verify that it's an array
console.log(myself.placesLived)

// Step 8: For each property, add appropriate values as strings
myself.placesLived[0] = {'place': "Tecate", 'len': '21 years'}

// Step 9: Add additional objects with the same properties for each place you've lived
myself['placesLived'].push({'place': "Tijuana", 'len': '10 years'})

myself['placesLived'].push({'place': "San Diego",'len': '6 years'})

/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').innerHTML = myself.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('src',myself.photo)

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.getElementById('photo').setAttribute('alt',myself.name)

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
let list = document.getElementById('favorite-foods')

myself.favoriteFoods.forEach(item => {
    let listItem = document.createElement('li')
    listItem.textContent = item;
    list.append(listItem);
});

// Step 6: Repeat Step 4 for each hobby in the hobbies property
// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
let hobbyList = document.getElementById('hobbies')

myself.hobbies.forEach(item => {
    let listItem = document.createElement('li')
    listItem.textContent = item;
    hobbyList.append(listItem);
});

// Step 8: For each object in the <em>placesLived</em> property:
let places = myself.placesLived
let times = myself.placesLived
let dl = document.getElementById('places-lived')

for(let i=0; i<3; i++){

    // - Create an HTML <dt> element and put its place property in the <dt> element
    let dt = document.createElement('dt')
    dt.textContent = places[i].place

    // - Create an HTML <dd> element and put its length property in the <dd> element
    let dd = document.createElement('dd')
    dd.textContent = times[i].len

    // Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived*/
    dl.append(dt)
    dl.append(dd)
}



