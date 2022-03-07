function showProducts(selectType,showId) {
	$('.products-bg .products').each(function() {
		if ($(this).attr("id") == showId) {
			$(this).show();
		} else {
		  	$(this).hide();
		}
	})

	$('.category-list .item').each(function() {
		$(this).removeClass("on");
	});
	$(selectType).addClass("on");
}