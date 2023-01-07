$(document).ready(function(){

  //menu

  $('#menu').click(function(){
    $('#navbar').slideToggle(450)
  });

  $('.navbar-menu__item').click(function(){
    $('#navbar').slideToggle(450)
  });

  //Scrollování mezi názvy pomocí menu

  $(".Hlavní").click(function(){
    
    // Začne scrollovat od body nahoře až do sekce Hlavní na horní hranu po dobu 1s

    $("html, body").animate({scrollTop: $("#Hlavní").offset().top},1000);
  });

  $(".Výhody").click(function(){
    $("html, body").animate({scrollTop: $("#Výhody").offset().top},1000);
  });

  $(".Vprodeji").click(function(){
    $("html, body").animate({scrollTop: $("#Vprodeji").offset().top},1000);
  });

  $(".Recenze").click(function(){
    $("html, body").animate({scrollTop: $("#Recenze").offset().top},1000);
  });



    //tlačitko "Zavolejte mi"

    $('#button').mouseenter(function(){
      $(this).addClass('button-hover') & $(this).removeClass('header-buttons__button');
    });

    $('#button').mouseleave(function(){
      $(this).removeClass('button-hover') & $(this).addClass('header-buttons__button');
    });

    $('#button-phone').mouseenter(function(){
      $(this).addClass('button-hover') & $(this).removeClass('header-buttons__button') & $('#img').attr('src','./img/phone-hover.png');
    });
    
    $('#button-phone').mouseleave(function(){
      $(this).removeClass('button-hover') & $(this).addClass('header-buttons__button') & $('#img').attr('src','./img/phone.png');
    });
        
   $('.offer-slider').slick({
        slidesToShow: 2,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'),
        responsive: [
            {
              breakpoint: 1700,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
    $('#opinion-slider').slick({
      slidesToShow: 1,
      prevArrow: $('.opinion-arrows__left'),
      nextArrow: $('.opinion-arrows__right')
    });
});   