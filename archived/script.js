$(document).ready(function(){
	$(".submenu").hide();
	$(".submenu2").hide();
	$(".aboutus").mouseover(function(){
	$(".submenu").show();
});
	$(".aboutus").mouseleave(function(){
	$(".submenu").hide();
});
		$(".services").mouseover(function(){
		$(".submenu2").show();
});
		$(".services").mouseleave(function(){
		$(".submenu2").hide();
});

});