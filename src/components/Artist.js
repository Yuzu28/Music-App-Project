import React from 'react';

const Artist = ({artist}) => {

    if (!artist) return null;

    const{ images, name, followers, genres} = artist;

    return(
        <div className="col-md-4 profile">
            <h3>{name}</h3>
            <p className='info'>{followers.total} followers</p>
            <p className='info' >{genres.join(', ')}</p>
            <img className="artistRes" src={images[0].url} alt='artist profile picture' height="200" width="200" borderRadius="100" />
        </div>
    )

}

export default Artist;