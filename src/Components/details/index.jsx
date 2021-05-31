import { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom'
import Header from './header';
import Preloader from '../preloader.jsx'
import Videos from './videos'
const api_key = '2dc9a9ee49a9191b5b1a629fa423fe71';
const videos = [{key:"zkWiTLKE0mg"},{key:"HnnRyhuX_jM"}]
async function getDetails(mediaId = 284054) {
    try {
        const endpoint = `https://api.themoviedb.org/3/movie/${mediaId}?api_key=${api_key}`;
        // const endpoint = `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${api_key}`;
        const requestConfig = { method: 'get', mode: 'cors', headers: { 'Content-Type': 'application/json' } }
        const response = await fetch(endpoint, requestConfig)
        return response;
    } catch (error) { console.error(error) }

}

function Details() {
    const [isloading, setIsloading] = useState(true)
    const [mediainfo, setMediainfo] = useState({})
    const {id} = useParams()

    useEffect(() => {
        console.log({id})
        async function load() {
            const response = await getDetails(id)
            if (response.ok) {
                const details = await response.json()
                setMediainfo(details)
                setIsloading(false)
            }
        }
        if (isloading) {
            load()
        }
    },[id])
    return (<>{isloading ?<Preloader />:<div>
    <Header {...mediainfo} />
    <Videos videos={videos}/></div>}</>)
}
export default Details;