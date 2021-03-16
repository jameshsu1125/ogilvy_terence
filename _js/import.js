/**
 * ...
 * @author Ogilvy Mather Digital - 衝康吉
 * Wellcome to read this source code.
 * I might try to use name follow next row
 *
 * init/get/set/is/clear/evt/with/sync
 * resizeTo/releasePoor/passTo
 */

$.fn.unSelection = function() {$(this).mousedown(function() {return false; }); return this.each(function() {this.onselectstart = function() {return false; }; this.unselectable = "on"; $(this).css('user-select', 'none'); $(this).css('-o-user-select', 'none'); $(this).css('-moz-user-select', 'none'); $(this).css('-khtml-user-select', 'none'); $(this).css('-webkit-user-select', 'none'); }); };

var scrollPath = function(div) 
{
	this.div = div; this.path = []; var _this = this;
	$(window).ready(function(e) {_this.evtScroll(e); });
	$(window).scroll(function(e) {_this.evtScroll(e); });
	this.evtScroll = function(e) {for (var i = 0; i < this.path.length; i++) {if (this.getScrollTop() >= this.path[i][0] && this.getScrollTop() <= this.path[i][1]) {opx = this.path[i][2] + (this.path[i][4] - this.path[i][2]) * this.getPercent(this.path[i][0], this.path[i][1]); opy = this.path[i][3] + (this.path[i][5] - this.path[i][3]) * this.getPercent(this.path[i][0], this.path[i][1]); var proporty = {'top': opy, 'left': opx }; this.div.css(proporty); } } };
	this.addPath = function(min, max, pStart, pEnd) {var startString = pStart.split(","); var endString = pEnd == undefined ? startString : pEnd.split(","); if (startString.length != 2 || endString.length != 2) {alert("error"); return; } if (typeof(max) == "string") max = 999999999; this.path.push([min, max, this.getx(this.div.width(), this.count(startString[0])[0], this.count(startString[0])[1]), this.gety(this.div.height(), this.count(startString[1])[0], this.count(startString[1])[1]), this.getx(this.div.width(), this.count(endString[0])[0], this.count(endString[0])[1]), this.gety(this.div.height(), this.count(endString[1])[0], this.count(endString[1])[1])]); };
	this.clearPath = function(){this.path = []; };
	this.count = function(Str) {var arr = []; var isPlus = Str.toLowerCase().indexOf('+'); var isMinus = Str.toLowerCase().indexOf('-'); if (isPlus > 0 && isMinus > 0) return false; if (isPlus > 0) {arr = Str.split("+"); arr[1] = Number(arr[1]); } else if (isMinus > 0) {arr = Str.split("-"); arr[1] = 0 - Number(arr[1]); } else {arr[0] = Str; arr[1] = 0; } return arr; };
	this.getPercent = function(MIN, MAX) {var now = this.getScrollTop(); if (now < MIN || now > MAX) return false; var all = MAX - MIN; return (now - MIN) / all; };
	this.getScrollTop = function() {var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor); var e = (isChrome || isSafari) ? $(window) : $('html'); return e.scrollTop(); };
	this.getx = function(w, derection, gap) {var x; var e = $(window); switch (derection.toUpperCase()) {case "L": x = gap; break; case "LL": x = 0 - gap - w; break; case "R": x = e.width() - w - gap; break; case "RR": x = e.width() + gap; break; default: x = (e.width() - w) * .5 + gap; }; return x; };
	this.gety = function(h, derection, gap) {var y; var e = $(window); switch (derection.toUpperCase()) {case "T": y = gap; break; case "TT": y = 0 - gap - h; break; case "B": y = e.height() - h - gap; break; case "BB": y = e.height() + gap; break; default: y = (e.height() - h) * .5 + gap; }; return y; };
	this.setx = function(derection,gap) {this.div.css('left',this.getx(div.width(),derection,gap)); };
	this.sety = function(derection,gap) {this.div.css('top',this.gety(div.height(),derection,gap)); };
}

var scrollTop = {
	get: function() {var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor); var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor); var e = (isChrome || isSafari) ? $(window) : $('html'); return e.scrollTop(); }, 
	moveTo: function(scrolltop, time) {$('body, html').animate({scrollTop: scrolltop }, time * 1000, 'swing'); }
}
 
var fit = function(div, imgW, imgH) {this.container = div; this.imgW = imgW; this.imgH = imgH; this.img = this.container.children('img'); this.img.css({'position': 'absolute', 'top': '0px', 'left': '0px'});
	this.setSize = function() {if (this.ratio()) this.img.css({'width': this.container.width(), 'height': (this.imgH * this.container.width() / this.imgW) + 'px', 'top': 0 - ((this.imgH * this.container.width() / this.imgW) - this.container.height()) * .5 + 'px', 'left': '0px'}); else this.img.css({'height': this.container.height(), 'width': (this.imgW * this.container.height() / this.imgH) + 'px', 'top': '0px', 'left': 0 - ((this.imgW * this.container.height() / this.imgH) - this.container.width()) * .5 + 'px'}); };
	this.ratio = function() {var winRatio = this.container.width() / this.container.height(); var picRatio = this.imgW / this.imgH; return winRatio > picRatio; };
}

var align = 
{
	getx:function(w,derection,gap) {var x; var e = $(window); switch(derection.toUpperCase()) {case "L": x = gap; break; case "LL": x = 0 - gap - w; break; case "R": x = e.width() - w - gap; break; case "RR": x = e.width() + gap; break; default: x = (e.width() - w) * .5 + gap; }; return x; },
	gety:function(h,derection,gap) {var y; var e = $(window); switch(derection.toUpperCase()) {case "T": y = gap; break; case "TT": y = 0 - gap - h; break; case "B": y = e.height() - h - gap; break; case "BB": y = e.height() + gap; break; default: y = (e.height() - h) * .5 + gap; }; return y; },
	setx:function(div,derection,gap) {div.css('left',this.getx(div.width(),derection,gap)); },
	sety:function(div,derection,gap) {div.css('top',this.gety(div.height(),derection,gap)); }
};

function HTMLDecode(str) {if (str.length == 0) return ""; return str.replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">").replace(/ /g, " ").replace(/'/g, "\'").replace(/"/g, "\"").replace(/&/g, "&"); }
function htmlDecodeByRegExp(str) {if (str.length == 0) return ""; return str.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&nbsp;/g, " ").replace(/&#39;/g, "\'").replace(/&quot;/g, "\""); }