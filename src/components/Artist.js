import React from 'react';

const Artist = ({artist}) => {

    if (!artist) return null;
   

    else {
        // col-xs-6 col-md-6  
        // col-sm-6 col-md-6  col order-2 order-sm-2 
    const{ images, name, followers, genres} = artist;

    return(

    <div class="container-fluid">
        <div class="row  justify-content-md-center">
            <div class=" col-xs-6  col-md-6  ">
                 <div class="card artistCardContainer">
                    <div class="card-horizontal">
                         <div class="img-square-wrapper">

                                {
                                        images[0]? 
                                            <img className="artistRes "  src={images[0].url} alt='artist profile picture' height="200" width="200"    />
                                            : 
                                            <img className="artistRes "  src={process.env.PUBLIC_URL + '/noimage.jpg'} height="60%" width="90%" alt="img"   />
                                    }
                                        {/* <img class="" src="http://via.placeholder.com/300x180" alt="Card image cap" /> */}
                            </div>
                        <div class="card-body details">
                            <h4 class="card-title ctitle"> {name}</h4>
                            <p class="card-text ctext">{followers.total} followers</p>
                            <p class="card-text ctext">Genres: {genres.join(', ')}</p>
                        </div>
                </div>
       
            </div>
        </div>
    </div>
</div>




        








        // <div class="container-fluid">
        //         <div className=" profile row no-gutters justify-content-md-center">

        //             <div class="col-sm-4">


        //             {/* fix problems when some of the content dont have images */}
        //             {
        //                 images[0]? 
        //                     <img className="artistRes "  src={images[0].url} alt='artist profile picture' height="200" width="200"    />
        //                     : 
        //                     <img className="artistRes "  src={process.env.PUBLIC_URL + '/noimage.jpg'} height="60%" width="90%" alt="img"   />
        //             }

        //             </div>
                    
        //             <div className="col-sm-4 ggg">
        //                 <div class="card-body">


        //                     <h3 className="card-title">Artist: {name}</h3>
        //                     <p className='card-text info'>{followers.total} followers</p>
        //                     <p className=' card-text info' >{genres.join(', ')}</p>
        //                 </div>
        //             </div>
                    
        //             </div>
        
        // </div>




    )

}
}

export default Artist;



 