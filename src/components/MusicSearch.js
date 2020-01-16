import React, {Component} from 'react';
import './MusicSearch.css';
import axios from 'axios';
import Artist from './Artist';
// import Tracks from './Tracks';



 class MusicSearch extends Component{

    state ={

        artistQuery: '',
        artist: null,
        tracks: [],
        msg: "",
        img:"",
        playing: false,
        audio: null,
        PlayingAudioPreview: null,
    }


    

  


    //below fires the moment when the value of the element is changed when you type something in the search bar
    updateArtistQuery = (path) =>{
        // console.log('path.target.value', path.target.value);

        //update the component

        // setting the state when searching an artist
        this.setState({ artistQuery: path.target.value });
    }



    playAudio = previewUrl => () => {
        const audio = new Audio (previewUrl);

        if (!this.state.playing){
            audio.play();
            this.setState(
                {playing: true, 
                    audio,
                    PlayingAudioPreview: previewUrl,
                })
        }
        else{
            this.state.audio.pause();

            if (this.state.PlayingAudioPreview === previewUrl){
                this.setState({playing: false});


            }else {
                audio.play();
                this.setState({audio, PlayingAudioPreview: previewUrl})
            }

        }

    }

   

    searchArtist = (e) =>{
        e.preventDefault();

        //grading the searchItem from the state already set 
        const musicTile = this.state.artistQuery;
        // console.log(musicTile)

        //log checking the current state
        // console.log('this.state', this.state);

        const api_call = `https://spotify-api-wrapper.appspot.com/artist/${musicTile}`;
        

        axios.get(api_call).then((response)=>{
            console.log(response.data);
            console.log(response.data.artists.total);

            //fix problem when user first hit the no result page
            if (response.data.artists.total === 0){

                if (!this.state.audio) {
                    this.setState({
                        artistQuery: '',
                        artist: null,
                        tracks: [],
                        msg: "No Results Found",
                        img:  <img id= "noResultImg" src={process.env.PUBLIC_URL + '/no.jpg'} height="45%" width="50%" alt="gameImage" />,
                        playing: false,
                        audio: null,
                        PlayingAudioPreview: null,
                    })
                }

                else{

                //stop audio from playing on the no result page !!!
                this.state.audio.pause();

                
                this.setState({

                    artistQuery: '',
                    artist: null,
                    tracks: [],
                    msg: "No Results Found",
                    img:  <img id= "noResultImg" src={process.env.PUBLIC_URL + '/no.jpg'} height="45%" width="50%" alt="gameImage" />,
                    playing: false,
                    audio: null,
                    PlayingAudioPreview: null,
                })

            }
            }



           
            else{
                //this runs when there is no audio playing when searching for a new artist

                if (!this.state.audio) {
                
                        const artist = response.data.artists.items[0];
                        
                        this.setState({
                            artist,
                            msg:"",
                            img:"",
                        })
                        //geting the top track for the users after passing the if statment. 
                        const api_call_top_tracks = `https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`;
                        // console.log(api_call_top_tracks);
        
                        axios.get(api_call_top_tracks ).then((response)=>{
        
                            const trackData = response.data;
                            // console.log(trackData);
        
                            this.setState(
                                {tracks: 
                                trackData.tracks
                            
                            });
        
                        })
        
                    }

              
                
                else{
                
                //this stop the current audio that is playing, when searching for a new artist...

                this.state.audio.pause();

                const artist = response.data.artists.items[0];
                
                this.setState({
                    artist,
                    msg:"",
                    img:"",
                })
                //geting the top track for the users after passing the if statment. 
                const api_call_top_tracks = `https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`;
                // console.log(api_call_top_tracks);

                axios.get(api_call_top_tracks ).then((response)=>{

                    const trackData = response.data;
                    // console.log(trackData);

                    this.setState(
                        {tracks: 
                        trackData.tracks
                    
                    });

                })

            }
        }

    })
}

// alert("Hello! I am an alert box!");
    trackButton = (track) =>{


        // console.log(track);

        if (!track.preview_url){
            return <span className="iconss">N/A</span>
        }

        if (
            this.state.playing &&
            this.state.PlayingAudioPreview === track.preview_url
        ){
            return <span className="icons">| |</span>;
        }
        return <span className="icons">&#9654;</span>;
    }

  
    

    render(){
        console.log('this.state', this.state);
        // ********************************
        //getting the tracks from the state component and rendering it 
        //audio play the audio from the tracks
        // ********************************

        
        const tList = this.state.tracks.map((ttt,index)=>{


            const { preview_url} =ttt; //to be used for the pause and play audio button <------ took me forever XD
            // console.log(ttt);
                        
            return(
                    
                
                    <div className="col-sm trackStyling" key={index}  onClick={this.playAudio(ttt.preview_url)}>

                        <img src={ttt.album.images[0].url} alt="tracks_img" className="trackImage" />
                            <p className="trackTitle">{ttt.name}</p> 
                            <p className="trackButton">{this.trackButton(ttt)}</p>                      
                    
                    </div>
                   

            )
        })


        return(
            <div className="music-container">
                <h1 className="musicSearch"> Music Search</h1>

                <form  onSubmit={this.searchArtist} className="navbar-form" role="search">
                        <div className="input-group">
                            <input onChange={this.updateArtistQuery}  type="text" className="form-control" placeholder="Search for an Artist.....(Ex: HoneyWorks)" />
                                <div className="input-group-append">
                                    <button onClick={this.searchArtist}  className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                </form>


                        <div>
                                <h1 className="noResults">{this.state.msg}</h1>
                                {this.state.img}
                            <Artist artist={this.state.artist} />
                            {this.state.tracks.length === 0?
                            "" : <h1 className="toptracks">Top Tracks</h1>
                            
                        
                        }
                            {tList}
                        </div>
                </div>


           

   
        )
       
    }
}

export default MusicSearch;




    