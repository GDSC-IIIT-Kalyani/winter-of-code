var __sf = $(".sponsorsFooter ul span");
var __sf_cont = $(".sponsorsFooter ul");
var __title = $("#sponsorTitle");

__sf.mouseenter(function() {
  $(this).addClass('hover');
  __sf_cont.addClass('enter');
  var __setTitle = $(this).attr("data-group-title");
  __title.html(__setTitle);
}).mouseleave(function() {
  $(this).removeClass('hover');
  __sf_cont.removeClass('enter');
  var __setTitle = $(__title).attr("data-default-title");
  __title.html(__setTitle);
});