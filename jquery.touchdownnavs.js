(function($) {
	$.fn.TouchdownNavs = function(options){
		var s = { // settings
			hide_type: 'display'
		};
		return this.each(function() {
			if ( options ) { 
				$.extend(s, options);
			}
		
			if(navigator.userAgent.match(/(iP(hone|od|ad)|Android)/i)) {
				$("li ul", $(this)).each(function(){
					var li = $('<li />');
					$(this).siblings('a').clone().appendTo(li);
					$(this).prepend(li);
					$(this).siblings('a').click(function(){
						if (s.hide_type == 'left') {
							if($(this).siblings('ul').css('left') == '0px')
								$(this).siblings('ul').css('left','-9999px');
							else
								$(this).siblings('ul').css('left',0);
						}
						else if (s.hide_type == 'display') {
							if($(this).siblings('ul').is(':visible'))
								$(this).siblings('ul').slideUp('fast');
							else
								$(this).siblings('ul').slideDown('fast');
						}
						return false;
					});
				});
			}
		});
	};
})(jQuery)
