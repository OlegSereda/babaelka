$(function() {

	

	$('.menu_show-mob').click(function() {
		$('.left_mob_menu').addClass('visible');
		$('body').addClass('no-scroll').append('<div class="bg_black"</div>');
	 });	

	 $('.left_mob_menu button.close').click(function(){	      
		$('.left_mob_menu').removeClass('visible');   
		$('.bg_black').detach();
		 $('body').removeClass('no-scroll');
	   }); 

	$(document).on('click', '.bg_black', function (e){ 
        $('.filter_mob_right').removeClass('visible'); 
        $('.left_mob_menu').removeClass('visible'); 
        $('body').removeClass("no-scroll");
        $(this).detach();
    });

	$('.js_slick_index').slick({
		dots: true,
		infinite: true,
		fade: true,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: false,
		variableWidth: false,
		nextArrow: $('.slider_wrap .next'),
		prevArrow: $('.slider_wrap .prev')
		
	});


});

$( document ).ready(function() {
	var $window = $(window);
	var $header = $('.header');
	var $header_height = $header.outerHeight(true );
	 
	$window.scroll(onScroll);
	 
	function onScroll() {
	  if ($window.scrollTop()) {
	    $header.addClass('is-fixed');
	    $header.siblings('.content').css('padding-top', $header_height);
	  } else {
	    $header.removeClass('is-fixed');
	    $header.siblings('.content').removeAttr('style');
	  }
	}
});