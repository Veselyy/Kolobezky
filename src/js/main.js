$(document).ready(function(){
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

});