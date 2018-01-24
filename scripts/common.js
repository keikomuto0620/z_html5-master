(function($) {
  $(function() {


// smooth scroll
$('a[href^=#]').click(function(){
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top;
		$("html, body").animate({scrollTop:position}, 500, "swing");
		return false;
	});

//current display

if(location.pathname != "/") {
   $('#gNav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('current');
 } else $('#gNav a:eq(0)').addClass('current');

  });
}(jQuery));
