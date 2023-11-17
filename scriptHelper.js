// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
    // Here is the HTML formatting for our mission target div.
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
    <h2>Mission Destination</h2>
    <ol>
        <li>Name: ${name}</li>
        <li>Diameter: ${diameter} </li>
        <li>Star: ${star}</li>
        <li>Distance from Earth: ${distance} </li>
        <li>Number of Moons: ${moons} </li>
    </ol>
    <img src=${image}>
  `;
};

 
 function validateInput(testInput) {
    if(testInput === null || testInput === ""){
        return "Empty"
    // } else if (testInput === NaN){
    }else if (isNaN(testInput) === true){
        return "Not a Number"
    } else {
        return "Is a Number"
    }
 }
    
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    // list = document.getElementById("");
     let pilotStatus = document.getElementById("pilotStatus");
     let copilotStatus = document.getElementById("copilotStatus");
     let fuelLevelStatus = document.getElementById("fuelStatus");
     let cargoLevelStatus = document.getElementById("cargoStatus");
     let launchStatus = document.getElementById("launchStatus");

     if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" ||
      validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty" ){
        // || validateInput(cargoLevel) === "Not a Number"
        // || validateInput(fuelLevel) === "Not a Number"|
        // console.log("Please enter input");
        alert("Please enter input"); //more descriptive alert 
        return
      };


    if(validateInput(pilot) === "Is a Number"){
        alert("Pilot Name is needed.")
    } else {
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
    };

    if(validateInput(copilot) === "Is a Number"){
        alert(" Co-pilot name is needed.")
    } else {
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
    };

    if(validateInput(fuelLevel) === "Not a Number"){
        alert("Fuel level needs to be indicated by a number.")
     } else if (fuelLevel < 10000){
        document.getElementById("faultyItems").style.visibility = "visible"
        launchStatus.innerHTML = `Shuttle Not Ready for Launch`
        launchStatus.style.color = "red"
        fuelLevelStatus.innerHTML = `Fuel level too low for launch`

    } else {
        fuelLevelStatus.innerHTML = `Fuel level high enough for launch`
    };

    if(validateInput(cargoLevel) === "Not a Number"){
        //logic error
        alert("Cargo Mass needs to be indicated by a number.")
    } else if (cargoLevel > 10000){
    document.getElementById("faultyItems").style.visibility = "visible"
       launchStatus.innerHTML = `Shuttle Not Ready for Launch`
       launchStatus.style.color = "red"  
       cargoLevelStatus.innerHTML = `Cargo mass too heavy for launch.` 
    }else{ 
        cargoLevelStatus.innerHTML = `Cargo mass low enough for launch`
    };

    if ((fuelLevel >= 10000 && cargoLevel <= 10000)){
        launchStatus.innerHTML = `Shuttle is Ready for Launch`
        launchStatus.style.color = "green"
    };

 }
 
 async function myFetch() {
     let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json");
    planetsReturned = await planetsReturned.json();
     return planetsReturned;
 };
 
 function pickPlanet(planets) {
//     for(let i=0; i <planets.length; i++){
//         planet = planets[i];
//    }
let mathRandom = Math.floor(Math.random()*6);
   return planets[mathRandom];
 };

//  <div class="astronaut">
//  <div class="bio">
//  <h3> ${astronaut.firstname} ${astronaut.lastname} </h3>
//  <ul>
//  <li>Hours in space ${astronaut.hoursinspace}</li>
//    <li>Active: false</li>
//   <li>Skills: Physician, Chemical Engineer</li>
//  </ul>
// </div>
// <img class="avatar" src="image/mae-jemison.jpg">
// </div>
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;