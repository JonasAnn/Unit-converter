let calMeter = document.getElementById("calmeter");
let calFeet = document.getElementById("calfeet");
let calLiter = document.getElementById("calliter");
let calGallon = document.getElementById("calgallon");
let calKilo = document.getElementById("calkilo");
let calPound = document.getElementById("calpound");

calMeter.textContent = 0;
calFeet.textContent = 0;
calLiter.textContent = 0;
calGallon.textContent = 0;
calKilo .textContent = 0;
calPound.textContent = 0;


function getInputValue(){
    // Selecting the input element and get its value 
    var inputVal = document.getElementById("myInput").value;
    calMeter.textContent = inputVal;
    calFeet.textContent = inputVal;
    calLiter.textContent = inputVal;
    calGallon.textContent = inputVal;
    calKilo.textContent = inputVal; 
    calPound.textContent = inputVal;
    
    // Displaying the value
   let resultFeet = document.getElementById("resultfeet").textContent = (inputVal * 3.2808399).toFixed(3);
   let resultMeter = document.getElementById("resultmeter").textContent = (inputVal /  3.2808399).toFixed(3);
   let resultGallon = document.getElementById("resultgallon").textContent = (inputVal / 4.546092).toFixed(3);
   let resultLiter = document.getElementById("resultliter").textContent = (inputVal * 4.546092).toFixed(3);
   let resultPound = document.getElementById("resultpound").textContent = (inputVal * 2.20462262).toFixed(3);
   let resultKilo = document.getElementById("resultkilo").textContent = (inputVal / 2.20462262).toFixed(3);
   
   
}