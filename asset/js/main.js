jQuery(document).ready(function () {

    //if user open from mobile 
	if ($(window).width() < 769) {
        //to disabled tab content from mobile first page 
		$(".tab-content").addClass("Disabled");

        //if user click to any button display the content for button
		jQuery('.tabs .tab-links a').on('click', function (e) {
			var currentAttrValue = jQuery(this).attr('href');

			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');
            //add and remove class to style for second page
			$(".logo button").html("< Back");
			$(".logo").attr("id", "back");
			$(".width-L60-M80-S37").addClass("Disabled");
			$("#button-changed").addClass("Disabled");
			$(".tab-content").addClass("ulFull");
			$(".tab-content").removeClass("Disabled");
			$("#buttonSection").removeClass("width-L30-M30-S9");

			e.preventDefault();
		});

        //if user click on back button return all css style for first page
		$('.logo button').on('click', function () {
			$(".logo").removeAttr("id");
			$(".logo button").html("LOGO");
			$(".width-L60-M80-S37").removeClass("Disabled");
			$("#button-changed").removeClass("Disabled");
			$(".tab-content").removeClass("ulFull");
			$("#buttonSection").addClass("width-L30-M30-S9");
			$(".tab-content").addClass("Disabled");
		});

	} else {
        //if user open from medium or large screen 
		jQuery('.tabs .tab-links a').on('click', function (e) {
			var currentAttrValue = jQuery(this).attr('href');

			// Show/Hide Tabs
			jQuery('.tabs ' + currentAttrValue).show().siblings().hide();

			// Change/remove current tab to active
			jQuery(this).parent('li').addClass('active').siblings().removeClass('active');

			e.preventDefault();
		});

	}

});