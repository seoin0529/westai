$("document").ready(function(){

	$("nav .nav-wrap ul, .submenu-wrap").hover(function(){
            $(".submenu-wrap").addClass("open");
        }, function(){
            $(".submenu-wrap").removeClass("open");
        }) //서브메뉴드롭다운


	var subMenu =$("nav .submenu-wrap .submenu ul"),
		mainMneu=$("nav .nav-wrap ul li")
	$(subMenu).hover(function(){
		var index =$(subMenu).index(this);

		$(mainMneu).eq(index).addClass("width");
	}, function(){
		$(mainMneu).removeClass("width")
	})//main_nav top after




	var main = $(".m-nav-wrap .m-layout .nav-layout-b > ul > li"),
		sub =$(".m-nav-wrap .m-layout .nav-layout-b .sub-m"),
		a = 0;
	$(main).click(function(){
		a = $(main).index(this);
$(sub).eq(a).slideToggle(500);
$(main).eq(a).toggleClass("click")
	})//모바일메뉴 아코디언

var $m_menu =$(".m-nav-wrap .m-layout"),
	$open_btn =$(".m-nav-wrap .menu-btn "),
	$close_btn=$(".m-nav-wrap .m-layout .nav-layout-t .btn-menu");
	$open_btn.click(function(){
		$m_menu.fadeIn(300);
	})//모바일메뉴 엵기
	$close_btn.click(function(){
		$m_menu.fadeOut(300);
	})




    $(window).scroll(function(){
		var pos = $(window).scrollTop();
		console.log(pos)
		if(pos > 1000){
			$('.back-to-top').fadeIn();
		} else{
			$('.back-to-top').fadeOut();
		} //top버튼 사라졌다 나타나기


		var pos = $(window).scrollTop();
		if(pos >=140){
			$("nav").addClass("fixed");
			$("nav .nav-wrap ul li a").css("color","#f2f2f2");
		}else{
			$("nav").removeClass("fixed");
			$("nav .nav-wrap ul li a").css("color","");}
	});//window.scroll 네비게이션 fixed
	$('.back-to-top').click(function(){
		$('html, body').animate({scrollTop : 0}, 500);
		return false;
	}); //top버튼

	var i = 0,
		d = 0,
		time =false,
		$indicator = $(".main-banner .indicator ul li"),
		indi_leng = $indicator.length -1,
		$slide = $(".main-banner"),
		$arrow = $slide.find("a"),
		$slide_item = $slide.find(".slide-item"),
		$play = $slide.find(".play-stop span"),
		timer = setInterval(auto_play, 3000);

	function auto_play(){
	$slide_item.eq(i).stop().animate({
			left:"-100%"
			},1000)
			i++;
			if(i > indi_leng) i =0;
			$slide_item.eq(i).stop().css("left","100%").animate({
				left:"0"
			},1000)
//		console.log(i);

		d = i;
		$indicator.removeClass("active").eq(i).addClass("active")
} //auto_play

$indicator.eq(0).addClass("active");

	$arrow.click(function(e){
		e.preventDefault();
		var index = $arrow.index(this);



				if(time == true){
			return;
		}
		setTimeout(function(){
			time =false;

		}, 1000)
		time = true;


		if(index==0){
			//왼쪽 화살표
			$slide_item.eq(i).stop().animate({
				left:"100%"
			},1000)
			i--;
			if (i<0) i = indi_leng;
			$slide_item.eq(i).stop().css("left","-100%").animate({
				left:"0"
			},1000)
		}else{
			//오른쪽 화살표
			$slide_item.eq(i).stop().animate({
			left:"-100%"
			},1000)
			i++;
			if(i > indi_leng) i =0;
			$slide_item.eq(i).stop().css("left","100%").animate({
				left:"0"
			},1000)
		}
//		console.log(i);

		d = i;
		$indicator.removeClass("active").eq(i).addClass("active")

	})//arrow click

	$indicator.click(function(){

		if(i < $(this).index()){
			$slide_item.eq(i).stop().animate({
			left:"-100%"
			},1000)
		}else if(i==$(this).index()){
			return;
		}else{
		$slide_item.eq(i).stop().animate({
		left:"100%"
		},1000)
		}

		i = $(this).index();
		if(i < d){
			$slide_item.eq(i).stop().css("left","-100%").animate({
				left:"0"
			},1000)
		}else{
			$slide_item.eq(i).stop().css("left","100%").animate({
				left:"0"
			},1000)
		}

		d = i;
			$indicator.removeClass("active").eq(i).addClass("active")
	})//indicator click

	$arrow.hover(function(){
		if($play.hasClass("active")){
			retrun;
		}
		//재생,정지버튼 클릭시 호버되어도 정지
		clearInterval(timer);
	}, function(){
		clearInterval(timer);
		timer = setInterval(auto_play, 3000);
//		$play.removeClass("active");
	}) //arrow.hover

	$indicator.hover(function(){
		clearInterval(timer);
	}, function(){
				if($play.hasClass("active")){
			retrun;
		}
		//재생,정지버튼 클릭시 호버되어도 정지
		clearInterval(timer);
		timer = setInterval(auto_play, 3000);
//		$play.removeClass("active");
	}) //indicator.hover

	$play.click(function(){
	$(this).toggleClass("active")
	if($play.hasClass("active")){
		//hasclass -해당요소에 클래스가 있는 지 확인
		clearInterval(timer);
	}else{
		clearInterval(timer);
		timer = setInterval(auto_play, 3000);
	}

	})//play.click


	// 화살표 클릭 이벤트

	// 왼쪽 클릭시 0 / 오른쪽 클릭시 1

	// 화살표 클릭시 ul 자체가 왼쪽 혹은 오른쪽으로 280px 만큼 이동

	// 그리고 전체 클릭 당시 left 값을 가져와서.. 해당 left 값이 왼쪽은 1600px 이상 오른쪽은 -400이하 시..해당 list item을  강제로 2240px 만큼 이동한다.





	var reset = false;

	$(".menu-frame .arrow img").click(function(){
		var i = $(this).index();
		if(reset == true) return;
			setTimeout(function(){reset = false;},1000)
			reset = true;
		if(i == 0){
			// 왼쪽 화살표


			$(".menu-frame ul.menu-list").stop().animate({
				left: "+=280px"
			}, 1000)

			for(var k=0; k < $(".menu-frame ul.menu-list li").length; k++){
				var list = $(".menu-frame ul.menu-list li").eq(k).offset().left;

				if(list >= 1600){
					list = $(".menu-frame ul.menu-list li").eq(k).css("left", "-=2240px");
				}


			}




		}else{
			// 오른쪽 화살표


			$(".menu-frame ul.menu-list").stop().animate({
				left: "-=280px"
			}, 1000)

			for(var k=0; k < $(".menu-frame ul.menu-list li").length; k++){
				var list = $(".menu-frame ul.menu-list li").eq(k).offset().left;

				if(list <= -400){
					list = $(".menu-frame ul.menu-list li").eq(k).css("left", "+=2240px");
				}


		}
		}
	}) //menu-frame click

		var $tab_content = $(".btn-content .tab-content"),
		$tab_list =$(".btn-content .tabs li")

	$tab_content.eq(0).show();
	var h = 0;
	$tab_list.click(function(){
		h = $(this).index();
		$tab_list.removeClass("active").eq(h).addClass("active")
		$tab_content.hide().eq(h).fadeIn(500)
	})//tab_list click



	var reset = false;

		$(".menu-wrap .menu-content .arrow img").click(function(){
		var i = $(this).index();
			if(reset == true) return;
			setTimeout(function(){reset = false;},1000)
			reset = true;
		if(i == 0){
			// 왼쪽 화살표


			$(".menu-wrap .menu-content .img-content .tab-content").eq(h).find("ul").stop().animate({
				left: "+=280px"
			}, 1000)

			for(var k=0; k < $(".menu-wrap .menu-content .img-content ul li").length; k++){
				var list = $(".menu-wrap .menu-content .img-content ul li").eq(k).offset().left;

				if(list >= 1600){
					list = $(".menu-wrap .menu-content .img-content ul li").eq(k).css("left", "-=2240px");
				}


			}




		}else{
			// 오른쪽 화살표


			$(".menu-wrap .menu-content .img-content .tab-content").eq(h).find("ul").stop().animate({
				left: "-=280px"
			}, 1000)
			//alert(h)
			for(var k=0; k < $(".menu-wrap .menu-content .img-content ul li").length; k++){
				var list = $(".menu-wrap .menu-content .img-content ul li").eq(k).offset().left;

				if(list <= -400){
					list = $(".menu-wrap .menu-content .img-content ul li").eq(k).css("left", "+=2240px");
				}


		}
		}
	}) //all~ allow click
	var vi = 1840;
	var scrollImg_t = $(".third-wrap .third-content .r-content .t-image"),
		scrollImg_b = $(".third-wrap .third-content .r-content .b-image"),
		scrollImg = $(".third-wrap .third-content .r-content .fain");
	$(window).scroll(function(){
		var num =$(window).scrollTop();
		if (num > vi){
			$(scrollImg_b).fadeIn(700);
			$(scrollImg_t).fadeIn(1000);
		}else{
			$(scrollImg).fadeOut();
		}
	})




	}) //end
