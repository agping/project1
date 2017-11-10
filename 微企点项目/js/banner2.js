 function Slider(opt){
    			var elem = opt.dom;
    			var sliders = elem.getElementsByClassName("slider2-1");
    			var wrap = elem.getElementsByClassName("wrap2-1")[0];
    			var index = 1;//默认显示第几张
    			var interId = null;
    			var pagerItem = null;
    			var sliderLen = sliders.length;
    			var ban=document.getElementById("ban-1");
    			var imgs=ban.getElementsByTagName("img");
    			if(opt.default){
    				index=opt.default;
    			}
    			init();
    			function init(){
    				rederDom();
    				bindDOM();
    				auto();
    				goslider(index);
    			}
    			function  rederDom(){
    				//渲染页面
    				wrap.style.width = sliders[0].offsetWidth*(sliderLen+2)+"px";
    				wrap.style.height = sliders[0].offsetHeight+"px";
    				wrap.style.position = "absolute";
    			  	var pagers = document.createElement("div");
    			  	pagers.className ="pagers2-1";
    			  	var s = "";
    			  	for(var i =0;i<sliderLen;i++){
    			  		s += '<span class = "pager2-1"></span>'
    			  	}
    			  	pagers.innerHTML = s;
    			  	elem.appendChild(pagers);
    			  	pagerItem = elem.getElementsByClassName("pager2-1");
    			  	var last = sliders[sliderLen-1].cloneNode(true);
    			  	var first = sliders[0].cloneNode(true);
    			  	wrap.appendChild(first);
    			  	wrap.insertBefore(last,sliders[0]);
    			}
    			function bindDOM(){
    				for(var i= 0;i<sliderLen;i++){
    					!function(i){
    						var j =i;
    						pagerItem[j].onclick = function(){
    							goslider(j+1);
    						}
    					}(i)
    				}
    			}
    			function auto(){
    				interId = setInterval(function(){
    					var num = index+1;
    					goslider(num);
    				},opt.time)
    			}
    			function goslider(num){
    				wrap.style.left = (num*sliders[0].offsetWidth*-1)+"px";
    				if(num==sliderLen+1){
    					setTimeout(function(){
    						wrap.className = "wrap2-1";
    						wrap.style.left = (sliders[0].offsetWidth*-1)+"px";
    					},500)
    					pagerItem[sliderLen-1].className = "pager2-1";
    					pagerItem[0].className = "pager2-1 active2-1";
    					imgs[sliderLen-1].style.opacity="0";
    					imgs[0].style.opacity="1";
    					index =1;
    				}else if(num==0){
    					setTimeout(function(){
    						wrap.className = "wrap2-1";
    						wrap.style.left = (sliderLen*sliders[0].offsetWidth*-1)+"px";
    					},500)
    					pagerItem[0].className = "pager2-1";
    					pagerItem[sliderLen-1].className = "pager2-1 active2-1";
    					imgs[sliderLen-1].style.opacity="1";
    					imgs[0].style.opacity="0";
    					index =sliderLen;
    				}
    				else{
    					pagerItem[index-1].className = "pager2-1";
	    				pagerItem[num-1].className = "pager2-1 active2-1";
	    				imgs[num-1].style.opacity="1";
    					imgs[index-1].style.opacity="0";
	    				index = num;
    				}
    				wrap.className = "wrap2-1 ani2-1";
    			}
    		}
    		var dom = document.getElementsByClassName("banner2-1")[0];
    		Slider({dom:dom,time:3000,default:0});

