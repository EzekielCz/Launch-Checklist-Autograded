// Write your JavaScript code here!

// const { myFetch } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

//const { formSubmission } = require("./scriptHelper");

// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    const sumbit = document.getElementById("formSubmit");
    sumbit.addEventListener("click", function(event){
        event.preventDefault();
        let pilot = document.getElementById("pilotName")
        let copilot = document.querySelector("input[name=copilotName]");
        let fuelLevel =document.querySelector("input[name=fuelLevel]")
        let cargoLevel = document.querySelector("input[name=cargoMass]")
        console.log(pilot.value);
        formSubmission(document,0,pilot.value,copilot.value,fuelLevel.value,cargoLevel.value);

    });
    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;

    listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let randomPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document,randomPlanet.name,randomPlanet.diameter,randomPlanet.star,randomPlanet.distance,randomPlanet.moons,randomPlanet.image); 
        myFetch();
    })
    // formSubmission(0,[0],0,0,0,0);
    // formSubmission(document,0,0,0,0,"asa");
    // formSubmission();
});