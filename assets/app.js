$(document).ready(function() {



/*
Giphy key: W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7
api.giphy.com
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
/vi/gifs/search


*/
// var api = "http://api.giphy.com/v1/gifs/search?";
// var apiKey = "&api_key=W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7";
// var query = "&q=rainbow";




// function setup() {
//     noCanvas();
//     var url = api + apiKey + query;
//     $.getJSON(url, gotData);

// }
// function gotData(data) {
//     console.log(data);
// }

// function draw() {



// }

var stuff = ["pee-wee", "candy", "squirrels"];
        
//function displayGifs() {
var xhr = $.get("https://api.giphy.com/v1/gifs/search?q=squirrels&api_key=W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7&limit=10");
xhr.done(function (data) {
   console.log("success got data", data.data[0].id);
    $("#gif-view").text("success got data" + data.data[0].id);
    
    
    
    });



// var gifs = ["candy", "pee-wee", "squirrels"];



//     var gif = $(this).attr("data-name");
//     //var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + gifs[0] + "&api_key=W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7&limit=5";
//     console.log(response.data);
//     //$("#gif-header").text(data[0].rating);
// }


// $.ajax({
//     url: queryURL,
//     method: "GET"
// }).then(function (response) {
//     var gifDiv = $("<div class='gif-holder'>");
//     var title = response.title;
//     var titleDiv = $("<p>").text(title);

//     gifDiv.append(titleDiv);

//     var gifStill = response.images.downsized_medium;
//     var gifImg = $("<img>").attr("src", gifStill);
//     gifDiv.append(gifImg);
//     $("#gif-view").append(gifDiv);

// });
// function renderButtons() {
//     $("#buttons").empty();
//     for (i = 0; i < gifs.length; i++) {
//         var b = $("<button>");
//         b.addClass("gif-btn");
//         b.text(gifs[i]);
//         b.attr("data-name", gifs[i]);
//         $("#buttons").append(b);
//     }
// }
// renderButtons();
});