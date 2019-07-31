/*
* Description: Same billing address?
*
* Author: Neo
*/
"use strict";

window.onload = function() 
{
    let sameShip = document.getElementById("sameShip");
    sameShip.onclick = sameShippingDiv;

    function sameShippingDiv() {
        let sameShip = document.getElementById("sameShip").checked;
        let shipDiv = document.getElementById("shipDiv");

        //Makes shipping form disabled
        if(sameShip) {
            document.getElementById("shipNameForm").disabled = true;
            document.getElementById("shipAddressForm").disabled = true;
        }
        else {
            document.getElementById("shipNameForm").disabled = false;
            document.getElementById("shipAddressForm").disabled = false;
        }

/*
        //Makes shipping disappear
        if(shipDiv.style.display === "none") {
            shipDiv.style.display = "inline";
        }
        else {
            shipDiv.style.display = "none";
        }
*/
    }

    var resetBtn = document.getElementById('resetBtn');

    // Bind Click Event Handler to Reset Buttom
    resetBtn.onclick = function() {
        shipNameForm.style.display = 'inline';
        shipAddressForm.style.display = 'inline';

        // Put cursor in First Name field
        document.getElementById('nameForm').focus();
    }
};