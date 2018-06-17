$(document).ready(function() {

  /////////////
  // FLAG NAV
  /////////////
  $('body').on('mouseenter', '#brand-flag', function(){
    const nav = $(this).parent().find('#navbarToggleExternalContent');
    $(this).removeClass('collapsed');
    nav.addClass('show');
  });
  $('body').on('mouseleave', '#my-nav', function(){
    const flag = $(this).find('#brand-flag');
    const nav = $(this).find('#navbarToggleExternalContent');
    flag.addClass('collapsed');
    nav.removeClass('show');
  });

  /////////////////
  // EXPERIENCES
  /////////////////
  let expIndex = 0;
  const experiences = [
    `<h2>UI Engineer Intern</h2>
    <h3>LinkedIn</h3>
    <h4>Sunnyvale, CA &nbsp; | &nbsp; June 2017 - Sept 2017</h4>
    <p class="d-none d-sm-block">Developed for the onboarding re-design project alongside Goals &amp; Onboarding team. The
    fully implemented widget is now live and impacting tens of thousands of new users daily.
    Returning to full-time role in Nov 2018</p>`,
    `<h2>Web Development Intern</h2>
		<h3>L.L.Bean</h3>
		<h4>Freeport, ME &nbsp; | &nbsp; May 2016 - Aug 2016</h4>
		<p class="d-none d-sm-block">Executed site improvement efforts while learning the responsibilities required for the support
		of a large-scale corporate retail site. Projects included improving source control organization,
		advancing files to current code and documentation standards, and developer work on the reviews
		enhancement project</p>`,
  ];
  const expImages = [
    "url('images/in.jpg')",
    "url('images/llb.jpg')",
  ];
  $('body').on('click', '#exp-next', function(){
    const content = $('#exp-content');
    expIndex++;
		if (expIndex >= experiences.length) {
			expIndex = 0;
		}
		content.html(experiences[expIndex]);
		$('#experience').css('background-image', expImages[expIndex]);
  });
  $('body').on('click', '#exp-prev', function(){
    const content = $('#exp-content');
    expIndex--;
		if (expIndex <= -1) {
			expIndex = experiences.length-1;
		}
		content.html(experiences[expIndex]);
		$('#experience').css('background-image', expImages[expIndex]);
  });

  /////////////////
  // EXPERIENCES II
  /////////////////
  let expiiIndex = 0;
  const experiencesii = [
    `<h2>Teaching Assistant</h2>
    <h3>University of Rochester</h3>
    <h4>Rochester, NY &nbsp; | &nbsp; Sept 2015 - May 2018</h4>
    <p class="d-none d-sm-block">Introduce students to programming in a variety of courses.
      Led and facilitated twice-weekly labs, corrected homework and tests,
      guided student groups through semester-long projects, and, above all,
      provided support & resources throughout the semester.</p>`,
    `<h2>Teaching Internship</h2>
		<h3>Lycée St. Stanislas</h3>
		<h4>Nantes, France &nbsp; | &nbsp; Jan 2017 - May 2017</h4>
		<p class="d-none d-sm-block">Assisted in high school English classes of varying proficiency, including BAC preparation.
      Created and presented unique lesson plans, integrating cultural exchange into traditional course material.
      Simultaneously enrolled in a complimentary course on an introduction to French teaching theory</p>`,
    `<h2>Student Ambassador</h2>
		<h3>LinkedIn</h3>
		<h4>Rochester, NY &nbsp; | &nbsp; Sept 2017 - May 2018</h4>
		<p class="d-none d-sm-block">Drive students to take full advantage of LinkedIn and its multitude of
      features so as to boost their careers and ultimately connect them with
      their dream jobs. Organize, lead, and facilitate a variety of presentations
      and workshops throughout the campus community.</p>`,
  ];
  const expiiImages = [
    "url('images/rr.jpg')",
    "url('images/ouais.jpg')",
    "url('images/inii.jpg')"
  ];
  $('body').on('click', '#expii-next', function(){
    const content = $('#expii-content');
    expiiIndex++;
		if (expiiIndex >= experiencesii.length) {
			expiiIndex = 0;
		}
		content.html(experiencesii[expiiIndex]);
		$('#experienceii').css('background-image', expiiImages[expiiIndex]);
  });
  $('body').on('click', '#expii-prev', function(){
    const content = $('#expii-content');
    expiiIndex--;
		if (expiiIndex <= -1) {
			expiiIndex = experiencesii.length-1;
		}
		content.html(experiencesii[expiiIndex]);
		$('#experienceii').css('background-image', expiiImages[expiiIndex]);
  });

  //////////////
  // EDUCATION
  //////////////
  let eduIndex = 0;
  const education = [
    `<h2>University of Rochester</h2>
    <h3>Rochester, NY &nbsp; | &nbsp; Grad May 2018</h3>
    <h4>B.A. Computer Science</h4>
    <h4>B.A. Brain and Cognitive Sciences</h4>
    <ul class="d-none d-sm-block">
      <li>Minors: Psychology, French</li>
      <li>Dean's List all semesters</li>
      <li>George Eastman Young Leaders Scholarship recipient</li>
    </ul>`,
    `<h2>Université de Nantes</h2>
    <h3>Nantes, France &nbsp; | &nbsp; Spring 2017</h3>
    <h4>IES French Language Immersion Program</h4>
    <ul class="d-none d-sm-block">
      <li>Immersive study abroad for the 2017 spring semester</li>
      <li>Took university courses while immersing myself in the culture and language of western
      France</li>
    </ul>`,
  ];
  const eduImages = [
    "url('images/rr.jpg')",
    "url('images/ouais.jpg')",
  ];
  $('body').on('click', '#edu-next', function(){
    const content = $('#edu-content');
    eduIndex++;
		if (eduIndex >= education.length) {
			eduIndex = 0;
		}
		content.html(education[eduIndex]);
		$('#education').css('background-image', eduImages[eduIndex]);
  });
  $('body').on('click', '#edu-prev', function(){
    const content = $('#edu-content');
    eduIndex--;
		if (eduIndex <= -1) {
			eduIndex = education.length-1;
		}
		content.html(education[eduIndex]);
		$('#education').css('background-image', eduImages[eduIndex]);
  });
});

////////
// NAV
///////

$(window).scroll(function() {

  if($('#home').visible()) {
    $('#home-nav').addClass('selected');
    $('#navbarDropdown').removeClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#experience').visible()) {
    $('#home-nav').removeClass('selected');
    $('#navbarDropdown').addClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#experienceii').visible()) {
    $('#home-nav').removeClass('selected');
    $('#navbarDropdown').addClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#education').visible()) {
    $('#home-nav').removeClass('selected');
    $('#navbarDropdown').removeClass('selected');
    $('#edu-nav').addClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#hw').visible()) {
    $('#home-nav').removeClass('selected');
    $('#navbarDropdown').removeClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').addClass('selected');
  }
});
