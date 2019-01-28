//Initiat WOW JS
	var wow = new WOW(
  {
    boxClass:     'wow',      // 要套用WOW.js縮需要的動畫class(預設是wow)
    animateClass: 'animated', // 要"動起來"的動畫(預設是animated, 因此如果你有其他動畫library要使用也可以在這裡調整)
    offset:       0,          // 距離顯示多遠開始顯示動畫 (預設是0, 因此捲動到顯示時才出現動畫)
    mobile:       false,       // 手機上是否要套用動畫 (預設是true)
    live:         true,       // 非同步產生的內容是否也要套用 (預設是true, 非常適合搭配SPA)
    callback:     function(box) {
      // 當每個要開始時, 呼叫這裡面的內容, 參數是要開始進行動畫特效的element DOM
    },
    scrollContainer: null // 可以設定成只套用在某個container中捲動才呈現, 不設定就是整個視窗
  }
);
    
wow.init();	

$(document).ready(function() {
	

	
	$('.wpb-mobile-menu').slicknav({
		prependTo: '.navbar-header',
		parentTag: 'liner',
		allowParentLinks: true,
		duplicate: true,
		label: '',
		closedSymbol: '<i class="fa fa-angle-right"></i>',
		openedSymbol: '<i class="fa fa-angle-down"></i>',
	});
				
});

$(window).on('scroll', function() {
	if ($(window).scrollTop() > 100) {
		$('.scrolling-navbar').addClass('top-nav-collapse');
	} else {
		$('.scrolling-navbar').removeClass('top-nav-collapse');
	}
});
$('#clients-scroller').owlCarousel({
	items: 4,
	itemsTablet: 3,
	margin: 90,
	stagePadding: 90,
	smartSpeed: 450,
	itemsDesktop: [1199, 4],
	itemsDesktopSmall: [980, 3],
	itemsTablet: [768, 3],
	itemsTablet: [767, 2],
	itemsTabletSmall: [480, 2],
	itemsMobile: [479, 1],
});
$('#color-client-scroller').owlCarousel({
	items: 4,
	itemsTablet: 3,
	margin: 90,
	stagePadding: 90,
	smartSpeed: 450,
	itemsDesktop: [1199, 4],
	itemsDesktopSmall: [980, 3],
	itemsTablet: [768, 3],
	itemsTablet: [767, 2],
	itemsTabletSmall: [480, 2],
	itemsMobile: [479, 1],
});
$('#testimonial-item').owlCarousel({
	autoPlay: 5000,
	items: 3,
	itemsTablet: 3,
	margin: 90,
	stagePadding: 90,
	smartSpeed: 450,
	itemsDesktop: [1199, 4],
	itemsDesktopSmall: [980, 3],
	itemsTablet: [768, 3],
	itemsTablet: [767, 2],
	itemsTabletSmall: [480, 2],
	itemsMobile: [479, 1],
});
$('#testimonial-dark').owlCarousel({
	autoPlay: 5000,
	items: 3,
	itemsTablet: 3,
	margin: 90,
	stagePadding: 90,
	smartSpeed: 450,
	itemsDesktop: [1199, 4],
	itemsDesktopSmall: [980, 3],
	itemsTablet: [768, 3],
	itemsTablet: [767, 2],
	itemsTabletSmall: [480, 2],
	itemsMobile: [479, 1],
});
$('#single-testimonial-item').owlCarousel({
	singleItem: true,
	autoPlay: 5000,
	items: 1,
	itemsTablet: 1,
	margin: 90,
	stagePadding: 90,
	smartSpeed: 450,
	itemsDesktop: [1199, 4],
	itemsDesktopSmall: [980, 3],
	itemsTablet: [768, 3],
	itemsTablet: [767, 2],
	itemsTabletSmall: [480, 2],
	itemsMobile: [479, 1],
	stopOnHover: true,
});
$("#image-carousel").owlCarousel({
	autoPlay: 3000,
	items: 4,
	itemsDesktop: [1170, 3],
	itemsDesktopSmall: [1170, 3]
});
$("#carousel-image-slider").owlCarousel({
	navigation: false,
	slideSpeed: 300,
	paginationSpeed: 400,
	singleItem: true,
	pagination: false,
	autoPlay: 3000,
});
$(document).ready(function() {
	$('#carousel-about-us').owlCarousel({
		navigation: true,
		navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
		slideSpeed: 800,
		paginationSpeed: 400,
		autoPlay: true,
		singleItem: true,
		pagination: false,
		items: 1,
		itemsCustom: false,
		itemsDesktop: [1199, 4],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
	});
});

$('testimonial-carousel').carousel();
$('a[data-slide="prev"]').click(function() {
	$('#testimonial-carousel').carousel('prev');
});
$('a[data-slide="next"]').click(function() {
	$('#testimonial-carousel').carousel('next');
});
jQuery(document).ready(function($) {
	$('.counter').counterUp({
		delay: 1,
		time: 800
	});
});
$('.skill-shortcode').appear(function() {
	$('.progress').each(function() {
		$('.progress-bar').css('width', function() {
			return ($(this).attr('data-percentage') + '%')
		});
	});
}, {
	accY: -100
});
var offset = 200;
var duration = 500;
$(window).scroll(function() {
	if ($(this).scrollTop() > offset) {
		$('.back-to-top').fadeIn(400);
	} else {
		$('.back-to-top').fadeOut(400);
	}
});
$('.back-to-top').click(function(event) {
	event.preventDefault();
	$('html, body').animate({
		scrollTop: 0
	}, 600);
	return false;
})



