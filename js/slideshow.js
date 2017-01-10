$(document).ready(function() {

	var index = 0;
	var slides = [
		'images/llb.png',
		'images/dining.png',
		'images/law.png',
		'images/cult.png',
		'images/wic.png',
		'images/ureserve.png',
		'images/tarinrickett.png',
		'images/in.png'
	];
	var text = [
		'<h2>Web Development Intern</h2><h3>L.L.Bean</h3><h4>Freeport, ME &nbsp; | &nbsp; May 2016 - Aug 2016</h4><p>Executed site improvement efforts while learning the responsibilities required for the support of a large-scale corporate retail site. Projects included improving source control organization, advancing files to current code and documentation standards, and developer work on the reviews enhancement project.</p><p><a class="btn btn-default" href="llb.html" role="button">Learn more »</a> <a class="btn btn-default" href="http://www.llbean.com/" role="button">View site »</a></p>',
        '<h2>Web Development Intern</h2><h3>Aramark Dining Service</h3><h4>Rochester, NY &nbsp; | &nbsp; Sept 2015 - <em>Present</em></h4><p>Responsible for designing, updating, and managing a new University of Rochester Wordpress site for the Dining Services department. Also aid in the promotion and marketing of the department, including social media outreach.</p><p><a class="btn btn-default" href="http://www.rochester.edu/dining/" role="button">View site »</a></p>',
        '<h2>Freelance Web Developer</h2><h3>The Carbajal Law Firm, P.C.</h3><h4>New York, NY &nbsp; | &nbsp; Feb 2016 - <em>Present</em></h4><p>Manage, update, and strengthen Wordpress site and blog for this international business law office, focusing on the improvement of user experience and increase in traffic generation.</p><p><a class="btn btn-default" href="http://www.carbajalesq.com" role="button">View site »</a></p>',
        '<h2>Web Designer</h2><h3>Cultura Animi</h3><h4>Brooklyn, NY &nbsp; | &nbsp; Apr 2015 - Sept 2015</h4><p>Headed the design and management of a new company website for this Brooklyn start-up. Collaborated with heads of company to generate a user-friendly and appealing site and brand for their clientele, which ranges from artists to entrepreneurs.</p>',
		'<h2>University of Rochester Women in Computing</h2><h4>Rochester, NY &nbsp; | &nbsp; Sept 2016 - <em>Present</em></h4><p>Responsible for maintaining and expanding the UR WiC website as Web Manager. In addition to updating information for the current year, charged with adding new features such as embedded events calendar, blog, and overall site reorganization, reflecting the growth of the organization.</p><p><a class="btn btn-default" href="http://www.csug.rochester.edu/URWIC/" role="button">View site »</a></p>',
		'<h2>UReserve</h2><h4>Rochester, NY &nbsp; | &nbsp; Sept 2016 - <em>Present</em></h4><p>Tasked with designing a CRUD web application from scratch in a collaborative group of 4 for the course CSC210: Web Programming. UReserve is a redesign of the University of Rochester’s current room reservation system in the hopes to increase efficieny and usability for students, professors, clubs, and beyond.</p><p><a class="btn btn-default" href="https://github.com/UReserve/ureserve" role="button">View repo »</a></p>',
        '<h2>tarinrickett.com</h2><h4>Rochester, NY &nbsp; | &nbsp; July 2016 - <em>Present</em></h4><p>Coded this website by scratch, implementing Bootstrap, JQuery, AJAX, PHP, and more.</p><p><a class="btn btn-default" href="https://github.com/tarinrickett/tarinrickett.com" role="button">View repo »</a></p>',
        '<h2>LinkedIn</h2><h4>Sunnyvale, CA &nbsp; | &nbsp; June 2017 - Aug 2017</h4><p>Excited to announce my UI Engineering internship with LinkedIn for Summer 2017!</p><p><a class="btn btn-default" href="https://studentcareers.linkedin.com/internships" role="button">Learn more »</a></p>'
	];

	var getSlide = $('#slide');
	var getText = $('#slideDesc');

	$('body').on('click', '#leftArrow', function() {
		index--;
		if (index < 0) {
			index = slides.length-1;
		}
		update();
	});

	$('body').on('click', '#rightArrow', function(){
		index++;
		if (index >= slides.length) {
			index = 0;
		}
		update();
	});

	function update() {
		//getSlide.css("-webkit-transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);");
		getSlide.attr('src', slides[index]);
		getText.html(text[index]);
		//getSlide.css("-webkit-transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1);");
	}
	
});
