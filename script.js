"use strict"

// Declare function

function randomCityTripGenerator(cities){
    let random = Math.floor(Math.random() *cities.length);
    let finalCity = cities[random];
    console.log(finalCity);
}

function randomRestaurantGenerator(food){
    let randomfood = Math.floor(Math.random() *food.length);
    let finalPlaceToEat = food[randomfood];
    console.log(finalPlaceToEat);
}

function randomModeOfTransport(vehicle){
    let randomTransport = Math.floor(Math.random() *vehicle.length);
    let finalModeOfTransport = vehicle[randomTransport];
    console.log(finalModeOfTransport);
}

function randomFormOfEntertainment(entertain){
    let randomChoice = Math.floor(Math.random() *entertain.length);
    let finalFormOfEntertainment = entertain[randomChoice];
    console.log(finalFormOfEntertainment);
}

// create a function that randomly generates one random variable first
// then do that four times

// Setup Arguments to pass as parameters into functions

let citiesToVisit = ['San Fransisco', 'New York City', 'Tampa Bay']
let placesToEat = ['McDonalds', 'Burger King', 'Pizza Hut']
let modeOfTransport = ['Car', 'Bus', 'Plane']
let whatToDo = ['Casino', 'Clubbing', 'Beach']

randomCityTripGenerator(citiesToVisit);
randomRestaurantGenerator(placesToEat);
randomModeOfTransport(modeOfTransport);
randomFormOfEntertainment(whatToDo);

let choosenDestination = prompt("Does this trip sound good?");

    if(choosenDestination == "yes"){
        console.log("Enjoy your trip");
    }
    while(choosenDestination !== "yes"){
        randomCityTripGenerator(citiesToVisit);
        randomRestaurantGenerator(placesToEat);
        randomModeOfTransport(modeOfTransport);
        randomFormOfEntertainment(whatToDo);
        choosenDestination = prompt("How about this trip instead?");{
            if(choosenDestination == "yes"){
                console.log("Enjoy your trip!");
            }
        }
    }

// Execute function


// Validate results