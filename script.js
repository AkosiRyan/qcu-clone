/*toggle menu*/

// var navlinks=document.getElementById("navlinks");

// function showmenu(){
//     navlinks.style.right = "0";
// }
// function hidemenu(){
//     navlinks.style.right = "-400px";
// }

// owl carousel for culture and arts page 
$(document).ready(function (){
    $(".ca").owlCarousel({
        items:2,
        margin:10,
        padding:10,
        loop:true,
        nav:true,
        dotsEach:true,
        autoplay:true,
        autoplaySpeed:2000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        mergeFit:true,
        merge:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            700:{
                items:1,
                nav:true
            },
            1000:{
                items:2,
                nav:true
            }
        }
    });
});

// owl carousel for main page
$(document).ready(function (){
    $(".owl-carousel").owlCarousel({
        items:3,
        margin:10,
        padding:10,
        loop:true,
        nav:true,
        dotsEach:true,
        autoplay:true,
        autoplaySpeed:2000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        mergeFit:true,
        merge:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            700:{
                items:2,
                nav:true
            },
            1000:{
                items:3,
                nav:true
            }
        }
    });
});

// jquery for toggle dropdown menus
$(document).ready(function(){
    // toggle sub-menus
    $(".sub-btn").click(function(){
        $(this).next(".sub-menu").slideToggle();
    });

    // toggle more-menus
    $(".more-btn").click(function(){
        $(this).next(".more-menu").slideToggle();
    });
});

// javascript for the responsive navigation menu
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () =>{
    menu.classList.add("active");
});

closeBtn.addEventListener("click", () =>{
    menu.classList.remove("active");
});

// javascript for the navigation bar effects on scroll
window.addEventListener("scroll", function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }
        else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
});

// slide up script
$('.scroll-up-btn').click(function(){
    $('html').animate({scrollTop:0});
});