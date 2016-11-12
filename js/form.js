$(document).ready(function(){

	console.log("we reaDy");

	$('#contact').submit(function(event) {

		event.preventDefault();
		
		$.ajax({
			type: 'POST',
			url: $(this).attr('action'),
			data: $(this).serialize()
		}).done(function(response) {
			//submit confirmation
			$('#form-content').append(
				'<div class="row">' +
					'<h2 class="centered">Sent!</h2>' +
				'</div>' +
				'<div class="row">' +
					'<p class="centered">Thank you for your message. I will get back to you as soon as I can!</p>' +
				'</div>'
			);
		}).fail(function(response) {
			//submit failure
			$('#form-content').append(
				'<div class="row">' +
					'<h2 class="centered">Hm...</h2>' +
				'</div>' +
				'<div class="row">' +
					'<p class="centered">Your message did not go through. Refresh the page and try again.</p>' +
				'</div>'
			);
		});
	
		$('#name').val('');
    	$('#email').val('');
    	$('#message').val('');

	});

});

