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
var defaultText = ['姓名', '電話(宅) 02-12345678', '行動電話 0987-654321', 'E-mail', '郵遞區號、地址', '學校', '系別', '年級', '預計畢業時間 年/月', '特殊經歷(校外活動、比賽、得獎經歷等(400字內))'];
//var sendTime = { start: new Date("2015/2/14 00:00:00"), end: new Date('2015/3/31 23:59:59') };
var timeoutMsg
var sendTime
$.ajax({
    type: "GET",
    url: "AjaxGetApplyTime.aspx",   //(檔案名稱/方法名稱)
    contentType: "application/text; charset=utf-8",
    dataType: "text",
    success: function (data) {
        var menu = eval("(" + data + ")");
        for (var countryObj in menu) {
            for (var i = 0; i < menu[countryObj].length; i++) {
               
                sendTime = { start: new Date(menu[countryObj][i]["startTime"]), end: new Date(menu[countryObj][i]["endTime"]) };
                timeoutMsg = "報名的時間在 " + sendTime.start.getFullYear().toString() + " / " + (sendTime.start.getMonth() + 1).toString() + " / " + sendTime.start.getDate() + " (" + sendTime.start.getHours() + ":" + sendTime.start.getMinutes() + ":" + sendTime.start.getSeconds() + ') 至 ' + sendTime.end.getFullYear().toString() + " / " + (sendTime.end.getMonth() + 1).toString() + " / " + sendTime.end.getDate() + " (" + sendTime.end.getHours() + ":" + sendTime.end.getMinutes() + ":" + sendTime.end.getSeconds() + ")";
                checkTime();
            }
        }
    },
    error: function (err) {
        alert("error");
    }
});

$(function () {
	
	addSelectOption();
	$('input[type=text], textarea').focus(evtFocus);
	$('input[type=text], textarea').focusout(evtfocusout);
});

function checkTime()
{
	var now = new Date();
	if(now > sendTime.start && now < sendTime.end)
	{
		//$('.timeButtomMsg').remove();
	}
	else
	{
		$('#enter').css('visibility','hidden');
		$('.timeButtomMsg').html(timeoutMsg);
	}
}

function addSelectOption()
{
	var nowYear = new Date().getFullYear();
	for(var i = nowYear; i > nowYear - 100; i--)
	{
		$('#year').append("<option value='" + i + "'>" + i + " 年</option>");
	}
	for(var i = 1; i <= 12; i++)
	{
		$('#month').append("<option value='" + i + "'>" + i + "月</option>");
	}
	for(var i = 1; i <= 31; i++)
	{
		$('#day').append("<option value='" + i + "'>" + i + " 日</option>");
	}
}

function evtFocus()
{
	var val = $(this).val(), index;
	if($(this)[0] == $('textarea')[0]) index = 9;
	else
	{
		for (var i = 0; i < $('input[type=text]').length; i++)
		{
			if($('input[type=text]')[i] == $(this)[0]) index = i
		}
	}
	if( val == "" || val == defaultText[index])
	{
		$(this).val("");
	}
}

function evtfocusout () 
{
	var index, val = $(this).val();
	if($(this)[0] == $('textarea')[0]) index = 9;
	else
	{
		for (var i = 0; i < $('input[type=text]').length; i++)
		{
			if($('input[type=text]')[i] == $(this)[0]) index = i
		}
	}
	if( val == "" || val == defaultText[index])
	{
		$(this).val(defaultText[index]);
	}
}