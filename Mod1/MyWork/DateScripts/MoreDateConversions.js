/*
* Description: Gets DOB and prints
*
* Author: Neo
*/
"use strict";

/*
* This function sets bdays and prints
*
* @param myBday (Object) - holds my bday
* @param mBday (Object) - holds mom bday
* @param dBday (Object) - holds dad bday
*/
function getBday() {
    let myBday = new Date("09/22/1990");
    let mBday = new Date("Mar 04 1960");
    let dBday = new Date(1955, 9, 31);

    console.log(myBday.toLocaleString());
    console.log(mBday.toLocaleString());
    console.log(dBday.toLocaleString());
}

getBday();