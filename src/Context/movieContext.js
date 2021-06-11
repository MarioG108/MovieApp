import React, { useEffect, createContext, useState } from 'react';
import { GetTrending, FindMovie } from '../Services/apicontroller.js'

export const MovieContext = createContext();


export function MovieProvider({ children }) {
    const [trendingMovies, setTrending] = useState(null);

    useEffect(() => {
        async function GetTrendings() {

            const response = await GetTrending()
            const data = await response.json();
            setTrending(() => { return [...data.results] })
        }
        if (trendingMovies == null) { GetTrendings() }
    }, [])

    return (
        <MovieContext.Provider value={[trendingMovies, setTrending]} >
            {children}
        </MovieContext.Provider>
    )
}
