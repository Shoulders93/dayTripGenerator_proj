"use strict"

// Declare function

function randomCityTripGenerator(cities){
    let citiesToVisit = ['San Fransisco', 'New York City', 'Tampa Bay']
    let random = Math.floor(Math.random() *citiesToVisit.length);
    let finalCity = citiesToVisit[random];
    console.log(finalCity);
}

function randomRestaurantGenerator(food){
    let placesToEat = ['McDonalds', 'Burger King', 'Pizza Hut']
    let randomfood = Math.floor(Math.random() *placesToEat.length);
    let finalPlaceToEat = placesToEat[randomfood];
    console.log(finalPlaceToEat);
}

function randomModeOfTransport(vehicle){
    let modeOfTransport = ['Car', 'Bus', 'Plane']
    let randomTransport = Math.floor(Math.random() *modeOfTransport.length);
    let finalModeOfTransport = modeOfTransport[randomTransport];
    console.log(finalModeOfTransport);
}

function randomFormOfEntertainment(entertain){
    let whatToDo = ['Casino', 'Clubbing', 'Beach']
    let randomChoice = Math.floor(Math.random() *whatToDo.length);
    let finalFormOfEntertainment = whatToDo[randomChoice];
    console.log(finalFormOfEntertainment);
}



// create a function that randomly generates one random variable first
// then do that four times

// Setup Arguments to pass as parameters into functions

let cityTripVisit = ['San Fransisco', 'New York City', 'Tampa Bay']
let restaurantsToEatAt = ['McDonalds', 'Burger King', 'Pizza Hut']
let modeOfTransportation = ['Car', 'Bus', 'Plane']
let formOfEntertainment = ['Casino', 'Clubbing', 'Beach']

randomCityTripGenerator(cityTripVisit);
randomRestaurantGenerator(cityTripVisit);
randomModeOfTransport(cityTripVisit);
randomFormOfEntertainment(cityTripVisit);

// Execute function


// Validate results