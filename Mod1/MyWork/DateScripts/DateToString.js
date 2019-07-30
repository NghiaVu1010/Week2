/*
* Description: Gets date and prints
*
* Author: Neo
*/
"use strict";

/*
* This function grabs dates and prints out in different ways
*
* @param d (Object) - holds the date
* @param currDate (String) - holds the string
*/
function dateToString() {
    let d = new Date();
    let currDate;
    
    currDate = d.toString();
    //currDate = d.toDateString();
    //currDate = d.toUTCString();
    //currDate = d.toLocaleString();

    return currDate;
}

console.log(dateToString());