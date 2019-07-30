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
    return code.substring(0, pos);
}

/*
* This function gets the Product Number by parsing parameter
* @pos1 (Number) - Gets position of separator to use for parsing
* @pos2 (Number) - Gets position of separator to use for parsing
*/
function getProductNumber(code) {
    let pos1 = code.indexOf(":");
    let pos2 = code.indexOf("-");
    return code.slice(pos1+1, pos2);
}

/*
* This function gets the Size by parsing parameter
* @pos (Number) - Gets position of separator to use for parsing
*/
function getSize(code) {
    let pos = code.indexOf("-");
    return code.substr(pos+1);
}

/*
* This function parses the code and calls other functions
* @code (Array) - Contains the parsed object
*/
function parsePartCode(partCode) {
    let code = {supplierCode: getSupplier(partCode), 
                productNumber: getProductNumber(partCode), 
                size: getSize(partCode)};

    return code;
}

let suppCode = ["ACME:123-L", "DI:124-5"];

function printCodes() {
    for(var i = 0; i < suppCode.length; i++) {
        let part1 = parsePartCode(suppCode[i]);
        console.log(`Supplier: ${part1.supplierCode}\nProduct Number: ${part1.productNumber}\nSize: ${part1.size}`);
    }
}

printCodes();