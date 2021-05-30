import React, { useState, useEffect } from 'react';
import Header from './header';
import Preloader from '../preloader.jsx'
const api_key = '2dc9a9ee49a9191b5b1a629fa423fe71';

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

    useEffect(() => {
        async function load() {
            const response = await getDetails()
            if (response.ok) {
                const details = await response.json()
                setMediainfo(details)
                setIsloading(false)
            }
        }
        if (isloading) {
            load()

        }

    })

    return (<>
        {
            isloading ?
            <Preloader/>
            
            : <Header {...mediainfo} />
        }
    </>)
}
export default Details;