(function($) {
    "use strict"; // Start of use strict

    // Enable email btn popover toggle
    $('#emailBtn').popover();

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $(document).on('click', 'a.page-scroll', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 50
        }
    })

})(jQuery); // End of use strict


//Email contact btn click. Anti-spam protection.
function email_btn_click(){
    var firstPhrase = "dsc";
    var secondPhrase = "elza";
    var thirdPhrase = "@umich.edu";
    $("#emailBtn").attr('data-content', firstPhrase + secondPhrase + thirdPhrase);
}