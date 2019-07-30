/*
* Description: For loop to print out 2-D array
*
* Author: Neo
*/
"use strict";

let teamMembers = [
    ['Diana', 'Brenda', 'Happy'],
    ['Laura', 'Patti'],
    ['Leslye', 'Randy', 'Mollye', 'Ranse'],
    ['Eloise', 'Robert']];

let numTeams = teamMembers.length;

for(let i = 0; i < numTeams; i++) {
    console.log("Team " + i);
    let numMembers = teamMembers[i].length; 
    
    for(let j = 0; j < numMembers; j++) {
        console.log(teamMembers[i][j]);
    }
}