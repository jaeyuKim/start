
/*상단 배너광고 닫기*/
$('#top_ad_wrap .ad_close').click(function(){
    $('#cgv_top_ad').css('display','none');
});

/*현재 상영중,상영 예정작 클릭하면 폰트 굵어지게*/
$('.btn_wrap > a:nth-of-type(1)').click(function(){
    $('.btn_wrap > a:nth-of-type(1)').css('font-weight','bold');
    $('.btn_wrap > a:nth-of-type(2)').css('font-weight','normal');
})

$('.btn_wrap > a:nth-of-type(2)').click(function(){
    $('.btn_wrap > a:nth-of-type(1)').css('font-weight','normal');
    $('.btn_wrap > a:nth-of-type(2)').css('font-weight','bold');
})

/*
메뉴 내려오고 올라가기 , 현재 상영중,예정작 클릭하면 바뀜
*/
$('.nav_menu li').mouseover(function(){
			$('main .nav_bg').stop().slideDown(300);
			$('main .nav_overmenu').stop().slideDown(300);
		});
		$('main .nav').mouseleave(function(){
			$('main .nav_bg').stop().slideUp(300);
			$('main .nav_overmenu').stop().slideUp(300);
		});
        
         $(function(){
            $('.tab_content > div').hide();
            $('.btn_wrap a').click(function(){
                $('.tab_content > div').hide().filter(this.hash).fadeIn();
                $('.btn_wrap a').removeClass('active');
                $(this).addClass('active');
                return false;
            }).filter(':eq(0)').click();
        });

/*특별관 마우스 올리면 사진 바뀌고 테두리 유지*/
var index = 0; // 위치변수값
$('.specialhall_list > li').mouseover(function(){
	index = $(this).index();
    $('.special_content .img_wrap img').attr('src','img/cgv/cinema(' + index + ').png');
    $('.specialhall_list > li').css({'border':'none', 'border-radius':'0px'});
    $('.specialhall_list > li').eq(index).css({'border':'1px solid #000000', 'border-radius':'15px'});
});

/*하단 스와이퍼 실행정지 버튼*/
$('.wrap-autoplay-control button #img1').click(function(){
    $('#img1').hide();
    $('#img2').show();
});

$('.wrap-autoplay-control button #img2').click(function(){
    $('#img2').hide();
    $('#img1').show();
});

/*예고편 재생정지 음향제어*/
$('.start').click(function(){
    $('.start').hide();
    $('.stop').show();
})

$('.stop').click(function(){
    $('.stop').hide();
    $('.start').show();
})

$('.movie_btn > #movie_start_btn').click(function(){
    $('#movie_start_btn').hide()
    $('#movie_stop_btn').show()
})

$('.movie_btn > #movie_stop_btn').click(function(){
    $('#movie_stop_btn').hide()
    $('#movie_start_btn').show()
})

$('.movie_sound_btn > #movie_sound_on').click(function(){
    $('#movie_sound_on').hide()
    $('#movie_sound_off').show()
})

$('.movie_sound_btn > #movie_sound_off').click(function(){
    $('#movie_sound_off').hide()
    $('#movie_sound_on').show()
})

$('#movie_sound_off').click(function(){
    $('.video_wrap > video').prop('muted',true);
});

$('#movie_sound_on').click(function(){
    $('.video_wrap > video').prop('muted',false);
});

$('video').get(0).load();
$('video').get(0).play();
$('video').get(0).pause();

$(function(){
	$(window).click(function(){
		var video = $(".video_wrap > video");
		var btn = $(".movie_btn > #movie_start_btn");
		var btn2 = $(".movie_btn > #movie_stop_btn");
        
		btn.click(function(){
			video.get(0).play();
		});
        btn2.click(function(){
			video.get(0).pause();
		});
	});
});

/*스크롤 내리면 위로가기,예매하기 버튼 생기고 사라지게*/
    $(window).scroll(function(){
        if($(this).scrollTop() > 115){
            $('.topBtn').css('display','block');
        } else if($(this).scrollTop() > 0){
            $('.topBtn').css('display','none');
        }
    });

		
/*스와이퍼 순서대로 나열*/
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
	    autoplay: {
        delay: 5000, // 자동으로 화면 전환 2초
        disableOnInteraction: false	// 손님이 넘길 때는 오토플레이 정지
            },
     
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
        
          var swiper = new Swiper(".mySwiper2", {
        slidesPerView: 5,
        spaceBetween: 20,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
	    autoplay: {
        delay: 5000, // 자동으로 화면 전환 2초
        disableOnInteraction: false	// 손님이 넘길 때는 오토플레이 정지
            },
     
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
        
         var swiperr = new Swiper(".mySwiper5", {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesPerGroup: 3,
	    autoplay: {
        delay: 5000, // 자동으로 화면 전환 2초
        disableOnInteraction: false	// 손님이 넘길 때는 오토플레이 정지
            },
      });
        $('.start').on('click',function(){
            swiperr.autoplay.start();
        });
        $('.stop').on('click',function(){
            swiperr.autoplay.stop();
        });
		
		
		  var swiper = new Swiper(".subSwiper", {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          clickable: true,
        },
		autoplay: {
        delay: 5000, // 자동으로 화면 전환 2초
        disableOnInteraction: false	// 손님이 넘길 때는 오토플레이 정지
            },
        on: {
        init: function () {
            thisSlide = this;
            autoPlayBtn = document.querySelector('.wrap-autoplay-control > button');
            autoPlayBtn.addEventListener('click', (e) => {
                autoPlayState = autoPlayBtn.getAttribute('aria-pressed');
                if (autoPlayState === 'false') {
                    autoPlayBtn.setAttribute('aria-pressed', 'true');
                    thisSlide.autoplay.stop();
                } else if (autoPlayState === 'true') {
                    autoPlayBtn.setAttribute('aria-pressed', 'false');
                    thisSlide.autoplay.start();
                };
            });
        },
    },
      });