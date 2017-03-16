

//Linked In contact btn click
function linkedin_btn_click(){
    window.location = "https://www.linkedin.com/in/dylanscelza";
}

//Email contact btn click. Anti-spam protection.
function email_btn_click(){
    var firstPhrase = "dsc";
    var secondPhrase = "elza";
    var thirdPhrase = "@umich.edu";
    $("#emailContent").html("Email: " + firstPhrase + secondPhrase + thirdPhrase);
}

//Click header chevron button. Scroll to summary section
function chevron_btn_click(){
        $('html, body').animate({
        scrollTop: $("#summary").offset().top - 50
        }, 1000, function(){
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = "#summary";
            } // End if statement
        );
//    document.getElementById("education").scrollIntoView();
}

//Launches modal containing clicked image
function load_image_modal(clickedImg){
    $("#modal-progress-bar").removeClass("hidden");
    var modalImg = document.getElementById("modal-screenshot-image");
    modalImg.className = "img-responsive img-thumbnail hidden";
    //Displays high-res img
    modalImg.src = clickedImg.src.slice(0, clickedImg.src.length - 4) + "_lg.png";
    //Adjust for Phone Screenshots vs Desktop
    if (clickedImg.height > clickedImg.width)
        modalImg.style = "height: 80%; height: 80vh; width: auto;"
    else
        modalImg.style = "width: 80%; width: 80vw; height: auto;"
    //Set modal header to image alt text
    $("#screenshotModalLabel").html(clickedImg.alt)
    //Toggle modal
    $("#screenshotModal").modal("toggle");
}

//Change modal image to visible and hide progress bar
function showImage(){
    $("#modal-progress-bar").addClass("hidden");
    $("#modal-screenshot-image").removeClass("hidden");
}

//Fades in navbar on-scroll
$(document).ready(function(){
    //hide navbar onpage load
    $("#navbar-main").hide();
    $("#navbar-main").removeClass("hidden");
    $(window).scroll(function () {
    // set distance to scroll before fadeIn navbar
    if ($(this).scrollTop() > 25){
        $("#navbar-main").fadeIn();
    }
    if ($(this).scrollTop() < 25){
        $("#navbar-main").fadeOut();
    }
    });

    // Add video controls if the video is loaded. 300ms delay to account for vide args
    // setTimeout(function(){
        var instance = $('.blue-header').data('vide');
        // console.log("site.js:")
        //     console.log(getMobileOperatingSystem())
        if (getMobileOperatingSystem() == "unknown"){
            $("#vid-control-div").removeClass("hidden");
            $("#vid-pause")[0].addEventListener('click', function() { 
                instance.getVideoObject().pause(); 
                $("#vid-play").removeClass("hidden");
                $("#vid-pause").addClass("hidden");
            }, false);
            $("#vid-play")[0].addEventListener('click', function() { 
                instance.getVideoObject().play(); 
                $("#vid-pause").removeClass("hidden");
                $("#vid-play").addClass("hidden");
            }, false);
        }

    // }, 300)

    // var instance = $('.blue-header').data('vide');
    // console.log(instance.getVideoObject().play());
    // Add Play/Pause for video. (Present in browser that autoplay vid)
});

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 * http://stackoverflow.com/questions/21741841/detecting-ios-android-operating-system
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

        // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

//Collapse toggle button when nav item clicked
function minimizeNavbar(){
    if ($("#nav-toggle-btn").is(":visible"))
        $("#nav-toggle-btn").click();
}

// Add smooth scrolling to all links inside a navbar
$("#navbar-main a").on("click", function(event){
// Make sure this.hash has a value before overriding default behavior
if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();
    // Store hash (#)
    var hash = this.hash;
    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
    $("html, body").animate({
    scrollTop: $(hash).offset().top - 50
    }, 800, function(){
    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
    }) // End if statement
};
});
