$(window).scroll(
        function(){
        if($(document).scrollTop()>$(window).outerHeight()){
         $(".help").stop(true,false).animate({top:"35%",right:"13px"},600);
        }else if($(window).scrollTop()<=$(window).outerHeight()){
         $(".help").stop(true,false).animate({top:"88%",right:"13px"},600)   
        }
        })
     
    $(".help .d").mouseenter(function(){
        $(".info").show();
        $(".help .d #dd1").removeClass("d-1"); 
        $(".help .d #dd2").removeClass("d-2"); 
        $(".help .d #dd3").removeClass("d-3");
    })
     $(".help .d").mouseleave(function(){
        $(".info").hide();
        $(".help .d #dd1").addClass("d-1"); 
        $(".help .d #dd2").addClass("d-2"); 
        $(".help .d #dd3").addClass("d-3");  
    })
      $(".help .t").mouseenter(function(){
        $(".help .t .t-1").show();
    })
     $(".help .t").mouseleave(function(){
        $(".help .t .t-1").hide();
    })
    // var top1=document.getElementsByClassName("help")[0];
   
    $("#tt").click(
        function(){
        $("html,body").animate({"scrollTop":0},300);
        
    })
