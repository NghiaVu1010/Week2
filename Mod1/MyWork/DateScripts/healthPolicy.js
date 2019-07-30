/*
* Description: Gets DOB and prints
*
* Author: Neo
*/
"use strict";

function getExpDate() {
    let d = new Date();
    d.setDate(d.getDate() + 90);

    return console.log(d);
}

getExpDate();