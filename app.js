$(document).ready(function(){
	$("body").fadeIn(1000);
	$("p").on("mouseenter", function(){
		$(this).css("background-color", "yellow");
	});
	$("p").on("mouseleave", function(){
		// $(this).css("background-color", "white");
		$(this).removeAttr("style");
	});
	$("h2").on("click", function(){
		$(this).animate({
			"opacity": "0.25", 
			"margin-left": "20px"
		}, 400, "swing", function() {
			$(".speech").animate({
				"opacity": "0.5"
			});
		});
	});
});