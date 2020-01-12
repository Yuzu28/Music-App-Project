import React from 'react';

const Artist = ({artist}) => {

    if (!artist) return null;
   

    else {


    const{ images, name, followers, genres} = artist;

    return(
        <div className="col-md-4 profile">
            <h3>{name}</h3>
            <p className='info'>{followers.total} followers</p>
            <p className='info' >{genres.join(', ')}</p>

            {/* fix problems when some of the content dont have images */}
             {
                 images[0]? 
                    <img className="artistRes"  src={images[0].url} alt='artist profile picture' height="200" width="200" />
                    : 
                    <img className="artistRes"  src={process.env.PUBLIC_URL + '/noimage.jpg'} height="60%" width="90%" alt="img"   />
             }

        </div>
    )

}
}

export default Artist;