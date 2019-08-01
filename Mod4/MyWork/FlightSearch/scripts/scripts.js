/*
* Description: For loop to print out average scores and more
*
* Author: Neo
*/
"use strict";

function findFlight(list, depart, arrival, day) {
    let d = new RegExp(day);
    let found = false;
    let matchedFlights = "";

    for(let i in list) {
        if((depart == list[i].departure) && (arrival == list[i].arrival) && (d.exec(list[i].days))) {
            matchedFlights = matchedFlights + flightToString(list[i]) + "\n";
            found = true;
        }
    }

    if(found == true) {
        return "Flights found - <br>" + matchedFlights;
    }
    else {
        return "No matching flights found.";
    }
}

function flightToString(obj) {
    let str = 
        "Flight: " + obj.flight +
        " Departure: " + obj.departure +
        " Arrival: " + obj.arrival +
        " Time: " + obj.time +
        " Price: " + obj.price +
        " Days: " + obj.days +
        "<br>";
    return str;
}

window.onload = function() 
{
    let flights = [
        {flight: 1, departure: "BDL", arrival: "LAS", time: "0700", price: 495, days: "SASU"},
        {flight: 2, departure: "DCA", arrival: "LAS", time: "0800", price: 595, days: "SASU"},
        {flight: 3, departure: "LAS", arrival: "BDL", time: "0900", price: 695, days: "SASU"},
        {flight: 4, departure: "TKO", arrival: "LAS", time: "1000", price: 455, days: "SASU"},
        {flight: 5, departure: "LAS", arrival: "BDL", time: "1100", price: 475, days: "SASU"},
        {flight: 6, departure: "BDL", arrival: "DCA", time: "1300", price: 495, days: "SASU"},
        {flight: 7, departure: "TKO", arrival: "DCA", time: "1500", price: 395, days: "SASU"},
        {flight: 8, departure: "DCA", arrival: "BDL", time: "1700", price: 375, days: "SASU"},
        {flight: 9, departure: "BDL", arrival: "TKO", time: "2000", price: 355, days: "SASU"},
        {flight: 10, departure: "LAS", arrival: "TKO", time: "2200", price: 705, days: "SASU"}];

    //grab each of the values and assigns value
    let departField = document.getElementById("departField");
    let arrivalField = document.getElementById("arrivalField");
    let dayField = document.getElementById("dayField");

    const searchBtn = document.getElementById("searchBtn");

    searchBtn.onclick = function () {
        let found = findFlight(flights, departField.value, arrivalField.value, dayField.value);

        document.getElementById("foundFlights").innerHTML = found;
    };
    
    var resetBtn = document.getElementById('resetBtn');
    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        // Put cursor in first field
        document.getElementById('pickUpField').focus();
    }
};