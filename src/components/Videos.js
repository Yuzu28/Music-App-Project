import React, {Component} from 'react';
import axios from 'axios';
import config from './config';




class Videos extends Component{

    state ={
        videoSearchValue: ""

       
    }


       // fires the moment when the value of the element is changed when you type something in the search bar
       updateVideosQuery = (path) =>{
        console.log('path.target.value', path.target.value);

        //update the component

        // setting the state when searching an artist
        this.setState({ videoSearchValue: path.target.value });
    }



   
    searchVideos= (e) =>{
        e.preventDefault();
        console.log('hello');

    //     const searchVal = this.state.videoSearchValue;
    //     console.log(searchVal)


    // const baseURL ="https://www.googleapis.com/youtube/v3/search?";
    //     axios.get(baseURL, {
    //         params: {
    //             key: `${config.api_key}`,
    //             part:'snippet',
    //             order:'relevance',
    //             maxResults:10,
    //             q: searchVal //this will change searching  items[].videoId
    //         }
    //     })
    // .then((response) =>{
    //     console.log(response.data)
    // })

       
}


  
    

    render(){
        console.log('this.state', this.state);

        
    


        return(
            <div className="music-container">
                <h1 className="musicSearch"> Music Videos Search</h1>

                <form  onSubmit={this.searchVideos} className="navbar-form" role="search">
                        <div className="input-group">
                            <input onChange={this.updateVideosQuery} type="text" className="form-control" placeholder="Search for any Music Videos.....(Ex: HoneyWorks)" />
                                <div className="input-group-append">
                                    <button onClick={this.searchVideos}  className="btn btn-secondary" type="button">
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                        </div>
                </form>

                    <div className="vvideos">
                 {/* <div  className ="embed-responsive embed-responsive-16by9"> */}
                        <iframe className="vids" title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids" title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/R9u_Q2radO0`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids" title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids" title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids"  title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids"  title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids"  title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids"  title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>
                        <iframe className="vids"  title="musicVideos" width="350" height="250" src={`https://www.youtube.com/embed/QvFzfj-3Qvo`} frameBorder="2" allowFullScreen></iframe>

                    </div>
                      
                </div>


           

   
        )
       
    }
}


export default Videos;




// reference how about the youtube api
// https://blog.bitsrc.io/make-a-simple-react-app-with-using-youtube-api-68fa016e5a03