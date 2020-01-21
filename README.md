# Synchro 9
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/homepage.gif"  width="100%" height="100%">


## Description
* Synchro 9 is a music application where users can search and play audio for their favorite artists and their favorite music videos. 

## How does it Works?

#### Artist Search-Page

*  Users can head to the Artist Search-Page and Seach for their favorite Artist. For example let search for an artist/band called "Spyair" as shown below.

<p align="center">
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/spyair.gif"  width="80%" height="80%">
</p>

*  After the Search is completed, it will return a box of the artist with their photo, name, and genres. (If applicable). As shown below. 
<p align="center">
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/spyair.png"  width="60%" height="60%">
</p>

*  It also return the artist top track in which they are playable (the tracks just give a 30 seconds preview of the song)
*  As the image shown below, when users try to play another track, it will automatically pause the previously played track and play the next track selected.  
<p align="center">
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/tracks.gif"  width="60%" height="60%">
</p>



#### Videos Search-Page
*  If the Artist Search-Page is not that satisfying, Users can search for their favorite Music Videos. For example let search for a song called "S-ave" by aimer. (As shown below)

<p align="center">
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/musicvidd.gif"  width="80%" height="80%">
</p>


#### Comments Section
*  The Comments Section was particularly made to get better with redux. In this case users can leave comments about the site by entering a username (or stay anonymous) and write a comment in the comment field. It also leave the exact time and date, when the comment is posted. 
* For example, As the image shown below, let say we enter a Username as "Fuuka" and leave a comment as "This Site is Awesome".  

<p align="center">
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/comments.gif"  width="60%" height="60%">
</p>

*  A unique aspect I added was an reaction(emoji) to react to other comments. As shown below.
<p align="center">
<img src="https://github.com/Yuzu28/Music-App-Project/blob/master/public/emoji.gif"  width="60%" height="60%">
</p>

*  The Comments Section is still under production and stills need a backend/database to store the comments data. 

## Technology Used

| Languages | 
| ------------- |
| HTML  | 
| CSS| 
| Bootstrap|
| Javascript  | 
| React | 
| Rudux| 


| API Used | 
| ------------- |
| Spotify API: https://developer.spotify.com/| 
| Youtube API: https://developers.google.com/youtube/v3| 

| Real Time (Used in Comment Section) | 
| ------------- |
| PubNub: https://www.pubnub.com/| 

## Deployment
*  Decided to try out Heroku for deployment. 

| Deploying  | Details |
| ------------- | ------------- |
| Heroku: | https://www.heroku.com/ |
| Problems when Hosting:   | Failed to construct 'WebSocket'|
| Solution:   | Changing react scripts 3.3.0 version to 3.2.0 |
| Solution to Solving the Problem  | [Link](https://stackoverflow.com/questions/59359280/react-app-error-failed-to-construct-websocket-an-insecure-websocket-connecti). |




