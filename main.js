var phoneNumber = prompt("Please enter your phone number with dashes.\nWe will never spam you or sell your phone numer.")

	if(phoneNumber.charAt(3) === '-' && phoneNumber.charAt(7)) {
		var pvalid = "valid."
	}
	else{
		var pvalid = "not valid."
	};

alert("Phone number is " + pvalid);
