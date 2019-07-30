/*
* Description: Gets DOB and prints
*
* Author: Neo
*/
"use strict";

let contact1 = {name: "Neo Vu", address: "690 Asylum St", city: "Hartford", state: "CT", zip: "06110"};

function printContact(contact) {
    console.log(`${contact.name}\n${contact.address}\n${contact.city}, ${contact.state} ${contact.zip}`);
}

printContact(contact1);