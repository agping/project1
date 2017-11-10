;(function($){
	$.fn.extend({
		"topFixed":function(h){
			var $this = this;
				$(window).scroll(function(){
					var $sT = $(window).scrollTop();
					if($sT >= h){
						$this.css({"position":"fixed","top":0});
						$this.css({"border-bottom":"2px solid #FF4200",
					                "border-top":"0px solid #fff" });
					}else{
						$this.css({"position":"static"});
						$this.css({"border-top":"2px solid #FF4200",
					               "border-bottom":"0px solid #fff" });
					}
				})
		}
	});
})(jQuery);
