$(function(){
    /*
        typed.js -- animated text
    */
    $("header h2 span").typed({
        strings: ["WEB DEVELOPER", "INGENIEUR", "FREELANCER"],
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 3000,
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



    /*
        Smooth-Scrolling-JavaScript
    */
    $(".scroll").click(function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
    });



    /*
        Slide-To-Top JavaScript
    */
    var defaults = {
        containerID: 'toTop',
        containerHoverID: 'toTopHover',
        scrollSpeed: 100,
        easingType: 'linear'
    };
    $().UItoTop({ easingType: 'easeOutQuart' });



    /*
        Waypoints (trigger event on scroll)

        NOTE : Add all the "animate.css" class in the ignore option in gulp-uncss
    */

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



    /*
        Send Email
    */
    $('#contactForm').submit(function(e){
        e.preventDefault();
        var data = $('#contactForm').serializeArray();

        var message = "Name : " + data[0].value +
            "Reply to : " + data[1].value +
            "Tel : " + data[2].value +
            "Message : " + data[3].value

        $.ajax({
            url: "https://formspree.io/alexandre.peccaud@gmail.com", 
            method: "POST",
            data: {message: message},
            dataType: "json",
            success: function(resp, status) {
                // Show banner
                $("#banner").html("MESSAGE SUCCESSFULLY SENT");
                $('#banner').fadeTo(500, 1, function() {
                    $("#banner").css("display","block");
                });
                setTimeout(function() {
                    $('#banner').fadeTo(500, 0, function() {
                        $("#banner").css("display","none");
                    });
                }, 3000);

                // Reset form
                $('#contactForm').trigger("reset");
            },
            error: function() {
                // Show banner
                $("#banner").html("ERROR WHILE SENDING THE MESSAGE, PLEASE CONTACT DIRECTLY alexandre.peccaud@gmail.com");
                $('#banner').fadeTo(500, 1, function() {
                    $("#banner").css("display","block");
                });
                setTimeout(function() {
                    $('#banner').fadeTo(500, 0, function() {
                        $("#banner").css("display","none");
                    });
                }, 3000);
            }
        });
    });
});