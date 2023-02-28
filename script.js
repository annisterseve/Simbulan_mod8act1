var name = prompt("What is your name?");
if (confirm("What is your gender? Click OK if male and CANCEL if female.")== true){
	alert ("Your gender is MALE.")
	document.getElementById("gender").innerHTML = "M";
}else {alert("Your gender is FEMALE.")
document.getElementById("gender").innerHTML = "F";}

var username = prompt("What's your username?");
var desc = prompt("Give a brief description about yourself.");
var year = prompt("What year were you born?");
var age = 2023 - parseInt(year);

if (confirm("Would you like to add a custom profile picture?") == true){
	var pic = prompt("What is the file name?")
}

document.getElementById("fname").innerHTML = name;
document.getElementById("username").innerHTML = username;
document.getElementById("desc").innerHTML = desc;
document.getElementById("year").innerHTML = year;
document.getElementById("age").innerHTML = age;
document.getElementById("ppic").src = pic;