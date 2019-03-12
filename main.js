AOS.init({//animacija na skrolanje
	duration: 1200,
});
$(document).ready(function(){
  $(this).scrollTop(0);
  $("#reset").click();
});
  $('.home').length && ($('.inner-home-header .downarrow').unbind('click'), $('.inner-home-header .downarrow').on('click', function () {
    return $('html, body').animate({//animacija na dugme prema dole
      scrollTop: $('.bgimg-1').offset().top
    }, 1000),
    !1
  }));
$('.footer .ball').unbind('click');
$('.footer .ball').on('click', function () {
    return $('html, body').animate({//animacija na dugme prema gore
      scrollTop: 0
    }, 'slow'),
    !1
  });
  $(window).scroll(function(){
    var top=$('.bgimg-1').offset().top;
    if($(window).scrollTop()!=0){
      if($(window).scrollTop()>=top){
        $('.utility').fadeOut("fast");
        return $('header').addClass('hide').removeClass('transparent').removeClass('header-shadow');
      }
      $('header').removeClass('transparent').removeClass('hide').addClass('header-shadow');
      $('.utility').fadeIn("fast");
    }
    else{
      $('header').addClass('transparent').removeClass('header-shadow').removeClass('hide');
      $('.utility').fadeIn("fast");
    }
});
function pageLoader(){
  $(function(){
    $("#divfather").fadeOut("slow");
  });
}
setTimeout(pageLoader,4000);