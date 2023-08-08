// ------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------

const arrPlants = [
    {
      name: "Ficus Tree",
      price: 350,
      description: "Graceful and lush, this indoor plant boasts glossy, emrald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
      image: "plant1.png" 
    },
    {
        name: "White Sprite Succulent",
        price: 200,
        description: "Graceful and lush, this indoor plant boasts glossy, emrald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
        image: "plant2.png" 
    },
    {
        name: "Snake Plant",
        price: 400,
        description: "Graceful and lush, this indoor plant boasts glossy, emrald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
        image: "plant3.png" 
    },
    {
        name: "Parlour Palm",
        price: 350,
        description: "Graceful and lush, this indoor plant boasts glossy, emrald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
        image: "plant4.png" 
    },
    {
        name: "Japanese Maple",
        price: 1200,
        description: "Graceful and lush, this indoor plant boasts glossy, emrald-green leaves that effortlessly brighten any space. Easy to care for and standing at an ideal height, our Ficus Tree is the perfect addition to elevate your interior decor.",
        image: "plant5.png" 
    },


];


// ------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------
$(document).ready(function(){

    console.log("hello")


    // ------------------------------------------------------------------
    //  Home Page

    //When the Hero Image Loads, Animate it Upwards
    $(".hero-image").animate({top:'-=100px'});
    
    $(".carousel-control-next").click($(".planti").animate({top:'-=100px'}));

    // $(".carousel-control-next").click(function(){
    //     $(".planti").animate({top:'-=100px'});
    //   }); 

    // ------------------------------------------------------------------
    //  Browse Page 
    $("#descriptionText").hide();
    loadPlants();

    


});


// ------------------------------------------------------------------
// Load all Plants
// ------------------------------------------------------------------

function loadPlants() {

    // Run Loop through the list of plants

    for (let i = 0; i < arrPlants.length; i++) {
        const plant = arrPlants[i];

        console.log(plant);

        // 1: Select the plants container and add the current array plant to it
        $("#plantsContainer").append($("#plantCardTemplate").html())

        // 2: Create a vairiable the most recently added pland card
        let currentChild = $("#plantsContainer").children().eq(i+1);
        console.log(currentChild);

        // 3: Set the content for the current plant card from the plants list arry
        $(currentChild).find(".card-img-top").attr('src', 'assets/' + plant.image);
        $(currentChild).find("#nameText").text(plant.name);
        $(currentChild).find("#priceText").text(plant.price);
        $(currentChild).find("#descriptionText").text(plant.description);
        
    }

}

// ------------------------------------------------------------------
// When the card is clicked
// ------------------------------------------------------------------

$(".card").click(function(){
    // Toggle Price and Description text
    $("#priceText").toggle();
    $("#descriptionText").toggle();

    // Resize the image to fit additional content
    $(".card-img-top").toggleClass("small");
    
});