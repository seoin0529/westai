

$("document").ready(function(){
	var typingBool = false;
    var typingIdx=0;
    var typingTxt = $(".section_wrap .home .txt-wrap .txt-typing ").text(); // 타이핑될 텍스트를 가져온다
    typingTxt=typingTxt.split(""); // 한글자씩 자른다.
    if(typingBool==false){ // 타이핑이 진행되지 않았다면
       typingBool=true;

       var tyInt = setInterval(typing,100); // 반복동작
     }

     function typing(){
       if(typingIdx<typingTxt.length){ // 타이핑될 텍스트 길이만큼 반복
         $(".section_wrap .home .txt-wrap .typing").append(typingTxt[typingIdx]); // 한글자씩 이어준다.
         typingIdx++;
       } else{
         clearInterval(tyInt); //끝나면 반복종료
       }
     }




	var $indi =$(".indicator ul li"),
		$indi_line =$(".indicator ul li span"),
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
		$indi.removeClass("active").eq(a).addClass("active");
	$indi_line.removeClass("line").eq(a).addClass("line");
	})// click

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
			scrollTop : offset[a]
		},1000)
		}
	})

	var $nav_btn =  $(".section_wrap  .nav .nav_btn"),
		$nav_slide =$(".section_wrap  .nav .nav_wrap");

	$nav_btn.click(function(){
		$nav_slide.fadeToggle(500);
		$(this).toggleClass("click")
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
	})
	$pro_close.click(function(){
		$pro_modal.slideUp();
	})
	var img_src = "../images/portfolio/page_3/modal_",
		$modal =$(".con-modal"),
		$btn_d = $(".m-work.swiper-container .btn.d"), //모바일 디자인가이드
		$btn_dp =$(".section_wrap .btn.dp"), //pc 디자인가이드
		$close_btn =$(".con-modal span")
	var content = [img_src+"1.jpg", img_src+"2.jpg", img_src+"3.jpg", img_src+"4.jpg", img_src+"5.jpg",img_src +"5_PC.jpg", img_src+"6.jpg",img_src +"6_event.jpg"];
	$btn_d.click(function(){
		var k =  $btn_d.index(this)
		$modal.slideDown();
		$(".con-modal img").attr("src", content[k])

	})
		$btn_dp.click(function(){
		var a =  $btn_dp.index(this)
		console.log(a);
		$modal.slideDown();
		$(".con-modal img").attr("src", content[a])

	})
	$close_btn.click(function(){
		$modal.slideUp();
	})

	//모바일 디자인가이드
var $btn_m =$(".section_wrap .btn.m span"),
	$btn_p =$(".section_wrap .btn.p span"),
	$btn_pm =$(".section_wrap .btn.pm span"),

	pc_url=[" https://seoin0529.github.io/atwosomeplace/",
	"https://seoin0529.github.io/Samsonite/",
	"https://seoin0529.github.io/mobile_MCM/",
			"https://seoin0529.github.io/mobile_MCM/"]
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
