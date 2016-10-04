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
		
	/*** Connect page effects ***/
	$('#connect').on('click', function() {
		$('.connect-overlay').height($(window).height());
		$('.connect-overlay').toggleClass('connected-overlay');
		$('.connect-container').toggleClass('connected-container');
		$('li.connect-item').toggleClass('fadeInDownSwing');
		$('.connect-container').toggleClass('fixed-page');
		$('#connect').toggleClass('connected');
		$('.connect-overlay').on('click', function() {
			$('.connect-overlay').removeClass('connected-overlay');
			$('.connect-container').removeClass('connected-container')
			$('li.connect-item').removeClass('fadeInDownSwing');
			$('.connect-container').removeClass('fixed-page');
			$('#connect').removeClass('connected');
		});
	});
});
		
