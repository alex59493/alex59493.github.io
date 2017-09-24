$(function() {

    // Initialise Type,js library to animate the text in the header
    // Only initialise Type.js if the screen is larger than xs
    var mq = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
    if (!mq.matches) {

        initTypedText([
            "Je suis un développeur Web.",
            "Je développe vos sites Web.",
            "Je suis un Web designer."
        ]);

    }


    // Smooth-Scrolling-JavaScript
    $(".scroll").click(function(event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top - 70}, 1000);
    });


    // Initialize parallax effect for images scrolling
    // TODO: Find a more elegant solution with better performance. The onscroll event is very ressource consuming

    var mq = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
    if (!mq.matches) {
        (function() {
            var parallax = document.querySelectorAll(".parallax");
            var speed = 0.5;
        
            window.onscroll = function() {
                [].slice.call(parallax).forEach(function(el,i) {
                    var windowYOffset = window.pageYOffset;
                    var elBackgrounPos = "50% " + (windowYOffset * speed) + "px";
            
                    el.style.backgroundPosition = elBackgrounPos;
                });
            };
        }) ();
    }


    /* Translate (i18next) */

        /* ------- INITIALISATION ------- */

        var userLang = navigator.language || navigator.userLanguage;  // Get user language
    
        if (userLang.toLowerCase() === "fr" || userLang.toLowerCase() === "fr-fr") {
            I18nextToFrench();
        }
        else {
            I18nextToEnglish();
        }

        /* ------- // INITIALISATION ------- */


        /* ------- SWITCH LANGuAGE ------- */

        $(".switchToEnglish").click(function() {
            I18nextToEnglish();
        });

        $(".switchToFrench").click(function() {
            I18nextToFrench();
        });

        /* ------- // SWITCH LANGuAGE ------- */
    
    
        function I18nextToFrench() {
            // Update language of all the specified locations
            initI18next("fr");
            // Update displayed flag
            $('.navbar-right li .translate-flag img, header .translate-flag img').attr('src', 'dist/images/flags/France.png'); // Update displayed flag
            // If the screen is not a mobile, update the Typed.js text
            var mq = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
            if (!mq.matches) {
                initTypedText([
                    "Je suis un développeur Web.",
                    "Je développe vos sites Web.",
                    "Je suis un Web designer."
                ]);
            }
        }

        function I18nextToEnglish() {
            // Update language of all the specified locations
            initI18next("en");
            // Update displayed flag
            $('.navbar-right li .translate-flag img, header .translate-flag img').attr('src', 'dist/images/flags/United-Kingdom.png');
            // If the screen is not a mobile, update the Typed.js text
            var mq = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
            if (!mq.matches) {
                initTypedText([
                    "I am a Web developer.",
                    "I develop your websites.",
                    "I am a Web designer."
                ]);
            }
        }

        function initI18next(langCode) {
            var filePath = "/locales/" + langCode + ".json"
            i18next
                .use(i18nextXHRBackend)
                .init({
                    lng: langCode,
                    fallbackLng: 'en',
                    backend: {
                        loadPath: filePath
                    }
                }, function(err, t) {
                    jqueryI18next.init(i18next, $);
                    $('.translate').localize();
                });
        }
    
    /* //Translate */


    /* Waypoints (trigger event on scroll) */
    var mq = window.matchMedia("(min-width: 1px) and (max-width: 576px)");
    if (!mq.matches) {
        // Offer
        $('#offer .myFadeIn').css('opacity', 0);

        $("#offer .myFadeIn").waypoint(function() {
            $('#offer .myFadeIn').addClass('animated fadeInUp');
        }, { offset: '70%'});
        // //Offer

        // Skills
        $('#skills .myFadeIn').css('opacity', 0);
        
        $("#skills .myFadeIn").waypoint(function() {
            $('#skills .myFadeIn').addClass('animated fadeInDown');
        }, { offset: '70%'});
        // //Skills

        // Work
        $('#work .myFadeIn').css('opacity', 0);
        
        $("#work .myFadeIn").waypoint(function() {
            $('#work .myFadeIn').addClass('animated fadeIn');
        }, { offset: '80%'});
        // //Work
    }
    /* //Waypoints */



    /* Contact form - Email */
        $('#contactForm').submit(function(e) {
            e.preventDefault();

            var data = $('#contactForm').serializeArray();
            var name = data[0].value;
            var replyTo = data[1].value;
            var tel = data[2].value;
            var message = data[3].value;

            sendEmail(name, replyTo, tel, message);
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
});

function initTypedText(stringsArray) {
    $("header h2 span").typed({
        strings: stringsArray,
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

function sendEmail(name, replyTo, tel, message) {
    var message = "Name : " + name + " " +
        "Reply to : " + replyTo + " " +
        "Tel : " + tel + " " +
        "Message : " + message;

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
}