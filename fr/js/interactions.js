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
    `<h2>Stage du développment du web</h2>
    <h3>LinkedIn</h3>
    <h4>Californie, É.U. &nbsp; | &nbsp; Juin 2017 - Sept 2017</h4>
    <p>J’ai développé un nouveau widget de procès d'inscription. Le widget
      affecte des dizaines de milliers de nouveaux utilisateurs chaque jour
      En retournant au poste à temps complet en novembre 2018</p>`,
    `<h2>Stage du développment du web</h2>
		<h3>L.L.Bean</h3>
		<h4>Maine, É.U. &nbsp; | &nbsp; Mai 2016 - Aout 2016</h4>
		<p>J’étais chargée de la réalisation des projets d’amélioration du site qui
      comprenaient de la mise à jour de code et de documentation ainsi que du
      travail de développeur</p>`,
  ];
  const expImages = [
    "url('../images/in.jpg')",
    "url('../images/llb.jpg')",
  ];
  $('body').on('click', '#exp-prochain', function(){
    const content = $('#exp-content');
    expIndex++;
		if (expIndex >= experiences.length) {
			expIndex = 0;
		}
		content.html(experiences[expIndex]);
		$('#experience').css('background-image', expImages[expIndex]);
  });
  $('body').on('click', '#exp-precedant', function(){
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
    `<h2>Assistante pédagogique</h2>
    <h3>l'Université de Rochester</h3>
    <h4>New York, É.U. &nbsp; | &nbsp; Sept 2015 - Mai 2018</h4>
    <p>J’introduce des étudiants à la programmation dans une variété de cours.
      Cheffe de TD deux fois par semaine, je corrige les devoirs,
      fonctionne comme une cheffe des groupes d'étudiants à leurs projets
      et, surtout, soutiens des étudiants pendant le semestre</p>`,
    `<h2>Stagiaire pédagogique</h2>
		<h3>Lycée St. Stanislas</h3>
		<h4>Nantes, France &nbsp; | &nbsp; Janv 2017 - Mai 2017</h4>
		<p>L’aide dans les cours d'anglais aux niveaux de compétence diverses,
    j’ai crée et présenté des préparations de cours uniques en intégrant
    l'échange culturel dans le matériel. J’ai aussi suivi un cours complémentaire
    sur l’introduction à la théorie de l'enseignement français</p>`,
    `<h2>Ambassadrice</h2>
		<h3>LinkedIn</h3>
		<h4>New York, É.U. &nbsp; | &nbsp; Sept 2017 - Mai 2018</h4>
		<p>J'organise et dirige une variété d'ateliers et présentations dans
    l'intention d'encourager des étudiants à profiter de LinkedIn, en leur
    donnant des outils pour qu'ils puissent trouver et se connecter à leur
    métier idéal</p>`
  ];
  const expiiImages = [
    "url('../images/rr.jpg')",
    "url('../images/ouais.jpg')",
    "url('../images/inii.jpg')",
  ];
  $('body').on('click', '#expii-prochain', function(){
    const content = $('#expii-content');
    expiiIndex++;
		if (expiiIndex >= experiencesii.length) {
			expiiIndex = 0;
		}
		content.html(experiencesii[expiiIndex]);
		$('#experienceii').css('background-image', expiiImages[expiiIndex]);
  });
  $('body').on('click', '#expii-precedant', function(){
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
    `<h2>l'Université de Rochester</h2>
    <h3>Rochester, NY &nbsp; | &nbsp; Diplômée en Mai 2018</h3>
    <h4>Spécialités: l’informatique et les sciences cognitives</h4>
    <ul>
      <li>Matières secondaires: psychologie, français</li>
      <li>3.9/4.0 moyenne générale</li>
    </ul>`,
    `<h2>l'Université de Nantes</h2>
    <h3>Nantes, France &nbsp; | &nbsp; Janv - Mai 2017</h3>
    <ul>
      <li>J’ai étudié à l'étranger avec l’IES Nantes: l’immersion de la langue française et les études de la culture</li>
      <li>J’ai suivi des cours universitaires tout en m'immergeant dans
      la culture et la langue de l'ouest de la France</li>
    </ul>`,
  ];
  const eduImages = [
    "url('../images/rr.jpg')",
    "url('../images/ouais.jpg')",
  ];
  $('body').on('click', '#edu-prochain', function(){
    const content = $('#edu-content');
    eduIndex++;
		if (eduIndex >= education.length) {
			eduIndex = 0;
		}
		content.html(education[eduIndex]);
		$('#education').css('background-image', eduImages[eduIndex]);
  });
  $('body').on('click', '#edu-precedant', function(){
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
    $('#exp-nav').removeClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#experience').visible()) {
    $('#home-nav').removeClass('selected');
    $('#exp-nav').addClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#education').visible()) {
    $('#home-nav').removeClass('selected');
    $('#exp-nav').removeClass('selected');
    $('#edu-nav').addClass('selected');
    $('#hw-nav').removeClass('selected');
  } else if($('#hw').visible()) {
    $('#home-nav').removeClass('selected');
    $('#exp-nav').removeClass('selected');
    $('#edu-nav').removeClass('selected');
    $('#hw-nav').addClass('selected');
  }
});
