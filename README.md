 # Liri-Node-App

I have created a Node.js app called LIRI.  LIRI or Language Interpretation and Recognition Interface, allows a user to retrieve date from Twitter, Spotify, and OMDB.  You simply type a command and the item you want to search and the application will give you back your data on the Node terminal.  Default values have been added if no name is given for a search.  Ones personal info will be protected using this app.

The Twitter Node package will fetch your last 20 tweets. If you do not enter your own Twitter user name you will get 20 sweet tweets from a big name Tweeter!

The Node-Spotify-API package will return an Artist, song, album, and a url link to a song title entered. If no song title is enterd you will recieve info on one of the biggest top ten songs of a centery.

The OMDB API using the Request Node package will provide the title, year, rating, country, language, plot, and actors of any movie.  You will be delighted with a random flick, if no movie title is provided.

Lastly, we use a .ENV file and Node  package that securely keeps your access keys you need for this app to function. 

## Instructions:

Open the LIRI application in Visual Studio Code.

Then open the terminal and navigate to the Liri-Node-App folder.

Prepare your access keys and install the needed Node packages.

At the prompt type: &nbsp; node liri.js &nbsp;**commands** &nbsp;**names**
<br><br>

Commands:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Names:
---------------------------------------------------
1. my-tweets&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enter your Twitter @name
2. spotify-this-song&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enter a song title
3. movie-this&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enter a movie title
4. do-what-it-says