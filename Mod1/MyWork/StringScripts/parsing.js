/*
* Description: Parses name and prints
*
* Author: Neo
*/
"use strict";

/*
* This function parses and displays name information based on parameter
* @arrName (Array) - Parses the name into separate portions
* @fName (String) - First Name
* @mName (String) - Middle Name
* @lName (String) - Last Name
* @msg (String) - The names parsed separately
* @prefix (String) - This will be shifted off, if it exists
* @suffix (String) - This will be popped off, if it exists
*/
function parseAndDisplayName (name) {
    let arrName = name.split(" ");
    let fName, mName, lName, msg;
    let prefix = "\nPrefix: None", suffix ="\nSuffix: None";

    if (/^(mr.|mrs.|miss|dr.)$/.exec(arrName[0].toLowerCase())) {
        prefix = "\nPrefix: " + arrName.shift();
    }

    if (/^(jr.|sr.|ph.d.|m.d)$/.exec(arrName[arrName.length-1].toLowerCase())) {
        suffix = "\nSuffix: " + arrName.pop();
        arrName[arrName.length-1] = arrName[arrName.length-1].slice(0, -1);
    }

    if (arrName.length < 2) {
        fName = arrName[0];

        msg = `Name: ${name}\nOnly Name: ${fName}`;
    }
    else if (arrName.length < 3) {
        fName = arrName[0];
        lName = arrName[arrName.length - 1];

        msg = `Name: ${name}\nFirst Name: ${fName}\nLast Name: ${lName}`;
    }
    else if (arrName.length < 4) {
        fName = arrName[0];
        mName = arrName[1];
        lName = arrName[arrName.length - 1];
        
        msg = `Name: ${name}\nFirst Name: ${fName}\nMiddle Name: ${mName}\nLast Name: ${lName}`;
    }
    else {
        return console.log("Your name is messed up.");
    }

    return msg + prefix + suffix;
}

console.log(parseAndDisplayName("Nghia Q Vu, Sr."));