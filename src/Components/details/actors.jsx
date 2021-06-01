import Carousel from '../Slider/swiper'
import { ReactComponent as Unknownuser } from '../../Assets/icon/unknowuser.svg'
const baseimg = 'https://image.tmdb.org/t/p/'

function Crews({ cast }) {
    return (<div className="container">
        <Carousel loop={false}>
            {cast.map((actor, key) => {

                return (

                    <div className="card " style={{ marginRight: '.5rem' }} key={key}>
                        {actor.profile_path != null ? <img className="card-img-top" src={`${baseimg}w200/${actor.profile_path}`} alt="person" /> :
                            <Unknownuser className="card-img-top" style={{ paddingBottom: '3.5rem', height: '100%' }} />}

                        <div className="card-body people">
                            <a href={`https://www.themoviedb.org/person/${actor.id}` } target='_blank'><h6 className="card-title">{actor.name}</h6></a>
                            <p className="card-text" style={{ fontSize: ".8rem" }}>{actor.character}</p>
                        </div>
                    </div>
                )
            })}

        </Carousel>


    </div>)

}

export default Crews