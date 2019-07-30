/*
* Description: For loop to print out total due
*
* Author: Neo
*/
"use strict";

function getSubtotal(food) {
    let length = food.length;
    let total = 0;

    for(let i = 0; i < length; i++) {
        total = total + food[i].price;
    }

    return total;
}

function getTaxAmount(total) {
    return getSubtotal(total) * .08;
}

function getTipAmount(total) {
    return (getSubtotal(total) + getTaxAmount(total)) * .18;
}

function getTotalDue() {
    let lunch = [{item: "Steak Fajitas", price: 9.95},
    {item: "Chips and Guacomole", price: 5.25},
    {item: "Sweet tea", price: 2.79}];

    let subTotal = getSubtotal(lunch);
    let taxAmount = getTaxAmount(lunch);
    let tipAmount = getTipAmount(lunch);
    let totalDue = subTotal + taxAmount + tipAmount;

return console.log("Subtotal: " + subTotal 
    + "\nTax: " + taxAmount.toFixed(2) 
    + "\nTip: " + tipAmount.toFixed(2)
    + "\nTotal: " + totalDue.toFixed(2));
}

getTotalDue();