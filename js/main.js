(function ($) {
    "use strict";
    $.get( "https://hmhrylqv4ci7awkul34uigbtqm0yjyyd.lambda-url.us-east-1.on.aws/", function( data ) {
         //console.log(data);
        // alert( "Load was performed." );
        $("#db_projectscompleted").text(data.Item.projectscompleted.S);

        $("#db_yearofexperience").text(data.Item.yearofexperience.S);

        $("#db_happyemployers").text(data.Item.happyemployers.S);
        $("#db_experiencedetails").text(data.Item.experiencedetails.S);
        $("#db_name").text(data.Item.name.S);
        $("#db_projectscompletedtext").text(data.Item.projectscompletedtext.S);
        //$("#db_cvlocation").href(data.Item.cvlocation.S);
        $("#db_happyemployerstext").text(data.Item.happyemployerstext.S);
        $("#db_experiencetitle").text(data.Item.experiencetitle.S);
        $("#db_position").text(data.Item.position.S);


    });
    $("#myform").on('submit', function (e) {
const data = {
    "user_name": $('#name').val(),
    "user_email": $('#email').val(),
    "message": $('#message').val(),
    "phone": $('#phone').val(),
    "subject": $('#subject').val()
}
        e.preventDefault();
        $.ajax({
            headers: { "Accept": "application/json"},
            type: 'PUT',
            url: 'https://i13vx2yf6b.execute-api.us-east-1.amazonaws.com/v1/email',
            data: JSON.stringify(data),
            dataType: 'json',
            cache: false,
            processData: false,
            crossDomain: true,
            beforeSend: function(xhr){
                xhr.withCredentials = true;
            },
            success: function (response) {
                alert("Thank You For Your Message.");

            }
        });
    });

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });

    
})(jQuery);

