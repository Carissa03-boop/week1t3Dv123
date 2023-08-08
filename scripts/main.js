// When the document loads
$(document).ready(function(){

    console.log("hello")


    // ------------------------------------------------------------------
    //  Home Page

    //When the Hero Image Loads, Animate it Upwards
    $(".hero-image").animate({top:'-=100px'});

    // ------------------------------------------------------------------
    //  Browse Page 
    $("#descriptionText").hide();

});

// When the card is clicked

$(".card").click(function(){
    // Toggle Price and Description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit additional content
    $(".card-img-top").toggleClass("small");
    
})