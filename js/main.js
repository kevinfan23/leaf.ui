$(document).ready(function() {
	
	$(window).bind("load", function() {
		$('.nav-item').addClass('fadeInDown');
	});
	
	$('.collapse').addClass('uncollapsed');
		$('#dot').addClass('unshifted');
	
		$(window).scroll(function() {
			if ($(window).scrollTop() <= 10) {
				$('.collapse').removeClass('collapsed');
				$('.collapse').addClass('uncollapsed');
				$('#dot').removeClass('shifted');
				$('#dot').addClass('unshifted');
				$('.logo').css('color', '#9B9B9B');		
			}
			else {
				$('.collapse').removeClass('uncollapsed');
				$('.collapse').addClass('collapsed');
				$('#dot').removeClass('unshifted');
				$('#dot').addClass('shifted');	
				$('.logo').css('color', '#000');		
			}
		});
});
		
