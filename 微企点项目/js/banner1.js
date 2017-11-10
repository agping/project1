function Slider(opt){
    			var elem = opt.dom;
                var btnl=elem.getElementsByClassName("btnL")[0];
                var btnr=elem.getElementsByClassName("btnR")[0];
    			var sliders = elem.getElementsByClassName("slider1");
    			var wrap = elem.getElementsByClassName("wrap1")[0];
    			var index = 1;//默认显示第几张
    			var interId = null;
    			var pagerItem = null;
    			var sliderLen = sliders.length;

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
    			  	pagers.className ="pagers";
    			  	var s = "";
    			  	for(var i =0;i<sliderLen;i++){
    			  		s += '<span class = "pager"></span>'
    			  	}
    			  	pagers.innerHTML = s;
    			  	elem.appendChild(pagers);
    			  	pagerItem = elem.getElementsByClassName("pager");
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
               elem.onmouseover=function(){
                btnl.style.display="block";
                btnr.style.display="block"
               }
                elem.onmouseout=function(){
                btnl.style.display="none";
                btnr.style.display="none"
               }
                btnl.onclick=function(){
                    var num = index-1;
                        goslider(num); 
                }
                  btnr.onclick=function(){
                    var num = index+1;
                        goslider(num); 
                }
                 btnl.onmouseover = function(){
                        clearInterval(interId);
                    }
                 btnl.onmouseout = function(){
                        auto();
                    }
                     btnr.onmouseover = function(){
                        clearInterval(interId);
                    }
                 btnr.onmouseout = function(){
                        auto();
                    }
    			function goslider(num){
    				wrap.style.left = (num*sliders[0].offsetWidth*-1)+"px";
    				if(num==sliderLen+1){
    					setTimeout(function(){
    						wrap.className = "wrap1";
    						wrap.style.left = (sliders[0].offsetWidth*-1)+"px";
    					},500)
    					pagerItem[sliderLen-1].className = "pager";
    					pagerItem[0].className = "pager active";
    					index =1;
    				}else if(num==0){
    					setTimeout(function(){
    						wrap.className = "wrap1";
    						wrap.style.left = (sliderLen*sliders[0].offsetWidth*-1)+"px";
    					},500)
    					pagerItem[0].className = "pager";
    					pagerItem[sliderLen-1].className = "pager active";
    					index =sliderLen;
    				}
    				else{
    					pagerItem[index-1].className = "pager";
	    				pagerItem[num-1].className = "pager active";
	    				index = num;
    				}
    				wrap.className = "wrap1 ani";
    			}
    		}
    		var dom = document.getElementsByClassName("banner1")[0];
    		Slider({dom:dom,time:2300,default:0});

