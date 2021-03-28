$(function() {
	$("input[type=text]").each(function() {
		var storedValue = $(this).attr("value");
		$(this).data("value", {
			datavalue: storedValue
		});
		$(this).focus(function() {
			if ($(this).val() == storedValue) {
				$(this).val('');
			}
		});
		$(this).blur(function() {
			var restoredValue = $(this).data("value").datavalue;
			if ($(this).val() == '') {
				$(this).val(restoredValue);
			}
		});
	});
	
	$("input[type=email]").each(function() {
		var storedValue = $(this).attr("value");
		$(this).data("value", {
			datavalue: storedValue
		});
		$(this).focus(function() {
			if ($(this).val() == storedValue) {
				$(this).val('');
			}
		});
		$(this).blur(function() {
			var restoredValue = $(this).data("value").datavalue;
			if ($(this).val() == '') {
				$(this).val(restoredValue);
			}
		});
	});
	
	$("textarea").each(function() {
		var storedValue = $(this).attr("value");
		$(this).data("value", {
			datavalue: storedValue
		});
		$(this).focus(function() {
			if ($(this).val() == storedValue) {
				$(this).val('');
			}
		});
		$(this).blur(function() {
			var restoredValue = $(this).data("value").datavalue;
			if ($(this).val() == '') {
				$(this).val(restoredValue);
			}
		});
	});
	
	$('input[title]').each(function() {
		if ($(this).val() === '') {
			$(this).val($(this).attr('title'));
		}
	
		$(this).focus(function() {
			if ($(this).val() === $(this).attr('title')) {
				$(this).val('');
			}
		});
	
		$(this).blur(function() {
			if ($(this).val() === '') {
				$(this).val($(this).attr('title'));
			}
		});
	});
});