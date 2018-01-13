$(function() {
	$(".menu").click(function() {
		$(".bg").toggleClass('cover');
		$(".bar").toggleClass('bar-nav');
		$(".cover ul li").each(function (i,e){
			var delay = (i + 1) * 0.05 + 's';
			$(this).css({'animation-delay':delay});
		});
	});
});