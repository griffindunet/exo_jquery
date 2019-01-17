

  function changement(){ 
      $(".col50 ul").css("list-style-type","none"); 
  }


function changement(){ 
  var puces; 
  if (!puces){ 
  $(".col50 ul").toggleClass("notype");  

  
  }else{ // SINON
  $(".col50 ul").toggleClass("notype");  
    
  }
}
function changement(){

  $(".col50 ul").toggleClass("notype");  
}
function changementTwo(){

    $("ul").toggleClass("notype");  


} 

function changementTwo(){ 
  $(".col50 ul").toggleClass("notype"); 
  $(".col100 ul").toggleClass("notype nopad"); 
}
/******************************************************************************exo5*************/
  var str; // initialisation de la variable
    var lorem = $(".division>p").text(); 
    function superfonction(){ 

       console.log($("#testeur").val()); 
      str = $("#testeur").val(); 
      switch (true){ 
        case ((/(\boui\b)|(\bo\b)/i).test(str)): 
        $(".division>p").text(); //textbox
        $(".division").addClass("bgvert"); //ajout de la class bgvert
        $(".division").removeClass("bgred"); //suppression de la class bgred ( si bgred actif )
         console.log("bgvert"); 
        break;
       case ((/(\bnon\b)|(\bn\b)/i).test(str)): 
        $(".division>p").text(); //textbox
        $(".division").addClass("bgred"); //ajout de la class bgred
        $(".division").removeClass("bgvert");//suppression de la classe bgvert
        console.log("bgred");
        break;
    
        case ((/^[a-zA-Z0-9]{10,20}$/i).test(str)): // Si la valeur contient entre 10 et 20 caractères 
        $(".division>p").text(str); //textbox avec affichage dans le p 
        $(".division").removeClass("bgred"); //suppression class bgred 
        $(".division").removeClass("bgvert");//suppression class bgvert
        console.log("lorem");
        break;
 case ((/^[a-zA-Z0-9]{9,19}$/i).test(str)): //si entre 0 et 19 caracteres alors afficher le text lorem.....
$('.division>p').html('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum  '); // remplace le code HTML actuel par celui-ci
break;

case ((/[A-Z]{1}.{0,7}[0-9]{1}/).test(str)):
        $("#extlink").text(str); //textbox avec affichage dans le p 
      $("#extlink").attr("href","http://wikipedia.net/wiki/"+str);

        console.log("wikipedia");
        break;



}}
/***********************bonus *********/
 $("#w3").attr("href","https://www.w3schools.com/");
