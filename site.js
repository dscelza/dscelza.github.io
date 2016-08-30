<!--

    //Linked In contact btn click
    function linkedin_btn_click(){
        window.location = "https://www.linkedin.com/in/dylanscelza";
    }

    //Email contact btn click. Anti-spam protection.
    function email_btn_click(){
        var firstPhrase = "dsc";
        var secondPhrase = "elza";
        var thirdPhrase = "@umich.edu";
        
        document.getElementById("emailContent").innerHTML = "Email: " + firstPhrase + secondPhrase + thirdPhrase;
    }

    //Launches modal containing clicked image
    function load_image_modal(clickedImg){
        var modalImg = document.getElementById("modal-screenshot-image");
        modalImg.src = clickedImg.src.slice(0, clickedImg.src.length - 4) + "_lg.png"; //Displays high-res img
        if (clickedImg.height > clickedImg.width) //Adjust for Phone Screenshots vs Desktop
            modalImg.style = "height: 80%; height: 80vh; width: auto;"
        else
            modalImg.style = "width: 80%; width: 80vw; height:auto;"
        $('#screenshotModal').modal('toggle');
    }
-->