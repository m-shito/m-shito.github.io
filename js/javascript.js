$(function(){
$('a[href^="#"]').click(function(){
var speed = 500;
var href= $(this).attr("href");
var target = $(href == "#" || href == "" ? 'html' : href);
var position = target.offset().top;
$("html, body").animate({scrollTop:position}, speed, "swing");
return false;
});
});


//フェードインするためのスクリプト
$(function(){
  $(".inview_re").on("inview", function (event, isInView) {
    if (isInView) {
      $(this).stop().addClass("is-show");
    } else {
      $(this).stop().removeClass("is-show");
    }
  });
});

jQuery( function($) {
  $('.skillbar').skillBars({
    from: 0,	// バーの動くスタート位置
    speed: 4000,  // 動くスピード
    interval: 100, // 動き始めるまでの時間
  });
});

jQuery(function($){
  $(window).on('load scroll', function(){
    if ($(window).scrollTop() > 200) {
      $('#snsbottom').fadeOut(500);
    } else {
      $('#snsbottom').fadeIn(500);
    }
  });
});
