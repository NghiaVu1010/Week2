/*
* Description: Calculates ice cream money
*
* Author: Neo
*/
"use strict";

window.onload = function() 
{
    const priceBtn = document.getElementById("priceBtn");
    priceBtn.onclick = calculateTotal;
    
    const incorrectNum = document.getElementById("incorrectNum");

    function calculateTotal() {
        //grab each of the values and assigns value
        let scoops = Number(document.getElementById("scoopForm").value);
        let hotFudge = document.getElementById("hotFudge").checked;
        let sprinkles = document.getElementById("sprinkles").checked;
        let whipCream = document.getElementById("whipCream").checked;
        let total = document.getElementById("total");
        let currTotal = 0;

        incorrectNum.style.display = 'none';

        if(scoops == 1) {
            currTotal += 2.50;
        }
        else if(scoops > 1) {
            currTotal += 2.50 + 1.25 * scoops;
        }
        else {
            total.value = "";
            return incorrectNum.style.display = 'block';
        }

        if(hotFudge) {currTotal += 1.25;}
        if(sprinkles) {currTotal += 0.25;}
        if(whipCream) {currTotal += 0.75;}

        total.value = currTotal;
    }

    var resetBtn = document.getElementById('resetBtn');

    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        incorrectNum.style.display = 'none';

        // Put cursor in scoop field
        document.getElementById('scoopForm').focus();
    }
};