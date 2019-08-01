/*
* Description: Calculates car rental
*
* Author: Neo
*/
"use strict";
function calculateRental(numDays) {
    return numDays * 29.99;
}

function calculateOptions(numDays, toll, gps, road) {
    let sum = 0;

    if(toll){sum += 3.95 * numDays};
    if(gps){sum += 2.95 * numDays};
    if(road){sum += 3.95 * numDays};

    return sum;
}

function calculateAgeSurcharge(numDays, age) {
    if(age == 'yes') {
        ageMsg.style.display = 'none';
        return calculateRental(numDays) * .30;
    }
    else {
        return 0;
    }
}

function returnDate(numDays, startDate) {
    let d = Date.parse(startDate);
    let msec = 1000*60*60*24;

    let duration = (Number(numDays) + 1) * msec;
    let endDate = new Date(d + duration);
    
    return endDate.toDateString();
}

window.onload = function() 
{
    //grab each of the values and assigns value
    let pickUp = document.getElementById("pickUpField");
    let days = document.getElementById("daysField");

    let tollTag = document.getElementById("tollTagBox");
    let gps = document.getElementById("gpsBox");
    let roadside = document.getElementById("roadsideBox");

    let rentalTotal = document.getElementById("rentalTotal");
    let optionsTotal = document.getElementById("optionsTotal");
    let underTotal = document.getElementById("underTotal");
    let ageMsg = document.getElementById("ageMsg");

    let totalDue = document.getElementById("totalDue");
    let returnDue = document.getElementById("returnDue");

    const calculateBtn = document.getElementById("calculateBtn");

    calculateBtn.onclick = function () {    
        let ageOption = document.querySelector("input[name='age']:checked");

        if (ageOption == undefined) {
            return ageMsg.style.display = 'block';
        }

        let rentDue = calculateRental(days.value);
        let optionDue = calculateOptions(days.value, tollTag.checked, gps.checked, roadside.checked);
        let underDue = calculateAgeSurcharge(days.value, ageOption.value);
        let returnDay = returnDate(days.value, pickUp.value);

        rentalTotal.value = rentDue.toFixed(2);
        optionsTotal.value = optionDue.toFixed(2);
        underTotal.value = underDue.toFixed(2);

        totalDue.value = (rentDue + optionDue + underDue).toFixed(2);
        returnDue.value = returnDay;
    };
    
    var resetBtn = document.getElementById('resetBtn');

    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        ageMsg.style.display = 'none';

        // Put cursor in first field
        document.getElementById('pickUpField').focus();
    }
};