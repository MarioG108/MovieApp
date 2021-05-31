import Carousel from '../Slider/carousel'
import { useState, useEffect } from 'react';

const baseimg = 'https://image.tmdb.org/t/p/'

function Crews({ cast }) {
    const [cards, setCards] = useState([{}])


    useEffect(() => {

        if (typeof (cast) != 'undefined') {
            console.log('cast', cast)

            var c = cast.map((actor, key) => {
                return ({
                    post: <div className="card" key={key}>
                        {actor.profile_path != null ? <img className="card-img-top" src={`${baseimg}w138/${actor.profile_path}`} alt="person photo" /> : ''}

                        <div className="card-body">
                            <h5 className="card-title">{actor.name}</h5>
                            <p className="card-text">{actor.character}</p>
                        </div>
                    </div>
                })
            })
            console.log('type', c)
            console.log("cards1", cards)
            setCards(c)
            console.log("cards2", cards)
        }


    }, [cast])
    return (<>

        {cards.map((card, key) => {

            <div key={key}>
                {card.post}
            </div>
        })}





    </>)

}

export default Crews