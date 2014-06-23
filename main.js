var phoneNumber = prompt("Please enter your phone number in the form xxx-xxx-xxxx.\nWe will never spam you or sell your phone numer.")
var birthDate = prompt("Please enter your birthday in the form dd/mm/yy.")
var zip = prompt("Please enter your zip code.")
var state = prompt("Please enter your state abbreviation.")

if(phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7) === '-') {
	var pValid = "valid."
}
else{
	var pValid = "not valid."
};

if(birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/') {
	var bdValid = "valid."
}
else{
	var bdValid = "not valid."
}

if(zip.length === 5 || zip.charAt(5) === '-'){
	var zipValid = "valid."
}
else{
	var zipValid = "not valid."
}

if(state.length === 2 && state.toUpperCase() === state) {
	var stateValid = "valid."
}
else{
	var stateValid = "not valid."
}

alert("Phone number is " + pValid + "\n"
	+ "Birthday is " + pValid + "\n"
	+ "Zip code is " + zipValid + "\n"
	+ "State is " + stateValid + "\n");
