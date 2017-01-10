//data variables
var name, email, company, website, subject, message;

//on contact form submit,
$('#contact').submit(function(event){
	event.preventDefault();
	var xmlhttp = new XMLHttpRequest();

    //get data
	name = $('#name').val();
    email = $('#email').val();
    company = $('#company').val();
    website = $('#website').val();
    subject = $('#subject').val();
    message = $('#message').val();
    var data = 'name=' + name + '&email=' + email + 
        		'&company=' + company + '&website=' + website +
        		'&subject' + subject + '&message=' + message;

    //define success
	xmlhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200 && validate()) {
			formSuccess();
		} else {
            formFailure();
        }
	};

    //open and send POST request
	xmlhttp.open("POST", "../php/contact.php", true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xmlhttp.send(data);
});

//validate function
function validate() {
    //if not all required forms are filled,
	if (name == '' || email == '' || subject == '' || message == '') {
        //return failure
		formFailure();
		return false;
	} else {
		return true;
	}
}

//success HTML
function formSuccess(){
    $('#msg').removeClass('hidden');
    $('#msgSubmit' ).removeClass('hidden');
    $('#name').val('');
    $('#email').val('');
    $('#company').val('');
    $('#website').val('');
    $('#subject').val('');
    $('#message').val('');
}

//failure HTML
function formFailure(){
    $('#msg').removeClass('hidden');
    $('#msgFailure' ).removeClass('hidden');
}
