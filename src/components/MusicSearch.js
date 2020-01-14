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

            if (response.data.artists.total === 0){

                this.setState({

                    artistQuery: '',
                    artist: null,
                    track: [],
                    msg: "No Results Found",
                    img:  <img id= "noResultImg" src={process.env.PUBLIC_URL + '/no.jpg'} height="45%" width="50%" alt="gameImage" />
                })
                

            }



            

            else{
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

    })
}

  
    

    render(){
        console.log('this.state', this.state);
        // ********************************
        //getting the tracks from the state component and rendering it 
        //audio play the audio from the tracks
        // ********************************
        const tList = this.state.tracks.map((ttt,index)=>{
            return(
                    
                
                    <div className="col-sm trackStyling" key={index}  onClick={this.playAudio(ttt.preview_url)}>

                        <img src={ttt.album.images[0].url} alt="tracks_img" className="trackImage" />
                            <p className="trackTitle">{ttt.name}</p>                       
                    
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
                            {tList}
                            {/* <Tracks tracks = {this.state.tracks} /> */}
                        </div>
                </div>


           

   
        )
       
    }
}

export default MusicSearch;



//not working
// Client ID e679215f259840b1aa8ce8e8de5a5da0

// var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
//         // axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';


//         const api_call = {
            
//             url: proxyUrl + `https://api.spotify.com/v1/search?q=${musicTile}&type=track%2C%20artist;`,
//             method: 'POST',
//             headers = {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Authorization': 'Bearer e679215f259840b1aa8ce8e8de5a5da0',
//             }
//         }



    