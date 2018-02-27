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

  //////////////
  // EDUCATION
  //////////////
  let eduIndex = 0;
  const education = [
    `<h2>Université de Rochester</h2>
    <h3>New York, É.U. &nbsp; | &nbsp; Diplomée en mai 2018</h3>
    <h4>Spécialité en l’informatique et les sciences cognitives</h4>
    <ul>
      <li>Matières secondaires: psychologie, français</li>
      <li>Tableau d'honneur pour tous les semestres</li>
      <li>Women in Computing (gestionnaire du site '16-17, membre du comité des événements '17-18),  
        Freshman Orientation Outing Treks (présidente ’15-16; gestionnaire du site ’14-15)</li>
    </ul>`,
    `<h2>Université de Nantes</h2>
    <h3>Nantes, France &nbsp; | &nbsp; Spring 2017</h3>
    <h4>l’IES Nantes: l’immersion en langue française et études de la culture</h4>
    <ul>
      <li>Inscrite aux cours universitaires tout en m'immergeant dans la culture et la langue de l'ouest de la France</li>
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

/////////////////
// EXPERIENCES
/////////////////
let expIndex = 0;
const experiences = [
  `<h2>Développeuse web stagiaire</h2>
  <h3>LinkedIn</h3>
  <h4>Californie, É.U. &nbsp; | &nbsp; juin 2017 - sept 2017</h4>
  <p>Développé un nouveau widget pour le procès d'inscription. Le widget affecte
    des dizaines de milliers de nouveaux utilisateurs chaque jour.
    De retour au poste à temps complet en novembre 2018</p>`,
  `<h2>Développeuse web stagiaire</h2>
  <h3>L.L.Bean</h3>
  <h4>Maine, É.U. &nbsp; | &nbsp; mai 2016 - août 2016</h4>
  <p>Exécuté les efforts d'amélioration du site. Les projets comprenaient
  actuelles de code et de documentation et les travaux du développeur sur le
  projet d'amélioration des commentaires</p>`,
  `<h2>Conseillère étudiante</h2>
  <h3>Université de Rochester</h3>
  <h4>New York, É.U. &nbsp; | &nbsp; sept 2017 - mai 2018</h4>
  <p>Naviguez les étudiants à travers une variété de défis académiques tels
  que la planification des cours, la sélection d'une majeure, et l'élaboration
  d'un plan d'étude. En outre, offrir des conseils sur les stratégies de
  réussite et les ressources disponibles</p>`,
  `<h2>Assistante pédagogique</h2>
  <h3>Université de Rochester</h3>
  <h4>New York, É.U. &nbsp; | &nbsp; sept 2017 - mai 2018</h4>
  <p>Introduis les élèves à la programmation en leur fournissant du soutien et
  des ressources. Guider les groupes d'étudiants à travers des projets d'un semestre
  dans CSC 210: Principes de développement d'applications Web. Planifié et animé
  deux fois par semaine des laboratoires de 10 à 15 étudiants pour le CSC 171: Science de la programmation</p>`,
  `<h2>Stagiaire pédagogique</h2>
  <h3>Lycée St Stanislas</h3>
  <h4>Nantes, France &nbsp; | &nbsp; janv 2017 - mai 2017</h4>
  <p>Aidé dans les classes d'anglais de lycée de compétence diverse, y compris la préparation de BAC.
  Création et présentation de plans de cours uniques, intégrant l'échange culturel dans le matériel de cours et
  simultanément inscrit au cours complémentaire sur l’introduction à la théorie de l'enseignement français</p>`,
];
const expImages = [
  "url('images/in.jpg')",
  "url('images/llb.jpg')",
  "url('images/rr-back.jpg')",
  "url('images/rr-back.jpg')",
  "url('images/stan.jpg')",
];
$('body').on('click', '#exp-next', function(){
  const content = $('#exp-content');
  expIndex++;
  if (expIndex >= experiences.length) {
    expIndex = 0;
  }
  if (expIndex == 2) {
    $('#exp-type').html('éxperiences pédagogiques');
  } else if (expIndex == 0) {
    $('#exp-type').html('éxperiences professionelles');
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
  if (expIndex == experiences.length-1) {
    $('#exp-type').html('éxperiences pédagogiques');
  } else if (expIndex == 1) {
    $('#exp-type').html('éxperiences professionelles');
  }
  content.html(experiences[expIndex]);
  $('#experience').css('background-image', expImages[expIndex]);
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
