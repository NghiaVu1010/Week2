/*
* Description: For loop to print out average scores and more
*
* Author: Neo
*/
"use strict";

function findFlight(depart, arrival, day) {
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
    
    let d = new RegExp(day);
    let found = false;
    let matchedFlights = "";

    for(let i in flights) {
        if((depart == flights[i].departure) && (arrival == flights[i].arrival) && (d.exec(flights[i].days))) {
            matchedFlights = matchedFlights + flightToString(flights[i]) + "\n";
            found = true;
        }
    }

    if(found == true) {
        return console.log("Flights found - \n" + matchedFlights);
    }
    else {
        return console.log("No matching flights found.");
    }
}

function flightToString(obj) {
    let str = 
        "Flight: " + obj.flight +
        " Departure: " + obj.departure +
        " Arrival: " + obj.arrival +
        " Time: " + obj.time +
        " Price: " + obj.price +
        " Days: " + obj.days;
    return str;
}

let departureCity = "BDL", arrivalCity = "TKO", travelDate ="SA";

findFlight(departureCity, arrivalCity, travelDate);