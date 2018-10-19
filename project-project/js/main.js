 // Анимация

    $(window).scroll(function() {
        $('.blockN2, .blockN3, .blockN4-title, .blockN4, .blockN5-title, .blockN5, .blockN6, .blockN7__title, .blockN7, .blockN8, .blockN9').each(function(){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+500) {
                $(this).addClass("fadeIn");
            }
        });
    });
