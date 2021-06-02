import { useState, useEffect } from 'react'
import Slide from '../Slider/slider';
import Carousel from '../Slider/swiper'
import { GetDetails } from '../../Services/apicontroller'

function GetFavorites() {
    var favorites = localStorage.getItem('favorites');

    if (favorites === null) {
        let data = []
        localStorage.setItem('favorites', JSON.stringify(data));
        favorites = localStorage.getItem('favorites');
    }
    return favorites
}
function AddFavorite(fav) {
    var data = GetFavorites();
    if (data.length <= 0) {
        data = [{ id: fav }]
        localStorage.setItem('favorites', JSON.stringify(data))
    } else {
        let val = JSON.parse(data)
        val.push({ id: fav })
        localStorage.setItem('favorites', JSON.stringify(val))
    }
}
function RemoveFavorite(fav) {
    var data = GetFavorites();
    let val = JSON.parse(data);
    let nfav = val.filter(item => item.id !== fav)

    localStorage.setItem('favorites', JSON.stringify(nfav))

}


export default function AddFavorites({ id }) {
    const [isfavorite, setIsfavorite] = useState(false)
    useEffect(() => {
        hasKey()
    }, [])

    function hasKey() {
        var favs = JSON.parse(GetFavorites())
        var d = favs.filter(e => e.id === id).length > 0
        setIsfavorite(!d)
    }

    function HandleAdd() {

        AddFavorite(id)
        setIsfavorite(isfavorite => !isfavorite)
    }
    function Handledelete() {
        setIsfavorite(isfavorite => !isfavorite)

        RemoveFavorite(id)


    }

    return (
        <> { isfavorite ? <input type="submit" value="Add to favorites" onClick={HandleAdd} className="btn btn-success" /> :
            <input type="submit" value="Delete from favorites" onClick={Handledelete} className="btn btn-danger" />}</>
    );

}

export function ShowFavs() {
    const [favs, setFavs] = useState([{}])

    useEffect(() => {
        setFavs([...JSON.parse(GetFavorites())])
        async function load() {
            var a = favs.map(x => {
                return GetDetails(x.id)
            })
            return a
        }
        load()

    }, [])

    return (<>
        <Carousel>
            {favs.map(x => {
                return (
                    <Slide id={x.id} overview=""></Slide>
                )
            }
            )}
        </Carousel>

    </>
    )



}