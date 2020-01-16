import React, {Component} from 'react';
import axios from 'axios';




class Videos extends Component{

    state ={

       
    }



   
    searchArtist = (e) =>{
        e.preventDefault();
        console.log('hello')

    // const baseURL ="https://www.googleapis.com/youtube/v3/search?";
    //     // const term = this.state.term
    //     axios.get(baseURL, {
    //         params: {
    //             key: 'AIzaSyB-kEVuar-_YtCy2hgDHlFpIUT1_3hnV6Y',
    //             part:'snippet',
    //             order:'relevance',
    //             maxResults:10,
    //             q: 'fuuka' //this will change searching
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
                <h1 className="musicSearch"> Music Search</h1>

                <form  onSubmit={this.searchArtist} className="navbar-form" role="search">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search for an Artist.....(Ex: HoneyWorks)" />
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


export default Videos;




// reference how about the youtube api
// https://blog.bitsrc.io/make-a-simple-react-app-with-using-youtube-api-68fa016e5a03