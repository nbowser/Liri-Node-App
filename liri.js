var dotenv = require("dotenv").config();

var keys = require("./keys.js");

// NPM Packages
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var Request = require("request");
var fs = require("fs");

// Import key.js file to access keys
var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

// Variable for the request to the OMDB API with the chosen movie
// var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// Help debug against the actual URL
// console.log(queryUrl);

// Variables for user entre
var action = process.argv[2];
var value = process.argv[3];

// Conditions of user commands used to call functions
// if (action === "my-tweets") {
//     myTweets();
// }
// else if (action === "spotify-this-song") {
//     spotifySong();
// }

// else if (action === "movie-this") {
//     movieThis();
// }

// else if (action === "do-what-it-says") {
//     doWhatItSays();
// }

switch (action) {
    case "my-tweets":
    myTweets();
    break;

    case "spotify-this-song":
    spotifySong();
    break;

    case "movie-this":
    movieThis();
    break;

    case "do-what-it-says":
    doWhatItSays();
    break;
}

// Twitter function -----------------------------------------------------
function myTweets() {
    // Twitter username
    var name = "Liri";
    
    var paramTweet = {
        screen_name: name,
        count: 20
    };

    // Call the get method on our client variable for Twitter
    client.get("statuses/user_timeline", paramTweet, function(error, data, response) {
        if (!error) {
            for (var i = 0; i < data.length; i++) {
                var twitterResults = ("@ " + data[i].user.screen_name + "\n" + data[i].text + "\n" + data[i].created_at + "\n");
                console.log(twitterResults);
                console.log("--------------------------------------------");
            }
        }
        else {
            console.log("An error on your search has occurred: " + error);
        }
    })
};  // myTweets function end


// Spotify function -------------------------------------------------
function spotifySong() {
    var songTitle = value;

    var paramSpot = {
        type: "track",
        query: songTitle
    };

    if (!songTitle) {
        var songTitle = "The Sign Ace of Base"
    };

    spotify.search(paramSpot, function(error, response) {
        if (!error) {
            console.log("\nArtist: " + response.tracks.items[0].name);
            console.log("Song Title: " + response.tracks.items[0].artists[0].name);
            console.log("Album: " + response.tracks.items[0].album.name);
            console.log("Preview" + response.tracks.items[0].preview_url);
            console.log("-\n");
        }
        else {
            console.log("An error on your search has occurred: " + error);
        }
    });    
};  // spotifySong function end


// OMDB function -------------------------------------------------
function movieThis() {
    var movieTitle = value;
    
    if (!movieTitle) {
        var movieTitle = "Mr. Nobody";
    };

    Request("http://www.omdbapi.com/?t=" + movieTitle + "&y=&plot=full&apikey=trilogy", function(error, response,body) {
        
        if (!error && response.statusCode === 200) {
            
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).year);
            console.log("IMBD Rating: " + JSON.parse(body).Ratings[0].Value);
            console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors" + JSON.parse(body).Actors);
        }
        else {
            console.log("An error on your search has occurred: " + error);
        }
    });
};  // movieThis function end


// Do what it says function ----------------------------------------------
function doWhatItSays() {

    // Stores the read information into the variable "data"
    fs.readFile("random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        // Break the string down by camma separation and the contents into the output array
        var output = data.split(",");
    });
    
};  // doWhatItSays function end