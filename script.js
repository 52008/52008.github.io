$(document).ready(function() {
	// 定义一个函数，用于获取API数据并将其显示在页面上
	function getData() {
		$.ajax({
			url: "http://quan.suning.com/getSysTime.do",
			dataType: "json",
			success: function(data) {
				// 将API返回的数据显示在页面上
				$("#data").html(JSON.stringify(data));
			},
			error: function(jqXHR, textStatus, errorThrown) {
				// 显示错误信息
				$("#data").html("Error: " + textStatus + " - " + errorThrown);
			}
		});
	}

	// 每隔1秒钟调用一次getData函数
	setInterval(getData, 1000);
});
