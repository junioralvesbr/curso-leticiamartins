
        //scrolling effect

        $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                $('nav').addClass('black');
            }
            else {
                $('nav').removeClass('black');
            }
        })
        
        $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                $('.nav-color').addClass('black');
            }
            else {
                $('.nav-color').removeClass('black');
            }
        })