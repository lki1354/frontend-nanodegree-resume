/*
This is empty on purpose! Your code to build the resume will go here.
 */
/*
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
*/

var placeholder = "%data%";

var bio = {
    "name" : "Lukas K.",
    "role" : "Student",
    "contacts": {
        "email":"lki1354@students.fhv.at",
        "github" : "lki1354",
        "location" : "Austria"
    } ,
    "welcome_message" : "Do not worry about your difficulties in mathematics; I can assure you that mine are still greater. [Albert Einstein]",
    "skills" : ["photograph","programming","sleeping"],
    "bioPic" : "images/fry.jpg"
};

var work={
    "position" : "Student",
    "employer" : "HQL",
    "year_worked" : 4
};
work.city = "Rankweil";

var eduaction = {
    "schools" : [
        {
            "name" : "FHV",
            "city" : "Dornbirn"
        },{
            "name" : "HTL",
            "city" : "Rankweil"
        }
    ]
,
    "onlineCourses":[
        {
            "title" : "JacaScript Syntac",
            "school" : "Udacity",
            "dates": 2016,
            "url": "http://www.udacity.com/course/ud804"
        }
    ]
};
eduaction.attended_years = 3;
eduaction["city"] = "Dornbirn";


var formattedName = HTMLheaderName.replace(placeholder,bio.name);
var formattedRole = HTMLheaderRole.replace(placeholder,bio.role);
var formattedEmail = HTMLemail.replace(placeholder,bio.contacts);

var formattedPic = HTMLbioPic.replace(placeholder,bio.bioPic);
var formattedWelcome = HTMLwelcomeMsg.replace(placeholder,bio.welcome_message);
var formattedSkills = HTMLemail.replace(placeholder,bio.skills);

$("#header").prepend(formattedRole);    // add to beginning
$("#header").prepend(formattedName);  // add to beginning

$("#header").append(formattedWelcome);  // add to beginning

$("#header").append(formattedEmail);  // add to beginning
$("#header").append(formattedPic);  // add to beginning
$("#header").append(formattedSkills);  // add to beginning

console.log(bio);  // add to beginning
console.log(work);  // add to beginning
console.log(eduaction);  // add to beginning
$("#header").append(work["position"]+" "+eduaction.name);  // add to beginning



