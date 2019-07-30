/*
* Description: Gets DOB and prints
*
* Author: Neo
*/
"use strict";

/*
* This function returns the days left
*
* @param bootcampStarts (String) - holds start
* @param bootcampEnds (String) - holds end
* @param msecDiff (Integer) - holds diff in milliseconds
* @param daysDiff (Integer) - calculates difference between dates
*/
function getDateDiff() {
    var bootcampStarts = "July 22, 2019";
    var bootcampEnds = "September 6, 2019";

    let d1 = new Date(bootcampStarts);
    let d2 = new Date(bootcampEnds);

    let msecDiff = d2.getTime() - d1.getTime();
    let daysDiff = Math.ceil(msecDiff / (1000 * 60 * 60 * 24));

    return `The number of days left is ${daysDiff}`;
}

console.log(getDateDiff());