/*
This is empty on purpose! Your code to build the resume will go here.
 */
$("#main").append(["Lukas<br>"]);

c = 299792458; // meters/second
mTOcm = 100; // centimeters
nsTOs = 1.0/1000000000; // seconds
// light in centimeters/nanosecond
cCMpNS= c*mTOcm*nsTOs;
console.log(cCMpNS);



var awesomeThoughts;
awesomeThoughts = "I am Lukas and I am AWESOME!";
console.log(awesomeThoughts);


var funThoughts = awesomeThoughts.replace("AWESOME", "FUN");
$("#main").append(funThoughts);


