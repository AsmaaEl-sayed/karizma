/* global $ , document , window*/

$(document).ready(function(){
  // preloader
  $(window).on("load" , function(){
    $(".preloader").fadeOut(2000);
});
     // colorbox 
     $('.colorbox h1 i').on("click" , function(){
        $(".colorbox").toggleClass('toggleColor');
    })

    var icon = "<i class='fa fa-check'></i>";
    $('.colorbox .colors div').click(function(){
        var color = $(this).attr('id');
        $(".colorbox .colors div").html("");
        $(this).append(icon);
        $("link[data-test=colors]").attr('href','css/data-'+color+'.css');
       
    })
    //baricon
    $('#barIcon').click(function(){
        $('.right-side').toggleClass('toggleSide');

        if($("#barIcon").attr('class') == "fa fa-bars") {
            $(this).attr('class','fa fa-close')
        } else{
            $(this).attr('class','fa fa-bars')
        }
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
            },
            1000:{
                items:2
            }
        }
    });
    $("body").niceScroll({
        cursorcolor:"#47A3DA",
        cursorwidth:"6px"
    });

        

});


