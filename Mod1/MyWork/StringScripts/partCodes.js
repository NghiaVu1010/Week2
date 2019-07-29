/*
* Description: Parses supplier codes
*
* Author: Neo
*/
"use strict";

//gets supplier code (before ":")
function getSupplier(code) {
    let pos = code.indexOf(":");
    return "Code: " + code.substring(0, pos);
}

//gets product number (after ":" and before "-")
function getProductNumber(code) {
    let pos1 = code.indexOf(":");
    let pos2 = code.indexOf("-");
    return "Product Number: " + code.slice(pos1+1, pos2);
}

//gets size (after "-")
function getSize(code) {
    let pos = code.indexOf("-");
    return "Size: " + code.substr(pos+1);
}

let supplierCode = "ACME:123-L";
console.log(getSupplier(supplierCode))
console.log(getProductNumber(supplierCode))
console.log(getSize(supplierCode))