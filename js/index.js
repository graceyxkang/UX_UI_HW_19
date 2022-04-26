$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        if (target.length) {
  
          var scrollTo = target.offset().top;
          var bodyHeight = $('body').height();
          var windowHeight = $(window).height();
  
          if (bodyHeight - windowHeight < scrollTo) {
            scrollTo = bodyHeight - windowHeight;
          }
  
          $('html,body').animate({
            scrollTop: destination.offset().top
        }, 8000, "swing");
          return false;
        }
      }
    });
  });
  