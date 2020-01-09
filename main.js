//Header
$(document).ready(function(){
    $('.header').height($(window).height());
  })

(function ($, window, document, undefined) {

    $(function () {
      $("#header").load("header.html");
      $("#footer").load("footer.html");
    });
  
  })(jQuery, window, document);