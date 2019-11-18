window.addEventListener("load", function() {
   let form = document.querySelector("form");
   form.addEventListener("submit", function(event) {
     let pilot = document.querySelector("input[name='pilotName']");
     let copilot = document.querySelector("input[name='copilotName']");
     let fuel = document.querySelector("input[name='fuelLevel']");
     let cargo = document.querySelector("input[name='cargoMass']");
   if (pilot.value === "" || copilot.value === "" || fuel.value === "" || cargo.value === "") {
      alert("All fields are required!");
      event.preventDefault();
   };
   if (isNaN(fuel.value)) {
      alert("Make sure to enter valid information for each field.");
      event.preventDefault();
   };
   if (isNaN(cargo.value)) {
      alert("Make sure to enter valid information for each field.");
      event.preventDefault();
   };

   if (pilot.value !== "" && copilot.value !== "" && fuel.value !== "" && cargo.value !== ""){
      if(fuel.value < 10000){    
         let visibilityTime = document.getElementById('faultyItems');
         visibilityTime.style.visibility = 'visible'; 
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot.value} is ready for launch`;       
         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot.value} is ready for launch`;       
         document.getElementById('fuelStatus').innerHTML = "Fuel level too low for launch";
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById('launchStatus').style.color = "red";
      };       
      if (cargo.value > 10000){
         let visibilityTime = document.getElementById('faultyItems');
         visibilityTime.style.visibility = 'visible'; 
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot.value} is ready for launch`;       
         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot.value} is ready for launch`;  
         document.getElementById('cargoStatus').innerHTML = "Cargo mass too high for launch";
         document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
         document.getElementById('launchStatus').style.color = "red";
      };       
      if (fuel.value > 10000 && cargo.value < 10000){
         let visibilityTime = document.getElementById('faultyItems');
         visibilityTime.style.visibility = 'visible'; 
         document.getElementById('pilotStatus').innerHTML = `Pilot ${pilot.value} is ready for launch`;       
         document.getElementById('copilotStatus').innerHTML = `Co-pilot ${copilot.value} is ready for launch`;
         document.getElementById('launchStatus').innerHTML = "Shuttle is ready for launch";
         document.getElementById('launchStatus').style.color = "green";
     };         
   }; 
    event.preventDefault();    
});     

fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
   response.json().then(function(json){
      const missionTarget = document.getElementById("missionTarget");

      let randomNumber = Math.floor(Math.random()*json.length)
      console.log(randomNumber);

      missionTarget.innerHTML = `
      <h2>Mission Destination</h2>
         <ol>
            <li>Name: ${json[randomNumber].name}</li>
            <li>Diameter: ${json[randomNumber].diameter}</li>
            <li>Star: ${json[randomNumber].star}</li>
            <li>Distance from Earth: ${json[randomNumber].distance}</li>
            <li>Number of Moons: ${json[randomNumber].moons}</li>
         </ol>
         <img src="${json[randomNumber].image}">
      `;      
   });   
});
});




/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
