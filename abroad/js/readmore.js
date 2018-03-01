$(document).ready(function() {

	console.log('readmore.js');

	$('body').on('mouseover', '.plus', function() {
		var truc = $(this).parent().parent().find("div.more");
		truc.removeClass("hidden");
		$(this).addClass("minus");
		$(this).html('<h3><button id="button">–</button></h3>');
	});

	$('body').on('mouseleave', '.post', function() {
		var plus = $(this).find(".plus");
		var truc = plus.parent().parent().find("div.more");
		if (!(truc.hasClass("hidden"))) {
			truc.addClass("hidden");
			plus.removeClass(".minus");
			plus.html('<h3><button>+</button></h3>');
		}
	});

	$('body').on('click', '.panel-heading', function() {
		console.log('yes clicked panel-heading');
		var truc = $(this).parent().find('panel-body');
		if (!(truc.hasClass("hidden"))) {
			truc.addClass("hidden");
			console.log("panel-body'");
		} else {
			truc.removeClass("hidden");
			coonsole.log("no long hidden");
		}
	});

});
