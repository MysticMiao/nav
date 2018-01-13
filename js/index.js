$(function() {
	//导航封装函数
	function nav(id) {
		//导航左右滑动
		var mySwiper_nav = new Swiper('#' + id + '', {
			slidesPerView: 'auto',
			spaceBetween: 0,
			freeMode: true
		});
		//导航点击当前居中
		var windowWidth = $(window).width(); //屏幕的宽度
		var liWidth = 0; //每个li宽度
		var resPlaceX = 0; //最终的位置X
		var moveDistance = 0; //移动的距离
		var active = document.getElementById('active');
		var offsetLeft = active.offsetLeft;
		var disX = offsetLeft + 12;
		liWidth = $(active).width();
		resPlaceX = (windowWidth - liWidth) / 2;
		moveDistance = disX - resPlaceX;
		var prevNum = 0;
		var nextNum = 0;
		for(var i = 0; i < $(active).prevAll().length; i++) {
			prevNum += $(active).prevAll().eq(i).outerWidth(true);
		}
		for(var i = 0; i < $(active).nextAll().length; i++) {
			nextNum += $(active).nextAll().eq(i).outerWidth(true);
		}
		var prevNums = prevNum + $(active).outerWidth(true);
		var nextNums = nextNum + $(active).outerWidth(true);
		var prevNumHalf = prevNum + $(active).outerWidth(true) / 2;
		var nextNumHalf = nextNum + $(active).outerWidth(true) / 2;
		if((prevNumHalf + nextNumHalf) <= windowWidth) {
			$('#' + id + ' .swiper-wrapper').css({
				'transform': 'translate3d(0, 0, 0)',
				'transition-duration': '100ms'
			});
			return;
		}
		if(prevNumHalf <= windowWidth / 2) {
			$('#' + id + ' .swiper-wrapper').css({
				'transform': 'translate3d(0, 0, 0)',
				'transition-duration': '100ms'
			});
			return;
		}
		if(nextNumHalf <= windowWidth / 2) {
			if(nextNum == 0) {
				$('#' + id + ' .swiper-wrapper').css({
					'transform': 'translate3d(' + (resPlaceX - moveDistance - 12) + 'px, 0, 0)',
					'transition-duration': '100ms'
				});
			} else {
				$('#' + id + ' .swiper-wrapper').css({
					'transform': 'translate3d(' + (resPlaceX - moveDistance - nextNum - 22) + 'px, 0, 0)',
					'transition-duration': '100ms'
				});
			}
			return;
		}
		if((prevNums <= windowWidth / 2)) {
			if(nextNums < windowWidth) {
				return;
			} else {
				$('#' + id + ' .swiper-wrapper').css({
					'transform': 'translate3d(0, 0, 0)',
					'transition-duration': '100ms'
				});
				return;
			}
		}
		if(nextNums <= windowWidth / 2) {
			if(prevNums < windowWidth) {
				return;
			} else {
				if(nextNum == 0) {
					$('#' + id + ' .swiper-wrapper').css({
						'transform': 'translate3d(' + (resPlaceX - moveDistance - 12) + 'px, 0, 0)',
						'transition-duration': '100ms'
					});
				} else {
					$('#' + id + ' .swiper-wrapper').css({
						'transform': 'translate3d(' + (resPlaceX - moveDistance - nextNum - 22) + 'px, 0, 0)',
						'transition-duration': '100ms'
					});
				}
				return;
			}
		}
		$('#' + id + ' .swiper-wrapper').css({
			'transform': 'translate3d(' + (-moveDistance) + 'px, 0, 0)',
			'transition-duration': '100ms'
		});
	}
	nav('swiper_nav');
	$("#swiper_nav > ul > li").click(function() {
		$(this).addClass('active');
		$(this).siblings('li').removeClass('active');
		$(this).attr('id', 'active');
		$(this).siblings('li').removeAttr('id');
		nav('swiper_nav');
	});
});