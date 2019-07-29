/*
* Description: Parses name and prints
*
* Author: Neo
*/
"use strict";

function parseAndDisplayName (name) {
    let arrName = name.split(" ");
    let fName, mName, lName, msg;

    if (arrName.length < 2) {
        fName = arrName[0];

        let msg = `Name: ${name}\nOnly Name: ${fName}`;
        return msg;    
    }
    else if (arrName.length < 3) {
        fName = arrName[0];
        lName = arrName[arrName.length - 1];

        let msg = `Name: ${name}\nFirst Name: ${fName}\nLast Name: ${lName}`;
        return msg;
    }
    else if (arrName.length < 4) {
        fName = arrName[0];
        mName = arrName[1];
        lName = arrName[arrName.length - 1];
        
        msg = `Name: ${name}\nFirst Name: ${fName}\nMiddle Name: ${mName}\nLast Name: ${lName}`;
        return msg;
    }
    else {
        return console.log("Your name is messed up.");
    }
}

console.log(parseAndDisplayName("Nghia Q Vu"));