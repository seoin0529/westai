

$("document").ready(function(){
	$("a").click(function(e){
		e.preventDefault();
	})
	
	var typingBool = false; 
var typingIdx=0; 
var liIndex = 0;
var liLength = $(".section_wrap .home .txt-wrap ul li").length;

// 타이핑될 텍스트를 가져온다 
var typingTxt = $(".section_wrap .home .txt-wrap ul li").eq(liIndex).text(); 
typingTxt=typingTxt.split(""); // 한글자씩 자른다. 
if(typingBool==false){ // 타이핑이 진행되지 않았다면 
    typingBool=true; 
    var tyInt = setInterval(typing,100); // 반복동작 
} 
     
function typing(){ 
  $(".typing ul li").removeClass("on");
   $(".typing ul li").eq(liIndex).addClass("on");
  if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복 
     $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); // 한글자씩 이어준다. 
     typingIdx++; 
   } else{ if(liIndex<liLength-1){
     //다음문장으로  가기위해 인덱스를 1증가
       liIndex++; 
     //다음문장을 타이핑하기위한 셋팅
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".section_wrap .home .txt-wrap ul li").eq(liIndex).text(); 
       
     //다음문장 타이핑전 1초 쉰다
         clearInterval(tyInt);
          //타이핑종료
     
         setTimeout(function(){
           //1초후에 다시 타이핑 반복 시작
           tyInt = setInterval(typing,100);
         },1000);
        } else if(liIndex==liLength-1){
          
         //마지막 문장까지 써지면 반복종료
           clearInterval(tyInt);
        }
    } 
}  

	
$(window).resize(function(){
	if($(window).width() > 650){
$(".home").ripples({
	resolution : 256,
	perturbance : 0.04
})	
}
})
	

	
	
	var $indi =$(".indicator ul li"),
		$indi_line =$(".indicator ul li span"),
		$ham_menu = $(".section_wrap .nav .nav_wrap ul li"),
		time = false,
		height = $(".section").height(),
		a = 0;
	
	$indi.eq(0).addClass("active");
	$indi_line.eq(0).addClass("line");
	
	// 각 세션의 위치를 가지고 오기 위해 변수 선언
	var offset = [];
	
	// 세션의 갯수룰 각 세션의 오프셋 탑값을 저장
	var $height = $(".section").height()
//	for(var m = 0; m < $(".section").length; m++){
//		offset.push($(".section").eq(m).offset().top)
////		console.log(offset)
//	}
	// 윈도우가 리사이즈 되더라도, offset 값을 비워둔뒤 다시 지정
	
	$(window).resize(function(){
//		offset = [];
//		for(var m = 0; m < $(".section").length; m++){
//		offset.push($(".section").eq(m).offset().top)
		$height = $(".section").height()
			
	
	})
	
	
	$(window).on("mousewheel DOMMousewheel", function(e){
		var delta = e.originalEvent.wheelDelta;
//		console.log(delta);
		if(time==true){
			return;
		}
		setTimeout(function(){
			time =false;
		},1000)
		time = true;
		
		if(delta < 0){
			a++;
			if(a > $(".section").length-1){
				a = 0;
			}
		}else{
			a--;
			if(a <0){
				a =0;
			}
		}
		
		
		if(a == 1){
			setTimeout(function(){
				progressbar("#pro1", "0.9");
				progressbar("#pro2", "0.9");
				progressbar("#pro3", "0.8");
				progressbar("#pro4", "0.8");
				progressbar("#pro5", "0.6");
				
//			bar.animate(0.8);
//			bar2.animate(0.8);
			}, 300)
		}
		$("html, body").stop().animate({
			scrollTop : $height * a
		},1000)
		
		$indi.removeClass("active").eq(a).addClass("active");
	$indi_line.removeClass("line").eq(a).addClass("line");
	})

	$indi.click(function(){
		a = $(this).index();
		if(time==true){
			return;
		}
		setTimeout(function(){
			time = false;
		},1000)
		time = true;
		$("html, body").stop().animate({
			scrollTop : height * a
		},1000,"easeInQuint")
		
				if(a == 1){
			setTimeout(function(){
				progressbar("#pro1", "0.9");
				progressbar("#pro2", "0.9");
				progressbar("#pro3", "0.8");
				progressbar("#pro4", "0.8");
				progressbar("#pro5", "0.6");
				
//			bar.animate(0.8);
//			bar2.animate(0.8);
			}, 300)
		}
		
		
		$indi.removeClass("active").eq(a).addClass("active");
	$indi_line.removeClass("line").eq(a).addClass("line");
		
		
		
	})// click
	
	
