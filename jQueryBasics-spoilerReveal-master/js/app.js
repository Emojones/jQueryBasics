$(".spoiler span").hide();
$(".spoiler").append("<button>Spoiler Alert!</button>");
$("button").click(function(){
  $(this).prev().show();
  $(this).remove();
});