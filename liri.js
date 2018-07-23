require("dotenv").config();

var key = require("./key.js");

// NPM Packages
var twitter = require("twitter");
var spotify = require("node-spotify-api");
var request = require("request");
var fs = require("fs");
var inquirer = require("inquirer");

// Import key.js file to access keys
var spotify = new spotify(MediaKeySession.spotify);
var client = new Twitter(MediaKeySession.twitter);

// Variables for user entre
var action = process.argv[2];
var value = process.argv[3];

if (action === "my-tweets") {
    console.log();
}
else if (action === "spotify-this-song") {
    console.log();
}

else if (action === "movie-this") {
    console.log();
}

else if (action === "do-what-it-says") {
    console.log();
}
// Variable for the request to the OMDB API with the chosen movie
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
// Help debug against the actual URL
console.log(queryUrl);

function myTweets() {

};

function spotifySong() {
    
};

function movieTHis() {
    
};

function doWhatItSays() {
    
};