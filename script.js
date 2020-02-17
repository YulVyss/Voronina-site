"use strict"
$(function(){
	var div = $('.header__icon, .block-header__menu_mobile');
	var button = $('.header__button');
	var menu = $('.block-header__menu_mobile');

	div.click(function(){
		button.toggleClass('open');
		menu.slideToggle(600);
	});
	if(window.innerWidth > 1440) {
		$('.element_bottom, .element').addClass('active');
	}
});