/*
Giphy key: W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7
api.giphy.com
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
xhr.done(function(data) { console.log("success got data", data); });
/vi/gifs/search


*/
var api = "http://api.giphy.com/v1/gifs/search?";
var apiKey = "&api_key=W1ZdQxBV7JvKqb1n70glDpBO3bo1h2T7";
var query = "&q=rainbow";




function setup() {
    noCanvas();
    var url = api + apiKey + query;
    loadJSON(url, gotData);

}
function gotData(data) {
    println(data);
}

function draw() {



}