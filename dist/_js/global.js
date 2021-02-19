var documentTitle = '奧美林宗緯紅領帶計劃';
var newsText = '第十三屆奧美林宗緯紅領帶實習計畫開始報名';
var header_links = [
	{ name: "<img src='_img/global/home_icon.png'>回首頁", url: '#home' },
	/*{name:"聯絡我們", url:"http://www.ogilvy.com.tw/terence/popup2.asp"}, */
	{ name: '奧美大中國', url: 'http://www.ogilvy.com.tw/' },
	{ name: '台灣奧美粉絲團', url: 'https://www.facebook.com/pages/%E5%8F%B0%E5%8C%97%E5%A5%A7%E7%BE%8E%E5%BB%A3%E5%91%8A/194266073179' },
];
var menu_links = [
	[
		{ name: '認識林宗緯', url: 'index.html#', top: 738, state: 'pointer' },
		{ name: '我眼中的林宗緯', url: 'index.html#', top: 1542, state: 'pointer' },
		{ name: '林宗緯的七種特質', url: 'index.html#', top: 2069, state: 'pointer' },
		{ name: '林宗緯語錄', url: 'index.html#', top: 3429, state: 'pointer' },
	],

	[
		{ name: '計劃宗旨', url: 'introduction.html#', top: 738, state: 'pointer' },
		{ name: '獎助計劃', url: 'introduction.html#', top: 1062, state: 'pointer' },
	],

	[
		{ name: '獎助資格', url: 'how.html#', top: 738, state: 'pointer' },
		{ name: '審核流程', url: 'how.html#', top: 1062, state: 'pointer' },
		{ name: '建議與指導', url: 'how.html#', top: 2723, state: 'pointer' },
		/*{name:"申請表格下載", url:"_file/project_team_terence_application_form_v2014.doc", top:"_blank", state:"pointer"}*/
	],

	[
		{ name: '實習心得', url: 'experience.html#', top: 738, state: 'pointer' },
		{ name: '實習相片', url: 'experience.html#', top: 738, state: 'pointer' },
		{ name: '給學弟妹的一封信', url: 'experience.html#', top: 738, state: 'pointer' },
	],

	[{ name: '下載捐助單', url: '_file/donor.doc', top: '_blank', state: 'pointer' }],
];

var themePath, themeSymbolPath;
var isHideNav = false;
$(function () {
	document.title = documentTitle;
	$('#news_headline').html(newsText);
	/*$('body').unSelection();*/
	addLinks();
	addPaths();
	addEvents();
	evtCheckURLWithScrollTo(true);
});

$(window).scroll(evtMenuScrollHover);
$(window).resize(function (e) {
	themeSymbolPath.clearPath();
	themeSymbolPath.addPath(0, 640, 'C+185,T+280', 'C+185,T+200');
	themeSymbolPath.addPath(640, '∞', 'C+185,T+200');
	themeSymbolPath.setx('C', 210);
});

function addEvents() {
	$('.menu_categorys div').each(function (index) {
		$(this).mouseover(evtCategoryHover);
	});
	$('#menu').mouseout(evtCategoryOut);

	$(window).on('hashchange', function () {
		evtCheckURLWithScrollTo(false);
	});

	$('#alert').click(function () {
		$(this).css('visibility', 'hidden');
	});

	$('#news_headline').click(function () {
		$('#alert').css('visibility', 'visible');
	});
}

function addPaths() {
	themePath = new scrollPath($('#theme'));
	themePath.addPath(0, 640, 'C,T', 'C,T-575');
	themePath.addPath(640, '∞', 'C,T-575');
	themeSymbolPath = new scrollPath($('#theme_symbol'));
	themeSymbolPath.addPath(0, 640, 'C+185,T+280', 'C+185,T+200');
	themeSymbolPath.addPath(640, '∞', 'C+185,T+200');
}

function addLinks() {
	for (var i = 0; i < header_links.length; i++) {
		if (header_links[i].url != '#home') $('#header_link').append("<a href='" + header_links[i].url + "' target='_blank' >" + header_links[i].name + '</a>　');
		else $('#header_link').append("<a href='#home' onclick=scrollToTop() >" + header_links[i].name + '</a>　');
	}
	var blank, tag;
	for (i = 0; i < menu_links.length; i++) {
		for (var j = 0; j < menu_links[i].length; j++) {
			blank = '';
			tag = menu_links[i][j].name;
			if (menu_links[i][j].top == '_blank') {
				blank = "target='_blank'";
				tag = '';
			}
			var title = '';
			if (menu_links[i][j].state == 'no-drop') {
				title = '本單元準備中';
				$('#menu_category_href_' + i).append("<span title='" + title + "' style='cursor:" + menu_links[i][j].state + "'>" + menu_links[i][j].name + '</span><br>');
			} else $('#menu_category_href_' + i).append("<a href='" + menu_links[i][j].url + tag + "' " + blank + " style='cursor:" + menu_links[i][j].state + "'>" + menu_links[i][j].name + '</a><br>');
		}
	}
}

function scrollToTop() {
	time = Math.abs((scrollTop.get() - 0) * 0.0005) < 0.5 ? 0.5 : Math.abs((scrollTop.get() - 0) * 0.0005);
	scrollTop.moveTo(0, time);
}

function evtCheckURLWithScrollTo(isPageUnload) {
	var tag = window.location.toString().split('#');
	var i, j, time;
	if (tag.length == 1) window.location = 'index.html#';
	if (tag[1] != '' && tag.length > 1) {
		for (i = 0; i < menu_links.length; i++) {
			for (j = 0; j < menu_links[i].length; j++) {
				if (menu_links[i][j].name == tag[1]) {
					time = Math.abs((scrollTop.get() - menu_links[i][j].top) * 0.0005) < 0.5 ? 0.5 : Math.abs((scrollTop.get() - menu_links[i][j].top) * 0.0005);
					if (isPageUnload) {
						scrollTop.moveTo(menu_links[i][j].top, 0);
						setTimeout(evtHideNav, 100, false);
					} else scrollTop.moveTo(menu_links[i][j].top, time);
				}
			}
		}
	}
	if (tag[1] == 'home') scrollToTop();
	if (tag[1] == '' || tag[1] == 'home') {
		$('#alert').css('visibility', 'visible');
	}
}

function evtMenuScrollHover() {
	if (scrollTop.get() >= 640) {
		isHideNav = true;
		evtHideNav(false);
	} else {
		evtHideNav(true);
		isHideNav = false;
	}
}

function evtCategoryOut() {
	for (var i = 0; i < 5; i++) {
		$('#menu_category_icon_' + i).css('background-position-y', '0px');
	}
	evtHideNav(false);
}

function evtCategoryHover() {
	var index;
	if ($(this).is($('a'))) index = $(this).parent().attr('id').slice(19);
	else index = $(this).attr('id').slice(19);
	for (var i = 0; i < 5; i++) {
		if (i == parseInt(index)) $('#menu_category_icon_' + i).css('background-position-y', '-44px');
		else $('#menu_category_icon_' + i).css('background-position-y', '0px');
	}
	evtHideNav(true);
}

function evtHideNav(isHover) {
	if (!isHideNav) return;
	var duration = 300;
	$('#theme').clearQueue();
	if (isHover) $('#theme').animate({ height: 866 + 'px' }, duration, 'swing');
	else $('#theme').animate({ height: 754 + 'px' }, duration, 'swing');
}
