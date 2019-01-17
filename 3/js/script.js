
//exo 1

$(document).ready(function () {
$('#depart1').click(function(){ 
$('#violet').hide('slow');//cache violet doucement 

});
$('.reload').click(function(){
	$('#violet').show('slow'); //affiche violet doucement 
});
});









//exo 2




$('#depart2').click(function(){ 
$('#jaune').hide('slow');
  $('#blanc').text('Hello world!');


});
  $('#orange').mouseover(function(){

  	$('#orange').fadeOut('slow');

  	$('#orange').fadeIn('slow');

});
$('.reload').click(function(){
	$('#jaune').show('slow'); 
});

//exo 3

$('#depart3').click(function(){

$('#noir').slideUp('slow'); 




});

  $('#marron').mouseover(function(){

  	$('#marron').slideToggle('slow');


});
$('#gris').click(function(){

	$('#marron').slideToggle('slow');
	$(this).slideUp('slow');
		$(this).slideDown('slow');

});

$('.reload').click(function(){
	$('#noir').show('slow'); 
		$('#marron').show('slow'); 
	$('#gris').show('slow'); 

});

//exo4
$('#depart4').click(function(){

  $('#rouge').animate({height: '300px'});

});
//exo5

$('#depart5').click(function(){

$('#pink').delay(2000).fadeOut('slow');
$('#cyan').hide();
});
$('#desactiver').click(function(){

	$('#pink').show('slow');
	$('#cyan').show();

});
$('.reload').click(function(){

$('#pink').show();
$('#cyan').show();

})