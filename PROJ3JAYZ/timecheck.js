/*  timecheck.js
    Jack Herbert 7/14/2022

    Gets the current time in order to check if it is
    currently 4:44 - aka JAY-Z Time.
*/

var time = new Date();


console.log("Time: " + time.getHours + ":" + time.getMinutes);

if((time.getHours == 4 || 14) && (time.getMinute === 44))
{
    document.getElementById("jayztext").innerHTML = "It is 4:44!";
    //document.write("It is 4:44!");
    console.log("It is 4:44!");
}
else
{
    document.getElementById("jayztext").innerHTML = "It is not 4:44...";
   // document.write("It is not 4:44.");
    console.log("It is not 4:44...");
}
