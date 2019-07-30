/*
* Description: Stringify and parses object
*
* Author: Neo
*/
"use strict";

let suppCode = {productId: "123", productName: "ACE", price: 45.00, quantity: 10}

/*
* This function Stringify and parses object
*
* @param product (Array) - holds key:value thats passed
* @param obj1 (Array) - stringified object
* @param obj2 (Array) - parsified object
*/
function parseProduct(code) {
    let product = {productId: code.productId, productName: code.productName, price: code.price, quantity: code.quantity};

    let obj1 = JSON.stringify(product);
    console.log(obj1);
    
    let obj2 = JSON.parse(obj1);
    console.log(obj2);
}

parseProduct(suppCode);