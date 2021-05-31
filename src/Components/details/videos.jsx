function Videos({ videos = "[]" }) {
    return (<>
        {
            typeof (videos) === typeof ([]) ?

                <div className="container ">
                    <hr />
                    <h3>Videos <span>({videos.length})</span></h3>
                    <div id="Carousel-videos" className="carousel slide carouselmovie" data-ride="carousel" data-interval="0">
                        <ol class="carousel-indicators">
                            {videos.map((video,key)=>{
                                return( <li data-target="#Carousel-videos" data-slide-to={key} className={`${key === 0 ? 'active' : 'inactive'}`}></li>)                                
                            })}
                        </ol>
                        <div className="carousel-inner">
                            {videos.map((video, key) => {
                                return (<div className={`carousel-item  ${key === 0 ? 'active' : 'inactive'}` }  key={key}>
                                    <iframe  key={key} className="d-block w-100" width="1020" height="480"
                                        src={`https://www.youtube-nocookie.com/embed/${video.key}`}
                                        title="YouTube video player" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen={true}></iframe>
                                </div>)
                            })}
                        </div>
                      
                    </div>
                </div> : ''}</>
    )

}
export default Videos;