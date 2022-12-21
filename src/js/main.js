$(document).ready(function(){

  //menu

$('#menu').click(function(){
  $('#navbar').slideToggle(450)
});

  $('.navbar-menu__item').click(function(){
    $('#navbar').slideToggle(450)
  });

  



    //tlačitko "Zavolejte mi"

    $('#button').mouseenter(function(){
    $(this).addClass('button-hover') & $(this).removeClass('header-buttons__button');
    })

    $('#button').mouseleave(function(){
        $(this).removeClass('button-hover') & $(this).addClass('header-buttons__button');
    })

    $('#button-phone').mouseenter(function(){
        $(this).addClass('button-hover') & $(this).removeClass('header-buttons__button') & $('#img').attr('src','./img/phone-hover.png');
        })
    
        $('#button-phone').mouseleave(function(){
            $(this).removeClass('button-hover') & $(this).addClass('header-buttons__button') & $('#img').attr('src','./img/phone.png');
        })
        
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
});   