$ham_menu.click(function(){
		a =$(this).index();
	
	 $ham_menu.removeClass("active").eq(a).addClass("active");
		if(time==true){
			return;
		}
		setTimeout(function(){
			time =false;
		},1000)
		time =true;
		$("html, body").stop().animate({
			scrollTop:height * a
		},1000, "easeInQuint")
	
	if(a == 1){
			setTimeout(function(){
				progressbar("#pro1", "0.9");
				progressbar("#pro2", "0.9");
				progressbar("#pro3", "0.8");
				progressbar("#pro4", "0.8");
				progressbar("#pro5", "0.6");
				
//			bar.animate(0.8);
//			bar2.animate(0.8);
			}, 300)
		}
		
		
		$indi.removeClass("active").eq(a).addClass("active");
	$indi_line.removeClass("line").eq(a).addClass("line");
	
	
	})
	//햄버거메뉴
	
	
	
	
	$("body").swipe({
		swipe : function(event, direction){
			if(direction == "up"){
				a++;
				if(a > $(".section").length -1){
					a = 0;
				}
			}else if(direction =="down"){
				a--;
				if(a < 0){
					a = 0;
				}
			}
				$("html, body").stop().animate({
			scrollTop : $height * a
		},1000)
		}
	})
	
	var $nav_btn =  $(".section_wrap .nav .nav_btn"),
		$nav_slide =$(".section_wrap .nav .nav_wrap");
	
	$nav_btn.click(function(){
		$nav_slide.fadeIn(500);
		$(this).addClass("click")
		// 네비 화면에 보여질 때 세션 클릭시 기존 네비게이션 종료
		$(".section").click(function(){
				$nav_btn.removeClass("click");
				$nav_slide.fadeOut(500);
			
			})
	})//nav click

	
	
//	var $nav_list =$(".home .nav .nav_wrap ul li")
	
	
	// progressbar function
	
	function progressbar(id, per){
		var bar = new ProgressBar.Line(id,{
		strokeWidth : 15,
		easing : "easeInOut",
		duration : 1400,
		color: "#002157",
		trailwidth:4
//		trailColor :"#707070"
	})
		bar.animate(per);
	}
	

	
		var swiper = new Swiper(".swiper-container",{
		autoplay : {
			delay :5000
		},
		slidesPerView :1,
		spaceBetween : 0,
		speed :1500,
		loop :false,
		swiper: true,
		navigation:{
			nextEl : ".swiper-button-next",
			prevEl : ".swiper-button-prev"
		},
		pagination:{
			el:".swiper-pagination",
			clickable : true
		}
		
	})
		
		var $pro_modal =$(".pro-modal"),
			$pro_close =$(".pro-modal span"),
			$pro_btn =$(".section_wrap .profile .pro_wrap .left_wrap .pro_btn span");
	$pro_btn.click(function(){
		$pro_modal.slideDown();
		
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
			$('html, body').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
			event.preventDefault();     
			event.stopPropagation();    
			return false; 
		});
		
	})
	$pro_close.click(function(){
		$pro_modal.slideUp();
		
		$('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제 
		$('html,body').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
	})
	
	
	var img_src = "http://westai.co.kr/images/portfolio/page_3/modal",
		$modal =$(".con-modal"),
		$btn_d = $(".m-work.swiper-container .btn.d"), //모바일 디자인가이드
		$btn_dp =$(".section_wrap .btn.dp"), //pc 디자인가이드
		$close_btn =$(".con-modal span")
	var content = [img_src+"1.jpg", img_src+"2.jpg", img_src+"3.jpg", img_src+"4.jpg", img_src+"5.jpg",img_src +"5PC.jpg", img_src+"6.jpg",img_src +"6event.jpg"];
	$btn_d.click(function(){
		var k =  $btn_d.index(this)
		$('html, body').css({'overflow': 'hidden', 'height': '100%'});
		$modal.slideDown();
		$(".con-modal img").attr("src", content[k])
		$('html, body').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
			event.preventDefault();     
			event.stopPropagation();    
			return false; 
		});


		
		
	})
		$btn_dp.click(function(){
		var a =  $btn_dp.index(this)
		console.log(a);
		$modal.slideDown();
		$(".con-modal img").attr("src", content[a])
			$('html, body').css({'overflow': 'hidden', 'height': '100%'});
			$('html, body').on('scroll touchmove mousewheel', function(event) { // 터치무브와 마우스휠 스크롤 방지     
			event.preventDefault();     
			event.stopPropagation();    
			return false; 
		});
		
	})
	$close_btn.click(function(){
		$modal.slideUp();
		$('html, body').css({'overflow': 'auto', 'height': '100%'}); //scroll hidden 해제 
		$('html,body').off('scroll touchmove mousewheel'); // 터치무브 및 마우스휠 스크롤 가능
	})
	
	//모바일 디자인가이드
var $btn_m =$(".section_wrap .btn.m span"),
	$btn_p =$(".section_wrap .btn.p span"),
	$btn_pm =$(".section_wrap .btn.pm span"),
	
	pc_url=[" http://westai.co.kr/twosome-wireframe.html",
	"http://westai.co.kr/samsonite.html",
	"http://westai.co.kr/mcm-moblie.html",
			"http://westai.co.kr/dior.html"]
	$btn_m.click(function(){
		var i = $btn_m.index(this);
		window.open(pc_url[i],"KIMSEOIN'S PORTFOLO","width=360px,height=640px")
	})//포트폴리오모바일사이트
	$btn_p.click(function(){
		var i = $btn_p.index(this);
		window.open(pc_url[i],"KIMSEOIN'S PORTFOLO","width=1920px,height=1080px")
	})
	$btn_pm.click(function(){
		var i = $btn_pm.index(this);
		window.open(pc_url[i],"KIMSEOIN'S PORTFOLO","width=360px,height=640px")
	})
	
	

	
	
	
	
	
	
	
	
	
})//end