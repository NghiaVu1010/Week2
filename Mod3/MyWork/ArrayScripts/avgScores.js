/*
* Description: For loop to print out average scores and more
*
* Author: Neo
*/
"use strict";

//calculate average
function getAverage(scores) {
    let length = scores.length;
    let total = 0;

    for(let i = 0; i < length; i++) {
        total = total + scores[i];
    }

    return total / length;
}

//sort array of numbers
function sortArray(scores) {
    scores = scores.sort(function(a,b){return a-b});
    return scores;
}

//get median, whether even or odd
function getMedian(scores) {
    scores = sortArray(scores);

    //check if remainder is 0, then grab 1 higher and lower from middle
    if (scores.length % 2 == 0) {
        let isEven = scores[Math.floor((scores.length-1) / 2)] + scores[Math.round((scores.length-1) / 2)];
        return isEven / 2;
    }
    else {
        let isOdd = scores[Math.round(scores.length-1) / 2];
        return isOdd;
    }
}

function getReport() {
    let grade = [100, 50, 75, 25, 80, 20, 51, 50];
    grade = sortArray(grade);
    
    let median = getMedian(grade);
    let lowest = grade[0];
    let average = getAverage(grade).toFixed(2);
    let highest = grade[grade.length-1];

    return console.log(`The average is: ${average}\nThe Median is: ${median}\nThe Lowest is: ${lowest}\nThe Highest is: ${highest}`);
}

getReport();