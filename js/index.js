$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      $(".sorry").css({"opacity":"1"});
    }else if($(this).scrollTop() < 400){
      $(".sorry").css({"opacity":"0"});
    }
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 1400){
      $(".sorry2").css({"opacity":"1"});
    }else if($(this).scrollTop() < 1300){
      $(".sorry2").css({"opacity":"0"});
    }
  });

  $(window).scroll(function(){
    if($(this).scrollTop() > 2900){
      $(".sorry4").css({"opacity":"1"});
    }else if($(this).scrollTop() < 2600){
      $(".sorry4").css({"opacity":"0"});
    }
  });
});