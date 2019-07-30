/*
* Description: Stringify and parses object
*
* Author: Neo
*/
"use strict";

let suppCode = {productId: "123", productName: "ACE", price: 45.00, quantity: 10}

function parseProduct(code) {
    let product = {productId: code.productId, productName: code.productName, price: code.price, quantity: code.quantity};

    var str = JSON.stringify(product);
    console.log(str);
    
    str = JSON.parse(str);
    console.log(str);
}

parseProduct(suppCode);