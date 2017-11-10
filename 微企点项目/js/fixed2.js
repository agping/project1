;(function($){
	$.fn.extend({
		"topFixed":function(h){
			var $this = this;
				$(window).scroll(function(){
					var $sT = $(window).scrollTop();
					if($sT >= h){
						$this.css({"position":"fixed","top":0});               
					}else{
						$this.css({"position":"static"});
						
					       
					}
				})
		}
	});
})(jQuery);
