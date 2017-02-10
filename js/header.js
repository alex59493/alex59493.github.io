$(function(){
    /*
        typed.js -- animated text
    */
    $("header h2 span").typed({
        stringsElement: $('#typed-strings'),
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
});