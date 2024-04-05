// Loading
$(function () {
    $("#loading-wrapper").fadeOut(1000);
});

// Toggle sidebar
$("#toggle-sidebar").on('click', function () {
    $(".page-wrapper").toggleClass("toggled");
});


// Toggle sidebar fullscreen
$("#toggle-sidebar-fullscreen").on('click', function () {
    $(".page-wrapper.fullscreen").toggleClass("toggled-fullscreen");
});


// Toggle sidebar togglescreen
$("#sidebar-togglescreen").on('click', function () {
    $(".page-wrapper.togglescreen").toggleClass("toggled-togglescreen");
});


// Sidebars JS
jQuery(function ($) {

    $(".sidebar-dropdown > a").on('click', function () {
        $(".sidebar-submenu").slideUp(200);
        if ($(this).parent().hasClass("active")) {
            $(".sidebar-dropdown").removeClass("active");
            $(this).parent().removeClass("active");
        } else {
            $(".sidebar-dropdown").removeClass("active");
            $(this).next(".sidebar-submenu").slideDown(200);
            $(this).parent().addClass("active");
        }
    });



    // Added by Srinu 
    $(function () {
        // When the window is resized, 
        $(window).resize(function () {
            // When the width and height meet your specific requirements or lower
            if ($(window).width() <= 768) {
                $(".page-wrapper").removeClass("pinned");
            }
        });
        // When the window is resized, 
        $(window).resize(function () {
            // When the width and height meet your specific requirements or lower
            if ($(window).width() >= 768) {
                $(".page-wrapper").removeClass("toggled");
            }
        });
    });

});
