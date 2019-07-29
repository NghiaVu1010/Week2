/*
* Description: Replaces old string with new string
*
* Author: Neo
*/
"use strict";

function replaceString() {
    let message = "Our corporate offices are located in Dallas";
    return message = message.replace(/dallas/i, "Hartford");
}

console.log(replaceString());