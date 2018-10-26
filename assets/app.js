var gifArray = ["OLD CARTOON", "FLEISCHER", "1930 CARTOON", "BETTY BOOP", "FELIX THE CAT", "KOKO THE CLOWN", "OLD POPEYE", "STEAMBOAT WILLIE"];
// Create a function that creates buttons of themes in the gifArray and display them in the #button-div
var results;
var still;
var animated;
function showGif() {
    // Set for loop to loop through all the results that giphy sends us
    for (var i = 0; i < results.length; i++) {
        //var gifDiv = $("<div class='item'>");
        // Create an image tag to hold the gif
        var gifSpot = $("<img>");
        // Give the image tag a source attribute for animated (and for still)
        gifSpot.attr("src", results[i].images.fixed_height_still.url);

        gifSpot.attr("data-still", results[i].images.fixed_height_still.url);
        //gifSpot.attr("data-state", "animate");
        gifSpot.attr("data-animate", results[i].images.fixed_height.url);
        gifSpot.attr("data-state", "still")
        gifSpot.addClass("gif");
        // Prepend the images to #gif-view
        //gifDiv.prepend(gifSpot);
        $("#gif-view").prepend(gifSpot);
        console.log(results[0]);
    }
    $(".gif").unbind();
    $(".gif").on("click", function () {
        console.log("shoulda worked?");
        
        var state = $(this).attr("data-state");
        console.log(state);
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
    var gifInput = gifInputReg.toUpperCase();
    $("#gif-input").val("");

    // Push the text input into gifArray
    gifArray.push(gifInput);
    // Run renderButtons function again to bring all buttons up with new button
    renderButtons();
    // Run showGif function to show gifs of the themes of the button clicked
    //showGif();
    // End function that allows user to type in theme and generate new button
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
        console.log("you clicked a gif button!")
        // Create a div setting gif to whatever they click on 
        var gif = $(this).attr("data-gif");
        // GET gif info from giphy.com
        var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + gif + "&api_key=W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7&limit=10");
        xhr.done(function (response) {
            // create variable called results to equal the info from giphy with .data after it
            results = response.data;
            //var gifStill = data
            //var gifAnimated = data
            // Create function to show all the gifs that come to us.

            // Call function to showGif
            showGif();
            

        });
    });


    // End the renderButtons function
}



// Call renderButtons function
renderButtons();
// Create function that allows user to click the button with the gif theme (.gif-button) and show
// gifs in a div 


$(document).on("click", ".gif-btn", showGif);