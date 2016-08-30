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
        console.log(document.getElementById("emailContent").innerHTML);
    }
-->