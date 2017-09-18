$(function(){
    // typed.js - animated text
    initTyped(["Je suis un développeur Web.", "Je développe vos sites Web.", "Je suis un Web designer."])



    /* Smooth-Scrolling-JavaScript */
        $(".scroll").click(function(event) {
            event.preventDefault();
            $('html,body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
        });
    /* //Smooth-Scrolling-JavaScript */



    (function(){
        
        var parallax = document.querySelectorAll(".parallax"),
            speed = 0.5;
    
        window.onscroll = function(){
        [].slice.call(parallax).forEach(function(el,i){
    
            var windowYOffset = window.pageYOffset,
                elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
    
            el.style.backgroundPosition = elBackgrounPos;
    
        });
        };
    
    })();


    /* Waypoints (trigger event on scroll) */
        // Skills Items
        $('#skills .item1').css('opacity', 0);
        $('#skills .item2').css('opacity', 0);
        $('#skills .item3').css('opacity', 0);
        $('#skills .item4').css('opacity', 0);
        $('#skills .item5').css('opacity', 0);
        $('#skills .item6').css('opacity', 0);
        $('#skills .item7').css('opacity', 0);
        $('#skills .item8').css('opacity', 0);

        $("#skills .item1").waypoint(function() {
            $('#skills .item1').addClass('animated fadeInLeft');
        }, { offset: '100%'});

        $("#skills .item2").waypoint(function() {
            $('#skills .item2').addClass('animated fadeInRight');
        }, { offset: '100%'});

        $("#skills .item3").waypoint(function() {
            $('#skills .item3').addClass('animated fadeInLeft');
        }, { offset: '100%'});

        $("#skills .item4").waypoint(function() {
            $('#skills .item4').addClass('animated fadeInRight');
        }, { offset: '100%'});

        $("#skills .item5").waypoint(function() {
            $('#skills .item5').addClass('animated fadeInLeft');
        }, { offset: '100%'});

        $("#skills .item6").waypoint(function() {
            $('#skills .item6').addClass('animated fadeInRight');
        }, { offset: '100%'});

        $("#skills .item7").waypoint(function() {
            $('#skills .item7').addClass('animated fadeInLeft');
        }, { offset: '100%'});

        $("#skills .item8").waypoint(function() {
            $('#skills .item8').addClass('animated fadeInRight');
        }, { offset: '100%'});
        // //Skills Items

        // Work Items
        $('#work .hovereffect').css('opacity', 0);

        $("#work .hovereffect").waypoint(function() {
            $('#work .hovereffect').addClass('animated fadeIn');
        }, { offset: '100%'});
        // //Work Items
    /* //Waypoints */



    /* Contact form - Email */
        $('#contactForm').submit(function(e){
            e.preventDefault();
            var data = $('#contactForm').serializeArray();

            var message = "Name : " + data[0].value + " " +
                "Reply to : " + data[1].value + " " +
                "Tel : " + data[2].value + " " +
                "Message : " + data[3].value

            $.ajax({
                url: "https://formspree.io/alexandre.peccaud@gmail.com", 
                method: "POST",
                data: {message: message},
                dataType: "json",
                success: function(resp, status) {
                    // Show banner
                    $('#successBanner').fadeTo(500, 1, function() {
                        $("#successBanner").css("display", "block");
                    });
                    setTimeout(function() {
                        $('#successBanner').fadeTo(500, 0, function() {
                            $("#successBanner").css("display", "none");
                        });
                    }, 3000);

                    // Reset form
                    $('#contactForm').trigger("reset");
                },
                error: function() {
                    // Show banner
                    $('#failureBanner').fadeTo(500, 1, function() {
                        $("#failureBanner").css("display", "block");
                    });
                    setTimeout(function() {
                        $('#failureBanner').fadeTo(500, 0, function() {
                            $("#failureBanner").css("display", "none");
                        });
                    }, 3000);
                }
            });
        });
    /* //Contact form - Email */



    /* Nav bar */
        // On page load, check if the navbar should be displayed
        if ($(this).scrollTop() > 10) {
            $('nav .overlay').css('display', 'block');
            $('.navbar .navbar-right .scroll').css('display', 'block');
        }

        // Show / Hide
        $(window).on("scroll", function() {
            // Init
            var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
            $('nav').css('animation-duration', '0.5s');
            // Show Navbar
            if ($(this).scrollTop() > 50) {
                if ($('nav .overlay').css('display') === 'none') {
                    $('nav .overlay').css('display', 'block');
                    $('nav .overlay').addClass('animated fadeIn').one(animationEnd, function() {
                        $('nav .overlay').removeClass('animated fadeIn');
                    });
                }
            }
            // Hide Navbar
            else {
                if ($('nav .overlay').css('display') === 'block') {
                    $('nav .overlay').addClass('animated fadeOut').one(animationEnd, function() {
                        $('nav .overlay').removeClass('animated fadeOut');
                        $('nav .overlay').css('display', 'none');
                    });
                }
            }
        })

        // Close navbar when click on item
        $("nav .scroll").click(function() {
            $('.navbar-collapse').collapse('hide');
        });

        // Close navbar when click outside
        $('body').bind('click', function(e) {
            if ($(e.target).closest('.navbar').length === 0) {
                var opened = $('.navbar-collapse').hasClass('collapse in');
                if (opened === true) {
                    $('.navbar-collapse').collapse('hide');
                }
            }
        });

        // Scroll spy
        $('body').scrollspy({
            target: '.navbar-fixed-top',
            offset: 200
        })
    /* //Nav bar */



    /* Translate (i18next) */
        var userLang = navigator.language || navigator.userLanguage;  // Get user language

        if (userLang === "fr") {
            i18next
                .use(i18nextXHRBackend)
                .init({
                    lng: 'fr',
                    fallbackLng: 'en',
                    backend: {
                        loadPath: '/locales/{{lng}}.json'
                    }
                }, function(err, t) {
                    jqueryI18next.init(i18next, $);
                    $('.translate').localize();
                });
        }
        else {
            i18next
                .use(i18nextXHRBackend)
                .init({
                    lng: 'en',
                    fallbackLng: 'en',
                    backend: {
                        loadPath: '/locales/{{lng}}.json'
                    }
                }, function(err, t) {
                    jqueryI18next.init(i18next, $);
                    $('.translate').localize();
                    $('.navbar-right li .translate-flag img, header .translate-flag img').attr('src', 'dist/images/flags/France.png');
                    $('.navbar-right li .translate-flag img, header .translate-flag img').attr('alt', 'Français');
                    initTyped(["I am a Web developer.", "I develop your websites.", "I am a Web designer."])
                });
        }

        // Switch language
        $('.navbar .translate-flag').click(function() {
            if ($('.navbar-right li .translate-flag img').attr('alt') === 'English') {
                i18next.changeLanguage("en", function() {
                    $('.translate').localize();
                    $('.navbar-right li .translate-flag img, header .translate-flag img').attr('src', 'dist/images/flags/France.png');
                    $('.navbar-right li .translate-flag img, header .translate-flag img').attr('alt', 'Français');
                    initTyped(["I am a Web developer.", "I develop your websites.", "I am a Web designer."])
                });
            }
            else if ($('.navbar-right li .translate-flag img').attr('alt') === 'Français') {
                i18next.changeLanguage("fr", function() {
                    $('.translate').localize();
                    $('.navbar-right li .translate-flag img, header .translate-flag img').attr('src', 'dist/images/flags/United-Kingdom.png');
                    $('.navbar-right li .translate-flag img, header .translate-flag img').attr('alt', 'English');
                    initTyped(["Je suis un développeur Web.", "Je développe vos sites Web.", "Je suis un Web designer."])
                });
            }
        })
    /* //Translate */
});

/* typed.js - animated text */
function initTyped(strings) {
    var mq = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
    if (!mq.matches) {
        $("header h2 span").typed({
            strings: strings,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 10000,
            showCursor: true,
            cursorChar: "|",
            loop: true,
            // call when done callback function
            callback: function() {},
            // starting callback function before each string
            preStringTyped: function() {},
            //callback for every typed string
            onStringTyped: function() {},
            // callback for reset
            resetCallback: function() {}
        });
    }
}
/* //typed.js -- animated text */