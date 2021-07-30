"use strict"

// let age = 27;
// console.log(age);

// Declare function

function dayTripGenerator(cities){
    console.log(cities[0 || 1 || 2]);
    return cities[0 || 1 || 2];
}

function newDayTripGenerator(newCity){
    let citiesToVisit = ['San Fransisco', 'New York City', 'Tampa Bay']
    let userInput = prompt("Please enter 1, 2, or 3")
    for(let i = 0; i < citiesToVisit.length; i++){
        if(citiesToVisit[i] == userInput){
            console.log("Your city to visit is")
        }
    }
}


// Setup Arguments to pass as parameters into functions

let citiesToVisit = ['San Fransisco', 'New York City', 'Tampa Bay']
let restaurantsToEatAt = ['McDonalds', 'Burger King', 'Pizza Hut']
let modeOfTransportation = ['Car', 'Bus', 'Plane']
let formOfEntertainment = ['Casino', 'Clubbing', 'Beach']

// dayTripGenerator(citiesToVisit);
let timeForVacation;
newDayTripGenerator(timeForVacation);

// Execute function


// Validate results