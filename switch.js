var crayon = prompt("What is your favorite color?");
var specialColor;
var output = document.getElementById('output');

switch(crayon) {
	case "blue":
		specialColor = "Robin's Egg Blue";
		alert("The crayon is robin's egg blue");
		break;
	case "red":
		specialColor = "Scarlet Red";
		alert("The crayon is scarlet red");
		break;
	default:
	specialColor = "Where's my crayon?";
	alert("There is no crayon");
}

output.innerHTML = specialColor;
