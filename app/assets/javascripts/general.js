
function animation_menus_principaux() {
	$("#bouton_menu_gauche").click(function(event){
		$("main, #navbarleft").css("transition", "left .4s");
		$("main, #navbarleft").toggleClass('menu_gauche_masque'); //toggleclass ajoute ou enlève une classe selon qu'elle est déjà ou non présente
	});
	$("#bouton_menu_droit").click(function(event){
		$("main, #navbarright").css("transition", "right .4s");
		$("main, #navbarright").toggleClass('menu_droit_masque'); //toggleclass ajoute ou enlève une classe selon qu'elle est déjà ou non présente
	});
}


// $(document).on('page:load', function() {
	// coucou();
// });

$(document).ready(function() {
	animation_menus_principaux();
});