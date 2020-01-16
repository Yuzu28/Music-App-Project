

        <div class="container-fluid">
                <div className=" profile row no-gutters justify-content-md-center">

                    <div class="col-sm-4">


                    {/* fix problems when some of the content dont have images */}
                   

                    </div>
                    
                    <div className="col-sm-4 ggg">
                        <div class="card-body">


                            <h3 className="card-title">Artist: {name}</h3>
                            <p className='card-text info'>{followers.total} followers</p>
                            <p className=' card-text info' >{genres.join(', ')}</p>
                        </div>
                    </div>
                    
                    </div>
        
        </div>






<div class="container-fluid">
    <div class="row">
        <div class="col-8 ">
            <div class="card">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">

                         {
                        images[0]? 
                            <img className="artistRes "  src={images[0].url} alt='artist profile picture' height="200" width="200"    />
                            : 
                            <img className="artistRes "  src={process.env.PUBLIC_URL + '/noimage.jpg'} height="60%" width="90%" alt="img"   />
                    }
                        <img class="" src="http://via.placeholder.com/300x180" alt="Card image cap" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">Card title</h4>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
       
            </div>
        </div>
    </div>
</div>