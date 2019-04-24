require("dotenv").config();
var keys = require("./keys.js");
var axios = require('axios');
var Spotify = require("node-spotify-api");
var fs = require("fs");
// var bandsintown = require('bandsintown')('codingbootcamp');
// Example:

var spotify = new Spotify(keys.spotify);
var command = process.argv[2];
var artist = process.argv[3];
var queryUrl = axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")

liriCommand(command, artist);


function liriCommand(userCommand, searchTerm){
    if(userCommand === 'spotify-this'){
        spotify1(searchTerm)
        }  if(userCommand === 'spotify-this-song'){
            read();
        }

}
function spotify1(search){
    spotify.search({ type: 'track', query: search }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
       var resultsArray = data.tracks.items;
       for(i=0; i<resultsArray.length; i++){
           
        console.log('Artist:' +  resultsArray[i].album.artists[0].name); 
        console.log('Album Name:'+ resultsArray[i].album.name); 
        console.log('Preview Url:' + resultsArray[i].preview_url); 
        console.log('Track Name:' + resultsArray[i].name); 
       }
      
      
      });
}

liriCommandBand(command,artist);

function liriCommandBand(userCommand,searchTerm){
    if(userCommand === 'concert-this'){
        band1(searchTerm)
    }
}
function band1(queryUrl){
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(function(response){
    for(i=0; i<5; i++){
        console.log('Venue Name:' + '' + response.data[i].venue.name)
        console.log('Venue Location:' + '' + response.data[i].venue.city + ',' + response.data[i].venue.country)
        console.log('Venue Date:' + '' + response.data[i].datetime);
        // console.log('venue:' +response.data[0].venue[0])
    }    
    // console.log(response.data[1])
    });
}

// var queryUrl = axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
liriCommandMovie(command,artist);

function liriCommandMovie(userCommand, searchTerm){
    if(userCommand === 'movie-this' ){
        movie1(searchTerm)
    };
}
  function movie1(queryUrl){
      title = process.argv.slice(3).join('+')
    axios.get("http://www.omdbapi.com/?t="+ title + "&y=&plot=short&apikey=trilogy").then(
        function(response) {
        //   console.log(response);
          console.log('Title:'+ response.data.Title);
          console.log('Year:' + response.data.Year);
          console.log('Plot:'+ response.data.Plot);
          console.log('Language:' + response.data.Language);
          console.log('Actors:'+response.data.Actors);
          console.log('imdb Rating:' + response.data.imdbRating);
          console.log('Country:'+response.data.Country);
          
        }
      );
      
  }  
  // Attempted to call read function to run command from random.txt
  function read(){
  fs.readFile("random.txt", "utf8", function(error, search) {

    
    if (error) {
      return console.log(error);
    }
    if(command === 'do=what-it-says'){
        spotify1(search);
        console.log(response);
    }
       
    
  


  })
  }