/*pop弹出框开始*/
    var pop=document.getElementById("pop1");
	var btn=document.getElementById("bt-1");
	var times=pop.getElementsByClassName("times")[0];
	var toggle=document.getElementById("liji");
	var mask=document.getElementsByClassName("mask")[0];
	var pop2=document.getElementsByClassName("pop-2")[0];
	var times2=pop2.getElementsByClassName("times-2")[0];
	toggle.onclick=function(){
		pop.style.display="block";
		mask.style.display="block";
		times.onclick=function(){
		pop.style.display="none";
		mask.style.display="none";
		}
	}
	btn.onclick=function(){
		pop.style.display="none";
		mask.style.display="block";
		pop2.style.display="block";
		times2.onclick=function(){
		pop2.style.display="none";
		mask.style.display="none";
		}
	}
	// 键盘事件
	document.onkeydown=function(ev){
			//esc  27
				var e = ev || window.event;
				if(e.keyCode==27){
					pop2.style.display="none";
					mask.style.display="none";
					pop.style.display="none";
				}
		}
		 /*pop弹出框结束*/
		 /*套餐计费开始*/ 
		 var $a=399;
		 var $c=1;
		 var $d=0;
		 $(".pop-body li").click(function(){
		 	$a=0
		 	$(this).siblings().removeClass("li-1");
		 	$(this).addClass("li-1");	 	
		 	$c=$(this).index()+1;
		 	$a=399*$c;
		  var $pri=$a+$d*$c*1500;
		  $("#price").html($pri);
		  $(".pop-2 .price").html($pri)
		 	})
		  $("#stand").click(function(){
		  	if($d==0){
		  	   $d=1;
		  	   $(this).addClass("stand-1");
		  	}else if($d==1){
                $d=0;
                $(this).removeClass("stand-1");
		  	}
          console.log("$c="+$c);
          console.log("$d="+$d);
		  var $pri=$a+$d*$c*1500;
		  $("#price").html($pri);
		  $(".pop-2 .price").html($pri)
		 	});
		  $("#price").html($pri);
		  $(".pop-2 .price").html($pri);
		 /*套餐计费结束*/
		
	