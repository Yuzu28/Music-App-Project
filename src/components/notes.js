import React, {Component} from 'react';
import './MusicSearch.css';
import axios from 'axios';
import Artist from './Artist';



 class MusicSearch extends Component{

    state ={

        artistQuery: '',
        artist: null,
        track: []
    }


    //below fires the moment when the value of the element is changed when you type something in the search bar
    updateArtistQuery = (path) =>{
        // console.log('path.target.value', path.target.value);

        //update the component

        // setting the state when searching an artist
        this.setState({ artistQuery: path.target.value });
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

            if (response.data.artists.total > 0){
                const artist = response.data.artists.items[0];

                this.setState({artist})

                //geting the top track for the users after passing the if statment. 
                const api_call_top_tracks = `https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`;
                // console.log(api_call_top_tracks);


                axios.get(api_call_top_tracks ).then((response)=>{

                    const trackData = response.data;
                    // console.log(trackData);

                    this.setState(
                        {track: 
                        trackData 
                    
                    });


                   
                })

                    

                

            }

    })
}

  
    

    render(){
        // console.log('this.state', this.state);

        return(
            <div className="music-container">
                <h1 className="musicSearch"> Music Search</h1>

                <form  onSubmit={this.searchArtist} className="navbar-form" role="search">
                        <div className="input-group">
                            <input onChange={this.updateArtistQuery}  type="text" className="form-control" placeholder="Search for an Artist..." />
                                <div className="input-group-append">
                                    <button onClick={this.searchArtist}  className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                </form>


                <img src={images[0].url} alt='artist profile picture'/>

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



      















import React, {Component} from 'react';
import './MusicSearch.css';
import axios from 'axios';
import Artist from './Artist';



 class MusicSearch extends Component{

    constructor(props){
        super(props);

    this.state ={

        artistQuery: '',
        artist: null,
        track: []
    }
}


    //below fires the moment when the value of the element is changed when you type something in the search bar
    updateArtistQuery = (path) =>{
        // console.log('path.target.value', path.target.value);

        //update the component

        // setting the state when searching an artist
        this.setState({ artistQuery: path.target.value });
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

            if (response.data.artists.total > 0){
                const artist = response.data.artists.items[0];

                this.setState({artist})

                //geting the top track for the users after passing the if statment. 
                const api_call_top_tracks = `https://spotify-api-wrapper.appspot.com/artist/${artist.id}/top-tracks`;
                // console.log(api_call_top_tracks);


                axios.get(api_call_top_tracks ).then((response)=>{

                    const trackData = response.data;
                    // console.log(trackData);

                    this.setState(
                        {track: 
                        trackData 
                    
                    });


                   
                })

                    

                

            }

    })
}

  
    

    render(){
        console.log('this.state', this.state);
        
        
        const artistStuff = this.state.artist;
        console.log(artistStuff);




        // const artistStuff = this.state.artist.map((art,index)=>{
         

        //     return( 
              
              

        //         <div className= "pic "  key={index}>
                    
                   

        //             {art.images[0]? 
        //             <img src={art.images[0].url} alt='artist profile picture' height="90%" width="90%" alt="gameImage"  />
        //             : 
        //             <img id= "ggg" src={'https://cdn.vox-cdn.com/thumbor/ITkzYLFivNXrX-01OqOUC_mNgV4=/0x0:1920x1080/1200x675/filters:focal(694x408:1000x714)/cdn.vox-cdn.com/uploads/chorus_image/image/65904782/chrome_2019_12_13_15_21_43.0.png'} height="90%" width="90%" alt="gameImage"  />
        //         }
        //         </div>
               
                  
          
        //     )
            
        // })

        return(
            <div className="music-container" >
                <h1 className="musicSearch"> Music Search</h1>

                <form  onSubmit={this.searchArtist} className="navbar-form" role="search">
                        <div className="input-group">
                            <input onChange={this.updateArtistQuery}  type="text" className="form-control" placeholder="Search for an Artist..." />
                                <div className="input-group-append">
                                    <button onClick={this.searchArtist}  className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                </form>

                


                
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



      
