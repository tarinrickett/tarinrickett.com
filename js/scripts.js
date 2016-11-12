// adapted from: https://webdesign.tutsplus.com/tutorials/building-a-bootstrap-contact-form-using-php-and-ajax--cms-23068

$('#contact').submit(function(event){
    // cancels the form submission
    event.preventDefault();
    submitForm();
});

function submitForm(){
    // Initiate Variables With Form Content
    var name = $('#name').val();
    var email = $('#email').val();
    var company = $('#company').val();
    var website = $('#website').val();
    var subject = $('#subject').val();
    var message = $('#message').val();

    if (name == '' || email == '' || subject == '' || message == '') {
        formFailure();
        throw new Error('Email not sent');
    }
 
    $.ajax({
        type: 'POST',
        url: 'php/form-process.php',
        data: 'name=' + name + '&email=' + email + 
        		'&company=' + company + '&website=' + website +
        		'&subject' + subject + '&message=' + message,
        success : function(text){
            if (text == 'success') {
                formSuccess();
            } else {
                formFailure();
            }
        }
    });
}

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

function formFailure(){
    $('#msg').removeClass('hidden');
    $('#msgFailure' ).removeClass('hidden');
}
