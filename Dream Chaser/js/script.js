function checkFirstName(){
	var firstName=$('#firstName').val();
	var regex = /^[a-zA-Z ]{2,10}$/;
	if(regex.test(firstName)){
		$('#firstNameError').text('');
		return true;
	}
	else {
		$('#firstNameError').text('First name should only be characters and 2-10 characters long');
		return false;
	}
}

function checkLastName(){
	var lastName=$('#lastName').val();
	var regex = /^[a-zA-Z ]{2,10}$/;
	if(regex.test(lastName)){
		$('#lastNameError').text('');
		return true;
	}
	else {
		$('#lastNameError').text('Last name should only be characters and 2-10 characters long');
		return false;
	}
}
	
function checkEmailAddress(){
	var emailAddress=$('#emailAddress').val();
	var regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+).[a-zA-Z]{2,10}$/;
	if(regex.test(emailAddress)){
		$('#emailAddressError').text('');
		return true;
	}
	else {
		$('#emailAddressError').text('Please enter valid email address');
		return false;
	}
}
	
function checkPassword(){
	var password=$('#password').val();
	var regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,15}$/;
	if(regex.test(password)){
		$('#passwordError').text('');
		return true;
	}
	else {
		$('#passwordError').text('Password must be at least 8 character,no more than 15 characters and must inclue at least one upper case letter,one lower case letter and one numeric number');
		return false;
	}
}
	
function checkConfirmPassword(){
	var confirmPassword=$('#confirmPassword').val();
	var password=$('#password').val();
	if(password==confirmPassword){
		$('#confirmPasswordError').text('');
		return true;
	}
	else {
		$('#confirmPasswordError').text('Password did not match');
		return false;
	}
}

function checkGender(){
	var genderInfo=$('input[type="radio"]:checked').val();
	if(genderInfo == 'male' || genderinfo == 'female'){
		$('#genderError').text('');
		return true;
	}
	else{
		$('#genderError').text('please give your gender info correctly');
		return false;
	}
}
function checkDistrict(){
	var districtName=$('districtName').val();
	if(districtName=='0'){
		$('#districtError').text('please give us your district info');
		return false;
	}
	else{
		$('districtError').text('');
		return true;
	}
}

	
	
$('#firstName').keyup(function(){
		checkFirstName();
});
$('#firstName').blur(function(){
		checkFirstName();
});

$('#lastName').keyup(function(){
		checkLastName();
});
$('#lastName').blur(function(){
		checkLastName();
		
});
$('#emailAddress').keyup(function(){
		checkEmailAddress();
});
$('#emailAddress').blur(function(){
		checkEmailAddress();
});

$('#password').keyup(function(){
		checkPassword();
});
$('#password').blur(function(){
		checkPassword();
});

$('#confirmPassword').keyup(function(){
		checkConfirmPassword();
});
$('#confirmPassword').blur(function(){
		checkConfirmPassword();
});

$('#showPassword').click(function(){
	var attrValue = $('#password').attr('type');
	if(attrValue=='password'){
		$('#password').attr('type','text');
	}
	else{
		$('#password').attr('type','password');
	}
});

//$('#btn').click(function(){
	//	checkGender();
//});

//$('#btn').click(function(){
	//	checkDistrict();
//});

$('#form').submit(function(){
	if(checkFirstName()==true && checkLastName()==true && checkEmailAddress()==true && checkConfirmPassword()==true && checkGender()==true && checkDistrict()==true){
		return true;
	}
	else{
		return false;
	}
});

