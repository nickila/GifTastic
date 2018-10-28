var gifArray = ["betty boop", "old cartoon", "weird", "odd", "finn jake"];
// Create a function that creates buttons of themes in the gifArray and display them in the #button-div
var results;
var still;
var animated;
function showGif() {
    // Set for loop to loop through all the results that giphy sends us
    for (var i = 0; i < results.length; i++) {
        // Create an image tag to hold the gif
        var gifSpot = $("<img>");
        // Give the image tag a source attribute for animated (and for still)
        gifSpot.attr("src", results[i].images.fixed_height_still.url);
        gifSpot.attr("data-still", results[i].images.fixed_height_still.url);
        gifSpot.attr("data-animate", results[i].images.fixed_height.url);
        gifSpot.attr("data-state", "still")
        gifSpot.addClass("gif");
        var rated = results[i].rating.toUpperCase();
        var gifDiv = $("<div>");
        gifDiv.addClass("gif-container");
        var gifText = $("<p>");
        gifText.addClass("text");
        gifText.html(results[i].title + "<br />" + "Rating: " + rated);
        gifDiv.prepend(gifText);
        // Prepend the images to #gif-view
        gifDiv.prepend(gifSpot);
        gifDiv.prepend(gifSpot);
        $("#gif-view").prepend(gifDiv);
    }
    $(".gif").unbind();
    $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        if (state == "still") {
            $(this).attr("src", $(this).attr("data-animate"));
            $(this).attr("data-state", "animate");
        } else if (state == "animate") {
            $(this).attr("src", $(this).attr("data-still"));
            $(this).attr("data-state", "still");
        }
    });
}
$("#add-gif").on("click", function (event) {
        
        console.log("success on adding gif");
        // Keeps screen from refreshing
        event.preventDefault();
        // Create variable gifInput equal to whatever user types in.
        var gifInputReg = $("#gif-input").val().trim();
        var gifInput = gifInputReg.toLowerCase();
        $("#gif-input").val("");
        // Push the text input into gifArray
        gifArray.push(gifInput);
        // Run renderButtons function again to bring all buttons up with new button
        renderButtons();
        // Run showGif function to show gifs of the themes of the button clicked
});

// Create function to create buttons of themes in array
function renderButtons() {
    
    // Empty #button-div every time so it doesn't repeat itself
    $("#button-div").empty();
    // Loop sets one button for each theme
    for (var i = 0; i < gifArray.length; i++) {
        // Create a variable for a button
        var a = $("<button type='button'>");
        // Add a class of gif-button to the button
        a.addClass("gif-button btn");
        // Add an attribute of data-gif to the button as well
        a.attr("data-gif", gifArray[i]);
        // Add the words from the theme to the button
        a.text(gifArray[i]);
        // Append the button with all of its attributes and class and text to #button-div
        // This function will add a button for each theme in the gifArray. Later we will be
        // able to add more themes into the array and this same function should load the new
        // themes into this div and be functional.
        $("#button-div").append(a);
    }
    // End the for loop
    $(".gif-button").on("click", function () {
        $(".title-page").html("");
        // Create a div setting gif to whatever they click on 
        var gif = $(this).attr("data-gif");
        // GET gif info from giphy.com
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7&limit=10");
        xhr.done(function (response) {
            // create variable called results to equal the info from giphy with .data after it
            results = response.data;
            // Create function to show all the gifs that come to us.
            // Call function to showGif
            showGif();
        });
    });
}
renderButtons();
// Create function that allows user to click the button with the gif theme (.gif-button) and show
// gifs in a div 
$(document).on("click", ".gif-btn", showGif);