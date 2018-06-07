$(document).ready(function(){

  //Desktop and Mobile Script
  
  //Get IP by location, preventing users from US to see the School link
  $.get("https://freegeoip.net/json/", function (response) {
    if(response.country_code=='US') {
     $(".menuschool").css("display", "none");
    } else {
     $(".menuschool").css("display", "flex");
    }
    
    if(response.country_code=='BR') {
      $("#contactLocale").val("PT-BR");
    } else {
      $("#contactLocale").val("ENG");
    }
  }, "jsonp");
  
  //grid alignment problem in safari
  var isSafari = navigator.vendor && navigator.vendor.indexOf('Apple') > -1 && navigator.userAgent && !navigator.userAgent.match('CriOS');
 	if (isSafari) {
    $('.w-dyn-item.work').last().css("left","1px");
  }

  // NAVIGATION
  $("#WorkLink,#WorkLinkMobile,#WorkLinkMobile2,#StartupsLink,#StartupsLinkMobile,#StartupsLinkMobile2").on("click", function(){
    setTimeout(function(){
      $("html,body").trigger("scroll");
      /*$(window).resize();
      $(window).scroll();
      $(".worksectioncontainer").trigger("scroll");
      $(".worksectioncontainer").resize();
      $(".worksectioncontainer").scroll();*/
    }, 300);
  });

  //KEYBOARD-SWIPE
  /*function navKey(target,previousLink){
 	var options={};
  	$(".menuwrapper, .menuwrappermobile, .fixedmenuwrapper").find(".menu-active").toggleClass("menu-active");
 	options.target_id=target;
   if (previousLink!=="") {
   	$("#"+previousLink).find(".menutext").toggleClass("menu-active");
     $("#"+previousLink+"Mobile").find(".menutext").toggleClass("menu-active");
     $("#"+previousLink+"Mobile2").find(".menutext").toggleClass("menu-active");
   }
 	MultiScreen.switch_screens(options);
  }*/

  /*function SwipeAndKey(key,swipe){
 	var currentScreen;
 	//esquerda
 	if(key===37||swipe===1){
 	 //currentScreen=MultiScreen.get_current_screen();
 	 switch(currentScreen){
 		case "AboutScreen":
 		 $("#WorkLink").click();
 		 break;
 		case "WorkScreen":
 		 $("#WorkLink").click();
 		 break;
 		case "DirectorsScreen":
 		 $("#WorkLink").click();
 		 break;
 		case "ContactScreen":
 		 $("#WorkLink").click();
     break;
 	 }
    //direita
 	} else if(key===39||swipe===2){
 		 currentScreen=MultiScreen.get_current_screen();
 		 switch(currentScreen){
 			case "AboutScreen":
 			 $("#WorkLink").click();
 			 break;
 			case "WorkScreen":
 			 $("#WorkLink").click();
 			 break;
 			case "DirectorsScreen":
 			 $("#WorkLink").click();
 			 break;
 			case "HomeScreen":
 			 $("#WorkLink").click();
 			 break;
 		 }
 	}
  }
  //keyboard
  $(document.body).keydown(function(e) {
   SwipeAndKey(e.keyCode,0);
 });*/

  $(".lightbox.desktop").on("click",function(){
   videocontainer=$(this).find('.videocontainer');
   videocontainer.html(videocontainer.html());
   videocontainer.find("iframe").removeAttr("src");
  });

  $(".lightboxclose").on("click",function(){
   videocontainer=$(this).next().find('.videocontainer');
   videocontainer.html(videocontainer.html());
   videocontainer.find("iframe").removeAttr("src");
  });

  $(".herobutton.reel, .topreelplay").on("click", function(){
    var vimeoId = $(this).next().html();
    $("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+vimeoId);
    $("#MainIframe").lazyLoadXT();
    fbq('track', 'ViewContent');
    ga("send", "event", "button", "click", "Reel");
  });

  //Contact btn click
  $('.herobutton.contact').on("click",function(){
    $(".buttonform").click();
    fbq('track', 'Lead');
    ga("send", "event", "button", "click", "SendContactForm");
  });

  var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    x = w.innerWidth || e.clientWidth || g.clientWidth;

  //Grey background (used in the lazyloading)
  var grey = $("#greyBackground").attr("src");

  if (x <= 991) {
  // ----- MOBILE SCRIPT -----

    //image lazyload
    $('.lazyworkmobile, .lazydirector1mobile, .lazydirector2mobile, .lazydirector3mobile, .lazydirector4mobile, .lazydirector5mobile').each(function() {
      $(this).attr('data-original', $(this).css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,''));
      $(this).css('background-image', "url("+grey+")");
    });

    $(".lazyworkmobile").lazyload({
      skip_invisible : true,
      threshold : 50,
      effect : "fadeIn"
    });

    $('.lazydirector1mobile, .lazydirector2mobile, .lazydirector3mobile, .lazydirector4mobile, .lazydirector5mobile').lazyload({
      event : "imgloadingdirectormobile",
      skip_invisible : true,
      effect: "fadeIn"
    });

    $(".workmobile").each(function(){
      var size = $(this).find('.thumbnailsize').html();
      if (size != 1) {
        $(this).find(".workwrapper.tablet").addClass("size"+size);
      }
    });

    $(".video1thumb, .video2thumb, .video3thumb, .video4thumb, .video5thumb").on("click", function(){
      var vimeoid = $(this).find(".vimeoid").html();
      $("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+vimeoid);
      $("#MainIframe").lazyLoadXT();
    });

    //Click director mobile
    function clickDirectorMobile(d){
      //$(".linkdirectors").click();
      $('.infowrappermobile').animate({scrollTop: 0});
      $(".lazydirector"+d+"mobile").trigger("imgloadingdirectormobile");
    }

    $("#Director1Mobile").on("click", function(){clickDirectorMobile(1);});
    $("#Director2Mobile").on("click", function(){clickDirectorMobile(2);});
    $("#Director3Mobile").on("click", function(){clickDirectorMobile(3);});
    $("#Director4Mobile").on("click", function(){clickDirectorMobile(4);});
    $("#Director5Mobile").on("click", function(){clickDirectorMobile(5);});

    /*//swipe-hammerjs
    delete Hammer.defaults.cssProps.userSelect;
    var hammer = new Hammer(document.body);
    hammer.on("swipeleft",function(ev){
     SwipeAndKey(0,2);
    });
    hammer.on("swiperight",function(ev){
     SwipeAndKey(0,1);
   });*/

     $('.workwrapper.mobile').on("click", function(){
      var vimeoId = $(this).siblings(".vimeoid").html();
      $("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+vimeoId);
      $("#MainIframe").lazyLoadXT();
      var videoName = $(this).siblings(".videoname").html();
      ga("send", "event", "video", "click", videoName+",Mobile");
     });

     $(".directorsbutton").on("click",function(){
       $('.infowrappermobile').animate({scrollTop: 0});
     });

  } else {
  // ----- DESKTOP SCRIPT ------

    var firefox  = navigator.userAgent.indexOf('Firefox') > -1;

    //image lazyload
    $('.lazywork, .lazyclientdesktop, .lazydirector1desktop, .lazydirector2desktop, .lazydirector3desktop, .lazydirector4desktop, .lazydirector5desktop').each(function() {
      $(this).attr('data-original', $(this).css('background-image').replace(/^url\(['"]?/,'').replace(/['"]?\)$/,''));
      $(this).css('background-image', "url("+grey+")");
    });

    $(".lazywork").lazyload({
      skip_invisible : true,
      threshold : 400,
      effect : "fadeIn"
    });

    $(".lazyclientdesktop, .lazydirector1desktop, .lazydirector2desktop, .lazydirector3desktop, .lazydirector4desktop, .lazydirector5desktop").lazyload({
      event : "imgloading",
      skip_invisible : true,
      effect: "fadeIn"
    });

    $(".workdesktop").each(function(){
      var size = $(this).find('.thumbnailsize').html();
      if (size != 1) {
        $(this).find(".workwrapper, .workcontainer, .hoverthumb, .workthumboverlay").addClass("size"+size);
      }
    });

    //orbits-work
    $('.workwrapper.desktop').on("mouseenter",function(){
     if (!firefox){
       $(this).find('.workcontainer.desktop').toggleClass('paused');
     }
     $(this).find('.orbit').toggleClass('paused');
     $(this).find(".lazyclientdesktop").trigger("imgloading");
    });
     $('.workwrapper.desktop').on("mouseleave",function(){
      if (!firefox){
        $(this).find('.workcontainer.desktop').toggleClass('paused');
      }
      $(this).find('.orbit').toggleClass('paused');
    });

    $(".video1overlay, .video2overlay, .video3overlay, .video4overlay, .video5overlay").on("click", function(){
      var vimeoid = $(this).find(".vimeoid").html();
      $("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+vimeoid);
      $("#MainIframe").lazyLoadXT();
    });

    $(".hoverthumb").on("click", function(){
      var vimeoId = $(this).parent().prev().html();
      $("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+vimeoId);
      $("#MainIframe").lazyLoadXT();
      var videoName = $(this).parent().siblings(".videoname").html();
      ga("send", "event", "video", "click", videoName+",Desktop");

    });

    //no orbit animation if firefox
    if (firefox) {
      $('.directorworkvideo').toggleClass('paused');
      $('.directorworkorbit').toggleClass('paused');
    }

    //stop orbit directors
    $('.directorsbutton.desktop').on("click",function(){
      $(".directorname").css("display","none");
      $(".directorname.default").css("display","block");
      if (!firefox) {
        $('.directorworkorbit').toggleClass('paused');
      }
    	$canvas.on("mouseleave",function(){
     	 canvasMouseleave();
    	});
    });

    //DIRECTORS HOVER
     var canvas=document.getElementById("canvasdirector1");
     var ctx=canvas.getContext("2d");
     ctx.globalCompositeOperation = "destination-in";
     var cw=canvas.width;
     var ch=canvas.height;
     var $canvas=$("#canvasdirector1");

     function clickDirector(e) {
    	$(".imagedirector").css("filter","grayscale(1)");
    	$(".imagedirector").css("-webkit-filter","grayscale(1)");
    	$canvas.css("cursor","auto");
    	canvas.removeEventListener('click',clickDirector);
    	$canvas.off('mouseleave');
    	$("#Director" + (e.target.nDirector + 1) + "Info").click();
      $(".lazydirector" + (e.target.nDirector + 1) + "desktop").trigger("imgloading");
      if (!firefox) {
        $('.directorworkorbit').toggleClass('paused');
      }
     }

     var lastHovered="";

     var targets=[];
     targets.push({name:'ImageDirector1',x:0,y:164,hitArray:[]});
     targets.push({name:'ImageDirector2',x:176,y:153,hitArray:[]});
     targets.push({name:'ImageDirector3',x:363,y:130,hitArray:[]});
     targets.push({name:'ImageDirector4',x:535,y:141,hitArray:[]});
     targets.push({name:'ImageDirector5',x:113,y:14,hitArray:[]});
     targets.push({name:'ImageDirector6',x:299,y:13,hitArray:[]});
     targets.push({name:'ImageDirector7',x:495,y:0,hitArray:[]});
     var imgCount=targets.length;

    //load image
     for(var i=0;i<targets.length;i++){
    	var t=targets[i];
    	t.image=document.getElementById(t.name);
    	//if (isSafari) {
    	// t.image.crossOrigin='anonymous';
    	//} else {
      t.image.crossOrigin='anonymous';
    	 //t.image.setAttribute('crossOrigin','');
    	//}
    	t.image.index=i;
    	t.image.onload=start;
    	t.image.src=t.image.src+'?'+new Date().getTime();
     }

    //called when each image is fully loaded
     function start(){
    	//return if all images are not loaded
    	if(--imgCount>0){return;}
    	 for(var i=0;i<targets.length;i++){
    		var t=targets[i];
    		t.hitArray=makeHitArray(t.image);
    	 }

    	 canvas.width=cw;
    	 canvas.height=ch;

    	 draw(targets.length-1,ctx,targets);
    	 $("#canvasdirector1").on("mousemove",function(e){handleMouseMove(e);});
    		ctx.clearRect(0,0,cw,ch);
     }

     function makeHitArray(img){
    	var a=[];
    	canvas.width=img.width;
    	canvas.height=img.height;
    	ctx.drawImage(img,0,0);
    	var data=ctx.getImageData(0,0,canvas.width,canvas.height).data;
    	for(var i=0;i<data.length;i+=4){
    	 // if opaque push 1 else push 0
    	 a.push(data[i+3]>250?1:0);
    	}
    	return(a);
     }

     function handleMouseMove(e){
    	e.preventDefault();
    	e.stopPropagation();

    	var canvasParent=$(".canvasimagedirector.director1");
    	var canvasOffset=canvasParent.offset();
    	var offsetX=canvasOffset.left;
    	var offsetY=canvasOffset.top;
    	//mouse position
    	mouseX=parseInt(e.clientX-offsetX);
    	mouseY=parseInt(e.clientY-offsetY + $(window).scrollTop());

      var imgX=0;
      var imgY=0;
      var t;
      var hitArrayIndex=0;
    	var hit='Not hovering';
      var i=0;
    	for(i=0;i<targets.length;i++){
    	 t=targets[i];
    	 imgX=mouseX-t.x;
    	 imgY=mouseY-t.y;
    		if(imgX > 0 && imgY > 0 && imgX<=t.width && imgY<=t.height){
    		 hitArrayIndex=imgY*t.width+imgX;
    		 if(hitArrayIndex<t.hitArray.length-1){
    			if(t.hitArray[hitArrayIndex]>0){
    			 if (lastHovered != t.name) {
    				reOrder(i,targets);
    			 }
    			 break;
    			}
    		 }
    		}
    	 }

    	for(i=0;i<targets.length;i++){
    	 t=targets[i];
    	 imgX=mouseX-t.x;
    	 imgY=mouseY-t.y;
    	 if(imgX > 0 && imgY > 0 && imgX<=t.width && imgY<=t.height){
    		hitArrayIndex=imgY*t.width+imgX;
    		if(hitArrayIndex<t.hitArray.length-1){
    		 if(t.hitArray[hitArrayIndex]>0){
    			hit=t.name;
    			$(".imagedirector").css("filter","grayscale(0)");
    			$(".imagedirector").css("-webkit-filter","hue-rotate(120deg)");
    			$("#"+t.name).css("filter","hue-rotate(120deg)");
    			$("#"+t.name).css("-webkit-filter","hue-rotate(120deg)");
    			$canvas.css("cursor","pointer");
    			$(".directorname").css("display","none");
    			$(".directorname"+(t.image.index+1)).css("display","block");
    			$(".directorname"+(t.image.index+1)).css("opacity","1");
          canvas.addEventListener('click',clickDirector);
    			canvas.nDirector = t.image.index;
    			lastHovered=t.name;
    		 } else {
    			$(".imagedirector").css("filter","grayscale(0)");
    			$(".imagedirector").css("-webkit-filter","grayscale(0)");
    			$canvas.css("cursor","auto");
    			canvas.removeEventListener('click',clickDirector);
    			$(".directorname").css("display","none");
    			$(".directorname.default").css("display","block");
    		 }
    		}
    	 }
    	}
     }

     function canvasMouseleave(){
    	$(".imagedirector").css("filter","hue-rotate(0deg)");
    	$(".imagedirector").css("-webkit-filter","hue-rotate(0deg)");
    	$(this).css("cursor","auto");
    	$(".directorname").css("display","none");
    	$(".directorname.default").css("display","block");
    	canvas.removeEventListener('click',clickDirector);
     }

     function draw(focusedIndex,ctx,targets){
    	var t;
    	for(var i=0;i<targets.length;i++){
    	 t=targets[i];
    	 t.width=t.image.width;
    	 t.height=t.image.height;
    	 ctx.drawImage(t.image,t.x,t.y);
    	}
     }

     function reOrder(index,targets){
    	var last=targets[targets.length-1];
    	var aux=targets[index];
    	targets[index]=last;
    	targets[targets.length-1]=aux;
     }

    //default
     $canvas.on("mouseleave",function(){
    	canvasMouseleave();
     });

  }
});
