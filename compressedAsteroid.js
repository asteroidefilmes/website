$(document).ready(function(){function h(a){$(".infowrappermobile").animate({scrollTop:0}),$(".lazydirector"+a+"mobile").trigger("imgloadingdirectormobile")}function o(a){$(".imagedirector").css("filter","grayscale(1)"),$(".imagedirector").css("-webkit-filter","grayscale(1)"),n.css("cursor","auto"),j.removeEventListener("click",o),n.off("mouseleave"),$("#Director"+(a.target.nDirector+1)+"Info").click(),$(".lazydirector"+(a.target.nDirector+1)+"desktop").trigger("imgloading"),i||$(".directorworkorbit").toggleClass("paused")}function u(){if(!(--r>0)){for(var a=0;a<q.length;a++){var b=q[a];b.hitArray=v(b.image)}j.width=l,j.height=m,y(q.length-1,k,q),$("#canvasdirector1").on("mousemove",function(a){w(a)}),k.clearRect(0,0,l,m)}}function v(a){var b=[];j.width=a.width,j.height=a.height,k.drawImage(a,0,0);for(var c=k.getImageData(0,0,j.width,j.height).data,d=0;d<c.length;d+=4)b.push(c[d+3]>250?1:0);return b}function w(a){a.preventDefault(),a.stopPropagation();var b=$(".canvasimagedirector.director1"),c=b.offset(),d=c.left,e=c.top;mouseX=parseInt(a.clientX-d),mouseY=parseInt(a.clientY-e+$(window).scrollTop());var h,f=0,g=0,i=0,l=0;for(l=0;l<q.length;l++)if(h=q[l],f=mouseX-h.x,g=mouseY-h.y,f>0&&g>0&&f<=h.width&&g<=h.height&&(i=g*h.width+f)<h.hitArray.length-1&&h.hitArray[i]>0){p!=h.name&&z(l,q);break}for(l=0;l<q.length;l++)h=q[l],f=mouseX-h.x,g=mouseY-h.y,f>0&&g>0&&f<=h.width&&g<=h.height&&(i=g*h.width+f)<h.hitArray.length-1&&(h.hitArray[i]>0?(h.name,$(".imagedirector").css("filter","grayscale(1)"),$(".imagedirector").css("-webkit-filter","grayscale(1)"),$("#"+h.name).css("filter","grayscale(0)"),$("#"+h.name).css("-webkit-filter","grayscale(0)"),n.css("cursor","pointer"),$(".directorname").css("display","none"),$(".directorname"+(h.image.index+1)).css("display","block"),$(".directorname"+(h.image.index+1)).css("opacity","1"),j.addEventListener("click",o),j.nDirector=h.image.index,p=h.name):($(".imagedirector").css("filter","grayscale(1)"),$(".imagedirector").css("-webkit-filter","grayscale(1)"),n.css("cursor","auto"),j.removeEventListener("click",o),$(".directorname").css("display","none"),$(".directorname.default").css("display","block")))}function x(){$(".imagedirector").css("filter","grayscale(1)"),$(".imagedirector").css("-webkit-filter","grayscale(1)"),$(this).css("cursor","auto"),$(".directorname").css("display","none"),$(".directorname.default").css("display","block"),j.removeEventListener("click",o)}function y(a,b,c){for(var d,e=0;e<c.length;e++)d=c[e],d.width=d.image.width,d.height=d.image.height,b.drawImage(d.image,d.x,d.y)}function z(a,b){var c=b[b.length-1],d=b[a];b[a]=c,b[b.length-1]=d}$.get("http://freegeoip.net/json/",function(a){"US"==a.country_code?$(".menuschool").css("display","none"):$(".menuschool").css("display","flex"),"BR"==a.country_code?$("#contactLocale").val("PT-BR"):$("#contactLocale").val("ENG")},"jsonp"),navigator.vendor&&navigator.vendor.indexOf("Apple")>-1&&navigator.userAgent&&!navigator.userAgent.match("CriOS")&&$(".w-dyn-item.work").last().css("left","1px"),$("#WorkLink,#WorkLinkMobile,#WorkLinkMobile2,#StartupsLink,#StartupsLinkMobile,#StartupsLinkMobile2").on("click",function(){setTimeout(function(){$("html,body").trigger("scroll")},300)}),$(".lightbox.desktop").on("click",function(){videocontainer=$(this).find(".videocontainer"),videocontainer.html(videocontainer.html()),videocontainer.find("iframe").removeAttr("src")}),$(".lightboxclose").on("click",function(){videocontainer=$(this).next().find(".videocontainer"),videocontainer.html(videocontainer.html()),videocontainer.find("iframe").removeAttr("src")}),$(".herobutton.reel").on("click",function(){var a=$(this).next().html();$("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+a),$("#MainIframe").lazyLoadXT(),fbq("track","ViewContent"),ga("send","event","button","click","Reel")}),$(".herobutton.contact").on("click",function(){$(".buttonform").click(),fbq("track","Lead"),ga("send","event","button","click","SendContactForm")});var b=window,c=document,d=c.documentElement,e=c.getElementsByTagName("body")[0],f=b.innerWidth||d.clientWidth||e.clientWidth,g=$("#greyBackground").attr("src");if(f<=991)$(".lazyworkmobile, .lazydirector1mobile, .lazydirector2mobile, .lazydirector3mobile, .lazydirector4mobile, .lazydirector5mobile").each(function(){$(this).attr("data-original",$(this).css("background-image").replace(/^url\(['"]?/,"").replace(/['"]?\)$/,"")),$(this).css("background-image","url("+g+")")}),$(".lazyworkmobile").lazyload({skip_invisible:!0,threshold:50,effect:"fadeIn"}),$(".lazydirector1mobile, .lazydirector2mobile, .lazydirector3mobile, .lazydirector4mobile, .lazydirector5mobile").lazyload({event:"imgloadingdirectormobile",skip_invisible:!0,effect:"fadeIn"}),$(".workmobile").each(function(){var a=$(this).find(".thumbnailsize").html();1!=a&&$(this).find(".workwrapper.tablet").addClass("size"+a)}),$(".video1thumb, .video2thumb, .video3thumb, .video4thumb, .video5thumb").on("click",function(){var a=$(this).find(".vimeoid").html();$("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+a),$("#MainIframe").lazyLoadXT()}),$("#Director1Mobile").on("click",function(){h(1)}),$("#Director2Mobile").on("click",function(){h(2)}),$("#Director3Mobile").on("click",function(){h(3)}),$("#Director4Mobile").on("click",function(){h(4)}),$("#Director5Mobile").on("click",function(){h(5)}),$(".workwrapper.mobile").on("click",function(){var a=$(this).siblings(".vimeoid").html();$("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+a),$("#MainIframe").lazyLoadXT();var b=$(this).siblings(".videoname").html();ga("send","event","video","click",b+",Mobile")}),$(".directorsbutton").on("click",function(){$(".infowrappermobile").animate({scrollTop:0})});else{var i=navigator.userAgent.indexOf("Firefox")>-1;$(".lazywork, .lazyclientdesktop, .lazydirector1desktop, .lazydirector2desktop, .lazydirector3desktop, .lazydirector4desktop, .lazydirector5desktop").each(function(){$(this).attr("data-original",$(this).css("background-image").replace(/^url\(['"]?/,"").replace(/['"]?\)$/,"")),$(this).css("background-image","url("+g+")")}),$(".lazywork").lazyload({skip_invisible:!0,threshold:400,effect:"fadeIn"}),$(".lazyclientdesktop, .lazydirector1desktop, .lazydirector2desktop, .lazydirector3desktop, .lazydirector4desktop, .lazydirector5desktop").lazyload({event:"imgloading",skip_invisible:!0,effect:"fadeIn"}),$(".workdesktop").each(function(){var a=$(this).find(".thumbnailsize").html();1!=a&&$(this).find(".workwrapper, .workcontainer, .hoverthumb, .workthumboverlay").addClass("size"+a)}),$(".workwrapper.desktop").on("mouseenter",function(){i||$(this).find(".workcontainer.desktop").toggleClass("paused"),$(this).find(".orbit").toggleClass("paused"),$(this).find(".lazyclientdesktop").trigger("imgloading")}),$(".workwrapper.desktop").on("mouseleave",function(){i||$(this).find(".workcontainer.desktop").toggleClass("paused"),$(this).find(".orbit").toggleClass("paused")}),$(".video1overlay, .video2overlay, .video3overlay, .video4overlay, .video5overlay").on("click",function(){var a=$(this).find(".vimeoid").html();$("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+a),$("#MainIframe").lazyLoadXT()}),$(".hoverthumb").on("click",function(){var a=$(this).parent().prev().html();$("#MainIframe").attr("data-src","https://player.vimeo.com/video/"+a),$("#MainIframe").lazyLoadXT();var b=$(this).parent().siblings(".videoname").html();ga("send","event","video","click",b+",Desktop")}),i&&($(".directorworkvideo").toggleClass("paused"),$(".directorworkorbit").toggleClass("paused")),$(".directorsbutton.desktop").on("click",function(){$(".directorname").css("display","none"),$(".directorname.default").css("display","block"),i||$(".directorworkorbit").toggleClass("paused"),n.on("mouseleave",function(){x()})});var j=document.getElementById("canvasdirector1"),k=j.getContext("2d");k.globalCompositeOperation="destination-in";var l=j.width,m=j.height,n=$("#canvasdirector1"),p="",q=[];q.push({name:"ImageDirector1",x:347,y:0,hitArray:[]}),q.push({name:"ImageDirector2",x:503,y:141,hitArray:[]}),q.push({name:"ImageDirector3",x:74,y:110,hitArray:[]}),q.push({name:"ImageDirector4",x:504,y:8,hitArray:[]}),q.push({name:"ImageDirector5",x:150,y:22,hitArray:[]});for(var r=q.length,s=0;s<q.length;s++){var t=q[s];t.image=document.getElementById(t.name),t.image.crossOrigin="anonymous",t.image.index=s,t.image.onload=u,t.image.src=t.image.src+"?"+(new Date).getTime()}n.on("mouseleave",function(){x()})}});