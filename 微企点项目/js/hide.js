  var a=0;
	$(".special .con .add1 span").click(function(){
        a+=45;
		$(this).css({"transform":"rotate("+a+"deg)"});
		$(".hide").slideToggle(1000);
		if($(".special .con .add1 p").text()=="点击了解微企点优势"){
		$(this).animate({"top":"150px"},800);
		$(".special .con .add1 p").text(" ");
		
		}else if($(".special .con .add1 p").text()==" "){
		$(this).animate({"top":"0px"},800);
		$(".special .con .add1 p").text("点击了解微企点优势");
		}
	})
	$(".special .con .add1 span").mouseenter(function(){
		$(this).animate({"opacity":"0.3"});

	})
	$(".special .con .add1 span").mouseleave(function(){
		$(this).animate({"opacity":"1"});
	})
