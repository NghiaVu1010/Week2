/*
* Description: Gets DOB and prints
*
* Author: Neo
*/
"use strict";

/*
* This function returns the date in a specified format
*
* @param d (Object) - holds date
* @param arrMonth (Array) - holds months
* @param arrDay (Array) - holds days
*/
function customizedFormat() {
    let d = new Date();
    const arrMonth = ["January", "Feburary" , "March", "April", "May","June", "July", "August", 
        "September", "October", "November", "December"];
    const arrDay = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let currYear = d.getFullYear();
    let currMonth = arrMonth[d.getMonth()];
    let currDate = d.getDate();
    let currDay = arrDay[d.getDay()];

    return `${currDate}-${currMonth}-${currYear} (${currDay})`;
}

console.log(customizedFormat());