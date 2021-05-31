function Videos({ videos = "[]" }) {

    return (<>
    {
        typeof (videos) === typeof ([]) ?
        
            <div className="container ">
            <hr />
            <h3>Videos <span>({videos.length})</span></h3>

                <div className="carousel slide carouselmovie" data-ride="carousel" data-interval="0">
                   
                    <div className="carousel-inner">
                        {videos.map((video, key) => {
                            return(<div className={`carousel-item  ${key ===0? 'active': 'inactive'}`}  key={key}>
                                <iframe className="d-block w-100" width="1020" height="300"
                                    src={`https://www.youtube-nocookie.com/embed/${video.key}`}
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen={true}></iframe>
                            </div>)
                        })}

                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>:'' }</>
    )

}
export default Videos;