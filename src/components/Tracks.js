import React, {Component} from 'react';



class Tracks extends Component{
    render(){
        //tracks are being pass down by props...
        const { tracks } = this.props;


        console.log(tracks);






         //returning some jsx
    return (
        // <h1>hello</h1>

        <div>
            {
                tracks.map(track =>{

                    //destruckture
                    const { id, name, album} = track;

                    return (
                        <div>
                            <div key={id}>
                                <img src={album.images[0].url} alt="tracks_img" />
                                <p>{name}</p>
                            </div>



                        </div>
                    )


                })
            }




        </div>
    )
    }
}


export default Tracks;