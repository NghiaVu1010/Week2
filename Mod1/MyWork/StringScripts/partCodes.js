/*
* Description: Parses supplier codes
*
* Author: Neo
*/
"use strict";

/*
* This function gets the Supplier Code by parsing parameter
* @pos (Number) - Gets position of separator to use for parsing
*/
function getSupplier(code) {
    let pos = code.indexOf(":");
    return "Code: " + code.substring(0, pos);
}

/*
* This function gets the Product Number by parsing parameter
* @pos1 (Number) - Gets position of separator to use for parsing
* @pos2 (Number) - Gets position of separator to use for parsing
*/
function getProductNumber(code) {
    let pos1 = code.indexOf(":");
    let pos2 = code.indexOf("-");
    return "Product Number: " + code.slice(pos1+1, pos2);
}

/*
* This function gets the Size by parsing parameter
* @pos (Number) - Gets position of separator to use for parsing
*/
function getSize(code) {
    let pos = code.indexOf("-");
    return "Size: " + code.substr(pos+1);
}

let supplierCode = "ACME:123-L";
console.log(getSupplier(supplierCode))
console.log(getProductNumber(supplierCode))
console.log(getSize(supplierCode))