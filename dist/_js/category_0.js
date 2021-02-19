/**
 * ...
 * @author Ogilvy Mather Digital - 衝康吉
 * Wellcome to read this source code.
 * I might try to use code name follow next row
 * 
 * init/get/set/is/clear/evt/with/sync
 * release/add/remove/addEventListener/on
 * ...
 */

var section1_slider_index = 0;
$(function() 
{
	checkSliderPoint();
	addSectionEvent_1();
});

function addSectionEvent_1()
{
	for(var i = 0 ; i < 7 ; i++)
	{
		$('#sliderButton'+i).click(evtSliderContents);
	}
}

function evtSliderContents()
{
	var index = parseInt($(this).attr('id').slice(12));
	section1_slider_index = index;
	sliderTo();
	checkSliderPoint();
}

function sliderTo()
{
	$('#article_slider_container').animate({left: 0 - section1_slider_index * 954 + 'px'},500,'swing');
}

function checkSliderPoint()
{
	for(var i = 0; i < 7; i++)
	{
		if(i == section1_slider_index) $('#sliderButton'+i).css('background-position-x', '-10px');
		else $('#sliderButton'+i).css('background-position-x', '0px');
	}
}