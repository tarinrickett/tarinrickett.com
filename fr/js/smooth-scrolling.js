// From:    Smooth Scrolling by CHRIS COYIER, updated JANUARY 31, 2016
//          https://css-tricks.com/snippets/jquery/smooth-scrolling
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 250);
        return false;
      }
    }
  });
});

//From:   Scrollify by LUKE HAAS
//        https://projects.lukehaas.me/scrollify/
$(function() {
	$.scrollify({
		section:".panel",
		scrollSpeed:1100,
		after:function(i) {}
	});

	$(".scroll,.scroll-btn").click(function(e) {
		e.preventDefault();
		$.scrollify.next();
	});
});
