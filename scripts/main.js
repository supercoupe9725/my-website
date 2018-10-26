var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World';

function customize_message(){
	var result = Math.random() + " kittens rescued today";
	alert(result);
}

//Looks like button element cannot be substituted with class name
document.querySelector('button').onclick = function() {
	setUserName();
}

var myButton = document.querySelector('button');

//localStorage.setItem() 
function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Welcome, ' + myName;
}

if (!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Welcome, ' + storedName;
}



