/*
* Description: Validate Canadian postal code
*
* Author: Neo
*/
"use strict";

//var codes = ["K1A-0B1", "ABC 123", "B3K 5X5", "76126", "K7H 1A6", "B0J 1N0"];

/*
* Validates if zip code is a canadian zip code
*
* @param regExp (Reg Exp) - initialize the regExp format
* @param str (String) - stores the validation for the regExp
*/
function validateZipcodeArray(array) {
    let regExp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;
    let str = "";

    for(let i = 0; i < array.length; i++) {
        if(regExp.test(array[i])) {
            str = str + array[i] + " is a valid postal code.\n";
        }
        else {
            str = str + array[i] + " is NOT a valid postal code.\n";
        }
    }

    return str;
}

/*
* Validates if zip code is a canadian zip code
*
* @param regExp (Reg Exp) - initialize the regExp format
*/
function validateZipcode(str) {
    let regExp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/;

    if(regExp.test(str)) {
        str = str + " is a valid postal code.";
    }
    else {
        str = str + " is NOT a valid postal code.";
    }

    return str;
}

window.onload = function() {
    let zipField = document.getElementById("zipField");
    let zipMsg = document.getElementById("zipMsg");

    let validateBtn = document.getElementById("validateBtn");
    validateBtn.onclick = function () {
        zipMsg.innerHTML = validateZipcode(zipField.value);
    }
}