

// var students = [
// 	{
// 		'name': 'Oladayo',
// 		'level': 400,
// 		'course': 'comp science',
// 		'firstSemester': 50,
// 		'secondSemester': 65
// 	},

// 	{
// 		'name': 'Alabi',
// 		'level': 200,
// 		'course': 'GIT',
// 		'firstSemester': 30,
// 		'secondSemester': 70
// 	},

// 	{
// 		'name': 'Jonathan',
// 		'level': 300,
// 		'course': 'CSS',
// 		'firstSemester': 80,
// 		'secondSemester': 74
// 	}
// ]

// students[3] = 
// 	{
// 		'name': 'Ben',
// 		'level': 100,
// 		'course': 'Software',
// 		'firstSemester': 10,
// 		'secondSemester': 30
// 	}

// // function average(students.firstSemester, students.secondSemester){
// // 	// for ( i = 0; i >= 3; i++) ;
// // var averagescore = (students.firstSemester+students.secondSemester)/2;
// // document.write("The average score is "+averagescore)
// // }

// // average(students[2].firstSemester, students[2].secondSemester);


// var text = document.getElementById("first-output").innerHTML;
// // alert(text);
// var paragraph = document.getElementById("paragraph").style.backgroundColor = "green";
// paragraph = document.getElementById("paragraph").style.color= "white";

// //entering values into FORMs
// var name = document.getElementById("nameInput").value = "Ola";
// var password = document.getElementById("password").value = "12345678";
// var email = document.getElementById("email").value = "ola@gmail.com";

// if(name != "Ola"){
// 	alert("wrong user!")
// }
// else{
// 	alert(Welcome+" "+name);
// }

// if(password != "12345678"){
// 	alert("password incorrect!")
// }
// else{
// 	alert(Welcome+" "+name);
// }

// if(email != "ola@gmail.com"){
// 	alert("We dont have the email in our database!")
// }
// else{
// 	alert(Welcome+" "+name);
// }

// var inputTag = document.getElementsByTagName("input");
// inputTag[0].value = "John Doe";
// // var inputTag = document.getElementsByTagName("input");
// inputTag[1].value = "00000000";
// // var inputTag = document.getElementsByTagName("input");
// inputTag[2].value = "olu@gmail.com";


//EVENTS eg click, mouse, keyboard

// function onmouseOver(){
// 	alert("hi")
// }

// function changeColor(){
// 	var square = document.getElementById("square").style.backgroundColor = "green";
// }


// function reverseColor(){
// 	var square = document.getElementById("square").style.backgroundColor = "yellow";
// }

// function clickMe(){
// 	var square = document.getElementById("square").style.backgroundColor = "blue";
// }

// //Validate

// var inputTag = document.getElementsByTagName("input");
// // inputTag[0].value;
// // inputTag[1].value;

// function validateFields ()
// {
// 	if(inputTag[0].value=="")
// 	{
// 	alert("Please enter name");
// 	}
// 	else if(inputTag[1].value=="")
// 	{
// 	alert("Please enter password");
// 	}
// 	else if(inputTag[1].value!= "00000000")
// 	{
// 		alert("wrong password please!!!");
// 	}
// 	else
// 	{
// 		alert("you are welcome back")
// 	}
// }

// var inputTags = document.getElementsByTagName("input");

// alert("This is my name: "+inputTags[0].value);
// alert("This is my email: "+inputTags[1].value);
// alert("And password is: "+inputTags[2].value);


//TIMING FUNCTIONS==SET TIMEOUT, SET INTERVAL;

// function add(){
// 	document.write(2+10+"<br>")
// }


// function subtract(){
// 	document.write(20-10+"<br>")
// }
// add();
// subtract();


// function showName(){
// 	document.write("Olu" + "<br>")
// }


// function showName2(){
// 	document.write("alabi" + "<br>")
// }
// function showName3(){
// 	document.write("oladayo" + "<br>")
// }
// showName();
// setTimeout(showName2, 1000);
// setTimeout(showName3, 999)


// var timer = 0;

// function upcount(){
// 	document.write(timer +"<br>");
// 	timer++;
// }
// setInterval(upcount, 100);


var currentTime = document.getElementById("current-time");

function showDate (){
	var date = new Date();
	currentTime.innerHTML = date;
}
setInterval(showDate, 1000);












